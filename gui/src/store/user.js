import Client from '../repositories/Clients/AxiosClient'
import RepositoryFactory from '../repositories/RepositoryFactory'

const userRepo = RepositoryFactory.get('user');

export default {
    state : () => ({
        authStatus : '',
        token : localStorage.getItem('token') || '',
        daftarUser : [],
        userSekarang : null
    }),
    mutations : {
        tambah_user(state, payload) {
            const duplikat = state.daftarUser.find(user => user.id === payload.id);
            if (duplikat == undefined) {
                state.daftarUser.push(payload);
            }
        },
        ubah_user(state, payload) {
            const item = state.daftarUser.find(item => item.id === payload.id);
            Object.assign(item,payload);
        },
        hapus_user(state, id) {
            const i = state.daftarUser.map(item => item.id).indexOf(id);
            state.daftarUser.splice(i,1);
        },
        auth_success(state, payload) {
            state.userSekarang = payload.user
            state.token = payload.token
            state.authStatus = 'success'
        },
        auth_error(state) {
            state.authStatus = 'error'
            state.userSekarang = null
        },
        isi_user(state, user) {
            state.userSekarang = user
        }
    },
    actions : {
        indexUser({commit}) {
            return new Promise((resolve, reject) => {
                userRepo.index()
                .then(res => {
                    const data = res.data
                    data.forEach(user => {
                        commit('tambah_user', user)
                    })
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        tambahUser({commit}, payload) {
            return new Promise((resolve, reject) => {
                userRepo.buat(payload)
                .then(res => {
                    commit('tambah_user', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        ubahUser({commit}, payload) {
            return new Promise((resolve, reject) => {
                userRepo.ubah(payload.id, payload)
                .then(res => {
                    commit('ubah_user', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        hapusUser({commit}, id) {
            return new Promise((resolve, reject) => {
                userRepo.hapus(id)
                .then(res => {
                    commit('hapus_user', id)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        masuk({commit}, user) {
            return new Promise((resolve, reject) => {
                userRepo.masuk(user)
                .then(res => {
                    const user = res.data
                    const token = user.token

                    localStorage.setItem('token', token)
                    Client.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                    commit('auth_success', {
                        user: user,
                        token : token
                    });
                    resolve(res)
                }).catch(err => {

                    localStorage.removeItem('token')
                    commit('auth_error')
                    reject(err)

                })
            })
        },
        isiUser({commit}) {
            return new Promise((resolve, reject) => {
                userRepo.profil()
                .then(res => {
                    commit('isi_user', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        ubahProfil({commit}, payload) {
            return new Promise((resolve, reject) => {
                userRepo.ubahProfil(payload)
                .then(res => {
                    commit('isi_user', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
    getters : {
        isLoggedIn: state => !!state.token,
    }
}