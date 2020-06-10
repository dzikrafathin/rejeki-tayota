import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import mobil from './mobil'
import foto from './foto'
import tipe from './tipe'
import testimoni from './testimoni'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user : user,
    mobil : mobil,
    foto : foto,
    tipe : tipe,
    testimoni : testimoni
  }
})
