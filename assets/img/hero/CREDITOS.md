# Fotos del fondo rotativo del hero (index.html)

Acordadas con Rodrigo el 2026-11-07. Rotan cada 6,5 s con fundido, en este orden. Las de Wikimedia Commons son
**CC BY-SA 4.0**: exigen crédito visible (autor, enlace y licencia) e indicar los cambios. El sitio muestra el
crédito de la foto vigente abajo a la izquierda del hero (`.hero__credit`, generado desde `data-credit`).
Cambios aplicados: reducidas a 1.920 px de ancho, JPEG calidad 80; el navegador las recorta (`object-fit: cover`).

| # | Archivo | Qué muestra | Autor | Licencia | Fuente |
|---|---|---|---|---|---|
| 1 | `../proyectos/30-interconexion-santiago-valparaiso.jpg` | Enlace vial en altura (vista aérea; **foto genérica de banco, placeholder: no corresponde a una obra de V&R**) | Unsplash `photo-1465447142348-e9952c393450` | Licencia Unsplash (sin atribución obligatoria) | ver `../proyectos/_indice.csv` |
| 2 | `02-biotren-puente-biobio.jpg` | Biotrén (EFE CM-112) sobre el puente ferroviario del Biobío, Concepción | Kabelleger / David Gubler | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:EFE_CM-112_Juan_Pablo_II_-_Concepci%C3%B3n.jpg |
| 3 | `03-vespucio-sur-metro-l4.jpg` | Autopista Vespucio Sur con la Línea 4 del Metro en el bandejón, La Florida | Carlos Figueroa Rojas | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Autopista_Vespucio_Sur,_La_Florida,_Santiago_20260213.jpg |
| 4 | `04-metro-santiago.jpg` | Tren NS-74 del Metro de Santiago entre Los Héroes y Toesca | ShootingStarMax | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Tren_NS-74_del_Metro_de_Santiago,_entre_estaciones_Los_H%C3%A9roes_y_Toesca.jpg |
| 5 | `05-ruta5-cuesta-el-teniente.jpg` | Ruta 5 Norte, cuesta El Teniente | Sfs90 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Ruta_5_Norte,_cuesta_El_Teniente.jpg |

Para cambiar una foto: reemplazar el archivo manteniendo el nombre, o agregar un `<img class="hero__slide" data-src=… data-credit=…>`
en `index.html` (formato de `data-credit`: `título|autor|url archivo|licencia|url licencia`; sin `data-credit` no se muestra crédito).
Si la reemplaza una foto propia de V&R, quitar su `data-credit`.
