export default {
  global: {
    componenteFormativo:
      'Toma de muestras de agua y suelo según protocolos y técnicas de análisis',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves de la caracterización del estado ambiental de una zona de estudio, en sus factores ambientales (agua, suelo, olores, ruido), como insumo del diagnóstico ambiental adecuado. Con su estudio, el aprendiz podrá afianzarse en procesos de toma de muestras, encaminadas a la obtención de información sobre las condiciones de calidad de un medio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Toma de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de unidades de medida',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características básicas de rotulado y envasado',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Capacitación del personal y seguridad y salud en el trabajo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Plan de muestreo y técnicas de muestreo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Métodos de aforo para determinación de caudales',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Toma de muestras de suelo',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Parámetros in situ para agua y suelo',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transporte y recepción de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Acondicionamiento, transporte y recepción de muestras de agua',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Transporte y recepción de muestras de suelo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cadena de custodia',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF4_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Departamento de orientación del territorio vivienda y medio ambiente gobierno vasco (1998).<em>Guía Metodológica Investigación de la contaminación del suelo – Toma de muestras.</em> ',
      link:
        'https://www.euskadi.eus/contenidos/documentacion/investigacion_cont_suelo/es_doc/adjuntos/01.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (1997). <em>Gestión ambiental. Calidad de suelo. Muestreo. Guía sobre técnicas de muestreo</em> (4113-2). ',
      link:
        'https://tienda.icontec.org/gp-gestion-ambiental-calidad-de-suelo-muestreo-guia-sobre-tecnicas-de-muestreo-ntc4113-2-1997.html',
    },
    {
      referencia:
        'Instituto de Investigaciones Marinas y Costeras José Benito Vives de Andréis (2003). <em>Manual de técnicas analíticas para la determinación de parámetros fisicoquímicos y contaminantes marinos. Aguas sedimentos y organismos.</em>',
      link:
        'http://www.invemar.org.co/redcostera1/invemar/docs/7010manualTecnicasanaliticas..pdf',
    },
    {
      referencia:
        'Instituto Nacional de Vías (2012). <em>Conservación y transporte de muestras de suelos</em> (E-103). ',
      link: 'https://www.da-lab.co/wp-content/uploads/2021/04/INV-103-13.pdf',
    },
    {
      referencia:
        'Resolución 2115 de 2007 [Ministerio de Protección Social y Ministerio de Ambiente Vivienda y Desarrollo Territorial]. Por medio del cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007 ',
    },
    {
      referencia:
        'Servicio nacional de aprendizaje (2013). <em>Manual de prácticas de campo y del laboratorio de suelos.</em>',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/2785/practicas_campo_laboratorio_suelos.pdf;jsessionid=4336C2265C7E26D38CEEC631C900D3D9?sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Aforo de caudal',
      significado:
        'cantidad de un fluido que atraviesa una sección en un determinado de tiempo es conocido como la tasa de flujo. En particular flujo volumétrico (Q) es el volumen de un fluido que circula en una sección por unidad de tiempo, y sus unidades son el m<sup>3</sup>/s.',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas.',
    },
    {
      termino: 'Característica',
      significado:
        'término usado para identificar elementos, compuestos, sustancias y microorganismos presentes en el agua para consumo humano.',
    },
    {
      termino: 'Cuerpos o cursos de agua',
      significado:
        'aquellos cauces o almacenamientos de agua como: arroyos, quebradas, ríos, lagos, lagunas, pantanos, humedales y acuíferos que conforman el sistema hidrográfico de una cuenca geográfica.',
    },
    {
      termino: 'Embalse',
      significado:
        'los embalses constituyen lagos o lagunas artificiales creados por el hombre para almacenar agua, usualmente con el propósito de generación de electricidad, aunque también para prestar otros servicios como control de caudales, inundaciones, abastecimiento de agua y para riego.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso de muestreo del sistema de suministro de agua para consumo humano, que cubre espacio, tiempo y frecuencia en los puntos concertados.',
    },
    {
      termino: 'Muestra',
      significado:
        'toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento.',
    },
    {
      termino: 'Perfil del suelo',
      significado:
        'exposición vertical de horizontes de un suelo individual que son el resultado de la edafogénesis durante el período de formación del suelo.',
    },
    {
      termino: 'Pozo',
      significado:
        'agujero o perforación excavado o taladrado en la tierra para extraer agua subterránea.',
    },
    {
      termino: 'Representatividad',
      significado:
        'lapso de 10 minutos, dentro de los cuales se toma la muestra y contramuestra de agua en el dispositivo instalado en el sitio de monitoreo, concertado entre vigilancia y control.',
    },
  ],
  complementario: [
    {
      tema: 'Conceptos básicos de unidades de medida',
      referencia:
        'Daniel Carreón (2020). <em>UNIDADES DE MEDIDA Super fácil - Para principiantes</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4e-dsOgOIrA',
    },
    {
      tema: 'Transporte y recepción de muestras',
      referencia:
        'Pensamiento ambiental (2016). <em>Transporte y manejo de residuos peligrosos de la norma {nfpa} - pensamiento ambiental (epa)</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Jkmq6PRsqgI',
    },
    {
      tema: 'Parámetros <em>in situ</em> para agua y suelo',
      referencia:
        'Litoral en acción (2019). <em>Toma de muestras para análisis de agua</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DInTpLJycJ0',
    },
    {
      tema: 'Toma de muestras de suelo',
      referencia:
        'Civitutor UAQ (2018). <em>Procedimiento Para Exploración y Muestreo de Suelos: Muestras alteradas e Inalteradas de Suelos</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zWplFBsC1tI',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Indutrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Indutrial',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco Jose Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey ',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
