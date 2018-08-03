<template>
  <div id="app">
    <button id="open-menu" @click="toggleMenu" v-bind:class="{ active: openMenu }">
      <span>menu</span>
    </button>
    <nav ref="mainNav" id="main-nav">
      <ul id="link-container">
        <li class="link" :class="{ active: aboutActive }">
          <router-link to="/accueil">Accueil</router-link>
        </li>
        <li class="link" :class="{ active: projectActive}">
          <router-link to="/projet/superjoli" @click.native="toggleMenu">Projets</router-link>
        </li>
        <li class="link external-link">
          <a href="https://www.linkedin.com/in/charles-fournier-856723121/" target="_blank">Linkedin</a>
        </li>
        <li class="link external-link">
          <a href="https://github.com/charles4nier" target="_blank">Github</a>
        </li>
        <li class="link" id="contact-container">
          <span>Contact</span>
          <ul>
            <li id="mail"><a>charles.4nier@gmail.com</a></li>
            <li id="phone"><a>06.98.48.36.58</a></li>
          </ul>
        </li>
      </ul>
      <div id="black-calc" @click="toggleMenu"></div>
    </nav>
    <div id="canvas-container" ref="canvasContainer">
    </div>
    <router-view :dataProject="dataProject" :showProjectDetail="showProjectDetail"/>
    <div class="blue-calc number-1"></div>
    <div class="blue-calc number-2"></div>
    <div class="blue-calc number-3"></div>
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
      lastKey: null,
      playAnimDetails: null,
      openMenu: false,
      animMenu: null,
      projectActive: null,
      aboutActive: null
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

    showProjectDetail: function (showDetail) {
      let tl = new TimelineMax()
      tl.to('#project-title span', 0.8, {yPercent: 100, ease: Expo.easeIn})
        // .to('.blue-calc', 0.6, {xPercent: 100, ease: Quad.easeInOut}, '-=.7')
        .to('#project-detail-container', 0.2, {opacity: 1}, '-=.3')
        .to('#project-detail-container .background-part', 0.6, {scaleX: 1, ease: Quad.easeInOut}, '-=.3')
        .to('#part-1', 0.8, {yPercent: -30, opacity: 1, ease: Expo.easeOut}, '-=.2')
        .to('.detail-row img', 1.4, {opacity: 1, ease: Expo.easeOut}, '-=.6')
        .to('#close-detail', 1, {yPercent: 500, opacity: 1, ease: Expo.easeOut}, '-=1.6')
        .to('#project-detail-title span', 1.2, {yPercent: -100, ease: Expo.easeOut}, '-=1.4')

      tl.pause()
      return tl
    },
    toggleMenu: function() {
      this.openMenu = !this.openMenu
    },
    menuAnimation: function () {
      let tl = new TimelineMax()
      tl.to('#link-container', .8, {xPercent: 100, ease: Quart.easeInOut})
        .to('#black-calc', 0.3, {opacity: 0.6}, '-=.5')
        .staggerTo('.link', 0.6, {opacity: 1, xPercent: 60, ease: Quad.easeOut}, '.13', '-=.7')
        .to('#phone', 0.6, {opacity: 1, yPercent: -30}, '-=0.2')
        .to('#mail', 0.6, {opacity: 1, yPercent: -30}, '-=0.6')

      tl.pause()
      return tl
    }
    // animCalc: function () {
    //   let tl = new TimelineMax()
    //   tl.to('.blue-calc.number-1', 0.5, {xPercent: 100, ease: Quad.easeInOut}, '+=.1')
    //   tl.to('.blue-calc.number-1', 0.4, {xPercent: 200, ease: Quad.easeInOut})
    //   tl.eventCallback('onComplete', () => {
    //     document.querySelector('.blue-calc.number-1').style.zIndex = -1
    //     tl.reverse()
    //     setTimeout(() => { document.querySelector('.blue-calc.number-1').style.zIndex = 0}, 1200)
    //   })
    // }
  },
  mounted () {
    this.initCanvas(null, null)
    this.playAnimDetails = this.showProjectDetail()
    this.animMenu = this.menuAnimation()
  },
  watch: {
    '$route' (to, from) {
      this.initData(this.hoverEffect.anim)
      // this.animCalc()
    },
    '$store.state.showDetails': function (newVal, oldVal) {
      if (newVal === true) {
        document.querySelector('#project-detail-container').style.zIndex = 10
        this.playAnimDetails.play()
        setTimeout(function () {
          document.querySelector('.background-part:last-child').classList.add('active')
        }, 1000)
      } else {
        document.querySelector('.background-part:last-child').classList.remove('active')
        this.playAnimDetails.reverse(1.8)
        setTimeout(function () {
          document.querySelector('#project-detail-container').style.zIndex = -1
        }, 1200)
      }
    },
  '$data.openMenu':  function (newVal, oldVal) {
      if(newVal === true) {
        this.$refs.mainNav.style.zIndex = 7;
        this.animMenu.play()
      } else {
        this.animMenu.reverse()
        setTimeout(() => {
          this.$refs.mainNav.style.zIndex = -1
        }, 1500)
      }
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
