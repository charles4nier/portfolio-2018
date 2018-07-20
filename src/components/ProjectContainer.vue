<template>
  <main id="project-container">
    <transition
      mode="out-in">
      <router-view :projectDetails='projectDetails'></router-view>
    </transition>
    <div id="see-more-container" class="bottom-right-container">
      <button><span>Découvrir le projet</span></button>
    </div>
    <ProjectDetail :projectDetails='projectDetails'/>
  </main>
</template>

<script>
import Project from './Project'
import ProjectDetail from './ProjectDetail'

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
