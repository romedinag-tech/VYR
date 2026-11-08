/* VyR Ingeniería — interacciones del prototipo (vanilla JS) */
(function () {
  "use strict";

  /* ---- Tema claro/oscuro (persistente + accesible) ---- */
  var root = document.documentElement;
  var STORE_KEY = "vyr-theme";
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeToggle");
    if (btn) {
      var dark = theme === "dark";
      btn.setAttribute("aria-pressed", String(dark));
      btn.setAttribute("aria-label", dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
    }
  }
  // El tema inicial ya lo fija un script inline en <head> (anti-FOUC); aquí solo sincronizamos el botón.
  applyTheme(root.getAttribute("data-theme") || "dark");
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(STORE_KEY, next); } catch (e) {}
    });
  }

  /* ---- Header: sólido al hacer scroll ---- */
  var header = document.getElementById("header");
  // Páginas sin hero oscuro arrancan con header claro
  var hasHero = !!document.querySelector(".hero, .case-hero");
  if (header && !hasHero) header.classList.add("is-solid");

  function onScroll() {
    if (!header || !hasHero) return;
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Nav móvil ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("nav-open", open);
    });
    // Cerrar al navegar o con Escape
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { closeNav(); toggle.focus(); }
    });
  }
  function closeNav() {
    if (!nav) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Abrir menú"); }
  }

  /* ---- Reveal on scroll ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero: fondo rotativo (2026-11-07) ----
     La 1ª foto viene en el HTML; las demás se cargan (data-src) después del load para no frenar la portada.
     Solo se pasa a una foto ya descargada. Sin rotación con prefers-reduced-motion; pausa con la pestaña oculta. */
  var heroRot = document.querySelector("[data-hero-rotate]");
  if (heroRot) {
    var slides = heroRot.querySelectorAll(".hero__slide");
    var credit = document.querySelector(".hero__credit");
    var current = 0, timer = null, INTERVAL = 6500;
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    var setCredit = function (img) {
      if (!credit) return;
      var d = img.getAttribute("data-credit");
      if (!d) { credit.innerHTML = ""; return; }
      var p = d.split("|"); // título | autor | url del archivo | licencia | url de la licencia
      credit.innerHTML = esc(p[0]) + " · Foto: <a href=\"" + esc(p[2]) + "\" target=\"_blank\" rel=\"noopener\">" + esc(p[1]) +
        "</a>, <a href=\"" + esc(p[4]) + "\" target=\"_blank\" rel=\"noopener\">" + esc(p[3]) + "</a> (recortada)";
    };
    var ready = function (img) { return img.getAttribute("src") && img.complete && img.naturalWidth > 0; };
    var show = function (i) {
      slides[current].classList.remove("is-active");
      slides[i].classList.add("is-active");
      current = i;
      if (credit) {
        credit.classList.add("is-fading");
        setTimeout(function () { setCredit(slides[i]); credit.classList.remove("is-fading"); }, 600);
      }
    };
    var next = function () {
      for (var k = 1; k < slides.length; k++) {
        var i = (current + k) % slides.length;
        if (ready(slides[i])) { show(i); return; }
      }
    };
    var start = function () { if (!timer) timer = setInterval(next, INTERVAL); };
    var stop = function () { clearInterval(timer); timer = null; };
    setCredit(slides[0]);
    if (!reduce && slides.length > 1) {
      var loadRest = function () {
        slides.forEach(function (img) {
          var s = img.getAttribute("data-src");
          if (s && !img.getAttribute("src")) img.setAttribute("src", s);
        });
        start();
      };
      if (document.readyState === "complete") loadRest(); else window.addEventListener("load", loadRest);
      document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
    }
  }

  /* ---- Filtros de proyectos ---- */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));
    var empty = document.querySelector(".filter-empty");
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      var f = btn.getAttribute("data-filter");
      var shown = 0;
      cards.forEach(function (card) {
        var match = f === "all" || card.getAttribute("data-category").indexOf(f) !== -1;
        card.classList.toggle("is-hidden", !match);
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  }

  /* ---- Carrusel de tipologías ---- */
  var tip = document.getElementById("tipologias");
  if (tip) {
    var track = tip.querySelector("[data-carousel-track]");
    var bPrev = tip.querySelector("[data-carousel-prev]");
    var bNext = tip.querySelector("[data-carousel-next]");
    var step = function () {
      var card = track.querySelector(".tcard");
      return card ? card.getBoundingClientRect().width + 24 : 320; // ancho de tarjeta + gap (1.5rem)
    };
    var sync = function () {
      var max = track.scrollWidth - track.clientWidth - 4;
      bPrev.disabled = track.scrollLeft <= 4;
      bNext.disabled = track.scrollLeft >= max;
    };
    bPrev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    bNext.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  }

  /* ---- Filtro de proyectos desde el hash (#f=token), p.ej. al venir del carrusel ---- */
  if (filterBar) {
    var fh = (location.hash || "").match(/f=([a-z]+)/);
    if (fh) {
      var fbtn = filterBar.querySelector('[data-filter="' + fh[1] + '"]');
      if (fbtn) fbtn.click();
    }
  }

  /* ---- Sello de última actualización (lee la fecha del propio archivo) ---- */
  var lu = document.querySelector("[data-lu]");
  if (lu) {
    var d = new Date(document.lastModified);
    if (!isNaN(d)) {
      var z = function (n) { return (n < 10 ? "0" : "") + n; };
      lu.textContent = z(d.getDate()) + "-" + z(d.getMonth() + 1) + "-" + d.getFullYear() + " · " + z(d.getHours()) + ":" + z(d.getMinutes());
    }
  }

  /* ---- Año dinámico en footer (si existe) ---- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Modal de acceso de clientes (demo; la autenticación real irá en cPanel) ---- */
  var loginLinks = document.querySelectorAll("[data-login]");
  if (loginLinks.length) {
    var overlay = document.createElement("div");
    overlay.className = "login-overlay";
    overlay.innerHTML =
      '<div class="login-card" role="dialog" aria-modal="true" aria-labelledby="login-title">' +
      '<button class="login-card__close" type="button" aria-label="Cerrar">×</button>' +
      '<img class="brand-mark brand-mark--color" src="assets/logo/logo-lockup-color.png" alt="V&amp;R Ingeniería" />' +
      '<img class="brand-mark brand-mark--white" src="assets/logo/logo-lockup-white.png" alt="V&amp;R Ingeniería" />' +
      '<h2 id="login-title">Acceso de clientes</h2>' +
      '<p class="sub">Ingresa con las credenciales que te entregamos para ver los productos y documentos de tu proyecto.</p>' +
      '<form id="login-form" novalidate>' +
      '<p class="login-error" id="login-error">Completa tu usuario y contraseña.</p>' +
      '<div class="login-field"><label for="login-user">Usuario</label><input id="login-user" type="text" autocomplete="username" placeholder="tu.usuario" /></div>' +
      '<div class="login-field"><label for="login-pass">Contraseña</label><input id="login-pass" type="password" autocomplete="current-password" placeholder="••••••••" /></div>' +
      '<button class="btn-login" type="submit">Ingresar</button>' +
      '<p class="login-note">Acceso en implementación. La validación real se habilitará próximamente.</p>' +
      '</form></div>';
    document.body.appendChild(overlay);
    function openLogin() {
      overlay.classList.add("is-open"); document.body.classList.add("nav-open");
      setTimeout(function () { var u = document.getElementById("login-user"); if (u) u.focus(); }, 30);
    }
    function closeLogin() { overlay.classList.remove("is-open"); document.body.classList.remove("nav-open"); }
    loginLinks.forEach(function (lnk) {
      lnk.addEventListener("click", function (e) { e.preventDefault(); closeNav(); openLogin(); });
    });
    overlay.querySelector(".login-card__close").addEventListener("click", closeLogin);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeLogin(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && overlay.classList.contains("is-open")) closeLogin(); });
    overlay.querySelector("#login-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var u = document.getElementById("login-user").value.trim();
      var p = document.getElementById("login-pass").value.trim();
      var err = document.getElementById("login-error");
      if (!u || !p) { err.classList.add("show"); return; }
      err.classList.remove("show");
      window.location.href = "clientes.html"; // demo: sin backend -> portal de ejemplo
    });
  }
})();
