import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path : '/',
    name : 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/katalog',
    name: 'Katalog',
    component: () => import('../views/home/Katalog.vue')
  },
  {
    path: '/mobil/:id',
    name: 'Detail Mobil Home',
    component: () => import('../views/home/Mobil.vue')
  },
  {
    path: '/pemesanan',
    name: 'Form Pemesanan',
    component: () => import('../views/home/Pemesanan.vue')
  },
  {
    path: '/login',
    name : 'Halaman Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path : '/admin',
    name : 'Halaman Administrasi',
    component: () => import('../views/admin/BaseAdmin.vue'),
    meta : {
      requiresAuth : true
    },
    children : [
      {
        path : 'dashboard',
        name : 'Halaman Dashboard',
        component : () => import('../views/admin/Dashboard.vue')
      },
      {
        path : 'profil',
        name : 'Profil Administrator',
        component : () => import('../views/admin/user/Profil.vue')
      },
      {
        path : 'user',
        name : 'Administrasi Pengguna',
        component : () => import('../views/admin/user/IndexUser.vue')
      },
      {
        path : 'mobil',
        name : 'Administrasi Mobil',
        component: () => import('../views/admin/mobil/IndexMobil.vue')
      },
      {
        path : 'mobil/:id',
        name : 'Detail Mobil',
        component: () => import('../views/admin/mobil/DetailMobil.vue'),
        children : [
          {
            path : 'edit',
            name : 'Ubah Detail Mobil',
            component : () => import('../views/admin/mobil/EditMobil.vue')
          },
          {
            path : 'tipe',
            name : 'Daftar tipe dan harga Mobil',
            component : () => import('../views/admin/mobil/TipeMobil.vue')
          },
          {
            path : 'foto',
            name : 'Galeri foto Mobil',
            component : () => import('../views/admin/mobil/GaleriFotoMobil.vue')
          },
          {
            path : 'testimoni',
            name : 'Testimoni Pelanggan',
            component : () => import('../views/admin/mobil/TestimoniMobil.vue')
          }
        ]
      },
      {
        path : 'pemesanan',
        name : 'Administrasi Pemesanan',
        component: () => import ('../views/admin/pemesanan/IndexPemesanan.vue')
      },
      {
        path : 'pemesanan/:id',
        name : 'Detail Pemesanan',
        component: () => import('../views/admin/pemesanan/DetailPemesanan.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
