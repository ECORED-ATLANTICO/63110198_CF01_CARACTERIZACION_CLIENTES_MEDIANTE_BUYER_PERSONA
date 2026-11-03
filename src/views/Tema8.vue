<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Mercado objetivo

    img(data-aos="fade-up", src="@/assets/curso/tema8/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 El mercado objetivo representa el grupo de consumidores hacia el cual una organización orienta sus esfuerzos comerciales, una vez ha analizado y segmentado el mercado.  

    .bg-contenido-a5.p-4.rounded-4
      p.mb-0 Su adecuada definición permite concentrar recursos en clientes potenciales con mayor afinidad hacia la oferta de valor de la empresa. En este capítulo se abordarán el concepto de mercado objetivo, los tipos de mercado, los nichos de mercado y la selección de públicos objetivos como fundamento para la identificación de oportunidades comerciales. 
    
    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Concepto

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema8/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El mercado objetivo corresponde al grupo de clientes potenciales que una organización selecciona para orientar sus acciones comerciales, considerando las características identificadas durante el proceso de segmentación, esta selección permite concentrar los esfuerzos organizacionales en consumidores que presentan mayor afinidad con la oferta de productos o servicios. 

    .row.justify-content-center
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/10.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Confundir mercado objetivo con mercado total. El mercado objetivo corresponde únicamente al grupo de consumidores seleccionado por la organización después del proceso de segmentación. 

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Tipos de mercado

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Los tipos de mercado representan diferentes formas de organizar los consumidores según características comunes relevantes para el análisis comercial. Su comprensión permite reconocer que no todos los mercados presentan las mismas condiciones y que las organizaciones deben adaptar sus procesos de identificación de clientes potenciales de acuerdo con las particularidades de cada contexto.  
        .bg-secundario-s10.p-4.rounded-4.py-3
          p.mb-0 El reconocimiento de los diferentes tipos de mercado fortalece el análisis comercial porque facilita comprender las características generales de los grupos de consumidores y favorece la selección del mercado objetivo. Este conocimiento constituye un apoyo para la planificación de estrategias comerciales coherentes con las condiciones del entorno. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Tipos de mercado y su utilidad en el análisis comercial 

    p.mb-5 Los mercados pueden diferenciarse según las características de quienes participan en ellos y las condiciones que determinan la demanda. Reconocer estos tipos permite comprender mejor a los posibles clientes, identificar oportunidades y orientar las decisiones comerciales. Consulte las siguientes tarjetas para conocer sus principales características. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider.p-4.mb-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5 Mercado de consumo
              p Está conformado por consumidores que adquieren productos o servicios para satisfacer necesidades personales o familiares. Su análisis permite reconocer características, preferencias y comportamientos que influyen en las decisiones de compra. 
              p.mb-0 #[strong Ejemplo:] personas que adquieren alimentos, prendas de vestir, dispositivos electrónicos o servicios de entretenimiento para uso personal. 
            div
              h5 Mercado organizacional 
              p Está integrado por organizaciones que demandan bienes o servicios para apoyar el desarrollo de sus actividades. Su análisis facilita comprender necesidades asociadas con los procesos, recursos y objetivos propios de cada organización. 
              p.mb-0 #[strong Ejemplo:] una empresa que adquiere equipos de cómputo, servicios de mantenimiento o soluciones tecnológicas para desarrollar sus operaciones. 
            div
              h5 Mercado especializado
              p Agrupa consumidores con características, intereses o necesidades particulares relacionadas con un sector o una oferta específica. Su identificación permite orientar las acciones comerciales hacia segmentos con requerimientos más definidos. 
              p.mb-0 #[strong Ejemplo:] consumidores interesados en productos especializados para actividades deportivas, profesionales o técnicas. 
            div
              h5 Mercado potencial
              p Reúne consumidores que presentan características o condiciones que podrían llevarlos a convertirse en clientes de la organización. Su análisis permite identificar nuevas oportunidades comerciales y orientar las acciones de prospectación. 
              p.mb-0 #[strong Ejemplo:] personas que cumplen con el perfil definido para un servicio, pero que todavía no lo han adquirido. 

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-125.mb-4.mb-lg-0(src="@/assets/curso/tema10/4.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 ¿Sabía que...? 
              p.mb-0 Una misma organización puede participar simultáneamente en diferentes tipos de mercado, siempre que adapte sus procesos comerciales a las características de cada grupo de consumidores. 

    separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 Nichos de mercado

    p.mb-5 Un nicho de mercado corresponde a un grupo específico de consumidores que comparte características, necesidades o intereses particulares dentro de un mercado más amplio. Su identificación permite a las organizaciones comprender segmentos con requerimientos específicos y orientar de manera más precisa sus acciones comerciales. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-terciario-t10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/9.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 En contexto. 
              p Una empresa dedicada a la comercialización de alimentos saludables participaba en el mercado de productos alimenticios en general. Después de analizar las características de sus consumidores identificó un grupo conformado por personas interesadas en alimentación natural, productos sin azúcar y estilos de vida saludables. 
              p.mb-0 Este grupo representó un nicho de mercado claramente diferenciado, permitiendo desarrollar una oferta comercial más especializada y una comunicación ajustada a sus intereses.  

    .row.justify-content-center
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4.py-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema10/8.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Pregunta de reflexión 
              p.mb-0 ¿Qué ventajas puede representar para una organización identificar un nicho de mercado antes de diseñar sus acciones comerciales? 

    separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.4 Selección de públicos objetivos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La selección de públicos objetivos consiste en determinar cuáles grupos de clientes potenciales presentan mayor afinidad con los objetivos comerciales de la organización. Esta decisión se fundamenta en la información obtenida durante la segmentación y en el análisis de las características del mercado, permitiendo orientar los esfuerzos comerciales hacia los grupos previamente definidos.  
        .bg-secundario-s10.p-4.rounded-4.py-3
          p.mb-0 Seleccionar un público objetivo no significa excluir a otros consumidores, sino priorizar aquellos grupos sobre los cuales la organización concentrará inicialmente sus acciones comerciales. Esta priorización favorece una mejor utilización de los recursos y fortalece la planificación de actividades dirigidas a clientes con mayor potencial de interés para la empresa.  
 
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 12.
          span Elementos considerados durante la selección de públicos objetivos 
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            thead
              tr(style="background-color: #E4FFFB")
                th Elemento
                th(colspan="3") Contribución al proceso
            tbody
              tr(style="background-color: #FFFFFF")
                td #[strong Información del mercado]
                td(colspan="3") Permite conocer las características de los diferentes grupos de consumidores identificados. 
              tr(style="background-color: #E9EEF5")
                td #[strong Segmentos definidos]
                td(colspan="3") Constituyen la base para seleccionar los grupos hacia los cuales se orientarán las acciones comerciales. 
              tr(style="background-color: #FFFFFF")
                td #[strong Objetivos comerciales]
                td(colspan="3") Orientan la priorización de los públicos más afines con los propósitos de la organización. 
              tr(style="background-color: #E9EEF5")
                td #[strong Afinidad con la oferta]
                td(colspan="3") Facilita reconocer los grupos que presentan mayor correspondencia con los productos o servicios ofrecidos. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p.mb-0 Toda decisión comercial implica elegir prioridades. Cuando esa elección se fundamenta en información objetiva y en el respeto por las necesidades de las personas, las organizaciones construyen relaciones más transparentes y sostenibles con sus clientes. 

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
