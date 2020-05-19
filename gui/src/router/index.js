import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mobil',
    name: 'Index Mobil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/IndexMobil.vue')
  },
  {
    path: '/mobil/:id',
    name: 'Detail Mobil',
    component: () => import('../views/Mobil.vue'),
    children : [
      {
        path: 'edit',
        name: 'Edit data mobil',
        component: () => import('../views/EditMobil.vue')
      },
      {
        path: 'tipe',
        name: 'Index tipe mobil',
        component: () => import('../views/IndexTipeMobil.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
