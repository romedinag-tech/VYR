# VyR — Web, firmas e identidad digital

## Propósito
Rediseño del sitio web de **VyR / V&R Ingeniería** (consultora chilena de ingeniería de transporte) y sus activos digitales. Es un **prototipo**, no el sitio en producción (`vyringenieria.cl`). Tiene tres dimensiones:
- **sitio** — prototipo web premium (home, cartera de proyectos, plantilla de caso).
- **firmas** — firmas de correo HTML para el equipo.
- **hosting** — gestión del cPanel y dominio `vyringenieria.cl`.

## Estado
Última actividad: 2026-09-03

### sitio
Funcional y desplegable (HTML/CSS/JS vanilla, sin build, apto GitHub Pages). Tema **oscuro/claro** con toggle. Estado del hero (tras varias iteraciones): **header claro fijo** + **hero con foto de fondo completa**, texto blanco. Detalle completo (design system, secciones, historia del hero, backlog) en `ESTADO_PROYECTO.md`. Pendiente: fotos reales de obras, páginas Servicios/Nosotros/Contacto, activar GitHub Pages.

### firmas
Firma de **Jorge Vera** instalada en su Roundcube. Para el resto del equipo quedan listos `firma-vyr-plantilla.html` (plantilla para copiar/pegar/editar) y `generador-firma-vyr.html` (rellena 3 campos y copia). *A la fecha de este archivo, esos dos aún no están commiteados.*

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
- **Convención de despliegue web:** al editar `styles.css`/`main.js`, subir el cache-bust `?v=N` en los 3 HTML (va en **v=7**) y pedir Ctrl+F5.

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

<!-- columna-vertebral: ultima_actualizacion=2026-09-03 commit=1353520 -->
