# VyR — Web, firmas e identidad digital

## Propósito
Rediseño del sitio web de **VyR / V&R Ingeniería** (consultora chilena de ingeniería de transporte) y sus activos digitales. Es un **prototipo**, no el sitio en producción (`vyringenieria.cl`). Tiene tres dimensiones:
- **sitio** — prototipo web premium (home, cartera de proyectos, plantilla de caso).
- **firmas** — firmas de correo HTML para el equipo.
- **hosting** — gestión del cPanel y dominio `vyringenieria.cl`.

## Estado
Última actividad (código): 2026-09-03 · Revisado en vivo (servido por HTTP): 2026-11-03.
**Contexto:** se revisa de nuevo para la reunión con Jorge y Luis del **viernes 6-nov a las 11:00**.

### sitio
Funcional y desplegable (HTML/CSS/JS vanilla, sin build, apto GitHub Pages). Git **limpio, todo commiteado** (último `35bbe44`). Tema **oscuro/claro** con toggle; la home abre con **header claro fijo + hero con foto de fondo completa** y las páginas internas van en oscuro. **Tres páginas:** `index.html` (home completa: hero, 7 tipologías, stats, 6 capacidades, 3 proyectos destacados, diferenciador geoespacial, nosotros, clientes, contacto), `proyectos.html` (cartera con filtros por ámbito y grilla de tarjetas con foto) y `caso-acceso-norte.html` (plantilla de caso). Detalle completo (design system, secciones, historia del hero, backlog) en `ESTADO_PROYECTO.md`.
**Pendientes:** fotos reales de obras (hoy placeholders Unsplash); páginas propias Servicios/Nosotros/Contacto (hoy el nav ancla a secciones del home); activar GitHub Pages; verificar cifras y teléfono (ver Aprendizajes 2026-11-03).

**FEEDBACK DE VYR (reunión 2026-11-06) — diseño aprobado, con 3 cambios → IMPLEMENTADOS el 2026-11-07 (CSS/JS en `?v=10`):**
1. **Logo** ✅ — header con lockup **infinito + "V&R INGENIERÍA"**: `assets/logo/logo-lockup-color.png` (texto navy, header claro) y `logo-lockup-white.png` (texto blanco, header oscuro). Compuestos con PIL desde el infinito (`vr-logo.png`) + el wordmark recortado del original; reemplazan `vyr-horizontal-nolema.png`/`vyr-simbolo.png` en el brand de las 5 páginas y en el footer. El swap `.brand__color`/`.brand__white` ya existente los conmuta por tema. **Clave:** el nav se alargó → el logo se encogía a 0 por flexbox; se arregló con `.brand{flex-shrink:0}` y el breakpoint del menú móvil subió de 900 a **1040px**.
2. **Noticias** ✅ — nueva página `noticias.html` (listado con tarjetas `.news-card`, contenido de EJEMPLO para reemplazar) + ítem en el nav de las 5 páginas.
3. **Clientes** ✅ — ítem en el nav (con ícono de candado, `data-login`) que abre un **modal de login** construido por `main.js` (usuario/clave; valida no-vacío; en demo redirige a `clientes.html`). `clientes.html` es el **portal de ejemplo** (Informes / Modelos y datos / Planos, con nota de demo). **La autenticación real y la entrega de archivos por cliente van en cPanel (PHP 8.4 + MySQL), pendientes.**
*El header (brand + nav) está duplicado en las 5 páginas y en las listas del footer → todo cambio de nav se replica en todas. CSS nuevo: secciones 23 (nav-clientes + modal) y 24 (noticias + portal).*
*Pendientes de este bloque: contenido real de Noticias; teléfono/cifras a confirmar (Aprendizajes 2026-11-03); montar la auth real en cPanel; commit + push (no hecho aún).*

**HERO ROTATIVO (2026-11-07, CSS/JS en `?v=11`)** — pedido de Rodrigo: el fondo cambia cada 6,5 s con fundido. **Fotos acordadas una por una con él** (regla: «antes de poner una foto acordemos cuáles»): (1) vialidad aérea actual (Unsplash, placeholder), (2) Biotrén sobre el puente del Biobío, (3) Vespucio Sur con la L4 del Metro, (4) Metro de Santiago, (5) Ruta 5 Norte, cuesta El Teniente. 2–5 son de Wikimedia Commons **CC BY-SA 4.0 → crédito visible obligatorio**: `.hero__credit` lo arma `main.js` desde `data-credit` (`título|autor|url|licencia|url licencia`). Archivos en `assets/img/hero/` (1.920 px, JPEG q80) con `CREDITOS.md`. Las 2–5 se cargan después del `load` (`data-src`), sin rotación con `prefers-reduced-motion`, pausa con la pestaña oculta. Velo izquierdo reforzado (fotos claras). **Ruta 5 aérea de verdad no hay en Commons**: si VyR tiene una propia o de dron, reemplaza a la 5.
También se corrigió un desborde horizontal previo en móvil (la grilla de `#enfoque` medía 541 px en pantalla de 375): `.grid { grid-template-columns: minmax(0,1fr) }`. Medido: las 5 páginas sin desborde a 375 px.
*Subido a GitHub el 2026-11-07.*

### firmas
Firma de **Jorge Vera** instalada en su Roundcube. Para el resto del equipo están `firma-vyr-plantilla.html` (plantilla) y `generador-firma-vyr.html` (rellena 3 campos y copia). **Los tres ya están commiteados** (commit `35bbe44`).

### hosting
Acceso a la **API de cPanel** configurado (token *unrestricted* en `~/.cpanel_vyr.txt`; usuario `vyringen`; host `vyringenieria.cl:2083`). Hecho **solo lectura** (inventario). Los cambios por API que son sensibles (cambiar clave de correo, tomar el navegador) los **bloquea el clasificador de seguridad** → los ejecuta Rodrigo a mano; yo preparo archivos/comandos. Inventario: 25 GB de disco (42% usado), 18/75 cuentas de correo, **0/10 subdominios (10 libres)**, PHP hasta 8.4, 1 base MySQL.

## Entradas y salidas
- **Repo:** `github.com/romedinag-tech/VYR` (rama `main`). Se sube a medida que se avanza; `git push` por HTTPS con GCM.
- **Detalle del sitio:** `ESTADO_PROYECTO.md` (documento de traspaso extenso).
- **Logos oficiales del cliente:** en `../` (carpeta `Nueva Pagina web/`): `logo horizontal.png`, `logo sin lema.png`, `solo simbolo.png`, `Logo VyR vertical.jpeg`, y el logo del infinito (`WhatsApp Image 2026-08-25 ...jpeg`).
- **Assets del sitio (`assets/logo/`):** `vyr-simbolo.png` + `vyr-horizontal-nolema.png` (header), `vr-logo.png` (marca del infinito para firmas), favicons.
- **Firmas:** `firma-vyr-plantilla.html`, `generador-firma-vyr.html`, `firma-jorge-vera.html`.
- **Fotos de proyectos:** `assets/img/proyectos/` (32 `NN-slug.jpg` + `_indice.csv`).
- **Token cPanel:** `C:\Users\Rodrigo\.cpanel_vyr.txt` (fuera del repo; NO commitear).
- **Convención de despliegue web:** al editar `styles.css`/`main.js`, subir el cache-bust `?v=N` en los 3 HTML (va en **v=11**) y pedir Ctrl+F5.

## Datos canónicos
- **Logo del sitio** (header/footer/favicon): emblema multimodal → `assets/logo/vyr-simbolo.png` y `vyr-horizontal-nolema.png`.
- **Logo de las firmas de correo:** marca del **infinito sin fondo** → `assets/logo/vr-logo.png`, servida por URL: `https://raw.githubusercontent.com/romedinag-tech/VYR/main/assets/logo/vr-logo.png`.
- **Fotos de proyectos:** son **placeholders temáticos** (Unsplash) verificados; reemplazar por fotografía real manteniendo el nombre `NN-slug.jpg`.
- **NO usar:** los logos provisionales generados en Canva (ya eliminados del repo).
- **Token cPanel:** vive **solo** en el archivo local; nunca en el repo ni en el chat.

## Aprendizajes
- 2026-06-17 — El **texto azul marino** de los logos VyR no se lee sobre fondo oscuro. Por eso el header de la home es claro fijo y el **símbolo a color** se usa donde el fondo es oscuro.
- 2026-06-17 — Para **transparentar** logos con fondo: floodfill desde las esquinas (no borra los blancos internos de los vehículos); para el logo del infinito sobre navy degradado, key-out por umbral de color.
- 2026-06-18 — **Caché** agresiva del navegador del cliente: es obligatorio subir `?v=N` en CSS/JS en cada cambio y pedir Ctrl+F5. Hay un sello `document.lastModified` abajo-izquierda para verificar la versión cargada.
- 2026-06-18 — El navegador de este equipo **no alcanza `document_idle`** con recursos externos → no hay screenshots automáticos; se descargan imágenes con `curl`+Read o se usa el widget de visualización. El cliente manda capturas para feedback.
- 2026-09-03 — Firma HTML en **Roundcube**: hay que **activar el modo HTML ANTES de pegar**, si no el logo no entra. Copiar el render pierde la imagen; el logo debe estar **hosteado por URL pública**.
- 2026-09-03 — El **clasificador de seguridad** de Claude Code bloquea, por API/navegador, cambiar contraseñas de correo y operar cuentas en vivo. Esas acciones las hace Rodrigo manualmente; yo preparo los archivos y los pasos.
- 2026-09-03 — La **firma no se puede setear por API de cPanel** (vive en Roundcube, no en cPanel). El token de cPanel es *unrestricted* (acceso total) → tratarlo como contraseña; se revoca en *Manage API Tokens*.
- 2026-11-03 — **Revisión en vivo (servido por HTTP, no `file://`).** El sitio se ve sólido y profesional en las 3 páginas. Puntos para la reunión / a resolver con Rodrigo (son datos y diseño, no bugs): **(1) contraste del hero** — el texto blanco se pierde sobre las zonas claras de la foto aérea; el degradado ayuda pero conviene reforzar el overlay; **(2) cifras a confirmar** — "+300 estudios y proyectos" y "+20 años de experiencia del equipo" (la cartera de la postulación lista ~47); y "+13 años desde 2011" está **desactualizado** (2011→2026 son 15 años); **(3) teléfono de contacto** `+56 2 2505 3378` — verificar que sea el real (la firma de Jorge usa +56 9 9579 5853); **(4) fotos** de proyectos siguen siendo placeholders Unsplash; **(5)** el nav (Servicios/Enfoque/Nosotros) ancla al home, no son páginas propias.

- 2026-11-07 — **Vectorizar un logo PNG → SVG** (cuando no hay vector original): `vtracer` sirve, pero **segfault en Python 3.14**; corre bien con **Python 3.12** (`C:\Users\Rodrigo\AppData\Local\Programs\Python\Python312\python.exe`; el venv `transporte` no tiene pip). Aplanar el alfa sobre blanco antes de trazar y después **quitar del SVG la capa de fill blanco** para recuperar la transparencia. Resultado medido sobre `vr-logo.png`: **fiel en forma, transparencia OK, pero el degradado queda más plano y los bordes algo más duros** → sirve para el header web (a tamaño chico es indistinguible), no para impresión grande. Lo ideal sigue siendo el vector original del diseñador.

- 2026-11-07 — **`.hero p` pisa a cualquier `<p>` dentro del hero** (especificidad 0-1-1 > 0-1-0): un crédito como `<p class="hero__credit">` salió a 20 px, con el color y el ancho del bajo-título. Elementos auxiliares del hero, como `<div>`. Y **con el panel del navegador oculto la ventana mide 0 px** y las capturas llegan con un cuadro de atraso: fijar el tamaño con `resize_window`, verificar por DOM (`getBoundingClientRect`, `naturalWidth`, clase activa) y usar la captura sólo como apoyo. **Wikimedia Commons responde 429** a ráfagas: pausa de ~4 s entre descargas y reintento.
- 2026-11-07 — **Kit de logo vectorial por partes** (idea de Rodrigo: componentes separados para armar horizontal/vertical/icono): en `..\logo-vectorial\` → `infinito.svg`, `wordmark-vyr-blanco.svg` y `wordmark-vyr-navy.svg`. El logo completo (infinito + "V&R INGENIERÍA" + lema) existe sólo como la **imagen vertical de WhatsApp** (`..\WhatsApp Image 2026-08-25…jpeg`, fondo navy, texto blanco); de ahí se recortó y vectorizó el wordmark. **Vectorizar LETRAS: no usar modo color** (el leve sombreado de las letras rompe la traza — la "V" salió con un relleno interior falso, lo cachó Rodrigo). Hacer **máscara binaria por color** (blanco de las letras y naranjo del "&" por separado, umbral sobre el RGB) y trazar cada máscara con `colormode="binary"`, `filter_speckle=3` (más alto se come el acento de la "Í"). Así quedó fiel. **El infinito solo va incompleto** (le faltan las letras): en el header se usa infinito + wordmark. Para el header **por ahora se usa PNG** (decisión de Rodrigo), no el SVG.

## Cómo se ejecuta
1. **Verlo en vivo** (siempre por HTTP, nunca `file://`): `python -m http.server 8777` en esta carpeta y abrir `http://localhost:8777/index.html` (también `proyectos.html` y `caso-acceso-norte.html`).
2. **Editar** `index.html` / `proyectos.html` / `caso-acceso-norte.html`, `assets/css/styles.css`, `assets/js/main.js`.
3. Al tocar CSS/JS, **subir el cache-bust `?v=N`** en los 3 HTML (va en **v=11**) y pedir Ctrl+F5 al cliente.
4. **Publicar:** `git push` por HTTPS (cuenta romedinag-tech) a `github.com/romedinag-tech/VYR`, rama `main`. GitHub Pages aún por activar.
5. **Firmas:** se instalan en Roundcube activando el **modo HTML ANTES de pegar**; el logo va hospedado por URL pública.

<!-- columna-vertebral: ultima_actualizacion=2026-11-07 commit=hero-rotativo -->
