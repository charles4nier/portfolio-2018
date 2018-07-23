<template>
  <main id="project-container">
    <transition
      mode="in-out"
      :duration="{enter:0, leave: 700}">
      <router-view :projectDetails='projectDetails' :changePage='changePage' :key='$route.params.project'></router-view>
    </transition>
    <ProjectDetail :projectDetails='projectDetails'/>
  </main>
</template>

<script>
import Project from './Project'
import ProjectDetail from './ProjectDetail'
import HoverEffect from '../assets/jsModules/Hover'

export default {
  name: 'ProjectContainer',
  props: ['dataProject'],
  data () {
    return {
      projectDetails: ''
    }
  },
  components: {
    'Project': Project,
    'ProjectDetail': ProjectDetail
  },
  methods: {
    getProjectDetails: function () {
      this.projectDetails = this.dataProject.filter(item => item.name === this.$route.params.project)
    },

    navigationAnim: function (el, array) {
      console.log(this.projectDetails[0].disp)
      HoverEffect({
        parent: el,
        intensity: 0.8,
        speedIn: 1,
        speedOut: 1,
        easing: undefined,
        // hover: el.dataset.hover || undefined,
        image1: this.projectDetails[0].src,
        image2: array[0].src,
        displacementImage: this.projectDetails[0].disp
      })
    },

    navigationHandler: function (array, value, el) {
      array = this.dataProject.filter(item => item.key === value)
      this.$router.push(array[0].name)
      this.navigationAnim(el, array)
      this.projectDetails = array
    },

    changePage: function (event, el) {
      let key = Number(event.currentTarget.dataset.key)
      let action = event.currentTarget.dataset.action
      let array = []

      if (action === 'previous') {
        if (key > 1) {
          key--
          this.navigationHandler(array, key, el)
          return
        }
        this.navigationHandler(array, this.dataProject.length, el)
        return
      }

      if (key < this.dataProject.length) {
        key++
        this.navigationHandler(array, key, el)
        return
      }

      this.navigationHandler(array, 1, el)
    }
  },
  created () {
    this.getProjectDetails()
  },
  watch: {
    '$route' (to, from) {
      this.getProjectDetails()
    }
  }
}
</script>
