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
})();
