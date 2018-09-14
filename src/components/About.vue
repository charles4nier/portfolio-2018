<template>
  <main id="about-container" :class="{'second-page': secondPage}" @wheel="test">
    <h1>charles fournier</h1>
    <section>
      <div class="background-container">
        <div class="about-background"></div>
        <div class="about-background"></div>
        <div class="about-background"></div>
      </div>
      <Bonjour :secondPage="secondPage"/>
      <Competences :secondPage="secondPage"/>
    </section>
    <nav class="about-nav">
      <ul>
        <li :class="{'active': !secondPage}"><router-link to="bonjour">01</router-link></li>
        <li :class="{'active': secondPage}"><router-link to="competences">02</router-link></li>
      </ul>
      <p><img src="../assets/images/scroll-arrow.svg" alt="flèches pour indiquer le scroll"/>Scroller pour naviguer</p>
    </nav>
    <nav class="bottom-nav">
      <ul>
        <li class="port-container">
          <router-link class="portfolio-link" to="/projet/superjoli" data-hover="portfolio"><span>portfolio</span></router-link>
        </li>
        <li class="contact-container">
          <p>Contact</p>
          <a href="mailto:charles.4nier@gmail.com?Subject=Hello%20again" target="_top">charles.4nier@gmail.com</a>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
import Bonjour from './Bonjour'
import Competences from './Competences'

export default {
  name: 'About',
  data () {
    return {
      secondPage: false
    }
  },
  methods: {
    test: function () {
      this.secondPage = !this.secondPage
    }
  },
  components: {
    'Bonjour': Bonjour,
    'Competences': Competences
  }
}
</script>

