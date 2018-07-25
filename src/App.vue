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
    <div id="canvas-container" ref="canvasContainer">
     <!--  <canvas></canvas> -->
    </div>
    <router-view :dataProject='dataProject'/>
  </div>
</template>

<script>
import dataProject from './constants/dataProject'
import HoverEffect from './assets/jsModules/Hover'

export default {
  name: 'App',
  data () {
    return {
      dataProject: dataProject,
      projectDetails: [],
      hoverEffect: null,
      lastSrc: ''
    }
  },
  methods: {
    initProjectDetails: function (callback) {
      console.log('init')
      let regex = /(superjoli|bamboo-step|ik-music|learn-eat)/
      let currentPathname = this.$route.path
      let projectName = ''

      if (currentPathname.match(regex)) {
        projectName = currentPathname.match(regex)[1]
      }

      this.projectDetails = this.dataProject.filter(item => item.name === projectName)
      console.log(this.projectDetails[0].src)

      if (callback) {
        callback(this.lastSrc, this.projectDetails[0].src)
      }

      this.lastSrc = this.projectDetails[0].src
    },
    initCanvas: function (callback) {
      this.initProjectDetails(null)

      this.hoverEffect = HoverEffect({
        parent: this.$refs.canvasContainer,
        easing: undefined,
        image1: this.projectDetails[0].src,
        image2: this.projectDetails[0].src,
        displacementImage: this.projectDetails[0].disp
      })
    }
  },
  mounted () {
    this.initCanvas(null, null)
  },
  watch: {
    '$route' (to, from) {
      this.initProjectDetails(this.hoverEffect.anim)
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
