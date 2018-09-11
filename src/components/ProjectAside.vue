<template>
  <aside id="project-aside">
    <div id="project-description">
      <p ref="description"><span>{{projectDetails[0].span}}</span>{{projectDetails[0].presentation}}</p>
      <div>
        <button @click="show" target='_blank' data-hover="En savoir plus"><span>En savoir plus</span></button>
      </div>
    </div>
  </aside>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap/TweenMax'

export default {
  name: 'ProjectAside',
  props: ['projectDetails', 'changePage'],
  data () {
    return {
      playAnimDetails: null
    }
  },
  methods: {
    show: function () {
      this.$store.state.showDetails = true
    },
    hideDescription: function () {
      let tl = new TimelineMax()
      tl.to(this.$refs.description, 0.7, {opacity: 0, ease: Expo.easeOut})
    },
    showDescription: function () {
      let tl = new TimelineMax()
      tl.from(this.$refs.description, 0.7, {opacity: 0, yPercent: 15, ease: Quad.easeOut})
    },
    showProjectDetail: function (showDetail) {
      let tl = new TimelineMax()
      tl.to('#project-detail-container', 0.2, {opacity: 1})
        .to('#project-title span', 1.2, {yPercent: 100, ease: Expo.easeInOut},'-=.2')
        .to('#project-detail-container .background-part', 1, {scaleX: 1, ease: Expo.easeInOut}, '-=1.3')
        .to('#part-1', .6, {yPercent: -10, opacity: 1, ease: Expo.easeOut}, '-=.6')
        .to('.detail-row img', .5, {opacity: 1, ease: Expo.easeOut}, '-=.6')
        .to('#project-detail-title span', .6, {yPercent: -40, opacity: 1, ease: Quad.easeOut}, '-=.4')
        .to('#close-detail', .8, {yPercent: 500, opacity: 1, ease: Power4.easeOut}, '-=.6')
        

      tl.pause()
      return tl
    }
  },
  mounted () {
    this.showDescription()
    this.playAnimDetails = this.showProjectDetail()
  },
  beforeDestroy () {
    this.hideDescription()
  },
  watch: {
    '$store.state.showDetails': function (newVal, oldVal) {
      if (newVal === true) {
        document.querySelector('#project-detail-container').style.zIndex = 10
        this.playAnimDetails.play()
        setTimeout(function () {
          document.querySelector('.background-part:last-child').classList.add('active')
        }, 1000)
      } else {
        document.querySelector('.background-part:last-child').classList.remove('active')
        this.playAnimDetails.reverse(1.3)
        setTimeout(function () {
          document.querySelector('#project-detail-container').style.zIndex = -1
        }, 1600)
      }
    }
  }
}
</script>
