# VyR Ingeniería — Prototipo de rediseño

Propuesta estática de rediseño del sitio de **VyR / V&R Ingeniería**, consultora chilena de
ingeniería de transporte. **No es una implementación sobre el sitio en producción**: es una
maqueta navegable para validar el lenguaje visual y la arquitectura de información.

> El contenido (textos, cifras, imágenes y proyectos) es **placeholder realista**. Las cifras
> marcadas como ilustrativas deben reemplazarse por las reales antes de publicar.

## Contenido

| Página | Archivo | Rol |
|---|---|---|
| Home | `index.html` | Hero, métricas, servicios, proyectos destacados, enfoque geoespacial, nosotros, CTA |
| Proyectos | `proyectos.html` | Índice de cartera con filtros por categoría |
| Caso | `caso-acceso-norte.html` | Plantilla de proyecto (pieza central) |

```
vyr-rediseno/
├── index.html
├── proyectos.html
├── caso-acceso-norte.html
├── assets/
│   ├── css/styles.css      ← design tokens + componentes
│   ├── js/main.js          ← nav móvil, scroll, reveal, filtros
│   ├── logo/               ← logo V&R (exportado de Canva, PNG transparente)
│   │     vr-header.png · vr-header-blanco.png (negativo) · vr-icon.png +
│   │     favicons · vr-logo-horizontal.png (versión con lema)
│   └── img/                ← reemplazar por fotos definitivas
└── README.md
```

## Sistema de diseño (resumen)

- **Color:** azul profundo institucional (`#0B2A4A`) + neutros; naranjo (`#E8772E`) solo como
  acento de dato (<5 %).
- **Tipografía:** *Space Grotesk* (titulares) + *Inter* (texto), vía Google Fonts.
- **Base:** mobile-first, accesible (contraste AA, foco visible, navegación por teclado,
  `prefers-reduced-motion`), sin dependencias ni build.

## Cómo verlo en local

No requiere compilación. Abre `index.html` en el navegador, o sirve la carpeta:

```bash
# Python
python -m http.server 8000
# luego visita http://localhost:8000
```

## Desplegar en GitHub Pages

1. Crea un repositorio y sube el contenido de esta carpeta a la raíz.
   ```bash
   git init
   git add .
   git commit -m "Prototipo rediseño VyR Ingeniería"
   git branch -M main
   git remote add origin <URL-del-repo>
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment**.
3. **Source:** *Deploy from a branch*; **Branch:** `main` / `/ (root)`. Guarda.
4. El sitio queda en `https://<usuario>.github.io/<repo>/` en ~1 minuto.

El archivo `.nojekyll` ya está incluido para que GitHub Pages sirva los assets sin procesarlos.

## Pendientes para producción

- [ ] Reemplazar imágenes placeholder (hoy desde Unsplash) por fotografía propia de proyectos
      (rutas, ferrocarril, puertos, tomas aéreas) en `assets/img/`.
- [ ] Sustituir cifras ilustrativas por métricas reales por proyecto.
- [ ] Afinar el wordmark con los archivos de logo definitivos.
- [ ] Cargar la cartera real de proyectos y casos.
- [ ] Conectar formulario/CTA de contacto.
