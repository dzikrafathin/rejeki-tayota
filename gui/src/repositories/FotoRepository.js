import Client from './Clients/AxiosClient'
const parent = '/mobil'
const resource = '/foto'

export default {
    index(id) {
        return Client.get(`${parent}/${id}${resource}`);
    },
    buat(id, payload) {
        return Client.post(
            `${parent}/${id}${resource}`,
            payload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
    },
    hapus(id) {
        return Client.delete(`${resource}/${id}`);
    }
}