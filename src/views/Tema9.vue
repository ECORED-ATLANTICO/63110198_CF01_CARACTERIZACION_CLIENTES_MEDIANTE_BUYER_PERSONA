<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Prospectación comercial

    img(data-aos="fade-up", src="@/assets/curso/tema9/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-2
          p.mb-0 La prospectación comercial constituye el proceso mediante el cual las organizaciones identifican, analizan y priorizan clientes potenciales con posibilidades de establecer una relación comercial.
          
    .bg-primario-p5.rounded-4.p-4.py-3.mb-4
      p.mb-0 Este proceso representa un puente entre el conocimiento del mercado y el desarrollo de acciones comerciales, permitiendo orientar los esfuerzos hacia oportunidades con mayor afinidad respecto a los objetivos de la organización.  

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema9/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este capítulo se abordarán el concepto, los objetivos, las estrategias, los métodos de identificación de prospectos y los criterios de priorización comercial. 


    separador
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.1 Concepto

    img(data-aos="fade-up", src="@/assets/curso/tema9/3.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-2
          p.mb-0 La prospectación comercial corresponde al proceso mediante el cual una organización identifica clientes potenciales que presentan características compatibles con su oferta y con sus objetivos comerciales. Este proceso se fundamenta en el análisis de la información del mercado y constituye una etapa esencial para orientar los esfuerzos comerciales hacia oportunidades con mayor posibilidad de desarrollo. 

    .row.justify-content-center.z-2
      .col-xl-10
        .tarjeta.bg-secundario-s5.p-4.py-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure.position-relative
                img.imgw-90(src="@/assets/curso/tema1/4.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Prospección de clientes 
                  p.mb-0 Lo invitamos a consultar el siguiente video, en el que encontrará #[strong recomendaciones prácticas para la prospección de clientes], orientadas al análisis de clientes potenciales, la planificación de estrategias comerciales y el seguimiento de oportunidades de negocio. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=50E2sAVgx5c" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    separador
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.2 Objetivos

    p.mb-5 La prospectación comercial permite orientar de manera organizada la búsqueda y valoración de posibles clientes. Para ello, contribuye a identificar oportunidades, estructurar la información disponible, establecer prioridades y fundamentar las decisiones comerciales. 

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-4.d-none.d-lg-block
        figure
          img.imgw-324.mb-4.mb-lg-0(src='@/assets/curso/tema9/4.png', alt='')
      .col-lg-8
        SlyderF(columnas="col-xl-6")
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema9/5.png' alt='')
            h5.mb-4.text-center Identificar oportunidades 
            p.mb-0 Permite reconocer clientes potenciales cuyas características, necesidades o intereses presentan afinidad con la oferta de la organización. Esta identificación constituye el punto de partida para enfocar las acciones comerciales hacia oportunidades pertinentes. 
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema9/6.png' alt='')
            h5.mb-4.text-center Organizar la información
            p.mb-0 Facilita estructurar y clasificar los datos obtenidos durante el análisis del mercado y de los clientes potenciales. Una información organizada favorece su consulta, actualización y utilización durante el proceso comercial. 
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema9/7.png' alt='')
            h5.mb-4.text-center Priorizar esfuerzos
            p.mb-0 Permite orientar el tiempo, los recursos y las acciones comerciales hacia las oportunidades que presentan mayor potencial. De esta manera, la organización puede concentrar sus esfuerzos de prospectación de acuerdo con criterios previamente establecidos. 
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema9/8.png' alt='')
            h5.mb-4.text-center Apoyar decisiones
            p.mb-0 Contribuye a planificar las actividades comerciales a partir de información objetiva sobre los clientes potenciales y las oportunidades identificadas. Esto proporciona mayores elementos para definir acciones de contacto, seguimiento y gestión comercial. 

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-125.mb-4.mb-lg-0(src="@/assets/curso/tema10/4.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 ¿Sabía que...? 
              p.mb-0 En muchas organizaciones, la prospectación representa el punto de encuentro entre el análisis del mercado y el inicio de las actividades comerciales. Por ello, su calidad influye directamente en la eficiencia del proceso comercial posterior. 

    separador
    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.3 Estrategias

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Las estrategias de prospectación comercial corresponden al conjunto de acciones organizadas que una empresa desarrolla para identificar y acercarse a clientes potenciales de manera planificada. Estas estrategias permiten orientar los esfuerzos comerciales hacia grupos previamente analizados, favoreciendo la identificación de oportunidades y fortaleciendo la gestión comercial.  
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 La selección de una estrategia depende de los objetivos comerciales, de las características del mercado y de la información obtenida durante los procesos de segmentación y perfilamiento. Cuando existe coherencia entre estos elementos, las organizaciones incrementan la efectividad de la prospectación y optimizan la utilización de sus recursos comerciales. 
      
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Ruta para la prospectación comercial 

    p.mb-5.z-2 La prospectación comercial integra diferentes acciones que permiten reconocer y gestionar oportunidades de negocio. Recorra la ruta para identificar sus principales momentos.

    .fullwidth-bg.fullwidth-bg--4
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 5.
      span Ruta para la prospectación comercial
    img.mb-5.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema9/10-mob.png", alt="La infografia presenta el proceso de prospectación comercial en siete etapas. Inicia con el análisis del mercado, continúa con la identificación de oportunidades y la definición de estrategias. Posteriormente, muestra tres acciones: organización de la información de clientes potenciales, priorización de oportunidades y acercamiento comercial. Finalmente, presenta la prospectación comercial como la integración de información y acciones para gestionar oportunidades y generar resultados comerciales.")
    img.z-2.mb-5.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema9/10.png", alt="La infografia presenta el proceso de prospectación comercial en siete etapas. Inicia con el análisis del mercado, continúa con la identificación de oportunidades y la definición de estrategias. Posteriormente, muestra tres acciones: organización de la información de clientes potenciales, priorización de oportunidades y acercamiento comercial. Finalmente, presenta la prospectación comercial como la integración de información y acciones para gestionar oportunidades y generar resultados comerciales.")

    .bg-adicional.rounded-4.p-4.py-3.mb-5.z-2
      p.mb-0 Este proceso permite orientar los esfuerzos comerciales hacia oportunidades previamente identificadas, organizadas y priorizadas.

    .row.justify-content-center.z-2
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/7.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica
            p.mb-0 Una estrategia de prospectación es efectiva cuando orienta el trabajo comercial hacia oportunidades previamente analizadas y no hacia mercados abordados de manera indiscriminada. 


    separador
    #t_9_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.4 Métodos de identificación de prospectos

    img(data-aos="fade-up", src="@/assets/curso/tema9/11.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-2
          p.mb-0 Los métodos de identificación de prospectos corresponden a los procedimientos utilizados por las organizaciones para reconocer clientes potenciales que presentan características compatibles con sus objetivos comerciales, estos métodos permiten organizar la búsqueda de oportunidades y fortalecer la calidad del proceso de prospectación. La identificación de prospectos requiere analizar la información disponible sobre el mercado y establecer procedimientos que faciliten reconocer aquellos clientes con mayor afinidad respecto a la oferta comercial. Su aplicación contribuye a disminuir esfuerzos innecesarios y mejora la eficiencia del trabajo desarrollado por el equipo comercial. 

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 13.
          span Métodos generales para la identificación de prospectos
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            thead
              tr(style="background-color: #E4FFFB")
                th Método
                th(colspan="3") Finalidad
            tbody
              tr(style="background-color: #FFFFFF")
                td #[strong Análisis del mercado]
                td(colspan="3") Permite reconocer grupos con características compatibles con los objetivos comerciales. 
              tr(style="background-color: #E9EEF5")
                td #[strong Organización de la información]
                td(colspan="3") Facilita estructurar los datos obtenidos durante la prospectación.   
              tr(style="background-color: #FFFFFF")
                td #[strong Comparación de características]
                td(colspan="3") Favorece la identificación de clientes potenciales con mayor afinidad hacia la oferta comercial. 
              tr(style="background-color: #E9EEF5")
                td #[strong Priorización inicial]
                td(colspan="3")  Permite preparar el proceso de valoración de las oportunidades comerciales identificadas. 

    .row.justify-content-center
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/10.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Identificar prospectos únicamente por el interés inicial manifestado. La identificación debe fundamentarse en el análisis de las características del cliente potencial y su correspondencia con los objetivos comerciales de la organización. 

    separador
    #t_9_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.5 Criterios de priorización

    p.mb-5 La priorización de clientes potenciales permite orientar los esfuerzos comerciales hacia las oportunidades más pertinentes. Para ello, pueden considerarse diferentes criterios relacionados con el cliente y con los objetivos de la organización. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider-2.p-4.mb-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5 Afinidad con la oferta
              p.mb-0 Permite identificar clientes cuyas características y necesidades se relacionan con los productos o servicios ofrecidos. 
            div
              h5 Información disponible
              p.mb-0 Facilita valorar cuánto se conoce sobre el cliente potencial antes de iniciar acciones comerciales. 
            div
              h5 Potencial comercial
              p.mb-0 Ayuda a reconocer oportunidades con mayores posibilidades de desarrollo dentro del proceso comercial. 
            div
              h5 Objetivos organizacionales
              p.mb-0 Permite priorizar clientes de acuerdo con las metas y prioridades comerciales definidas por la organización.  

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-terciario-t10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/9.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 En contexto
              p Una empresa dedicada a la comercialización de maquinaria para la industria alimentaria había identificado más de cien clientes potenciales durante una feria empresarial. Sin embargo, su equipo comercial contaba con recursos limitados para realizar seguimiento a todos ellos de manera simultánea.
              p.mb-0 Para organizar el trabajo estableció criterios de priorización relacionados con la afinidad entre las necesidades del cliente y su portafolio, la información recopilada durante los encuentros comerciales, el potencial de desarrollo de cada oportunidad y los objetivos comerciales definidos para el trimestre. Gracias a esta organización, el equipo concentró inicialmente sus esfuerzos en las oportunidades con mayor probabilidad de avanzar dentro del proceso comercial. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo
              p.mb-0 Administrar adecuadamente las prioridades es una expresión de responsabilidad profesional. En el ámbito comercial, priorizar con criterios objetivos permite utilizar los recursos de manera ética, transparente y orientada a generar valor tanto para la organización como para sus clientes. 


</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
