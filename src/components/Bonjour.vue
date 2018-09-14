<template>
  <section class="bonjour-container container" :class="{'second-page': !secondPage}">
    <div class="main-bonjour">
      <p>Bonjour, je suis <span class="strong">Charles Fournier</span>, développeur front-end freelance à Paris.</p>
    </div>
    <div class="sub-bonjour">
      <p>Spécialisé dans <span class="strong">l'intégration et le design d'interface utilisateur</span>, je réalise des sites internet en restant fidèle aux maquettes.
      </p>
      <p>A l'écoute, je vous <span class="strong">conseille et vous accompagne</span> dans la réalisation de vos projets digitaux.</p>

    </div>
  </section>
</template>    

<script>
  export default {
    name:'Bonjour',
    props: ['secondPage'],
  }
</script>
