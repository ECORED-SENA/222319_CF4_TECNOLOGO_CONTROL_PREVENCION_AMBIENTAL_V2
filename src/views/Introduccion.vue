<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/intro/img1.svg', style="width: 50px").m-auto
      .col
        p.mb-0 Aquí comienza el estudio del componente formativo “Toma de muestras de agua y suelo según protocolos y técnicas de análisis”. Se le invita a visualizar con atención el video que se muestra a continuación, como primer paso en este recorrido. ¡Adelante!
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zA4bYCvMHJs" title="Toma de muestras de agua y suelo según protocolos y técnicas de análisis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Toma de muestras de agua y suelo según protocolos y técnicas de análisis.
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
