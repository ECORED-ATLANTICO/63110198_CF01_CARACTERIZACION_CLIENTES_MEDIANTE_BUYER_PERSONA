<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Variables de segmentación

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/1.png", alt="" data-aos="fade-up")
      .col-lg-7
        p Las variables de segmentación constituyen los criterios específicos que permiten organizar el mercado en grupos de consumidores con características comunes.
        p Su adecuada selección facilita comprender la diversidad del mercado y fortalecer los procesos de identificación de clientes potenciales.  
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 En este capítulo se abordarán las variables demográficas, geográficas, psicográficas y conductuales, así como sus características y aplicación dentro de los procesos de segmentación comercial. 
    
    .bg-slider.p-4.mb-4
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 Variables demográficas 
            p Las variables demográficas agrupan características generales de la población que permiten organizar el mercado y reconocer diferencias entre grupos de consumidores. Constituyen uno de los primeros referentes de la segmentación, ya que facilitan la identificación de clientes potenciales con características semejantes. 
            p.mb-4.mb-lg-0 Permiten describir aspectos generales de los consumidores y establecer agrupaciones para el análisis comercial. Aunque por sí solas no explican completamente su comportamiento, sirven como punto de partida para el perfilamiento comercial. Algunos ejemplos son edad, género, nivel educativo y ocupación. 
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/2.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 Variables geográficas 
            p Las variables geográficas permiten organizar el mercado considerando la ubicación de los consumidores y las características del entorno donde desarrollan sus actividades. Facilitan reconocer diferencias entre regiones, ciudades, zonas y otros espacios geográficos. 
            p.mb-4.mb-lg-0 Su análisis permite comprender condiciones particulares de cada territorio, como clima, infraestructura, distribución poblacional y actividad económica, factores que pueden generar diferentes necesidades y oportunidades comerciales. 
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/3.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 Variables psicográficas 
            p Las variables psicográficas permiten comprender aspectos relacionados con la forma de pensar, intereses, estilos de vida, valores y preferencias de los consumidores. Estas variables ayudan a explicar por qué personas con características demográficas o geográficas similares pueden tomar decisiones diferentes. 
            p.mb-4.mb-lg-0 Su análisis fortalece el conocimiento del cliente potencial al incorporar elementos que influyen en su manera de percibir el entorno y relacionarse con productos o servicios, complementando las demás variables de segmentación. 
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/4.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h5 Variables conductuales 
            p Las variables conductuales permiten analizar el comportamiento de los consumidores frente a productos, servicios y procesos de compra. Facilitan la identificación de patrones relacionados con la manera en que interactúan con el mercado. 
            p.mb-4.mb-lg-0 Su estudio aporta información sobre acciones observables, hábitos, respuestas y formas de interacción, permitiendo reconocer comportamientos comunes entre grupos de clientes y complementar el análisis demográfico, geográfico y psicográfico para lograr una visión más integral de la segmentación. 
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/4.png", alt="")

    separador
    
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Características

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/5.png", alt="" data-aos="fade-up")
      .col-lg-9
        p Las variables de segmentación presentan características que permiten diferenciarlas y comprender el aporte específico que realizan al análisis del mercado. Aunque cada una aborda dimensiones distintas del consumidor, todas comparten el propósito de facilitar la organización de la información y fortalecer la identificación de grupos con características comunes.  
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 Estas variables son complementarias entre sí. Mientras unas describen aspectos generales de la población, otras permiten comprender el entorno, las preferencias o el comportamiento del consumidor. Su utilización conjunta proporciona una visión más amplia del mercado y favorece la construcción de segmentos con mayor utilidad para la toma de decisiones comerciales. 

    .fullwidth-bg.fullwidth-bg--1
    
    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 11.
          span Características generales de las variables de segmentación
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            thead
              tr(style="background-color: #E4FFFB")
                th Variable
                th(colspan="3") Característica principal
            tbody
              tr(style="background-color: #FFFFFF")
                td #[strong Demográficas] 
                td(colspan="3") Describen características generales de la población y facilitan una primera organización del mercado. 
              tr(style="background-color: #E9EEF5")
                td #[strong Geográficas] 
                td(colspan="3") Consideran el entorno territorial donde se desarrolla la actividad del consumidor. 
              tr(style="background-color: #FFFFFF")
                td #[strong Psicográficas] 
                td(colspan="3") Permiten comprender preferencias, intereses y estilos de vida presentes en los diferentes grupos de consumidores. 
              tr(style="background-color: #E9EEF5")
                td #[strong Conductuales] 
                td(colspan="3") Analizan comportamientos observables relacionados con la interacción del cliente frente al mercado. 

    .row.justify-content-center
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/7.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Ninguna variable explica por sí sola el comportamiento del consumidor; su verdadero valor surge cuando se analizan de manera complementaria. 

    separador
    
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Aplicación

    img(data-aos="fade-up")(src="@/assets/curso/tema7/8.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow-sm.bg-secundario-s5
          p.mb-0 La aplicación de las variables de segmentación consiste en utilizarlas de manera integrada para organizar el mercado y apoyar la identificación de clientes potenciales. Su empleo permite estructurar la información comercial con criterios consistentes y facilita la comprensión de las diferencias existentes entre los distintos grupos de consumidores. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-terciario-t10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/9.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 En contexto. 
              p Una empresa dedicada a la comercialización de equipos para energías renovables deseaba identificar nuevas oportunidades de negocio en el sector empresarial.  
              p Para ello integró variables demográficas relacionadas con el tamaño de las organizaciones, variables geográficas asociadas con la ubicación de las plantas de producción, variables psicográficas vinculadas al interés por la sostenibilidad y variables conductuales derivadas del comportamiento observado durante las visitas comerciales.  
              p.mb-0 La combinación de estas variables permitió construir segmentos más representativos y facilitó la identificación de clientes potenciales con mayor afinidad hacia la oferta de la empresa. 
    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/10.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Aplicar todas las variables de segmentación de la misma manera en cualquier organización. La selección de variables debe responder a los objetivos comerciales y a las características particulares del mercado analizado. 
    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p.mb-0 Comprender las diferencias entre las personas no debe conducir a la exclusión, sino al reconocimiento de la diversidad. En el ámbito comercial, segmentar implica analizar con objetividad y respeto las características del mercado para ofrecer soluciones pertinentes y generar relaciones basadas en la confianza. 


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
