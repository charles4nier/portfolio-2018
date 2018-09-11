import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import ProjectContainer from '@/components/ProjectContainer'
import ProjectAside from '@/components/ProjectAside'
import Bonjour from '@/components/Bonjour'
import Competences from '@/components/Competences'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accueil',
      name: 'About',
      component: About,
      children: [
        {
          path: 'bonjour',
          name: 'Bonjour',
          component: Bonjour
        },
        {
          path: 'competences',
          name: 'Competences',
          component: Competences
        }
      ]
    },
    {
      path: '/projet',
      name: 'ProjectContainer',
      component: ProjectContainer,
      children: [
        {
          path: ':project',
          name: 'ProjectAside',
          component: ProjectAside
        }
      ]
    }
  ]
})
