<template>
  <main id="project-container">
    <transition
      mode="out-in"
      :duration="{enter:0, leave: 400}">
      <router-view :projectDetails='projectDetails' :changePage='changePage' :key='$route.params.project' :showProjectDetail="showProjectDetail"></router-view>
    </transition>
    <ProjectDetail :projectDetails='projectDetails' :showProjectDetail="showProjectDetail"/>
  </main>
</template>

<script>
import Project from './Project'
import ProjectDetail from './ProjectDetail'

export default {
  name: 'ProjectContainer',
  props: ['dataProject', 'showProjectDetail'],
  data () {
    return {
      projectDetails: '',
      showDetails: true
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
