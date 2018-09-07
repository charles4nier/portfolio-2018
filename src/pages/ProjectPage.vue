<template>
  <main id="project-page">
    <div id="canvas-container" ref="canvasContainer">
    </div>
    <ProjectContainer :dataProject="dataProject" :showProjectDetail="projectDetails"/>
    <!-- <Carousel :dataProject="dataProject"/> -->
  </main>
</template>

<script>
import dataProject from '../constants/dataProject'
import HoverEffect from '../assets/jsModules/Hover'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'

import ProjectContainer from '../components/ProjectContainer'

export default {
  name: 'App',
  data () {
    return {
      dataProject,
      projectDetails: [],
      hoverEffect: null,
      lastSrc: '',
      lastKey: null,
      openMenu: false,
      animMenu: null,
      projectActive: null,
      aboutActive: null
    }
  },
  components: {
    'ProjectContainer': ProjectContainer
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
        this.projectActive = true
        this.aboutActive = false
      } else {
        this.projectActive = false
        this.aboutActive = true
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
  },
  created() {
    this.initData(null)
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
