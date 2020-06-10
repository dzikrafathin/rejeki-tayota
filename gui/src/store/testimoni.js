import RepositoryFactory from '../repositories/RepositoryFactory'

const testimoni = RepositoryFactory.get('testimoni');

export default {
    state : () => ({
        daftarTestimoni : []
    }),
    mutations : {
        tambah_testimoni(state, payload) {
            const duplikat = state.daftarTestimoni.find(testimoni => testimoni.id === payload.id);
            if (duplikat == undefined) {
                state.daftarTestimoni.push(payload);
            }
        },
        ubah_testimoni(state, payload) {
            const item = state.daftarTestimoni.find(item => item.id === payload.id);
            Object.assign(item,payload);
        },
        hapus_testimoni(state, id) {
            const i = state.daftarTestimoni.map(item => item.id).indexOf(id);
            state.daftarTestimoni.splice(i,1);
        }
    },
    actions : {
        indexTestimoni({commit}, id) {
            return new Promise((resolve, reject) => {
                testimoni.index(id)
                .then(res => {
                    const data = res.data

                    data.forEach(testimoni => {
                        commit('tambah_testimoni', testimoni)
                    })

                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        tambahTestimoni({commit}, payload) {
            return new Promise((resolve, reject) => {
                testimoni.buat(payload.id, payload.data)
                .then(res => {
                    commit('tambah_testimoni', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        ubahTestimoni({commit}, payload) {
            return new Promise((resolve, reject) => {
                testimoni.ubah(payload, payload.id)
                .then(res => {
                    commit('ubah_testimoni', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        hapusTestimoni({commit}, id) {
            return new Promise((resolve, reject) => {
                testimoni.hapus(id)
                .then(res => {
                    commit('hapus_testimoni', id)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
    getters : {
        getTestimoni : (state) => (mobilId) => {
            return state.daftarTestimoni.filter(testimoni => testimoni.mobil_id == mobilId)
        }
    }
}