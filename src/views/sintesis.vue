<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El Componente Formativo Inteligencia del cliente ofrece al aprendiz los fundamentos conceptuales necesarios para comprender cómo las organizaciones identifican clientes potenciales mediante el análisis del comportamiento del consumidor, la utilización de fuentes de información, la categorización de clientes, el perfilamiento comercial y la segmentación del mercado. Estos conocimientos permiten interpretar las características de los consumidores y reconocer oportunidades que apoyan la toma de decisiones dentro de los procesos comerciales.

    p.mb-5 Asimismo, el componente integra los conceptos de mercado objetivo, prospectación y estrategia comercial como elementos que orientan la identificación y priorización de clientes potenciales. De esta manera, el aprendiz fortalece su capacidad para analizar información comercial, comprender la relación entre los diferentes procesos estudiados y construir una base sólida para el perfilamiento estratégico de clientes mediante metodologías de #[em buyer persona].
    

    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="El componente formativo Inteligencia del cliente, desarrolla principios y conceptos claves, tales como: comportamiento del consumidor, clientes potenciales, categorización de clientes, perfilamiento comercial, fuentes de información del cliente, segmentación de mercados, variables de segmentación, mercado objetivo, prospectación comercial y estrategia comercial. Cada unidad desarrolla criterios, variables, procesos y estrategias para comprender al cliente y orientar las decisiones comerciales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
