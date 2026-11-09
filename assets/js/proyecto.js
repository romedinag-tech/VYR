/* Llena proyecto.html con la ficha indicada en ?id= (datos en assets/data/fichas.js). */
(function () {
  "use strict";
  var F = window.VYR_FICHAS || {};
  var id = new URLSearchParams(location.search).get("id");
  var f = id && Object.prototype.hasOwnProperty.call(F, id) ? F[id] : null;
  var $ = function (x) { return document.getElementById(x); };
  var el = function (tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };

  if (!f) {
    document.title = "Proyecto no encontrado — VyR Ingeniería";
    $("case-title").textContent = "Proyecto no encontrado";
    $("f-objetivo").textContent = "La ficha solicitada no existe o aún no está publicada.";
    $("f-cifras-wrap").hidden = true;
    document.querySelector(".case-layout").hidden = true;
    return;
  }

  var lugar = f.ciudad + ", " + f.region;
  document.title = f.titulo + ", " + f.ciudad + " — VyR Ingeniería";
  $("f-hero").src = f.imagen;
  if (f.hero_pos) $("f-hero").style.objectPosition = f.hero_pos;
  $("f-crumb").textContent = f.titulo + ", " + f.ciudad;
  $("f-tipologia").textContent = f.tipologia;
  $("case-title").textContent = f.titulo + ", " + f.ciudad;
  $("f-objetivo").textContent = f.objetivo;
  f.tags.forEach(function (t) { $("f-tags").appendChild(el("span", "case-tag", t)); });

  if (!f.cifras.length) $("f-cifras-wrap").hidden = true;
  f.cifras.forEach(function (c) {
    var li = el("li", "stat"), num = el("div", "stat__num", c.num);
    if (c.unit) num.appendChild(el("span", "unit", c.unit));
    li.appendChild(num); li.appendChild(el("div", "stat__label", c.label));
    $("f-cifras").appendChild(li);
  });

  f.desarrollo.forEach(function (p) { $("f-desarrollo").appendChild(el("p", null, p)); });
  $("f-resultado").textContent = f.resultado;
  $("f-img").src = f.imagen;
  $("f-img").alt = f.imagen_alt;
  $("f-pie").textContent = f.credito ? f.pie + " · " + f.credito : f.pie + " · Fuente: " + f.fuente + ", estudio elaborado por " + f.consultor + ".";

  [["Mandante", f.mandante], ["Ubicación", lugar], ["Año", f.anio], ["Consultor", f.consultor],
   ["Etapa", f.etapa], ["Tipología", f.tipologia]].forEach(function (r) {
    var row = el("div", "spec-row");
    row.appendChild(el("dt", null, r[0])); row.appendChild(el("dd", null, r[1]));
    $("f-spec").appendChild(row);
  });
})();
