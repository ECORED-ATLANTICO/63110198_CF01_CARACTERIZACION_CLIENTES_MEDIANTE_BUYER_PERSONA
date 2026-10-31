<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comportamiento del consumidor


    img(data-aos="fade-up", src="@/assets/curso/tema1/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 El comportamiento del consumidor constituye uno de los pilares del mercadeo moderno, ya que permite comprender cómo las personas toman decisiones relacionadas con la adquisición de productos o servicios.

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Analizar sus necesidades, motivaciones, hábitos y procesos de compra facilita a las organizaciones diseñar estrategias comerciales más efectivas y establecer relaciones de mayor valor con sus clientes. Por esta razón, el estudio del consumidor representa una actividad permanente dentro de los procesos de investigación y planificación comercial. 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-7
        p El comportamiento del consumidor corresponde al conjunto de acciones, decisiones y procesos mediante los cuales las personas identifican una necesidad, buscan información, evalúan alternativas y finalmente adquieren o rechazan un producto o servicio.
        .bg-primario-p5.p-4.rounded-4.mb-4.mb-lg-0.py-3
          p.mb-0 Este comportamiento responde a múltiples variables que interactúan entre sí y que permiten comprender por qué diferentes consumidores reaccionan de manera distinta frente a una misma oferta comercial. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/3.png", alt="")

    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .tarjeta.bg-secundario-s5.p-4.py-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure.position-relative
                img.imgw-90(src="@/assets/curso/tema1/4.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Comportamiento del consumidor 
                  p.mb-0 Lo invitamos a consultar el siguiente video del Ecosistema de Recursos Educativos Digitales del SENA, que explica la importancia de conocer el consumidor, identificar segmentos de mercado y comprender el público objetivo como base para el diseño de estrategias comerciales. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=dhSD-ndBs6g" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-125.mb-4.mb-lg-0(src="@/assets/curso/tema10/4.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 ¿Sabía que...? 
              p.mb-0 Diversos estudios muestran que comprender el comportamiento del consumidor permite anticipar cambios en las preferencias del mercado y mejorar la efectividad de las estrategias comerciales. Las organizaciones que analizan permanentemente a sus clientes toman decisiones más acertadas sobre productos, comunicación y mercados objetivo (Kotler & Keller, 2022). 

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Factores internos y externos

    img(data-aos="fade-up", src="@/assets/curso/tema1/5.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-terciario-t5.mb-3
          p.mb-0 El comportamiento del consumidor está influenciado por múltiples factores que actúan de manera simultánea durante el proceso de decisión de compra. Algunos provienen del propio individuo, como sus necesidades, motivaciones o experiencias, mientras que otros corresponden al entorno social, económico y cultural en el que desarrolla sus actividades. Comprender esta interacción permite interpretar con mayor precisión las razones que explican las decisiones de consumo. 

    .row.justify-content-center.cursor-pointer.z-2
      .col-sm-9.col-lg-6.col-xl-5.mb-4.mb-xl-0
        .crd_hover_txt
          .indicador--hover
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/6.png", alt="")
          .crd_hover_txt--body
            h4.mb-4 Los factores internos están relacionados con las características personales del consumidor
            p.mb-0 Aspectos como la personalidad, las percepciones, los intereses, los conocimientos y las experiencias previas influyen directamente en la forma como cada persona interpreta la información disponible y selecciona un producto o servicio. Debido a ello, dos consumidores expuestos a la misma oferta comercial pueden tomar decisiones completamente diferentes. 
      .col-sm-9.col-lg-6.col-xl-5.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/7.png", alt="")
          .crd_hover_txt--body
            h4.mb-4 Los factores externos corresponden a las condiciones del entorno que influyen sobre el comportamiento de compra
            p.mb-0 La familia, los grupos sociales, la cultura, la situación económica, la publicidad y las tendencias del mercado son algunos elementos que pueden modificar las preferencias del consumidor. Analizar estos factores facilita la construcción de estrategias comerciales más ajustadas al contexto en el que participan los clientes. 

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Proceso de decisión de compra

    p.mb-5.z-2 El proceso de decisión de compra describe las etapas que recorre un consumidor desde el momento en que identifica una necesidad hasta la evaluación posterior a la adquisición de un producto o servicio. Comprender este proceso permite interpretar cómo se construyen las decisiones de consumo y facilita el diseño de estrategias comerciales que respondan oportunamente a las expectativas del mercado. 

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.mb-5.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/7.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Comprender simultáneamente los factores internos y externos permite interpretar el comportamiento del consumidor desde una perspectiva integral y desarrollar estrategias comerciales más pertinentes. 

    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 1.
      span Etapas del proceso de decisión de compra
    img.mb-5.z-2(data-aos="fade-up", src="@/assets/curso/tema1/8.png", alt="La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.")

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema10/8.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Pregunta de reflexión 
              p.mb-0 ¿En cuál etapa del proceso de decisión de compra considera que una empresa tiene mayores posibilidades de influir positivamente en el consumidor?  

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Hábitos de consumo

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-7
        p Los hábitos de consumo corresponden a los comportamientos que los consumidores desarrollan de manera recurrente al adquirir productos o servicios. Estos hábitos se construyen a partir de experiencias previas, preferencias personales y condiciones del entorno, convirtiéndose en un elemento fundamental para comprender la dinámica del mercado y anticipar comportamientos futuros. 
        .bg-primario-p5.p-4.rounded-4.mb-4.mb-lg-0.py-3
          p.mb-0 El análisis de los hábitos de consumo permite identificar patrones relacionados con la frecuencia de compra, los canales preferidos, los horarios de adquisición, las categorías de productos más demandadas y los factores que influyen en la elección de determinadas marcas. Esta información facilita la segmentación de mercados y contribuye al diseño de estrategias comerciales orientadas a públicos específicos. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/9.png", alt="")

    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema10/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p.mb-0 Una empresa dedicada a la comercialización de alimentos para mascotas observó que muchos clientes realizaban compras mensuales coincidiendo con las fechas de pago de salarios. A partir de esta información desarrolló campañas promocionales en esos periodos, ajustó la disponibilidad de inventario y fortaleció los canales digitales para facilitar la compra recurrente. Estas acciones permitieron incrementar la frecuencia de compra y mejorar la satisfacción de los consumidores. 

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Tendencias de consumo

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-9
        p Las tendencias de consumo corresponden a los cambios progresivos en las preferencias, expectativas y comportamientos de los consumidores frente a los productos, servicios y experiencias ofrecidos por las organizaciones. 
        .bg-primario-p5.p-4.rounded-4.mb-3.py-3
          p.mb-0 Estas tendencias reflejan transformaciones económicas, sociales, tecnológicas, culturales y ambientales que modifican la forma como las personas toman decisiones de compra y se relacionan con las marcas. Las tendencias no deben interpretarse como comportamientos permanentes, sino como manifestaciones que evolucionan de acuerdo con las condiciones del contexto.  
        p.mb-4.mb-lg-0 Algunas permanecen durante largos periodos, mientras que otras responden a fenómenos coyunturales. Por ello, las organizaciones requieren analizar continuamente la información proveniente de sus clientes y del entorno para identificar cuáles tendencias representan oportunidades reales para su mercado objetivo. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/10.png", alt="")

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Principales tendencias que influyen en el comportamiento del consumidor 
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th Tendencia 
                th(colspan="3") Descripción
            tbody
              tr(style="background-color: #FFFFFF")
                td #[strong Digitalización del consumo]
                td(colspan="3") Los consumidores utilizan cada vez más canales digitales para buscar información, comparar alternativas y realizar compras. 
              tr(style="background-color: #E9EEF5")
                td #[strong Consumo responsable]
                td(colspan="3") Los clientes valoran productos y servicios que evidencian prácticas sostenibles, responsabilidad social y compromiso ambiental. 
              tr(style="background-color: #FFFFFF")
                td #[strong Personalización]
                td(colspan="3") Los consumidores esperan ofertas ajustadas a sus necesidades, intereses y características individuales durante la experiencia comercial. 
              tr(style="background-color: #E9EEF5")
                td #[strong Búsqueda de experiencias]
                td(colspan="3") La decisión de compra incorpora elementos emocionales y de valor agregado que trascienden las características funcionales del producto. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-adicional.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p.mb-0 La integridad en el análisis del consumidor consiste en comprender a las personas para generar valor y satisfacer sus necesidades, nunca para manipular sus decisiones. Las estrategias comerciales sostenibles se construyen sobre el respeto, la transparencia y el compromiso con el cliente.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
