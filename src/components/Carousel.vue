<template>
  <div id="carousel">
    <div id="focus-project" class="second" ref="focusedProject">
      <router-link :to="focusedProject.name" @click.native="callSlide"><img :src="focusedProject.src" class="project-image" :alt="focusedProject.description"/></router-link>
      <p>
          <span id="label">autres projets</span>
          <span id="project-title">{{focusedProject.name}}</span>
      </p>
    </div> 
    <div v-for="(data, index) in dataCarousel" class="image-container" :class="'position-' + index"  :key="data.name">
      <router-link :to="data.name"><img :src="data.src" class="project-image" :alt="data.description"/></router-link>
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
          slideTicker: true,
          percentVal: 0,
          slideIndex: 1,
          focusedProject: null,
          index: 1
        }
    },
    methods: {
      callSlide: function (event) {
        if(this.slideTicker === false) {
          return
        }

        this.slideTicker = false
        
        let slideValue = null

        let dataCarouselLength = this.dataCarousel.length - 1

        if(event.target.dataset.action === 'before') {
          slideValue = 100
          this.index = this.index > 0 ? --this.index : dataCarouselLength
        } else {
          slideValue = -100
          this.index = this.index < dataCarouselLength ? ++this.index : 0
        } 
      
        this.$refs.focusedProject.style.zIndex = 1

        this.slide(0.6, slideValue)
      },

      slide: function (time, value) {
        let imageContainer = document.querySelectorAll('.image-container')

        TweenMax.to(imageContainer, time, {xPercent: value, ease: Quart.easeInOut, onComplete: () => {
          this.reversedSlideTicker()
          TweenMax.set(imageContainer,{xPercent: 0})
        }})
      },

      pushNewValues: function(val1, val2, val3) {
        let dataArray = []

        dataArray.push(dataCarousel[val1])
        dataArray.push(dataCarousel[val2])
        dataArray.push(dataCarousel[val3])

        this.dataCarousel = dataArray
      },

      reversedSlideTicker: function () {
        this.$refs.focusedProject.style.zIndex = 3
        this.slideTicker = true

        if(this.index === 0)  {
          this.pushNewValues(this.dataCarousel.length - 1, this.index, this.index + 1)
          return
        } 

        if (this.index === dataCarousel.length - 1) {
          this.pushNewValues(this.index - 1, this.index, 0)
          return
        }

        this.pushNewValues(this.index - 1, this.index, this.index + 1)

        // this.pushNewValues(this.index - 1, this.index, this.index % dataCarousel.length)
        
      }      
    },
    created () {
      this.focusedProject = dataCarousel[this.index]
    },

    watch: {
      '$data.index': function (newVal, oldVal) {
        this.focusedProject = dataCarousel[newVal]
      }
    }
  }
</script>
