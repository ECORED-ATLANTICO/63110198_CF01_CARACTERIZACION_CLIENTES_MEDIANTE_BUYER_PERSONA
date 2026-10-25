<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Comprender el comportamiento del consumidor constituye el punto de partida para identificar clientes potenciales y orientar las estrategias comerciales hacia mercados con mayores oportunidades de éxito.
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-10.p-0
              p.mb-0 Este componente desarrolla los fundamentos relacionados con el análisis del consumidor, la segmentación de mercados, el perfilamiento comercial y la prospectación, como base para la caracterización estratégica de clientes potenciales.  
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro-1.png", alt="" data-aos="zoom-in-down")
        p.mb-0 El contenido será abordado mediante explicaciones conceptuales, ejemplos empresariales, casos aplicados y herramientas de análisis que permitirán relacionar los conceptos con situaciones reales del contexto organizacional. Este enfoque busca fortalecer la capacidad del aprendiz para interpretar información del mercado y apoyar la toma de decisiones comerciales fundamentadas en el conocimiento del cliente. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
