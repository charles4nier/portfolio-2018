<template>
  <section class="competence-container container" :class="{'second-page': secondPage}">
    <ul>
      <li v-for="item in liContent" :key="item.title" class="skill">
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.text}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Competences',
  props: ['secondPage'],
  data () {
    return {
      liContent: [
        {
          title: 'expérience utilisateur',
          text: 'En plaçant l\'utlisateur au centre de votre projet, je conçois des interfaces intuitives et créatives qui assurent une expérience agréable et facile.'
        },
        {
          title: 'développement front',
          text: 'Avec une approche "mobile first", je développe votre projet en respectant les meilleures pratiques et vous assure un rendu fidèle aux maquettes, adapté à tout support.'
        },
        {
          title: 'développement wordpress',
          text: 'Je mets en place votre back-office à l\'aide du CMS Wordpress, vous garantissant liberté et autonomie dans la gestion de votre site internet.'
        }
      ]
    }
  }
}
</script>
