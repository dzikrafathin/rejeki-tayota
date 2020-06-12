import Client from './Clients/AxiosClient'

export default {
    index() {
        return Client.get('/user')
    },
    buat(payload) {
        return Client.post('/user', payload)
    },
    ubah(id, payload) {
        return Client.put(`/user/${id}`, payload)
    },
    hapus(id) {
        return Client.delete(`/user/${id}`)
    },
    masuk(payload) {
        return Client.post('/masuk',payload)
    },
    keluar() {
        return Client.post('/keluar')
    },
    profil() {
        return Client.get('/profil')
    },
    ubahProfil(payload) {
        return Client.post('/profil',payload,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}