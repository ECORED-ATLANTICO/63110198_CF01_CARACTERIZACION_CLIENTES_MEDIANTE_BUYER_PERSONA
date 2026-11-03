<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fuentes de información del cliente

    img(data-aos="fade-up", src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 La identificación de clientes potenciales y la construcción de perfiles comerciales dependen de la calidad de la información disponible, por ello, las organizaciones recurren a diferentes fuentes que les permiten conocer mejor las características, necesidades y comportamientos de sus clientes.  
          
    .bg-contenido-a5.rounded-4.p-4.py-3
      p.mb-0 En este capítulo se estudiarán los conceptos, tipos, procesos de recolección e interpretación de la información del consumidor como fundamento para la toma de decisiones comerciales. 

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Las fuentes de información del cliente corresponden al conjunto de medios mediante los cuales una organización obtiene datos relacionados con las características, necesidades, intereses y comportamientos de sus clientes potenciales.  
        .bg-primario-p10.p-4.rounded-4.py-3.mb-3
          p.mb-0 Estas fuentes constituyen el punto de partida para comprender el mercado y desarrollar procesos de segmentación, categorización y perfilamiento comercial fundamentados en información pertinente. Las fuentes de información no generan conocimiento por sí mismas.
        p.mb-0 Su verdadero valor depende de la capacidad de la organización para recopilar, organizar e interpretar adecuadamente los datos obtenidos, transformándolos en información útil para apoyar la gestión comercial y fortalecer el conocimiento del mercado. 

    .row.justify-content-center
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/7.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Las decisiones comerciales son tan sólidas como la calidad de la información que las respalda. 

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos de fuentes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p Las organizaciones obtienen información de diferentes tipos de fuentes, las cuales pueden aportar perspectivas complementarias sobre los clientes potenciales. La selección adecuada de estas fuentes favorece la construcción de perfiles comerciales más completos y facilita el análisis del mercado desde distintos enfoques. Cada tipo de fuente aporta información con características particulares.
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Algunas permiten conocer directamente al cliente mediante la interacción comercial, mientras que otras ofrecen información proveniente del entorno, del mercado o de registros previamente disponibles. La combinación de diferentes fuentes mejora la calidad del análisis y fortalece la comprensión del comportamiento del consumidor. 
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 9.
          span Tipos generales de fuentes de información del cliente 
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th Tipo de fuente
                th(colspan="3") Descripción
            tbody
              tr(style="background-color: #FFFFFF")
                td #[strong Información obtenida del cliente]
                td(colspan="3") Proviene directamente de la interacción con los clientes potenciales durante los procesos comerciales. 
              tr(style="background-color: #E9EEF5")
                td #[strong Información organizacional]
                td(colspan="3") Corresponde a registros, documentos y bases de datos disponibles dentro de la organización. 
              tr(style="background-color: #FFFFFF")
                td #[strong Información del entorno]
                td(colspan="3") Se obtiene mediante la observación del mercado, competidores y comportamiento general de los consumidores. 
              tr(style="background-color: #E9EEF5")
                td #[strong Información documental]
                td(colspan="3") Procede de estudios, informes y otras fuentes utilizadas para complementar el conocimiento del mercado. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/10.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Considerar que una única fuente de información es suficiente para comprender al cliente potencial. En realidad, la combinación de diferentes fuentes proporciona un análisis más completo y disminuye el riesgo de tomar decisiones basadas en información parcial. 

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Recolección de información

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La recolección de información es un proceso organizado que permite obtener los datos necesarios para comprender una situación, caracterizar clientes o mercados y disponer de información útil para la toma de decisiones comerciales.  
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 Este proceso parte de una necesidad concreta y avanza mediante etapas sucesivas en las que se determina qué información se requiere, cómo obtenerla y de qué manera organizarla para facilitar su posterior análisis.

    .fullwidth-bg.fullwidth-bg--4
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        PasosA.color-primario(tipo="n")
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Necesidad de información 
              p.mb-4.mb-lg-0 El proceso inicia con la identificación de una necesidad de información asociada a una situación, problema u oportunidad comercial. En esta etapa se establece qué se necesita conocer y para qué se utilizará la información. Una definición clara de la necesidad permite orientar las etapas posteriores y evitar la recopilación de datos que no aporten al propósito establecido.
            .col-4.col-sm-3.col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
          .row.align-items-center.justify-content-center
            .col-4.col-sm-3.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema5/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h3 Definición de datos requeridos 
              p.mb-0 Una vez identificada la necesidad, se determinan los datos necesarios para atenderla. Estos pueden relacionarse con características de los clientes, necesidades, preferencias, hábitos de consumo, ubicación, capacidad de compra, comportamiento comercial u otras variables pertinentes. La selección debe responder al propósito definido y establecer con claridad qué información resulta relevante para el análisis. 
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Obtención de información 
              p.mb-4.mb-lg-0 En esta etapa se recopilan los datos definidos mediante fuentes y mecanismos apropiados. La información puede proceder de registros internos, bases de datos, sistemas de gestión de relaciones con clientes (CRM), encuestas, entrevistas, observación, estudios de mercado u otras fuentes disponibles. Es importante procurar que los datos obtenidos sean pertinentes, suficientes, confiables y acordes con la necesidad de información identificada.
            .col-4.col-sm-3.col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema5/7.png", alt="" data-aos="zoom-in-down")
          .row.align-items-center.justify-content-center
            .col-4.col-sm-3.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema5/8.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h3 Organización de los datos 
              p.mb-0 Los datos recopilados deben clasificarse, depurarse y estructurarse para facilitar su consulta y procesamiento. Esto implica identificar información incompleta, duplicada o inconsistente, así como agrupar los datos según las variables o categorías establecidas. Una adecuada organización contribuye a convertir datos dispersos en información estructurada y preparada para su utilización.
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Disponibilidad para el análisis 
              p.mb-4.mb-lg-0 El proceso culmina cuando la información se encuentra organizada y disponible para ser analizada. En esta etapa, los datos pueden emplearse para identificar patrones, establecer relaciones, caracterizar clientes, reconocer oportunidades y sustentar decisiones comerciales. La información preparada adecuadamente constituye un insumo para transformar los datos recopilados en conocimiento útil para la organización.
            .col-4.col-sm-3.col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema5/9.png", alt="" data-aos="zoom-in-down")
 
    img(data-aos="fade-up", src="@/assets/curso/tema5/10.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-contenido-a5.mb-3
          p.mb-0 La recolección de información no consiste únicamente en acumular datos. Cada etapa cumple una función específica para asegurar que la información responda a una necesidad previamente identificada y pueda utilizarse posteriormente en el análisis. Seguir una secuencia organizada favorece la calidad de los datos y proporciona una base más sólida para comprender el mercado y fundamentar las decisiones comerciales. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-primario-p5.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema10/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p Una empresa dedicada a la comercialización de equipos para cafeterías participó en una feria empresarial con el propósito de identificar nuevos clientes potenciales. Antes del evento definió qué información necesitaba recopilar: tipo de establecimiento, capacidad de producción, interés en nuevos equipos y principales necesidades operativas.
              p.mb-0 Gracias a esta planificación obtuvo información homogénea de todos los visitantes, facilitando posteriormente la organización de los datos y la construcción de perfiles comerciales para el equipo de ventas. 

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Interpretación de datos del consumidor

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La interpretación de datos del consumidor consiste en analizar la información recopilada para identificar patrones, relaciones y características que contribuyan a comprender el comportamiento de los clientes potenciales. Este proceso transforma los datos organizados en conocimiento útil para apoyar la segmentación, el perfilamiento comercial y la identificación de oportunidades de mercado. 
        .bg-secundario-s10.p-4.rounded-4.py-3
          p.mb-0 La interpretación constituye el puente entre la información recopilada y la acción comercial. Cuando los datos son analizados de manera estructurada, la organización fortalece su capacidad para comprender el mercado, identificar clientes potenciales y orientar sus estrategias hacia segmentos con mayores posibilidades de éxito. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/10.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Confundir interpretar datos con describir información. La interpretación implica establecer relaciones, identificar patrones y extraer conclusiones útiles para comprender al cliente potencial, mientras que la descripción solo presenta los datos obtenidos. 

    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p.mb-0 La información del cliente representa una responsabilidad antes que un privilegio. Interpretarla con objetividad, respeto y criterio profesional fortalece la confianza entre las organizaciones y las personas, favoreciendo decisiones comerciales fundamentadas en principios éticos y no únicamente en intereses económicos. 


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
