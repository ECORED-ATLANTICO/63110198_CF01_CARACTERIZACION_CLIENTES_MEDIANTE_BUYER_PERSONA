export default {
  global: {
    Name: 'Inteligencia del cliente',
    Description:
      'Este componente formativo desarrolla los fundamentos para la identificación de clientes potenciales mediante el análisis del comportamiento del consumidor, la segmentación de mercados, el perfilamiento comercial, el mercado objetivo, la prospectación y la estrategia comercial, proporcionando bases conceptuales para la toma de decisiones comerciales fundamentadas. ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
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
        titulo: 'Comportamiento del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores internos y externos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de decisión de compra',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Hábitos de consumo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tendencias de consumo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clientes potenciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Necesidades',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Motivaciones',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Intereses',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Comportamiento de compra',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Categorización de clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Variables de clasificación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipologías de prospectos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Técnicas de categorización',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Perfilamiento comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Importancia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Atributos del perfil comercial',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Análisis de comportamiento del cliente',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fuentes de información del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de fuentes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Recolección de información',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Interpretación de datos del consumidor',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Importancia',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Objetivos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Criterios de segmentación',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Proceso de segmentación',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Variables de segmentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Características',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Aplicación',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Mercado objetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Tipos de mercado',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Nichos de mercado',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Selección de públicos objetivos',
            hash: 't_8_4',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Prospectación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Concepto',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Objetivos',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Estrategias',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Métodos de identificación de prospectos',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Criterios de priorización',
            hash: 't_9_5',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Estrategia comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Concepto',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Objetivos comerciales',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Relación entre segmentación y estrategias comerciales',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Oportunidades de mercado',
            hash: 't_10_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis comercial',
      significado:
        'Proceso de interpretación de información para apoyar decisiones relacionadas con clientes y mercados.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Persona u organización con características compatibles para establecer una relación comercial.',
    },
    {
      termino: 'Comportamiento de compra',
      significado:
        'Conjunto de acciones y decisiones que realiza un cliente potencial antes, durante y después de adquirir un producto o servicio.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'Estudio de las acciones y factores que influyen en las decisiones de compra.',
    },
    {
      termino: 'Criterios de priorización',
      significado:
        'Condiciones utilizadas para valorar y ordenar clientes potenciales según su afinidad, información disponible, potencial comercial y relación con los objetivos de la organización.',
    },
    {
      termino: 'Estrategia comercial',
      significado:
        'Conjunto de decisiones orientadas al logro de objetivos comerciales mediante el conocimiento del mercado.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'Medios utilizados para obtener datos relacionados con los clientes potenciales y el mercado.',
    },
    {
      termino: 'Hábitos de consumo',
      significado:
        'Patrones recurrentes relacionados con la forma, frecuencia, momento o condiciones en que los consumidores adquieren y utilizan productos o servicios.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Grupo de clientes potenciales seleccionado para orientar las acciones comerciales de la organización.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'Grupo específico de consumidores dentro de un mercado que comparte características, necesidades o intereses particulares.',
    },
    {
      termino: 'Oportunidad de mercado',
      significado:
        'Situación identificada en el entorno comercial que puede ser aprovechada por una organización para atender necesidades del mercado y alcanzar sus objetivos comerciales.',
    },
    {
      termino: 'Perfilamiento comercial',
      significado:
        'Proceso de análisis de atributos y características de clientes potenciales para apoyar decisiones comerciales.',
    },
    {
      termino: 'Proceso de decisión de compra',
      significado:
        'Secuencia mediante la cual el consumidor reconoce una necesidad, busca información, evalúa alternativas y toma una decisión respecto a la adquisición de un producto o servicio.',
    },
    {
      termino: 'Prospectación comercial',
      significado:
        'Proceso de identificación y priorización de clientes potenciales con afinidad hacia la oferta comercial.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'Proceso de organización del mercado en grupos con características comunes para facilitar su análisis.',
    },
    {
      termino: 'Variables de segmentación',
      significado:
        'Criterios utilizados para clasificar consumidores según características demográficas, geográficas, psicográficas y conductuales.',
    },
  ],
  referencias: [
    {
      referencia:
        'HubSpot. (s. f.). <em>What is a buyer persona? (Examples and template)</em>.',
      link: 'https://blog.hubspot.com/marketing/buyer-persona-research',
    },
    {
      referencia:
        'Salesforce España. (2024). <em>¿Qué es un perfil de cliente ideal?</em>',
      link: 'https://www.salesforce.com/es/blog/ideal-customer-profile/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (1988). <em>Identificación y segmentación de mercados</em> (Serie Senafad. Mercadeo; 2M). Repositorio Institucional SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/979',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2026). <em>El proceso de la venta</em> [Material de formación].',
      link: 'https://zajuna.sena.edu.co/pdfs/campesena/El%20proceso%20de%20la%20venta-%20digital2.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (s. f.). <em>Marketing digital: Consumidores y segmento objetivo, buyer persona e investigación básica de mercados digitales</em>.',
      link: 'https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Ventas/632201/Contenido/OVA/CF5/index.html',
    },
    {
      referencia:
        'Shopify. (2024). <em>Perfil de cliente ideal: Cómo definir sus características y cómo crearlo</em>.',
      link: 'https://www.shopify.com/es/blog/15731000-define-el-perfil-del-cliente-ideal-de-tu-tienda-virtual',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
