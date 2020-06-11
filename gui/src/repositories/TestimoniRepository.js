import Client from './Clients/AxiosClient'
const parent = '/mobil'
const resource = '/testimoni'

export default {
    index(id) {
        return Client.get(`${parent}/${id}${resource}`);
    },
    indexPublik(id) {
        return Client.get(`${parent}/${id}${resource}_publik`)
    },
    lihat(id) {
        return Client.get(`${resource}/${id}`);
    },
    buat(id, payload) {
        return Client.post(`${parent}/${id}${resource}`,payload);
    },
    ubah(payload,id) {
        return Client.put(`${resource}/${id}`,payload);
    },
    hapus(id) {
        return Client.delete(`${resource}/${id}`);
    }
}