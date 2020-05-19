<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="grey"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon
        @click="muncul = !muncul"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Rejeki Toyota</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-avatar
        class="grey lighten-5"
      >
        <v-icon light>mdi-account</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="muncul"
    >
      <Sidebar/>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data: () => ({
    muncul : false
  })
}
</script>