<template>
    <v-list>
        <ItemMobil 
            v-for="mobil in daftarMobil"
            :key="mobil.id"
            :id="mobil.id"
            :nama="mobil.nama"
            :foto="mobil.foto"
            :hapus="hapus"
        />
        <DialogTambah
            :tambah="tambah"
        />
    </v-list>
</template>

<script>
import ItemMobil from '../components/mobil/ItemMobil.vue'
import DialogTambah from '../components/mobil/DialogTambah.vue'
import RepositoryFactory from '../repositories/RepositoryFactory.js'

const mobil = RepositoryFactory.get('mobil');

export default {
    components : {
        ItemMobil,
        DialogTambah
    },
    data : () => ({
        daftarMobil : []
    }),
    created() {
        this.index();
    },
    methods : {
        index : function() {
            /*
            const {data} = await mobil.index();
            this.daftarMobil = data;*/
            mobil.index()
            .then(res => {
                this.daftarMobil = res.data
                console.log(res.data)
            });
        },
        tambah : function(payload) {
            this.daftarMobil.push({...payload});
        },
        hapus : function(id) {
            const i = this.daftarMobil.map(item => item.id).indexOf(id);
            this.daftarMobil.splice(i,1);
        }
    }
}
</script>