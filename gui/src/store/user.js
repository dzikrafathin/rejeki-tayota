import Client from '../repositories/Clients/AxiosClient'
import RepositoryFactory from '../repositories/RepositoryFactory'

const userRepo = RepositoryFactory.get('user');

export default {
    state : () => ({
        authStatus : '',
        token : localStorage.getItem('token') || '',
        userSekarang : null
    }),
    mutations : {
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