import Client from './Clients/AxiosClient'
const resource = '/pemesanan'

export default {
    index() {
        return Client.get(`${resource}`);
    },
    lihat(id) {
        return Client.get(`${resource}/${id}`);
    },
    buat(payload) {
        return Client.post(`${resource}`,payload);
    },
    ubah(payload,id) {
        return Client.put(`${resource}/${id}`,payload);
    },
    hapus(id) {
        return Client.delete(`${resource}/${id}`);
    }
}