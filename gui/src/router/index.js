import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/katalog',
    name: 'Home',
    component: () => import('../views/home/Katalog.vue')
  },
  {
    path: '/mobil/:id',
    name: 'Detail Mobil',
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
    children : [
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
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
