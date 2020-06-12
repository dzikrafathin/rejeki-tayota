<template>
    <v-list>
      <template v-if="isLoggedIn">
        <v-list-item
            v-for="item in admin"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item
            v-for="item in user"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
    </v-list>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data : () => ({
        admin: [
          { 
            title: 'Dashboard', 
            icon: 'mdi-view-dashboard', 
            to: '/admin/dashboard',
            subtitle : 'Sekilas laporan data'
          },
          { 
            title: 'Data Admin', 
            icon: 'mdi-account', 
            to: '/admin/user',
            subtitle : 'Yang Mengelola'  
          },
          { 
            title: 'Data Mobil', 
            icon: 'mdi-car', 
            to: '/admin/mobil',
            subtitle : 'Mobil yang dijual'
          },
          { 
            title: 'Data Pemesanan', 
            icon: 'mdi-currency-usd', 
            to : '/admin/pemesanan',
            subtitle : 'Pemesanan yang masuk'  
          }
        ],
        user : [
          { 
            title: 'Beranda', 
            icon: 'mdi-view-dashboard', 
            to: '/',
            subtitle : 'Halaman Utama'
          },
          { 
            title: 'Produk', 
            icon: 'mdi-car', 
            to: '/katalog',
            subtitle : 'Daftar Mobil yang dijual'
          },
          {
            title: 'Pesan',
            icon: 'mdi-currency-usd',
            to : '/pemesanan',
            subtitle : 'Pesan mobil sekarang juga'
          }
        ]
    }),
    computed : {
      ...mapGetters({
        isLoggedIn : 'isLoggedIn'
      })
    },
}
</script>