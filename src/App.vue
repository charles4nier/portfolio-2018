<template>
  <div id="app">
    <router-view :dataProject='dataProject'/>
    <nav id="main-nav">
      <li>
        <router-link to="/a-propos">A propos</router-link>
      </li>
      <li>
        <router-link to="/projet/superjoli">Projets</router-link>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </nav>
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
