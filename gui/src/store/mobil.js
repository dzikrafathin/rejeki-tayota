import RepositoryFactory from '../repositories/RepositoryFactory'

const mobil = RepositoryFactory.get('mobil');

export default {
    state : () => ({
        daftarMobil : []
    }),
    mutations : {
        index_mobil(state, payload) {
            state.daftarMobil = payload
        },
        tambah_mobil(state, payload) {
            state.daftarMobil.push(payload)
        },
        /*
        edit_mobil(state, payload) {
            const item = state.daftarMobil.find(item => item.id === payload.id);
            Object.assign(item,payload);
        },*/
        hapus_mobil(state, id) {
            const i = state.daftarMobil.map(item => item.id).indexOf(id);
            state.daftarMobil.splice(i,1);
        }
    },
    actions : {
        indexMobil({commit}) {
            return new Promise((resolve, reject) => {
                mobil.index()
                .then(res => {
                    commit('index_mobil',res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        tambahMobil({commit}, payload) {
            return new Promise((resolve, reject) => {
                mobil.buat(payload)
                .then(res => {
                    commit('tambah_mobil',res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            });
        },
        /*
        ubahMobil({commit}, payload) {
            return new Promise((resovle, reject) => {
                mobil.ubah(payload, payload.id)
                .then(res => {

                }).catch(err => {

                })
            })
        },*/
        hapusMobil({commit}, id) {
            return new Promise((resolve, reject) => {
                mobil.hapus(id)
                .then(res => {
                    commit('hapus_mobil',id)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}