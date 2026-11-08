/* Biblioteca de proyectos V&R — fichas de estudios (fuente única de proyecto.html).
   Cada ficha sale del Informe Ejecutivo del estudio (Biblioteca Digital de Transportes, MTT/SECTRA).
   Cada cifra cita su página en `pag`. Borradores y destilados: ../biblioteca-proyectos/ (fuera del sitio).
   Para agregar una ficha: copiar un bloque, completar y enlazar la tarjeta en proyectos.html con
   href="proyecto.html?id=<id>". */
window.VYR_FICHAS = {

  "la-tirana-iquique": {
    n: 14,
    titulo: "Mejoramiento de los ejes La Tirana y Cerro Dragón",
    ciudad: "Iquique", region: "Tarapacá",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2022",
    consultor: "Consorcio V&R – PRO 5",
    tipologia: "Eje urbano · Transporte público",
    etapa: "Prefactibilidad, anteproyecto y evaluación social",
    tags: ["Transporte público", "Ciclovías", "Anteproyecto", "Evaluación social"],
    objetivo: "Desarrollar los análisis de prefactibilidad, el anteproyecto y la evaluación definitiva del proyecto P14-19 del Plan Maestro de Transporte Urbano de Iquique, orientado a mejorar el nivel de servicio del transporte público en el sentido norte–sur de la ciudad.",
    desarrollo: [
      "A partir de un diagnóstico integral del espacio público y de la red vial del área de estudio, con una zonificación de 106 zonas, se formularon y evaluaron seis alternativas de proyecto.",
      "La alternativa recomendada, definida mediante evaluación social, análisis multicriterio y un proceso de decisión multisectorial, incorpora una pista exclusiva de transporte público en La Tirana entre Elías Laferte y Padre Hurtado, una ciclovía en toda la extensión de Cerro Dragón y en La Tirana entre Salvador Allende y Cuatro Sur, y nuevas conexiones transversales.",
      "El anteproyecto abordó diseño vial y urbano, estructuras, seguridad vial, iluminación, modificación de servicios y expropiaciones."
    ],
    resultado: "Proyecto socialmente rentable, con un costo privado de MM$34.384 en la solución en hormigón (moneda de diciembre de 2020) y una TIR social de 10,8 %, por lo que se recomendó su avance a ingeniería de detalle.",
    cifras: [
      { num: "6", unit: "", label: "alternativas de proyecto evaluadas" },
      { num: "10,8", unit: "%", label: "TIR social del anteproyecto" },
      { num: "106", unit: "zonas", label: "en la zonificación del estudio" }
    ],
    imagen: "assets/img/estudios/14-la-tirana-cerro-dragon.jpg",
    imagen_alt: "Vista aérea del eje La Tirana en Iquique con los puntos de análisis del estudio",
    pie: "Eje La Tirana sobre imagen aérea",
    fuente: "Informe Ejecutivo, «Mejoramiento de los ejes La Tirana y Cerro Dragón en la ciudad de Iquique», SECTRA",
    pag: "objetivo págs. 4 y 6; zonas pág. 8; alternativas pág. 4; alternativa recomendada y resultado pág. 5; imagen pág. 53"
  },

  "gestion-transito-copiapo": {
    n: 22,
    titulo: "Mejoramiento Gestión de Tránsito",
    ciudad: "Copiapó", region: "Atacama",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2020",
    consultor: "V&R Ingeniería",
    tipologia: "Gestión de tránsito",
    etapa: "Prefactibilidad y proyecto de ingeniería",
    tags: ["Gestión de tránsito", "Transporte público", "Movilidad peatonal", "Evaluación social"],
    objetivo: "Mejorar las condiciones operacionales y físicas de la infraestructura vial del área urbana consolidada de Copiapó, cuya demanda de viajes y parque vehicular crecieron con el auge de la actividad minera.",
    desarrollo: [
      "Del diagnóstico surgieron 14 medidas individuales, combinadas en 8 alternativas que abarcaron mejoras peatonales, de transporte público, de transporte privado y de modos no motorizados.",
      "El proyecto final, validado en talleres multisectoriales, reúne 12 intervenciones, entre ellas la semipeatonalización del área céntrica, ejes con preferencia para el transporte público en Atacama, Maipú y Rodríguez, la apertura de Mackenna, el mejoramiento de intersecciones críticas y la pavimentación de Av. La Minería."
    ],
    resultado: "Inversión social de $9.253 millones (diciembre de 2019), con una TIR social de 24,4 % y un VAN de $22.574 millones: un proyecto rentable en el corto y en el largo plazo.",
    cifras: [
      { num: "12", unit: "", label: "intervenciones en el proyecto final" },
      { num: "24,4", unit: "%", label: "TIR social" },
      { num: "8", unit: "", label: "alternativas analizadas" }
    ],
    imagen: "assets/img/estudios/22-gestion-transito-copiapo.jpg",
    imagen_alt: "Vista aérea del centro de Copiapó con los ejes y puntos de control del estudio",
    pie: "Centro de Copiapó: ejes y puntos de control del estudio",
    fuente: "Informe Ejecutivo, «Mejoramiento Gestión de Tránsito, Copiapó», SECTRA",
    pag: "objetivo pág. 6; 14 medidas pág. 24; 8 alternativas pág. 6; 12 intervenciones págs. 6–7 y 55; resultado pág. 7; imagen pág. 17"
  },

  "ciclovias-quilpue-villa-alemana": {
    n: 4,
    titulo: "Actualización Plan Maestro de Ciclovías",
    ciudad: "Quilpué y Villa Alemana", region: "Valparaíso",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2025",
    consultor: "Consorcio V&R – PRO 5",
    tipologia: "Ciclovías · Movilidad activa",
    etapa: "Plan maestro y prediseño",
    tags: ["Ciclovías", "Movilidad activa", "Participación ciudadana", "Prediseño"],
    objetivo: "Actualizar, definir y priorizar una red ciclista continua, segura y accesible para Quilpué y Villa Alemana, integrada al sistema metropolitano de transporte y al marco normativo de movilidad activa.",
    desarrollo: [
      "Se diagnosticó la ciclo-inclusión de la red vial, se catastraron y normalizaron los 10,9 km de ciclovías existentes y se condujo un proceso participativo con usuarios de bicicleta, juntas de vecinos y ambos municipios.",
      "Se analizaron tres planes alternativos, de 72,61, 80,06 y 103,0 km, y se desarrollaron los prediseños de los ejes prioritarios."
    ],
    resultado: "Un Plan Maestro definitivo que agrega 98 km de ciclovías de alto estándar a la red existente y una red prioritaria de 50 km, organizada en tres etapas.",
    cifras: [
      { num: "98", unit: "km", label: "de nuevas ciclovías en el plan definitivo" },
      { num: "50", unit: "km", label: "de red prioritaria, en tres etapas" },
      { num: "10,9", unit: "km", label: "de ciclovías existentes catastradas" }
    ],
    imagen: "assets/img/estudios/04-ciclovias-quilpue-villa-alemana.jpg",
    imagen_alt: "Vista aérea de Quilpué y Villa Alemana con la red de ciclovías existente, el plan definitivo y el plan priorizado",
    pie: "Red de ciclovías: existente, plan definitivo y plan priorizado",
    fuente: "Informe Ejecutivo, «Actualización Plan Maestro de Ciclovías Comunas de Quilpué y Villa Alemana», SECTRA",
    pag: "objetivo pág. 9; 10,9 km pág. 60; planes alternativos págs. 64–66; 98 km pág. 82; 50 km cuadro 7-8 pág. 106 (la pág. 102 dice 49 km); imagen pág. 103"
  },

  "ciclovias-calama": { n: 3, titulo: "Análisis y Desarrollo Plan Maestro de Ciclovías", ciudad: "Calama", region: "Antofagasta", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2025", consultor: "V&R – PRO 5", tipologia: "Ciclovías · Movilidad activa", etapa: "Plan maestro y prediseño", tags: ["Ciclovías", "Movilidad activa", "Participación ciudadana", "Prediseño"], objetivo: "Analizar y desarrollar el Plan Maestro de Ciclovías de Calama, de modo que fomente el uso de la bicicleta y aumente su participación en el total de viajes habituales de la ciudad.", desarrollo: ["Se realizó un vuelo fotogramétrico de la ciudad, el catastro de las 12 ciclovías existentes, con 16,95 km, una encuesta de 946 casos a usuarios de bicicleta y el análisis de los accidentes con ciclistas, junto a un proceso participativo con mesas ciudadanas, cartografía participativa, caminata comentada y una cicletada informativa.", "Se compararon cuatro planes preliminares mediante indicadores de cobertura, costo-efectividad y costo-beneficio, y se conformó un Plan Definitivo que añade 95 km de ciclovías de alto estándar a la red existente; en paralelo se adecuaron 6,4 km de ciclovías existentes con incumplimiento normativo.", "Se desarrollaron los prediseños de una red priorizada de 51 km —geometría, perfiles transversales, pavimentación y expropiaciones—, organizada en tres etapas de 19,2, 15,7 y 16,1 km."], resultado: "El Plan Priorizado, con una inversión social de $28.247 millones, resultó rentable en el largo plazo, con una TIR social de 9,4 %.", cifras: [{ num: "95", unit: "km", label: "de nuevas ciclovías en el plan definitivo" }, { num: "51", unit: "km", label: "de red priorizada, con prediseño" }, { num: "9,4", unit: "%", label: "TIR social del plan priorizado" }], imagen: "assets/img/estudios/03-ciclovias-calama.jpg", imagen_alt: "Render aéreo de Av. Granaderos en Calama, en la intersección con Av. Argentina, con la ciclovía en calzada", pie: "Adecuación de la ciclovía de Av. Granaderos (render del estudio)", fuente: "Informe Ejecutivo, «Análisis y Desarrollo Plan Maestro de Ciclovías Calama», SECTRA", pag: "objetivo pág. 9; participación págs. 11–15; 12 ciclovías y 16,95 km pág. 19; 946 encuestas pág. 20; cuatro planes pág. 33; 95 km págs. 6 y 53; 6,4 km pág. 58; 51 km págs. 6 y 62 (la pág. 62 también dice 50 km); etapas págs. 76–77; inversión social pág. 71; TIR 9,4 % págs. 73–74; año pág. 11; imagen pág. 60" },

  "accesibilidad-sur-arica": { n: 7, titulo: "Mejoramiento Accesibilidad Sector Sur", ciudad: "Arica", region: "Arica y Parinacota", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2024", consultor: "Consorcio V&R – PRO 5", tipologia: "Eje urbano · Accesibilidad", etapa: "Prefactibilidad, anteproyecto y evaluación social", tags: ["Accesibilidad", "Transporte público", "Ciclovías", "Anteproyecto"], objetivo: "Crear una cartera de proyectos de gestión e infraestructura vial, analizados y evaluados a nivel de anteproyecto, que resuelva los problemas de conectividad, accesibilidad y estándar de servicio del sector sur de Arica con un enfoque multimodal.", desarrollo: ["A partir de un diagnóstico de transporte, infraestructura y condiciones urbano-ambientales, con encuestas de interceptación en 10 intersecciones semaforizadas y un modelo SATURN calibrado sobre 110 zonas, se prediseñaron 26 kilómetros de proyecto, agrupados en ocho planes alternativos.", "El plan seleccionado, definido mediante evaluación social, análisis multicriterio y un proceso de decisión multisectorial y con participación ciudadana, reúne el mejoramiento de San Ignacio de Loyola con pistas solo transporte público, la conexión de Circunvalación Oriente hasta la Ruta 5, el mejoramiento del eje Edmundo Flores, el par vial 18 de Septiembre – Luis Valente Rossi y una conexión peatonal con ascensor inclinado en el Cerro La Cruz.", "El anteproyecto abordó diseño vial y urbano, paisajismo, estructuras, seguridad vial, iluminación, modificación de servicios y expropiaciones, con una mesa ciudadana de cuatro sesiones y dos ejercicios participativos."], resultado: "Plan Definitivo socialmente rentable, con una inversión privada de MM$68.759 (solución en hormigón, moneda del 31 de diciembre de 2023), una TIR social de 9,3 % y un VAN de MM$25.469, por lo que se recomendó su avance a ingeniería de detalle.", cifras: [{ num: "8", unit: "", label: "planes alternativos evaluados" }, { num: "9,3", unit: "%", label: "TIR social del plan definitivo" }, { num: "68.759", unit: "MM$", label: "de inversión privada (hormigón)" }], imagen: "assets/img/estudios/07-accesibilidad-sur-arica.jpg", imagen_alt: "Imagen del anteproyecto de Av. San Ignacio de Loyola en Arica, con buses en pista exclusiva, calzadas y áreas públicas con vegetación", pie: "Av. San Ignacio de Loyola: imagen del anteproyecto", fuente: "Informe Ejecutivo, «Mejoramiento Accesibilidad Sector Sur, Arica», SECTRA", pag: "objetivo pág. 4; 10 intersecciones pág. 11; 110 zonas pág. 12; 26 km y ocho planes págs. 1 y 21; plan seleccionado págs. 1, 28–29, 36 y 56; especialidades pág. 1; participación págs. 2 y 52; resultado págs. 1–2 (también págs. 43 y 57); año pág. 4; imagen pág. 33, figura 10-2, recortada" },

  "gomez-carreno-jardin-del-mar-renaca": { n: 8, titulo: "Mejoramiento Interconexión Gómez Carreño – Jardín del Mar – Reñaca", ciudad: "Viña del Mar", region: "Valparaíso", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2024", consultor: "Consorcio V&R – PRO 5", tipologia: "Conectividad vial · Eje urbano", etapa: "Prefactibilidad, anteproyecto y evaluación social", tags: ["Conectividad vial", "Ciclovías", "Anteproyecto", "Evaluación social"], objetivo: "Desarrollar los análisis de prefactibilidad y factibilidad para mejorar la conectividad entre los sectores de Gómez Carreño, Jardín del Mar y Reñaca, en la ciudad de Viña del Mar.", desarrollo: ["El diagnóstico integral del espacio público y de la red vial identificó la necesidad de aumentar las alternativas de conexión en las zonas de crecimiento previsto y de mejorar las condiciones para los modos activos y el transporte público; a partir de él se formularon y evaluaron seis alternativas preliminares de gestión e infraestructura vial.", "La evaluación social, complementada con un análisis multicriterio y un proceso de decisión multisectorial y con participación ciudadana, condujo a la Alternativa 2A, que reúne un nuevo puente sobre el estero Reñaca frente a Almirante Riveros, la conexión del eje Halimeda desde Eklonia hasta Gómez Carreño y las conexiones Glorias Navales y Diagonal Sur–Alessandri.", "El anteproyecto, de 7,2 km de ejes intervenidos, incorpora 3,0 km de ciclovías y 40.158 m² de áreas de paisajismo, y abarcó diseño vial y urbano, seguridad vial, estructuras, iluminación, modificación de servicios y la expropiación de 42 propiedades."], resultado: "Proyecto socialmente rentable, con una inversión privada de MM$48.301 en la solución en hormigón (moneda del 31 de diciembre de 2023) y una TIR social de 6,0 %; se recomendó su avance a ingeniería de detalle y, de ejecutarse por etapas, comenzar por la conexión de Gómez Carreño con Alessandri, cuya TIR social es de 21,1 %.", cifras: [{ num: "7,2", unit: "km", label: "de ejes intervenidos en el anteproyecto" }, { num: "3,0", unit: "km", label: "de ciclovías proyectadas" }, { num: "6,0", unit: "%", label: "TIR social del anteproyecto" }], imagen: "assets/img/estudios/08-gomez-carreno-jardin-del-mar-renaca.jpg", imagen_alt: "Plano del anteproyecto seleccionado entre Reñaca y Av. Alessandri, con las nueve medidas numeradas, el puente sobre el estero Reñaca y las intersecciones mejoradas", pie: "Esquema general de la alternativa seleccionada (2A)", fuente: "Informe Ejecutivo, «Mejoramiento Interconexión Gómez Carreño – Jardín del Mar – Reñaca, Viña del Mar», SECTRA", pag: "objetivo y diagnóstico pág. 1; 6 alternativas págs. 1, 19 y 49; Alternativa 2A págs. 26–28; 7,2 km págs. 1, 30 y 49; 3,0 km de ciclovías y 40.158 m² pág. 1; 42 propiedades pág. 37; inversión y TIR pág. 1 (cuadros 12-5 y 14-1, págs. 46 y 49); TIR del tramo 3 y etapas págs. 46 y 49; imagen pág. 29" },

  "acceso-norte-san-fernando": { n: 9, titulo: "Mejoramiento Av. O'Higgins – Acceso Norte", ciudad: "San Fernando", region: "O'Higgins", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2022", consultor: "Consorcio V&R – PRO 5", tipologia: "Eje urbano · Acceso a la ciudad", etapa: "Prefactibilidad, anteproyecto y evaluación social", tags: ["Capacidad vial", "Puentes", "Ciclovías", "Evaluación social"], objetivo: "Realizar los análisis de prefactibilidad y desarrollar el anteproyecto del mejoramiento de la Av. Bernardo O'Higgins, principal acceso norte a San Fernando, para ampliar su capacidad, conectarla con las prolongaciones de las calles Rancagua y Valdivia y reemplazar el puente sobre el estero Antivero.", desarrollo: ["El diagnóstico identificó la consolidación de actividad industrial y de servicios en torno a la Av. O'Higgins y la falta de conectividad vial transversal a través del estero Antivero como causas de congestión en el acceso norte, además de zonas de riesgo de inundación y un borde de río no incorporado como espacio público. Sobre esa base se formularon y evaluaron cinco alternativas de proyecto.", "La evaluación social, el análisis multicriterio y un proceso de decisión con la comunidad, el municipio y la mesa técnica regional llevaron a la Alternativa 4 Modificada, que mejora la Av. O'Higgins desde la salida norte de la Ruta 5 hasta Av. Manso de Velasco y la complementa con la Costanera en el borde sur del estero Antivero, la calle Valdivia y la calle Proyectada 16.", "El anteproyecto, de 4,8 km, incluye un nuevo puente de 120 m sobre el estero Antivero en reemplazo del existente, 200 m de defensas fluviales, ciclovías, 3,0 ha de áreas de paisaje y 667 nuevos árboles."], resultado: "Proyecto socialmente rentable, con una inversión privada de MM$30.640 en la solución en hormigón (moneda del 31 de diciembre de 2021), una TIR social de 18,5 % y un VAN de MM$46.922; se recomendó su avance a ingeniería de detalle, con un primer año de operación en 2028.", cifras: [{ num: "4,8", unit: "km", label: "de vías en el anteproyecto" }, { num: "18,5", unit: "%", label: "TIR social del anteproyecto" }, { num: "120", unit: "m", label: "de nuevo puente sobre el estero Antivero" }], imagen: "assets/img/estudios/09-acceso-norte-san-fernando.jpg", imagen_alt: "Vista aérea tridimensional del acceso norte de San Fernando desde la Ruta 5, con la solución propuesta de áreas verdes, ciclovías y aceras", pie: "Acceso norte desde la Ruta 5: imagen objetivo de la solución propuesta", fuente: "Informe Ejecutivo, «Mejoramiento Av. O'Higgins – Acceso Norte, San Fernando», SECTRA", pag: "objetivo págs. 1 y 4; año pág. 4; diagnóstico pág. 1; 5 alternativas págs. 1 y 12; Alternativa 4 Modificada pág. 18; solución pág. 1; 4,8 km págs. 1, 19 y 33; puente de 120 m y 200 m de defensas pág. 24; 3,0 ha y 667 árboles pág. 1; resultado págs. 1–2 y 30–33; imagen pág. 14, figura 6-2" },

  "conectividad-oriente-poniente-coquimbo": { n: 12, titulo: "Mejoramiento Conectividad Transversal Oriente – Poniente", ciudad: "Coquimbo", region: "Coquimbo", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2023", consultor: "Consorcio V&R – PRO 5", tipologia: "Conectividad vial urbana", etapa: "Prefactibilidad, anteproyecto y evaluación social", tags: ["Conectividad vial", "Ciclovías", "Anteproyecto", "Evaluación social"], objetivo: "Realizar los análisis de prefactibilidad, el anteproyecto y la evaluación definitiva del mejoramiento de la conectividad oriente–poniente de Coquimbo, interrumpida por la línea férrea, las vías expresas y troncales y una trama urbana discontinua.", desarrollo: ["Con una zonificación de 83 zonas internas y 18 externas, conteos en 45 intersecciones y un modelo SATURN calibrado con mediciones de 2021, ajustadas por las condiciones de pandemia a partir de mediciones previas de 2016, se formularon 6 alternativas y 4 sub-alternativas, evaluadas con análisis social y multicriterio.", "Se recomendó la alternativa 6, un par de ejes que une Tierras Blancas con Peñuelas Sur y el borde costero —Camino Huachalalume y Av. Gerónimo Méndez por el sur; Av. Pan de Azúcar, Av. Amanecer y calle Peñuelas Sur por el norte—, con una extensión aproximada de 10,7 km.", "El anteproyecto abordó diseño geométrico con ciclovías segregadas, semaforización, saneamiento, la expropiación de 26 roles prediales, paisajismo con 667 nuevos árboles nativos e iluminación, y el estudio se acompañó de 4 talleres de participación ciudadana."], resultado: "Proyecto socialmente rentable, con un costo privado de MM$63.264 en la solución en hormigón (moneda de diciembre de 2021), una TIR social de 13,2 % y un VAN social de MM$43.542, por lo que se recomendó su avance a ingeniería de detalle.", cifras: [{ num: "10,7", unit: "km", label: "de ejes en el anteproyecto (aprox.)" }, { num: "13,2", unit: "%", label: "TIR social del anteproyecto" }, { num: "6", unit: "", label: "alternativas evaluadas, más 4 sub-alternativas" }], imagen: "assets/img/estudios/12-conectividad-oriente-poniente-coquimbo.jpg", imagen_alt: "Imagen aérea de Coquimbo con los ejes Amanecer y Gerónimo Méndez del anteproyecto, entre el borde costero y Tierras Blancas", pie: "Tramos del anteproyecto: ejes Amanecer y Gerónimo Méndez", fuente: "Informe Ejecutivo, «Mejoramiento Conectividad Transversal Oriente – Poniente, Coquimbo», SECTRA", pag: "año pág. 7 (estudio desarrollado entre octubre de 2020 y junio de 2023); objetivo págs. 5 y 7; zonas pág. 10; 45 intersecciones pág. 25; ajuste por pandemia págs. 35–37; 6 alternativas y 4 sub-alternativas págs. 54, 57 y 75; alternativa 6 págs. 6 y 76; 10,7 km pág. 6; 26 roles pág. 82; 667 árboles pág. 86; 4 talleres pág. 6; costo, TIR y VAN cuadros págs. 93, 107 y 108 y conclusiones pág. 113 (el resumen de la pág. 6 trae otras cifras); imagen pág. 110" },

  "puente-artificio-la-calera": { n: 13, titulo: "Construcción Puente Artificio", ciudad: "La Calera", region: "Valparaíso", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2022", consultor: "Consorcio V&R – PRO 5", tipologia: "Puente urbano · Conectividad vial", etapa: "Prefactibilidad, anteproyecto y evaluación social", tags: ["Puentes", "Conectividad vial", "Anteproyecto", "Evaluación social"], objetivo: "Realizar los análisis de prefactibilidad, el anteproyecto y la evaluación definitiva del proyecto Construcción Puente Artificio – La Calera, orientado a disminuir los problemas de conectividad peatonal y vehicular entre la ciudad de La Calera y el sector de Artificio, separados por el río Aconcagua.", desarrollo: ["El diagnóstico se apoyó en un modelo de situación actual georreferenciado, en catastros físico-operativos, de transporte público y de rutas de camiones, en mediciones de tránsito y en encuestas de interceptación en 14 accesos, con una zonificación de 86 zonas internas y 6 externas y un modelo SATURN calibrado para cuatro periodos de análisis.", "Se formularon y evaluaron 5 alternativas de conexión norte–sur sobre el río Aconcagua. La evaluación social, el análisis multicriterio y los talleres de participación ciudadana, junto con la contraparte técnica, llevaron a seleccionar la alternativa que conecta Artificio con el pericentro de La Calera entre Av. Las Américas y Av. Pedro de Valdivia.", "El anteproyecto abordó diseño vial y urbano, estructuras, saneamiento, iluminación, modificación de servicios, expropiaciones, estudio hidráulico y desvíos de tránsito. Su pieza central es el nuevo puente Las Américas, de 260 m en ocho tramos, con un tablero de 17,0 m que integra una calzada de 9,0 m, ciclovía y pasillos peatonales."], resultado: "Anteproyecto socialmente rentable, con un costo privado de MM$30.718 en la solución en hormigón (moneda de diciembre de 2021) y una TIR social de 15,0 %, por lo que se recomendó su avance a ingeniería de detalle.", cifras: [{ num: "5", unit: "", label: "alternativas de conexión evaluadas" }, { num: "15,0", unit: "%", label: "TIR social del anteproyecto (hormigón)" }, { num: "260", unit: "m", label: "de longitud del nuevo puente Las Américas" }], imagen: "assets/img/estudios/13-puente-artificio-la-calera.jpg", imagen_alt: "Imagen aérea de La Calera y Artificio con el río Aconcagua, la línea férrea y las rutas 5 y 60 CH, con las barreras y conflictos identificados en el diagnóstico", pie: "Síntesis de barreras y conflictos del diagnóstico", fuente: "Informe Ejecutivo, «Construcción Puente Artificio – La Calera», SECTRA", pag: "objetivo págs. 4 y 6; río Aconcagua pág. 32; 14 accesos pág. 27; 86 + 6 zonas pág. 7; 4 periodos pág. 16; 5 alternativas págs. 4 y 37; selección págs. 51–52; anteproyecto págs. 54–60; puente 260 m y tablero pág. 56; resultado pág. 74 (TIR en cuadro 21-3, pág. 68); imagen pág. 32, figura 13-1" },

  "ptu-talca-maule-etapa-1": { n: 16, titulo: "Actualización Plan de Transporte Urbano, Etapa I", ciudad: "Talca y Maule", region: "Maule", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2024", consultor: "Consorcio V&R – Suroeste Consultores", tipologia: "Plan de transporte urbano · Encuesta origen-destino", etapa: "Estudios de base, modelación estratégica y diagnóstico", tags: ["Encuesta origen-destino", "Modelación estratégica", "Escenarios de uso de suelo", "Diagnóstico"], objetivo: "Desarrollar un diagnóstico de la operación del Sistema de Transporte Urbano de las comunas de Talca y Maule, apoyado en el modelo estratégico VIVALDI actualizado con una nueva Encuesta Origen-Destino de Viajes en Hogares.", desarrollo: ["Se levantó la Encuesta Origen-Destino de Viajes en Hogares entre julio y noviembre de 2022 y entre abril y junio de 2023, tras la paralización del estudio por el estallido social de 2019 y la pandemia, junto con encuestas de interceptación a vehículos particulares y camiones en un cordón externo de 10 puntos, encuestas a usuarios de buses y taxis colectivos y mediciones de flujo en 21 puntos de 4 líneas pantalla y en 79 puntos periódicos.", "Se actualizaron los catastros de transporte público, de carga y de la red vial estratégica, y se formularon escenarios de uso de suelo tendencial y de contraste para los cortes 2025, 2030 y 2035, con un crecimiento medio anual de la superficie construida de 2,88 % y 2,95 % entre 2020 y 2035.", "Con esa información se recalibró el modelo de transporte de 4 etapas —generación y atracción, distribución, partición modal y asignación de transporte público y privado— para los periodos punta mañana, fuera de punta y punta tarde, y se elaboró el diagnóstico del sistema."], resultado: "La encuesta estimó 557.712 viajes diarios de 94.116 hogares, con 49,6 % de los viajes en transporte privado. El diagnóstico concluye que el sistema depende del automóvil, que supera el 57 % de los viajes en horarios punta, y recomienda reestructurar el transporte público, desarrollar una red de ciclovías conectada, gestionar la demanda y fortalecer la red vial estructurante.", cifras: [{ num: "557.712", unit: "", label: "viajes diarios estimados por la encuesta en hogares" }, { num: "94.116", unit: "", label: "hogares en Talca y Maule" }, { num: "49,6", unit: "%", label: "de los viajes en transporte privado" }], imagen: "assets/img/estudios/16-ptu-talca-maule.jpg", imagen_alt: "Imagen satelital de Talca y Maule con la zonificación interna del estudio", pie: "Zonificación interna de Talca y Maule sobre imagen satelital", fuente: "Informe Ejecutivo, «Actualización Plan de Transporte Urbano de Talca y Maule, Etapa I», SECTRA", pag: "objetivo pág. 4; paralización pág. 8; cordón y líneas pantalla pág. 13; 79 puntos pág. 26; fechas de la encuesta pág. 35; escenarios pág. 33; modelo de 4 etapas págs. 4 y 6; viajes y hogares pág. 38; partición modal pág. 39; conclusiones págs. 124–126; imagen pág. 10 (figura 3-2)" },

  "edmundo-eluchans-vina-concon": { n: 17, titulo: "Mejoramiento Edmundo Eluchans y sus proyecciones", ciudad: "Viña del Mar y Concón", region: "Valparaíso", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2020", consultor: "Consorcio V&R – PRO 5", tipologia: "Eje urbano · Transporte público", etapa: "Análisis de alternativas, anteproyecto y evaluación social", tags: ["Transporte público", "Ciclovías", "Anteproyecto", "Evaluación social"], objetivo: "Realizar el análisis de alternativas, el anteproyecto y la evaluación social del mejoramiento del eje Edmundo Eluchans y sus proyecciones, con facilidades explícitas para el transporte público, facilidades peatonales y ciclovías de alto estándar, acorde con los instrumentos de planificación de Viña del Mar y Concón.", desarrollo: ["El diagnóstico identificó barreras intercomunales de origen geomorfológico y de borde costero —estero Reñaca, pendientes de acceso a la terraza litoral, campo dunar y desembocadura del río Aconcagua— que supeditan la circulación longitudinal a los modos motorizados y generan congestión en el eje, en especial en la punta mañana. Con una zonificación de 65 zonas y mediciones de tránsito en 40 intersecciones, se formularon y evaluaron cinco alternativas.", "La alternativa seleccionada, ajustada con las municipalidades de Viña del Mar y Concón, considera una pista solo transporte público discontinua (entre Maroto y Av. Central, y entre Los Olivos y Santa Luisa), una ciclovía continua entre Río de Oro y Los Mirlos, mejores veredas en toda su extensión y un par vial entre Calle 7 y Calle 11 en Concón.", "El anteproyecto abarcó 9.903 m de ejes en ambas comunas, con las especialidades de señalización y control de tráfico, modificación de servicios, saneamiento, expropiaciones, pavimentos, estructuras, urbanismo y paisajismo, iluminación y accesibilidad universal, y se presentó a la comunidad en seis talleres de participación ciudadana."], resultado: "Proyecto socialmente rentable, con una inversión privada de MM$25.911 en la solución en hormigón (moneda del 31 de diciembre de 2019), una TIR social de 9,3 % y un VAN de MM$6.653; es rentable también por tramos, con prioridad para el tramo 1, entre Maroto y Los Olivos.", cifras: [{ num: "9.903", unit: "m", label: "de ejes desarrollados en el anteproyecto" }, { num: "9,3", unit: "%", label: "TIR social del anteproyecto" }, { num: "5", unit: "", label: "alternativas evaluadas" }], imagen: "assets/img/estudios/17-edmundo-eluchans-vina-concon.jpg", imagen_alt: "Modelo tridimensional del anteproyecto en Av. Concón Reñaca, entre Los Olivos y el límite comunal, junto al campo dunar", pie: "Av. Concón Reñaca, sector Los Olivos – límite comunal: modelo del anteproyecto", fuente: "Informe Ejecutivo, «Mejoramiento Edmundo Eluchans y sus proyecciones, Viña del Mar – Concón», SECTRA", pag: "objetivo pág. 6; diagnóstico pág. 1; 65 zonas pág. 14; 40 intersecciones pág. 12; 5 alternativas págs. 1 y 24; selección págs. 35–36; solución pág. 1; 9.903 m cuadro 11-1 pág. 37; 6 talleres pág. 9; resultado págs. 2–3 y 52–53; imagen pág. 42" },

  "plan-transporte-linares": { n: 19, titulo: "Actualización Plan de Transporte de la Ciudad de Linares, Etapa I", ciudad: "Linares", region: "Maule", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2020", consultor: "Consorcio MSTD – V&R Ingeniería", tipologia: "Plan de transporte urbano", etapa: "Etapa I: diagnóstico, visión objetivo e ideas de proyecto", tags: ["Plan de transporte", "Encuesta origen-destino", "Escenarios de uso de suelo", "Diagnóstico del STU"], objetivo: "Realizar el diagnóstico operacional del sistema de transporte urbano de Linares y definir conceptualmente un plan de proyectos, como base del nuevo Plan de Transporte de la ciudad.", desarrollo: ["Se levantó una Encuesta Origen-Destino de Viajes en Hogares, con 2.578 encuestas validadas, complementada con mediciones de flujo continuo en 15 puntos, conteos en 23 puntos de líneas de pantalla y en 47 arcos, encuestas de interceptación a 4.055 vehículos privados y 282 camiones en el cordón externo, y encuestas a usuarios de taxibuses, taxicolectivos y buses.", "Sobre una zonificación de 116 zonas internas y 9 externas se formularon escenarios de uso de suelo para los cortes 2025, 2030 y 2035, y se diagnosticó la operación del tránsito, del transporte público, del transporte de carga y de los modos no motorizados.", "El diagnóstico, discutido en mesas técnicas y talleres de participación ciudadana, sustentó una visión objetivo de transporte de largo plazo que promueve los modos no motorizados y un sistema de transporte eficiente, inclusivo y seguro."], resultado: "Una cartera de ideas de proyecto para la Etapa II del plan, en infraestructura vial y conectividad, transporte público, modos no motorizados —un Plan Maestro de Ciclovías y la peatonalización de calle Independencia entre la plaza y calle Brasil— y gestión de tránsito, con un perímetro de exclusión de estacionamientos de 15 manzanas en el centro que implica reubicar alrededor de 200 estacionamientos.", cifras: [{ num: "188.510", unit: "viajes", label: "en un día laboral normal, según la encuesta" }, { num: "2.578", unit: "", label: "encuestas a hogares validadas" }, { num: "116", unit: "zonas", label: "internas en la zonificación del estudio" }], hero_pos: "center 20%", imagen: "assets/img/estudios/19-plan-transporte-linares.jpg", imagen_alt: "Plano de Linares con el Plan Maestro de Ciclovías: tramos propuestos, existentes y proyectados", pie: "Plan Maestro de Ciclovías: ideas de proyecto para modos no motorizados", fuente: "Informe Ejecutivo, «Actualización Plan de Transporte Ciudad de Linares, Etapa I», SECTRA", pag: "año pág. 1 (portada); objetivo págs. 6–7; mediciones y encuestas págs. 15–18; zonificación pág. 8; cortes temporales pág. 7; 188.510 viajes págs. 26 y 34; visión objetivo pág. 53; ideas de proyecto págs. 54–61; 15 manzanas y 200 estacionamientos pág. 60; imagen pág. 60, figura 8-4" },

  "linderos-azolas-arica": { n: 20, titulo: "Mejoramiento Sistema Linderos – Azolas y Conexión al Centro de Arica", ciudad: "Arica", region: "Arica y Parinacota", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2020", consultor: "Consorcio V&R – MSTD", tipologia: "Eje urbano · Transporte público", etapa: "Prefactibilidad, anteproyecto y evaluación social", tags: ["Transporte público", "Pistas solo bus", "Ciclovías", "Anteproyecto"], objetivo: "Realizar los análisis de prefactibilidad, el anteproyecto y la evaluación definitiva del proyecto P24 del Plan Maestro de Transporte Urbano de Arica, que habilita facilidades para el transporte público en ambos sentidos del eje norte–sur Linderos – Alejandro Azolas y su conexión al centro de la ciudad.", desarrollo: ["A partir de un diagnóstico del espacio público y de la red vial, con una zonificación de 70 zonas internas y 6 externas, un modelo SATURN calibrado con mediciones de flujo en 70 intersecciones y encuestas de interceptación en 41 accesos, el eje se dividió en 6 tramos y se formularon 9 alternativas en dos familias: pista solo bus al costado derecho y corredor central de transporte público, ambas con ciclovía en toda su extensión.", "La evaluación social, el análisis multicriterio y un proceso de decisión multisectorial llevaron a recomendar la alternativa de pista exclusiva de transporte público al costado derecho, que además mejora la permeabilidad transversal para peatones y vehículos.", "El anteproyecto abordó diseño vial y urbano, con un tratamiento paisajístico distinto para los sectores residencial, industrial y comercial, estructuras —entre ellas dos puentes sobre el río San José que suman 56 metros lineales—, seguridad vial, iluminación, modificación de servicios y la expropiación de 32 lotes."], resultado: "Proyecto socialmente rentable, con un costo privado de MM$36.853 en la solución en hormigón (moneda de diciembre de 2019), una TIR social de 6,3 % y un VAN social de MM$870, por lo que se recomendó su avance a ingeniería de detalle, con una materialización posible en tres etapas.", cifras: [{ num: "9", unit: "", label: "alternativas de proyecto evaluadas" }, { num: "6,3", unit: "%", label: "TIR social del anteproyecto" }, { num: "56", unit: "m", label: "de puentes proyectados sobre el río San José" }], imagen: "assets/img/estudios/20-linderos-azolas-arica.jpg", imagen_alt: "Perfil tipo y planta tipo de la alternativa de pista solo bus, con ciclovía, calzadas y aceras del eje Linderos – Azolas", pie: "Perfil y planta tipo de la alternativa de pista solo bus", fuente: "Informe Ejecutivo, «Mejoramiento Sistema Linderos – Azolas y Conexión al Centro de Arica», SECTRA", pag: "año: catálogo de la biblioteca (el PDF no trae portada); objetivo págs. 4 y 6; zonas pág. 8; 70 intersecciones pág. 16; 41 accesos pág. 21; 6 tramos pág. 32; 9 alternativas págs. 5 y 32; alternativa recomendada págs. 5 y 39; 32 lotes pág. 47; puentes pág. 48; costo y TIR pág. 5; VAN cuadro 11-5 pág. 56; tres etapas pág. 63; imagen pág. 31" },

  "ampliacion-la-compania-rancagua": { n: 21, titulo: "Ampliación Avenida La Compañía", ciudad: "Rancagua", region: "O’Higgins", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2018", consultor: "Consorcio V&R – PRO 5", tipologia: "Eje urbano · Vialidad estructurante", etapa: "Alternativas, anteproyecto y evaluación social", tags: ["Vialidad urbana", "Ciclovías", "Anteproyecto", "Evaluación social"], objetivo: "Desarrollar a nivel de anteproyecto la ampliación de la Avenida La Compañía, parte de la cartera de proyectos prioritarios del Sistema de Transporte Urbano de la conurbación Rancagua – Machalí, orientada a mejorar la conectividad entre el centro y el sector nororiente de Rancagua.", desarrollo: ["El diagnóstico integró los ámbitos de transporte, infraestructura y urbano-ambiental del eje formado por La Compañía, Bello Horizonte y Eusebio Lillo, con mediciones de flujo peatonal en 16 intersecciones y de longitud de cola en 6, y talleres de participación ciudadana en noviembre de 2017 y enero de 2018.", "Las 4 alternativas preliminares, modeladas con SATURN y TRANSYT, no resultaron socialmente rentables, por lo que se analizaron variantes por tramos; sólo las alternativas 7 y 10 alcanzaron rentabilidad, con TIR de 10,1 % y 10,5 %.", "El anteproyecto se diseñó en la extensión original, entre Felipe Camiroaga y Las Torres, con doble calzada de dos pistas por sentido y mediana central en La Compañía y Eusebio Lillo, conexión por Bello Horizonte, ciclovías unidireccionales, facilidades para el transporte público y un nuevo estándar de aceras, arborización e iluminación; para la modelación y la evaluación se acotó por el norte hasta Av. El Sol."], resultado: "El anteproyecto evaluado resultó rentable en el largo plazo, con una inversión social de MM$14.287 ($ del 31 de diciembre de 2017), una TIR social de 6,1 % y un VAN de 115 MM$; analizado por tramos, el tramo sur, sobre Eusebio Lillo, alcanzó una TIR de 10,4 % con menor inversión.", cifras: [{ num: "6,1", unit: "%", label: "TIR social del anteproyecto" }, { num: "115", unit: "MM$", label: "VAN social del anteproyecto" }, { num: "4", unit: "", label: "alternativas preliminares evaluadas" }], imagen: "assets/img/estudios/21-ampliacion-la-compania-rancagua.jpg", imagen_alt: "Plano de Rancagua con el trazado del anteproyecto por La Compañía, Bello Horizonte y Eusebio Lillo, entre Felipe Camiroaga y Las Torres", pie: "Extensión del anteproyecto sobre la trama de Rancagua", fuente: "Informe Ejecutivo, «Ampliación Avenida La Compañía, Rancagua», SECTRA", pag: "objetivo pág. 5; mediciones pág. 9; diagnóstico pág. 10; talleres págs. 15 y 23; 4 alternativas pág. 16; no rentables págs. 22–23; alternativas 7 y 10 pág. 28; anteproyecto págs. 35, 39 y 58–59; inversión social, TIR y VAN cuadro 6-6 pág. 52 (moneda en cuadro 6-4, pág. 50); tramo sur cuadro 6-9 pág. 55; imagen pág. 35 (figura 5-6)" },

  "gestion-transito-arica": { n: 26, titulo: "Mejoramiento Gestión de Tránsito", ciudad: "Arica", region: "Arica y Parinacota", mandante: "Subsecretaría de Transportes – SECTRA", anio: "2018", consultor: "Consorcio IG – V&R", tipologia: "Gestión de tránsito", etapa: "Evaluación social e ingeniería de detalle", tags: ["Gestión de tránsito", "Transporte público", "Semaforización", "Movilidad peatonal"], objetivo: "Definir y evaluar un conjunto de medidas de gestión de tránsito, incluidas facilidades peatonales, con una visión global del área céntrica de Arica, junto con un proyecto de estacionamientos privados de acceso público y la normalización de las redes de semáforos.", desarrollo: ["Con mediciones de flujo en 80 intersecciones y una modelación conjunta en SATURN, TRANSYT y AIMSUN sobre un área céntrica de 5,4 km², se formularon iniciativas de gestión de tránsito, de transporte público y peatonales, se analizaron alternativas de localización para un estacionamiento de acceso público y se modelaron y evaluaron seis planes de gestión.", "El Plan Definitivo, acordado en el taller de enero de 2017, incluye entre otros la pista solo transporte público O'Higgins – Manuel Rodríguez, la calle vereda Arturo Prat, ensanches de veredas en el centro, el rediseño de Diego Portales y el traslado de rutas de taxis colectivos desde Baquedano a General Lagos.", "A ese plan se sumaron dos proyectos aislados fuera del área céntrica y la normalización de 17 intersecciones semaforizadas, todo desarrollado a nivel de ingeniería de detalle."], resultado: "Plan Definitivo con una inversión de $6.895,5 millones, una TIR social de 29,7 % y un VAN de MM$15.662 a una tasa social de 6,0 %: rentable en el corto y en el largo plazo.", cifras: [{ num: "29,7", unit: "%", label: "TIR social del plan definitivo" }, { num: "17", unit: "", label: "intersecciones semaforizadas a normalizar" }, { num: "6.895,5", unit: "MM$", label: "de inversión del plan de gestión" }], imagen: "assets/img/estudios/26-gestion-transito-arica.jpg", imagen_alt: "Vista aérea del centro de Arica con los proyectos del Plan Definitivo de gestión de tránsito, peatonales y de transporte público", pie: "Bosquejo del Plan Definitivo sobre imagen aérea", fuente: "Informe Ejecutivo, «Mejoramiento Gestión de Tránsito Arica», SECTRA", pag: "objetivo y 5,4 km² pág. 5; modelos pág. 6; 80 intersecciones pág. 10; estacionamientos págs. 31–33; seis planes pág. 48; Plan Definitivo págs. 49 y 51; dos proyectos aislados pág. 52; 17 intersecciones y $6.895,5 millones pág. 88; TIR y VAN pág. 80; año: planos fechados en mayo de 2018, págs. 90–91; imagen pág. 50" },

  "ciclovias-san-fernando": {
    n: 2,
    titulo: "Plan Maestro de Ciclovías",
    ciudad: "San Fernando", region: "O'Higgins",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2025",
    consultor: "Consorcio V&R – PRO 5",
    tipologia: "Ciclovías · Movilidad activa",
    etapa: "Plan maestro y prediseño",
    tags: ["Ciclovías", "Plan maestro", "Participación ciudadana", "Prediseño"],
    objetivo: "Desarrollar un Plan Maestro de Ciclovías para San Fernando que fomente el uso de la bicicleta y aumente la participación de este modo de transporte.",
    desarrollo: [
      "El diagnóstico revisó el grado de ciclo-inclusión de la red vial, incluyendo sus facilidades y las dificultades para una circulación eficiente y segura.",
      "Las alternativas se construyeron como una red de nodos y arcos, con rutas mínimas entre hitos urbanos, y se contrastaron con las propuestas del Consejo de la Sociedad Civil.",
      "La participación ciudadana incluyó una cicletada participativa en el Parque Abel Bouchon."
    ],
    resultado: "El plan definitivo añade 99 km de ciclovías de alto estándar a la red existente e identifica ejes prioritarios por 51 km, desarrollados a nivel de prediseño.",
    cifras: [
      { num: "99", unit: "km", label: "de ciclovías en el plan definitivo" },
      { num: "51", unit: "km", label: "de ejes prioritarios en prediseño" },
      { num: "46.588", unit: "MM$", label: "de inversión privada del plan priorizado" }
    ],
    imagen: "assets/img/estudios/02-ciclovias-san-fernando.jpg",
    imagen_alt: "Fotomontaje de una calle de San Fernando con una ciclovía azul y una persona en bicicleta",
    pie: "Calle de San Fernando con la ciclovía propuesta (fotomontaje del estudio)",
    fuente: "Informe Ejecutivo, «Diagnóstico Plan Maestro de Ciclovías, Comuna de San Fernando», SECTRA",
    pag: "objetivo pág. 11; 99 km y 51 km pág. 8; red de nodos y arcos pág. 37; COSOC pág. 38; inversión pág. 84; cicletada pág. 122; imagen pág. 82"
  },

  "ciclovias-arica": {
    n: 5,
    titulo: "Actualización del Plan Maestro de Ciclovías",
    ciudad: "Arica", region: "Arica y Parinacota",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2025",
    consultor: "Consorcio V&R – PRO 5",
    tipologia: "Ciclovías · Movilidad activa",
    etapa: "Plan maestro y prediseño",
    tags: ["Ciclovías", "Plan maestro", "Encuestas", "Participación ciudadana"],
    objetivo: "Actualizar el Plan Maestro de Ciclovías de Arica para fomentar el uso de la bicicleta y aumentar su participación en los viajes habituales de la ciudad.",
    desarrollo: [
      "El plan anterior, de 2013, proponía 61,2 km, de los cuales se habían ejecutado 5,8 km. La actualización incorporó además los nuevos manuales de diseño y la Ley N° 21.088.",
      "El levantamiento incluyó un vuelo fotogramétrico con ortofotomosaico, una encuesta a usuarios de bicicleta con 1.132 respuestas en temporada normal y el análisis de accidentes.",
      "Los trazados se trabajaron con algoritmos de rutas óptimas y ejercicios participativos con la ciudadanía."
    ],
    resultado: "El Plan Definitivo añade 95 km de ciclovías de alto estándar a la red existente e identifica un conjunto de ejes prioritarios para avanzar a la etapa de diseño.",
    cifras: [
      { num: "95", unit: "km", label: "de ciclovías en el Plan Definitivo" },
      { num: "1.132", unit: "", label: "encuestas en temporada normal" },
      { num: "5,8", unit: "km", label: "ejecutados del plan anterior" }
    ],
    imagen: "assets/img/estudios/05-ciclovias-arica.jpg",
    imagen_alt: "Lámina de síntesis del Plan Maestro de Ciclovías de Arica, con la red propuesta sobre el plano de la ciudad",
    pie: "Plan Definitivo y Priorizado: lámina de síntesis",
    fuente: "Informe Ejecutivo, «Actualización Plan Maestro de Ciclovías Arica», SECTRA",
    hero_pos: "center 20%",
    pag: "plan 2013 y ley pág. 6; objetivo y ejes prioritarios pág. 8; vuelo pág. 13; encuesta pág. 15; rutas óptimas pág. 26; 95 km pág. 53; imagen pág. 7"
  },

  "interconexion-alto-centro-copiapo": {
    n: 6,
    titulo: "Mejoramiento de la interconexión vial Sector Alto – Centro",
    ciudad: "Copiapó", region: "Atacama",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2024",
    consultor: "Consorcio V&R – PRO 5",
    tipologia: "Vialidad · Conectividad urbana",
    etapa: "Prefactibilidad, anteproyecto y evaluación social",
    tags: ["Paso a desnivel", "Ciclovías", "Espacio público", "Evaluación social"],
    objetivo: "Desarrollar los análisis de prefactibilidad y factibilidad para mejorar la conectividad entre el Sector Alto y el Centro de Copiapó, iniciativa proveniente del Plan Maestro de Transporte de la ciudad.",
    desarrollo: [
      "El diagnóstico identificó el efecto de barrera de Av. Circunvalación y de la línea férrea, además de discontinuidades viales asociadas a la topografía.",
      "Se formularon 9 alternativas conceptuales y 5 pasaron a prediseño. La definitiva surgió de la evaluación social, un análisis multicriterio y un proceso multisectorial con participación ciudadana.",
      "El anteproyecto considera un paso a desnivel entre Av. Henríquez y calle Andacollo, en 4,5 km de proyecto vial, con 0,8 km de ciclovías nuevas, 2.600 m² de paisajismo y 36 cruces peatonales mejorados."
    ],
    resultado: "La primera evaluación dio una TIR de 5,0 %, bajo el mínimo exigido. Un rediseño del paso inferior y de la plataforma vial llevó el proyecto a una TIR de 6,6 % y un VAN de MM$ 2.206 (moneda de diciembre de 2023, solución en hormigón).",
    cifras: [
      { num: "4,5", unit: "km", label: "de proyecto vial" },
      { num: "9", unit: "", label: "alternativas conceptuales formuladas" },
      { num: "6,6", unit: "%", label: "TIR social del anteproyecto rediseñado" }
    ],
    imagen: "assets/img/estudios/06-interconexion-alto-centro-copiapo.jpg",
    imagen_alt: "Planta del anteproyecto sobre imagen aérea de Copiapó, con la apertura de Andacollo, el mirador y el complejo deportivo",
    pie: "Apertura de Andacollo y su entorno: planta del anteproyecto",
    fuente: "Informe Ejecutivo, «Mejoramiento Interconexión Vial Sector Alto Centro, Copiapó», SECTRA",
    pag: "diagnóstico, alternativas y anteproyecto pág. 1; evaluación y rediseño pág. 2; consorcio y fechas pág. 4; imagen pág. 74"
  },

  "circunvalacion-ancud": {
    n: 11,
    titulo: "Mejoramiento de la Circunvalación Centro",
    ciudad: "Ancud", region: "Los Lagos",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2022",
    consultor: "Consorcio V&R – PRO 5",
    tipologia: "Vialidad · Eje urbano",
    etapa: "Prefactibilidad, anteproyecto y evaluación social",
    tags: ["Par vial", "Ciclovías", "Paisajismo", "Evaluación social"],
    objetivo: "Desarrollar los análisis de prefactibilidad y factibilidad para conformar una circunvalación céntrica en Ancud que conecte las zonas norte y sur de la comuna.",
    desarrollo: [
      "El diagnóstico identificó la falta de conectividad norte–sur, una trama irregular con calles discontinuas y pendientes pronunciadas, y el tránsito de camiones de gran tonelaje por el paso de la Ruta 5.",
      "Se analizaron tres alternativas mediante evaluación social, análisis multicriterio y un proceso de decisión multisectorial con participación ciudadana.",
      "El anteproyecto conforma un par vial en 3,4 km, con 1,7 km de ciclovías, 5.400 m² de paisajismo y 171 árboles nuevos, además de veredas con accesibilidad universal y nuevos paraderos."
    ],
    resultado: "Con una inversión privada de MM$ 13.090 en dos etapas, el proyecto resultó socialmente rentable, con una TIR de 7,4 % y un VAN de MM$ 1.751 (moneda de diciembre de 2021, solución en hormigón), y se recomendó su avance a ingeniería de detalle.",
    cifras: [
      { num: "3,4", unit: "km", label: "de proyecto vial" },
      { num: "1,7", unit: "km", label: "de ciclovías proyectadas" },
      { num: "7,4", unit: "%", label: "TIR social del anteproyecto" }
    ],
    imagen: "assets/img/estudios/11-circunvalacion-ancud.jpg",
    imagen_alt: "Fotomontaje de una calle de Ancud con calzada renovada, luminarias y veredas",
    pie: "Calle de Ancud con el proyecto (fotomontaje del estudio)",
    fuente: "Informe Ejecutivo, «Mejoramiento Circunvalación Centro, Ciudad de Ancud», SECTRA",
    pag: "objetivo, diagnóstico, anteproyecto y evaluación pág. 1; recomendación pág. 2; consorcio y fechas pág. 4; imagen pág. 29"
  },

  "costanera-chinchorro-arica": {
    n: 15,
    titulo: "Mejoramiento de la Costanera y conexiones al sector Playa Chinchorro",
    ciudad: "Arica", region: "Arica y Parinacota",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2022",
    consultor: "Consorcio V&R – PRO 5",
    tipologia: "Costanera · Borde costero",
    etapa: "Prefactibilidad, anteproyecto y evaluación social",
    tags: ["Borde costero", "Ciclovías", "Conexiones peatonales", "Evaluación social"],
    objetivo: "Desarrollar los análisis de prefactibilidad y factibilidad para mejorar la Costanera de Arica entre el acceso al puerto y la intersección con Av. Santiago Arata, consolidando tres iniciativas del Plan Maestro de Transporte Urbano.",
    desarrollo: [
      "El diagnóstico identificó deficiencias de conectividad transversal por pendientes y vías férreas, estacionamientos en calzada, baja accesibilidad al transporte público y falta de estándares de diseño urbano.",
      "Se analizaron cinco alternativas mediante evaluación social, análisis multicriterio y un proceso de decisión multisectorial con participación ciudadana.",
      "El anteproyecto abarca 7,8 km de proyecto vial, con 6,3 km de ciclovías, 62.000 m² de nuevas veredas y nuevas conexiones peatonales con el borde costero."
    ],
    resultado: "Con una inversión privada de MM$ 62.702, el proyecto resultó socialmente rentable, con una TIR de 6,05 % y un VAN de MM$ 257 (moneda de diciembre de 2021, solución en hormigón).",
    cifras: [
      { num: "7,8", unit: "km", label: "de proyecto vial" },
      { num: "6,3", unit: "km", label: "de ciclovías proyectadas" },
      { num: "6,05", unit: "%", label: "TIR social del anteproyecto" }
    ],
    imagen: "assets/img/estudios/15-costanera-chinchorro-arica.jpg",
    imagen_alt: "Esquema del proyecto sobre el plano de la costanera de Arica, con el perfil vial, la vialidad para modos activos y las conexiones transversales",
    pie: "Esquema general del proyecto en la Costanera de Arica",
    fuente: "Informe Ejecutivo, «Mejoramiento Costanera Sector Portuario y Conexiones al Sector Playa Chinchorro, Arica», SECTRA",
    pag: "objetivo, diagnóstico y anteproyecto pág. 1; inversión y evaluación pág. 2; consorcio y fechas pág. 4; imagen pág. 27"
  },

  "terminal-rodoviario-punta-arenas": {
    n: 23,
    titulo: "Nuevo terminal rodoviario",
    ciudad: "Punta Arenas", region: "Magallanes",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2018",
    consultor: "Inversiones y Asesorías V&R Ltda.",
    tipologia: "Transporte público · Terminal",
    etapa: "Prefactibilidad",
    tags: ["Terminal", "Transporte interurbano", "Modelo de negocio", "Evaluación social"],
    objetivo: "Realizar la evaluación técnica y económica de un nuevo terminal rodoviario en Punta Arenas, para los servicios rurales e interurbanos de pasajeros, conforme a las proyecciones de demanda.",
    desarrollo: [
      "El diagnóstico revisó el funcionamiento de los servicios y terminales existentes y la demanda esperada a mediano y largo plazo.",
      "Se compararon cinco localizaciones por accesibilidad y condicionantes del terreno. Los talleres participativos definieron que sólo los servicios rurales de largo alcance se reubicarían.",
      "El estudio incluyó el perfil arquitectónico de cada emplazamiento, la evaluación social y el análisis del modelo de negocio."
    ],
    resultado: "Los dos emplazamientos evaluados en forma definitiva resultaron socialmente rentables. En calle El Retiro, con un terreno de 2,75 ha, se obtuvo una TIR de 10,0 % y un VAN de MM$ 1.787; el estudio advierte que ese predio está en un área potencialmente inundable.",
    cifras: [
      { num: "10,0", unit: "%", label: "TIR social en El Retiro" },
      { num: "2,75", unit: "ha", label: "de terreno en El Retiro" },
      { num: "4.808", unit: "MM$", label: "de inversión social en El Retiro" }
    ],
    imagen: "assets/img/estudios/23-terminal-rodoviario-punta-arenas.jpg",
    imagen_alt: "Planta del terminal en el terreno de calle El Retiro, con andenes, edificio y estacionamientos junto a Av. Presidente Bulnes",
    pie: "Emplazamiento de calle El Retiro: planta del terminal",
    fuente: "Informe Ejecutivo, «Construcción Nuevo Terminal Rodoviario, Punta Arenas (Prefactibilidad)», SECTRA",
    pag: "objetivo y consultor pág. 5; localizaciones pág. 15; escenarios pág. 22; terreno pág. 37; evaluación El Retiro págs. 55 y 57; conclusiones e inundación págs. 64 y 65; imagen pág. 42"
  },

  "scat-linares": {
    n: 24,
    titulo: "Análisis e implementación de un SCAT",
    ciudad: "Linares", region: "Maule",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2017",
    consultor: "Consorcio V&R – IIG",
    tipologia: "Gestión de tránsito · SCAT",
    etapa: "Proyecto de ingeniería y evaluación social",
    tags: ["SCAT", "Semáforos", "Gestión de tránsito", "Evaluación social"],
    objetivo: "Desarrollar el proyecto técnico de ingeniería y la evaluación social de un Sistema de Control Automatizado de Tránsito para las intersecciones semaforizadas de Linares.",
    desarrollo: [
      "El estudio revisó el estado de los semáforos en operación y justificó los nuevos cruces que se integrarían al sistema.",
      "El proyecto considera 54 semáforos y 7 concentradores de comunicaciones conectados al centro de control ubicado en Talca.",
      "Los sistemas complementarios incluyen 9 cámaras de supervisión, 4 estaciones de conteo vehicular y 2 letreros de mensajería variable, además de los proyectos de sincronismo y seguridad vial."
    ],
    resultado: "Con una inversión privada de $2.767.718.770, el proyecto resultó socialmente rentable, con una TIR de 10,5 % y un VAN de MM$ 960 (moneda de diciembre de 2016).",
    cifras: [
      { num: "54", unit: "", label: "semáforos en el sistema" },
      { num: "9", unit: "", label: "cámaras de supervisión de tránsito" },
      { num: "10,5", unit: "%", label: "TIR social del proyecto" }
    ],
    imagen: "assets/img/estudios/24-scat-linares.jpg",
    imagen_alt: "Imagen aérea de Linares con los semáforos del sistema marcados en rojo",
    pie: "Semáforos en la ciudad de Linares sobre imagen aérea",
    fuente: "Informe Ejecutivo, «Análisis e Implementación de un SCAT en la Ciudad de Linares», SECTRA",
    pag: "objetivo, consorcio y sistema pág. 5; inversión y evaluación pág. 6; semáforos existentes pág. 32; imagen pág. 34"
  },

  "eje-bueras-valdivia": {
    n: 25,
    titulo: "Mejoramiento del eje Bueras y conexión con Av. Francia",
    ciudad: "Valdivia", region: "Los Ríos",
    mandante: "Subsecretaría de Transportes – SECTRA",
    anio: "2017",
    consultor: "Consorcio V&R – IIG",
    tipologia: "Vialidad · Eje urbano",
    etapa: "Prefactibilidad, anteproyecto y evaluación social",
    tags: ["Eje urbano", "Transporte público", "Modelación", "Evaluación social"],
    objetivo: "Mejorar la comunicación entre el sur y el centro de Valdivia, la accesibilidad a las actividades del entorno y la operación del transporte público urbano.",
    desarrollo: [
      "A inicios de 2016, el mandante reorientó el estudio hacia el mejoramiento del eje Aníbal Pinto, entre Bueras y Lord Cochrane.",
      "Las alternativas se modelaron con iteración SATURN–TRANSYT, optimizando las redes de semáforos en cada escenario.",
      "En febrero de 2017 la contraparte técnica ratificó la alternativa 2A para desarrollarla como anteproyecto, procurando minimizar las expropiaciones."
    ],
    resultado: "El anteproyecto resultó socialmente rentable, con una TIR de 14,9 % y un VAN de MM$ 3.401 (moneda de diciembre de 2016, solución en hormigón). Se mantuvo rentable en las sensibilidades analizadas, incluso con un aumento de 40 % en la inversión.",
    cifras: [
      { num: "14,9", unit: "%", label: "TIR social del anteproyecto" },
      { num: "3.401", unit: "MM$", label: "de VAN social" },
      { num: "40", unit: "%", label: "de aumento de inversión tolerado" }
    ],
    imagen: "assets/img/estudios/25-eje-bueras-av-francia-valdivia.jpg",
    imagen_alt: "Imagen aérea de Valdivia con el trazado del anteproyecto sobre el eje Aníbal Pinto, entre Cochrane y Santiago Bueras",
    pie: "Eje Aníbal Pinto: trazado del anteproyecto sobre imagen aérea",
    fuente: "Informe Ejecutivo, «Mejoramiento Eje Bueras y Conexión con Avenida Francia, Valdivia», SECTRA",
    hero_pos: "center 40%",
    pag: "reorientación y objetivo pág. 5; SATURN-TRANSYT pág. 39; alternativa 2A pág. 41; evaluación pág. 69; sensibilidad pág. 70; imagen pág. 56. El informe no nombra al consultor: consorcio según la Biblioteca Digital de Transportes y el Formulario 3 MOP"
  }

};
