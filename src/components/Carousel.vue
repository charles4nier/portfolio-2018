<template>
  <div id="carousel">
    <div v-for="data in dataCarousel" class="image-container" :class="data.position"  :key="data.name">
      <router-link :to="data.url"><img :src="data.src" class="project-image" :alt="data.description"/></router-link>
      <p>
          <span id="label">autres projets</span>
          <span id="project-title">{{data.name}}</span>
      </p>
    </div>    
    <button id="left-arrow" data-action="before" @click="callSlide"><img src="../assets/images/left-arrow.svg" /></button>
    <button id="right-arrow" data-action="next" @click="callSlide"><img src="../assets/images/right-arrow.svg" /></button>
  </div>
</template>

<script>
  import dataCarousel from '../constants/dataCarousel'
  import { TweenMax, TimelineMax } from 'gsap/TweenMax'

  export default {
    name: 'Carousel',
    data () {
        return {
          dataCarousel: dataCarousel,
          slideTicker: true
        }
    },
    methods: {
      callSlide: function (event) {
        // if(this.slideTicker === false) {
        //   return
        // }

        // this.slideTicker = false

        let slideDirection = event.target.dataset.action === 'before' ? this.slideRight : this.slideLeft
     

        slideDirection()
      },

      slideLeft: function () {
        let imageContainer = document.querySelectorAll('.image-container')
        
        TweenMax.to(imageContainer, 0.5, {xPercent: -100, onComplete: this.reversedSlideTicker})
      },

      slideRight: function () {
        let imageContainer = document.querySelectorAll('.image-container')
        
        TweenMax.to(imageContainer, 0.5, {xPercent: 100, onComplete: this.reversedSlideTicker})
      }
    },
    computed: {
      reversedSlideTicker: function () {
        this.reversedSlideTicker = true
      }    
    }
  }
</script>
