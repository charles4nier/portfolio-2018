<template>
  <main id="project-container">
    <h2 id="project-title" ref="titleProject"><span>{{title}}</span></h2>
    <transition
      mode="out-in"
      :duration="{enter:0, leave: 700}">
      <router-view :projectDetails='projectDetails' :changePage='changePage' :key='$route.params.project' :showProjectDetail="showProjectDetail"></router-view>
    </transition>
    <ProjectDetail :projectDetails='projectDetails' :showProjectDetail="showProjectDetail"/>
    <Carousel :dataProject="dataProject"/>
    <router-link to="/accueil" id="accueil-link"><span id="link-text">retour à l'accueil</span><span id="icone"></span></router-link>
  </main>
</template>

<script>
import ProjectAside from './ProjectAside'
import ProjectDetail from './ProjectDetail'
import Carousel from './Carousel'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'

export default {
  name: 'ProjectContainer',
  props: ['dataProject', 'showProjectDetail'],
  data () {
    return {
      projectDetails: '',
      showDetails: true,
      title: ''
    }
  },
  components: {
    'ProjectAside': ProjectAside,
    'ProjectDetail': ProjectDetail,
    'Carousel': Carousel
  },
  methods: {
    getProjectDetails: function () {
      this.projectDetails = this.dataProject.filter(item => item.name === this.$route.params.project)
    },

    navigationHandler: function (array, value) {
      array = this.dataProject.filter(item => item.key === value)
      this.$router.push(array[0].name)
      this.projectDetails = array
    },

    changePage: function (event) {
      let key = Number(event.currentTarget.dataset.key)
      let action = event.currentTarget.dataset.action
      let array = []

      if (action === 'previous') {
        if (key > 1) {
          key--
          this.navigationHandler(array, key)
          return
        }
        this.navigationHandler(array, this.dataProject.length)
        return
      }

      if (key < this.dataProject.length) {
        key++
        this.navigationHandler(array, key)
        return
      }

      this.navigationHandler(array, 1)
    },
    animTitle: function () {
      let tl = new TimelineMax()
      tl.to(this.$refs.titleProject, 0.5, {opacity: 0, ease: Quad.easeInOut})
      tl.eventCallback('onComplete', () => {
        this.title = this.projectDetails[0].name
        tl.reverse()
      })
    }
  },
  created () {
    this.getProjectDetails()
    this.title = this.projectDetails[0].name
  },
  watch: {
    '$route' (to, from) {
      this.getProjectDetails()
      this.animTitle()
    }
  }
}
</script>
