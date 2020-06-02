import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/KatalogMobil.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/katalog/:id',
    name: 'Mobil Lengkap',
    component: () => import('../views/home/MobilLengkap.vue')
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
      },
      {
        path: 'foto',
        name: 'Galeri foto mobil',
        component: () => import('../views/GaleriFotoMobil.vue')
      },
      {
        path: 'testimoni',
        name: 'testimoni mobil',
        component: () => import('../views/TestimoniMobil.vue')
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
