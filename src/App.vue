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
    </div>
    <router-view :dataProject="dataProject" :showProjectDetail="showProjectDetail"/>
  </div>
</template>

<script>
import dataProject from './constants/dataProject'
import HoverEffect from './assets/jsModules/Hover'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'

export default {
  name: 'App',
  data () {
    return {
      dataProject: dataProject,
      projectDetails: [],
      hoverEffect: null,
      lastSrc: '',
      lastKey: null
    }
  },
  methods: {
    initDirection: function (newDirection) {
      let key = Number(this.projectDetails[0].key)

      if ((key === 1 && this.lastKey === this.dataProject.length) || key > this.lastKey) {
        newDirection = 'next'
        if (this.lastKey === 1 && key === this.dataProject.length) {
          newDirection = 'previous'
        }
      } else {
        newDirection = 'previous'
      }

      return newDirection
    },

    initData: function (callback) {
      let regex = /(superjoli|bamboo-step|ik-music|learn-eat)/
      let currentPathname = this.$route.path
      let projectName = ''
      let direction = ''

      if (currentPathname.match(regex)) {
        projectName = currentPathname.match(regex)[1]
      }

      this.projectDetails = this.dataProject.filter(item => item.name === projectName)

      direction = this.initDirection(direction)

      if (callback) {
        callback(this.lastSrc, this.projectDetails[0].src, direction)
      }

      this.lastSrc = this.projectDetails[0].src
      this.lastKey = this.projectDetails[0].key
    },
    initCanvas: function (callback) {
      this.initData(null)

      this.hoverEffect = HoverEffect({
        parent: this.$refs.canvasContainer,
        easing: undefined,
        image1: this.projectDetails[0].src,
        image2: this.projectDetails[0].src,
        displacementImage: this.projectDetails[0].disp
      })
    },

    showProjectDetail: function (showDetail) {
      let tl = new TimelineMax()
      tl.to('.blue-calc', 0.3, {xPercent: 100})
        .to('#canvas-container', 1, {scale: 0.5, ease: Expo.easeInOut}, '-=.6')
        .to('#main-nav', .5, {scale: 0.5, ease: Expo.easeInOut }, '-=.5')
        .to('#project-description', .7, {scale: 0.5, ease: Expo.easeInOut}, '-=.7')
        .to('#see-more-container', .5, {scale: 0.5, ease: Expo.easeInOut}, '-=.5')
        .to('#project-nav-container button:first-child', .6, {scale: 0.5, ease: Expo.easeInOut}, '-=.5')
        .to('#see-more-container button:last-child', .6, {scale: 0.5}, '-=.6')
        .to('#project-detail-container', 0.5, {opacity: 1}, '-=.8')
        .to('.detail-row', 1.6, {yPercent: -50, opacity: 1, ease: Expo.easeOut},  '-=.9')
        .to('#project-description', .7, {xPercent: -30}, '-=2.3')
        // .to('#project-description', .5, {xPercent: -30}, '-=.4')
  

      tl.pause()

      if (showDetail === true) {
        tl.play()
      }  else {
        console.log('else')
        tl.reverse()
      }

      
    }
  },
  mounted () {
    this.initCanvas(null, null)
  },
  watch: {
    '$route' (to, from) {
      this.initData(this.hoverEffect.anim)
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
