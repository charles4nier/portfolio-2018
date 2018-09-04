<template>
  <div id="project-template" ref="test">
    <aside>
      <div id="project-description">
        <p ref="description"><span>{{projectDetails[0].span}}</span>{{projectDetails[0].presentation}}</p>
        <button @click="show">En savoir plus</button>
        <a :href="projectDetails[0].link" target='_blank'><span data-hover="Visiter le site">Visiter le site</span></a>
      </div>
      <div id="project-nav-container">
        <p>Autres projets :</p>
        <div id="button-container">
          <button :data-key="projectDetails[0].key" @click="changePage" data-action="previous"></button>
          <button :data-key="projectDetails[0].key" @click="changePage" data-action="next"></button>
        </div>       
      </div>
    </aside>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap/TweenMax'

export default {
  name: 'Project',
  props: ['projectDetails', 'changePage', 'showProjectDetail'],
  data () {
    return {
      test: ''
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
    }
  },
  mounted () {
    this.showDescription()
  },
  beforeDestroy () {
    this.hideDescription()
  },
  // watch: {
  //   '$route' (to, from) {
  //     this.hideDescription()
  //   }
  // }
}
</script>
