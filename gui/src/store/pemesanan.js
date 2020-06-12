import RepositoryFactory from '../repositories/RepositoryFactory'

const mobil = RepositoryFactory.get('mobil')
const tipeMobil = RepositoryFactory.get('tipeMobil')
const pemesanan = RepositoryFactory.get('pemesanan')

export default {
    state  : () => ({
        daftarMobil : [],
        daftarTipe : [],
        items : [],
        daftarPemesanan : []
    }),
    mutations : {
        index_pemesanan(state, payload) {
            state.daftarPemesanan = payload
        },
        index_daftar_mobil(state, payload) {
            state.daftarMobil = payload
        },
        index_daftar_tipe(state, payload) {
            state.daftarTipe = payload
        },
        tambah_item(state, payload) {
            state.items.push(payload)
        },
        ubah_item(state, payload) {
            const item = state.items.find(item => item.no === payload.no);
            Object.assign(item,payload);
        },
        hapus_item(state, no) {
            const i = state.items.map(item => item.no).indexOf(no);
            state.items.splice(i,1);
        }
    },
    actions : {
        indexPemesanan({commit}) {
            return new Promise((resolve, reject) => {
                pemesanan.index()
                .then(res => {
                    commit('index_pemesanan', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        kirimPemesanan({state}, payload) {
            return new Promise((resolve, reject) => {
                const dataPemesanan = {...payload}
                dataPemesanan.items = state.items
                pemesanan.buat(dataPemesanan)
                .then(() => {
                    resolve(true)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        tambahItem({commit, state}, payload) {
            const data = {...payload}

            data.mobil = state.daftarMobil.filter(
                mobil => mobil.id == data.mobilId
            )[0].nama;

            data.tipe = state.daftarTipe.filter(
                tipe => tipe.id == data.tipe_mobil_id
            )[0].tipe;
            
            if (state.items.length > 0) {
                data.no = state.items[state.items.length - 1].no + 1
            } else {
                data.no = 1
            }

            commit('tambah_item', data)
        },
        indexPemesananMobil({commit}) {
           mobil.index()
           .then(res => {
               commit('index_daftar_mobil', res.data)
           })
        },
        indexPemesananTipe({commit}, mobilId) {
            tipeMobil.index(mobilId)
            .then(res => {
                commit('index_daftar_tipe', res.data)
            })
        }
    },
    getters : {

    }
}