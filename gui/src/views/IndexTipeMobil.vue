<template>
    <v-card>
        <v-card-title>
            Daftar Tipe Mobil
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col md="1"><b>No</b></v-col>
                <v-col md="3"><b>Tipe</b></v-col>
                <v-col md="2"><b>Stok</b></v-col>
                <v-col md="3"><b>Harga</b></v-col>
                <v-col md="3"><b>Aksi</b></v-col>
            </v-row>
            <item-tipe-mobil
                v-for="tipe in daftarTipe"
                :key="tipe.id"
                :id="tipe.id"
                :tipe="tipe.tipe"
                :harga="tipe.harga"
                :stok="tipe.stok"
                :ubah="ubah"
                :hapus="hapus"
            >
            </item-tipe-mobil>
            <dialog-tambah-tipe
                :tambah="tambah"
            >
            </dialog-tambah-tipe>
        </v-card-text>
    </v-card>
</template>

<script>
import ItemTipeMobil from '../components/mobil/ItemTipeMobil.vue'
import DialogTambahTipe from '../components/mobil/DialogTambahTipe.vue'
import RepositoryFactory from '../repositories/RepositoryFactory.js'

const tipeMobil = RepositoryFactory.get('tipeMobil');

export default {
    components : {
        ItemTipeMobil,
        DialogTambahTipe
    },
    data : () => ({
        daftarTipe : []
    }),
    created() {
        this.index();
    },
    methods : {
        index() {
            const mobilId = this.$route.params.id

            tipeMobil.index(mobilId)
            .then(res => {
                this.daftarTipe = res.data
            })
        },
        tambah(payload) {
            this.daftarTipe.push(payload);
        },
        ubah(payload) {
            const item = this.daftarTipe.find(item => item.id === payload.id);
            Object.assign(item,payload);
        },
        hapus(id) {
            const i = this.daftarTipe.map(item => item.id).indexOf(id);
            this.daftarTipe.splice(i,1);
        }
    }
}
</script>