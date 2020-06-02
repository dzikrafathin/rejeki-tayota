import Client from './Clients/AxiosClient'
const resource = '/mobil'

export default {
    index() {
        return Client.get(`${resource}`);
    },
    katalog() {
        return Client.get('/katalog');
    },
    lihat(id) {
        return Client.get(`${resource}/${id}`);
    },
    buat(payload) {
        return Client.post(`${resource}`,payload,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    ubah(payload,id) {
        return Client.put(`${resource}/${id}`,payload);
    },
    hapus(id) {
        return Client.delete(`${resource}/${id}`);
    }
}