import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../home/HomePage'
import RobotBuilder from '../build/RobotBuilder'
import PartInfo from '../parts/partInfo'
import BrowseParts from '../parts/BrowseParts'
import RobotHeads from '../parts/RobotHeads'
import RobotArms from '../parts/RobotArms'
import RobotTorsos from '../parts/RobotTorsos'
import RobotBases from '../parts/RobotBases'
import SidebarStandard from '../sidebars/SidebarStandard'
import SidebarBuild from '../sidebars/SidebarBuild'
import ShoppingCart from '../cart/ShoppingCart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard
    }
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild
    }
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases
      }
    ]
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id))
      next(isValidId)
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
