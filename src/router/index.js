import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../home/HomePage'
import RobotBuilder from '../build/RobotBuilder'
import PartInfo from '../parts/partInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
