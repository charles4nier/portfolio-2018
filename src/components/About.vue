<template>
  <main id="about-container">
    <h1>charles fournier</h1>
    <section>
      <div class="background-container">
        <div class="about-background"></div>
        <div class="about-background"></div>
        <div class="about-background"></div>
      </div>
      <router-view></router-view>
    </section>
    <nav class="about-nav">
      <ul>
        <li class='active'><router-link to="bonjour">01</router-link></li>
        <li class='active'><router-link to="competences">02</router-link></li>
        <li class='active'><router-link to="test">03</router-link></li>
      </ul>
      <p><img src="../assets/images/scroll-arrow.svg" alt="flèches pour indiquer le scroll"/>Scroller pour naviguer</p>
    </nav>
  </main>
</template>

<script>
import Bonjour from './Bonjour'

export default {
  name: 'About',
  components: {
    'Bonjour': Bonjour
  }
}
</script>

