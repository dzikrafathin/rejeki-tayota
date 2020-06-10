import Client from './Clients/AxiosClient'

export default {
    masuk(payload) {
        return Client.post('/masuk',payload)
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