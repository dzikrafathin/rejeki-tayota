import RepositoryFactory from '../repositories/RepositoryFactory'

const foto = RepositoryFactory.get('foto');

export default {
    state : () => ({
        daftarFoto : []
    }),
    mutations : {
        tambah_foto(state, payload) {
            const duplikat = state.daftarFoto.find(foto => foto.id === payload.id);
            if (duplikat == undefined) {
                state.daftarFoto.push(payload);
            }
        },
        hapus_foto(state, id) {
            const i = state.daftarFoto.map(item => item.id).indexOf(id);
            state.daftarFoto.splice(i,1);
        }
    },
    actions : {
        indexFoto({commit}, id) {
            return new Promise((resolve, reject) => {
                foto.index(id)
                .then(res => {
                    const data = res.data
                    data.forEach(foto => {
                        commit('tambah_foto', foto)
                    })
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        tambahFoto({commit}, payload) {
            return new Promise((resolve, reject) => {
                foto.buat(payload.id,payload.data)
                .then(res => {
                    commit('tambah_foto', res.data[0])
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        hapusFoto({commit}, id) {
            return new Promise((resolve, reject) => {
                foto.hapus(id)
                .then(() => {
                    commit('hapus_foto', id)
                    resolve(true)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
    getters : {
        getFoto : (state) => (mobilId) => {
            return state.daftarFoto.filter(foto => foto.mobil_id == mobilId)
        }
    }
}