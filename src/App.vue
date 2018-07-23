<template>
  <div id="app">
    <nav id="main-nav">
      <button id="button-main-nav">
        <span></span>
      </button>
     <!--  <li>
        <router-link to="/a-propos">A propos</router-link>
      </li>
      <li>
        <router-link to="/projet/superjoli">Projets</router-link>
      </li>
      <li>
        <a href="">Contact</a>
      </li> -->
    </nav>
    <router-view :dataProject='dataProject'/>
  </div>
</template>

<script>
import dataProject from './constants/dataProject'

export default {
  name: 'App',
  data () {
    return {
      dataProject: dataProject
    }
  },
  watch: {
    '$route' (to, from) {
      alert('changement')
    }
  }
}
</script>

<style>
#app {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
