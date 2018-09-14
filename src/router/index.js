import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import ProjectContainer from '@/components/ProjectContainer'
import ProjectAside from '@/components/ProjectAside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accueil',
      name: 'About',
      component: About
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
