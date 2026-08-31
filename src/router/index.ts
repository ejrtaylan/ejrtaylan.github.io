import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Helpers from '../helpers'

Vue.use(VueRouter)

const redirectToSection = (sectionId: string) => () => {
  Helpers.queueSectionScroll(sectionId)
  return '/'
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/:slug',
    name: 'Project Details',
    component: () => import(/* webpackChunkName: "project-details" */ '../views/ProjectDetails.vue')
  },
  {
    path: '/game-projects',
    redirect: redirectToSection('projects')
  },
  {
    path: '/resume',
    redirect: redirectToSection('resume')
  },
  {
    path: '/contact',
    redirect: redirectToSection('contact')
  },
  {
    path: '/other-projects',
    redirect: redirectToSection('projects')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 84 }
      }
    }

    return { x: 0, y: 0 }
  }
})

export default router
