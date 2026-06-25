# Estado del proyecto — Rediseño web VyR Ingeniería

> Documento de **traspaso / continuidad**. Si retomamos el trabajo, leer esto primero.
> Última actualización: commit `6a5a0b6` · CSS/JS en versión `?v=7`.

---

## 1. Qué es esto
Propuesta de **rediseño del sitio web** de **VyR / V&R Ingeniería** (consultora chilena de
ingeniería de transporte: modelación, evaluación de proyectos, concesiones, ingeniería de detalle).
Es un **prototipo estático navegable** (no toca el sitio en producción `vyringenieria.cl`).

- **Carpeta local:** `C:\Users\Rodrigo\OneDrive\Pega 2026\4 VyR\Nueva Pagina web\vyr-rediseno`
- **Repo:** https://github.com/romedinag-tech/VYR (rama `main`). Se sube a medida que avanzamos.
- **Lema oficial:** *"Ingeniería precisa para sistemas de transporte complejos."*

## 2. Stack y forma de trabajo
- **HTML + CSS + JS vanilla**, sin build, sin frameworks → desplegable directo en **GitHub Pages**.
- No usamos Tailwind (evita build) ni GSAP (evita dependencia); animaciones con CSS + IntersectionObserver.
- **Cómo desplegar:** GitHub → Settings → Pages → Branch `main` / `/ (root)`. Incluye `.nojekyll`.
- **Ver local:** abrir `index.html`, o `python -m http.server 8765` y abrir `http://localhost:8765/`.

### ⚠️ Convención IMPORTANTE: cache-busting
Cada vez que se edita `styles.css` o `main.js`, **subir la versión** en los 3 HTML:
`assets/css/styles.css?v=N` → `?v=N+1` (hoy va en **v=7**). El usuario tenía problemas de caché;
esto fuerza recarga. Recordar también sugerir **Ctrl+F5**.

### ⚠️ Limitación del entorno
El navegador de este equipo **no alcanza `document_idle`** con recursos externos (fuentes/imágenes),
así que **no se pueden tomar screenshots automáticos** del sitio. Para "ver" cosas se usa:
descargar imágenes con `curl` + leerlas, o el widget de visualización del chat, o el panel de
previsualización. El usuario suele mandar capturas para feedback.

## 3. Estructura de archivos
```
vyr-rediseno/
├── index.html              · Home
├── proyectos.html          · Índice/cartera (32 proyectos + filtros)
├── caso-acceso-norte.html  · Plantilla de caso (Acceso Norte Ferroviario)
├── assets/
│   ├── css/styles.css      · Design system completo (22 secciones numeradas y comentadas)
│   ├── js/main.js          · tema, header scroll, nav móvil, reveal, carrusel, filtros, sello fecha
│   ├── logo/               · logos (ver §6)
│   └── img/proyectos/      · 32 fotos NN-slug.jpg + _indice.csv + README
├── README.md               · cómo desplegar
└── ESTADO_PROYECTO.md      · este documento
```

## 4. Sistema de diseño (en `styles.css`)
- **Tema:** **oscuro por defecto + claro**, con toggle persistente (`localStorage`), respeta
  `prefers-color-scheme`, script anti-FOUC en `<head>`. Tokens **semánticos** se reasignan por
  `[data-theme]` (bloques “TEMA OSCURO” y “TEMA CLARO”).
- **Color:** azul marino `#0B2A4A`, azul `#1E5FA8`/`#4C8DF0`, **acento técnico cian** `--tech`
  (`#46C6F5` / claro `#0E8FBF`), naranjo `#E8772E`. Hay **alias de compatibilidad** (`--gris-*`,
  `--azul-*`, `--dato`) para estilos en línea heredados — no romper.
- **Tipografía:** **Syne** (títulos), **Roboto Mono** (datos/etiquetas/nav/CTA — la “capa técnica”),
  **Inter** (cuerpo). Cargadas desde Google Fonts.
- **Detalles premium:** glassmorphism en header, soft-shadows de gran radio, spring-easing
  (`--ease-spring`), tarjetas de servicio numeradas 01–06 (CSS counters), panel “software
  propietario” en el diferenciador técnico (KPIs en mono), reveal fade-in-up.

## 5. Secciones de la Home (vocabulario acordado, de arriba a abajo)
1. **Header** — barra superior (logo, menú, “Conversemos”, toggle tema).
2. **Hero** — portada con foto de fondo + lema + párrafo + botones.
3. **Tipologías** — carrusel “Tipologías que dominamos” (7 áreas, enlazan a la cartera filtrada).
4. **Métricas** — banda de cifras (+13 años, +300, +20 años, 15 regiones).
5. **Servicios** — “Capacidades técnicas”, 6 tarjetas numeradas.
6. **Proyectos destacados** — grilla de 3 casos.
7. **Enfoque** — “Diferenciador técnico”, panel de datos (matriz OD) + KPIs.
8. **Nosotros** (+ mandantes) — relato + franja MOP/MTT/EFE/SECTRA.
9. **CTA** — bloque de cierre “¿Tienes un proyecto…?”.
10. **Footer** — navegación, contacto, redes, copyright.

**Subpáginas:** `proyectos.html` (encabezado + filtros + grilla de 32) · `caso-acceso-norte.html`
(hero de caso + métricas + ficha técnica lateral + bloque geoespacial + galería).

## 6. Sistema de LOGO (clave — leer antes de tocar el header)
El logo de VyR es el **emblema multimodal** (globo + tren/bus/auto/peatón → flecha) con
**texto azul marino**. Archivos **transparentes** en `assets/logo/`:
- `vyr-horizontal-nolema.png` — emblema + “V&R INGENIERÍA” (sin lema). **Logo principal del header.**
- `vyr-horizontal.png` — igual pero **con lema** (para piezas grandes/documentos).
- `vyr-simbolo.png` — solo el emblema. **Favicon** y uso en fondos oscuros / header al hacer scroll.
- `vyr-vertical.png` — apilado (reservado para piezas claras/print).
- `favicon-32.png`, `apple-touch-icon.png`, `vr-icon-512.png` — derivados del símbolo.

**Regla de oro:** el **texto navy NO se lee sobre fondo oscuro**. Por eso:
- En la **home** el header es **claro fijo** → se muestra el **horizontal a color** (navy resalta).
- El **símbolo** (a color) sí se lee en cualquier fondo → se usa en footer y cuando el header
  se vuelve oscuro (otras páginas al hacer scroll).
- Swap controlado por clases `.brand__color` / `.brand__white` según `[data-theme]` e `is-solid`,
  con override específico para `body.home` (sección 22 del CSS).

Los logos se hicieron transparentes con **floodfill desde las esquinas** (PIL) para no borrar
los blancos internos de los vehículos. Originales del cliente en `Nueva Pagina web/` (`logo
horizontal.png`, `logo sin lema.png`, `solo simbolo.png`, `Logo VyR vertical.jpeg`).

## 7. Imágenes de proyectos
`assets/img/proyectos/` = **32 fotos**, una por estudio del registro de experiencia MOP
(carpeta `2 Acreditaciòn MOP/4 Claude/3 Certificados de experiencia con desglose`).
- Nombradas `NN-slug.jpg`. Mapeo y fuentes en `assets/img/proyectos/_indice.csv` + README.
- **Son placeholders temáticos verificados** (Unsplash) asignados por categoría — NO son fotos
  reales de cada obra. **Para reemplazar:** subir la real con el **mismo nombre** y queda enganchada.
- Importante: las imágenes de Unsplash se **descargaron y verificaron una a una** (hubo un problema
  con IDs adivinados que daban cámaras/yates). Si se agregan nuevas, verificar visualmente.

## 8. Material en Canva (referencia)
Se generó el logo previo en Canva (hoy reemplazado por los oficiales del cliente). Diseños creados:
- `DAHM3v_A8-0` (maestro con lema), `DAHM3qAZ1tk` (sin lema transparente), `DAHM3kXU1Io` (negativo).
- Truco aprendido: el fondo blanco de página en Canva no se borra; se reemplaza por un **pixel
  transparente** (`update_fill`) para exportar con transparencia.
- Recomendaciones del cliente pendientes de aprovechar: Smartmockup para el diferenciador técnico,
  logos de mandantes en duotono/gris, iconos line 2px, fondo abstracto.

## 9. Historia del HERO (para no repetir vueltas)
El hero iteró bastante. Estado/decisiones:
1. Foto aérea de intercambio vial → gustó (“cara de ingeniería”).
2. Se probó logo grande dentro del hero → no convenció.
3. Se probó hero sin foto, fondo de marca oscuro → quedó “plano”.
4. Se probó hero claro / split (contenido claro izq + foto der) → tampoco.
5. **ESTADO ACTUAL (lo aprobado):** **header claro fijo** (logo navy destaca) + **hero con la
   foto de fondo COMPLETA** (sin velo/difuminado), texto blanco con sombra sutil para legibilidad.

Otros ajustes del usuario ya aplicados: encabezado **agrandado** (logo 80px, nav ~20px),
se **quitó** el banner “Propuesta de rediseño”, se agregó **sello de última actualización** (esquina
inferior izq, lee `document.lastModified`), y el **carrusel de Tipologías** quedó justo bajo el hero.

## 10. Pendientes / backlog
- [ ] Reemplazar fotos placeholder por **fotografía real** de las obras (cliente las consigue).
- [ ] Páginas faltantes: **Servicios**, **Nosotros/Equipo**, **Contacto** (con formulario).
- [ ] Más **fichas de caso** individuales (hoy solo existe la plantilla ferroviaria).
- [ ] **Logos de mandantes** en grilla uniforme (duotono/gris) → reemplazar la franja de texto.
- [ ] **Iconos line 2px** propios para Servicios (hoy SVG genéricos).
- [ ] Reemplazar el panel SVG del diferenciador por un **Smartmockup** real (Canva).
- [ ] Activar **GitHub Pages**.
- [ ] Datos por proyecto (año/mandante) si el cliente los entrega → enriquecer tarjetas.

## 11. Cómo retomar (checklist)
1. `cd` a la carpeta, `git pull` (o seguir desde local).
2. Leer este archivo + `assets/img/proyectos/README.md`.
3. Para cambios visuales: editar `styles.css` y **subir `?v=N`** en los 3 HTML.
4. Commit con mensaje claro + `git push origin main` (se sube a medida que avanzamos).
5. Pedir al usuario **Ctrl+F5**; si dice “no veo el cambio”, casi siempre es **caché** (verificar
   el sello de fecha de la esquina inferior izquierda).
