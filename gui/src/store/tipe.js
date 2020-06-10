import RepositoryFactory from '../repositories/RepositoryFactory'

const tipeMobil = RepositoryFactory.get('tipeMobil')

export default {
    state : () => ({
        daftarTipeMobil : []
    }),
    mutations : {
        tambah_tipe(state, payload) {
            const duplikat = state.daftarTipeMobil.find(tipe => tipe.id === payload.id);
            if (duplikat == undefined) {
                state.daftarTipeMobil.push(payload);
            }
        },
        ubah_tipe(state, payload) {
            const item = state.daftarTipeMobil.find(item => item.id === payload.id);
            Object.assign(item,payload);
        },
        hapus_tipe(state, id) {
            const i = state.daftarTipeMobil.map(item => item.id).indexOf(id);
            state.daftarTipeMobil.splice(i,1);
        }
    },
    actions : {
        indexTipeMobil({commit}, id) {
            return new Promise((resolve, reject) => {
                tipeMobil.index(id)
                .then(res => {
                    const data = res.data
                    data.forEach(tipe => {
                        commit('tambah_tipe', tipe)
                    })
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        tambahTipeMobil({commit}, payload) {
            return new Promise((resolve, reject) => {
                tipeMobil.buat(payload.id, payload.data)
                .then(res => {
                    commit('tambah_tipe', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        ubahTipeMobil({commit}, payload) {
            return new Promise((resolve, reject) => {
                tipeMobil.ubah(payload, payload.id)
                .then(res => {
                    commit('ubah_tipe', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        hapusTipeMobil({commit}, id) {
            return new Promise((resolve, reject) => {
                tipeMobil.hapus(id)
                .then(res => {
                    commit('hapus_tipe', id)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
    getters : {
        getTipeMobil : (state) => (mobilId) => {
            return state.daftarTipeMobil.filter(tipe => tipe.mobil_id == mobilId)
        }
    }
}