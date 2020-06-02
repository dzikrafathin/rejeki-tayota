<template>
    <v-container fluid>
        <v-row>
            <v-col
                md="6"
            >
                <v-card>
                    <v-carousel
                        cycle
                        height="400"
                        hide-delimiter-background
                        show-arrows-on-hover
                    >
                        <v-carousel-item
                            v-for="foto in galeri"
                            :key="foto.id"
                        >
                            <v-img
                                :src="$baseURL + foto.url"></v-img>
                        </v-carousel-item>
                    </v-carousel>
                    <v-card-title>{{mobil.nama}}</v-card-title>
                    <v-card-subtitle>{{mobil.deskripsi}}</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div><b>Speksifikasi</b></div>
                        <div>{{mobil.speksifikasi}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                md="6"
            >
                <v-card>
                    <v-card-title>Tabel Harga</v-card-title>
                    <v-card-text class="text--primary">
                        <v-row>
                            <v-col md="4"><b>Tipe</b></v-col>
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
                        ></item-tipe-mobil>
                    </v-card-text>
                </v-card>
                <dialog-pesan/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ItemTipeMobil from '../../components/home/ItemTipeMobil.vue'
import DialogPesan from '../../components/home/DialogPesan.vue'
import RepositoryFactory from '../../repositories/RepositoryFactory.js'

const mobil = RepositoryFactory.get('mobil')
const tipe = RepositoryFactory.get('tipeMobil')
const foto = RepositoryFactory.get('foto')

export default {
    components : {
        ItemTipeMobil,
        DialogPesan
    },
    data () {
      return {
        galeri : [],
        daftarTipe : [],
        mobil : {}
      }
    },
    created() {
        this.isiMobil()
        this.isiFoto()
        this.isiTipe()
    },
    methods : {
        async isiMobil() {
            const mobilId = this.$route.params.id

            const { data } = await mobil.lihat(mobilId)
            this.mobil = data
        },
        async isiFoto() {
            const mobilId = this.$route.params.id

            const { data } = await foto.index(mobilId)
            this.galeri = data
        },
        async isiTipe() {
            const mobilId = this.$route.params.id

            const { data } = await tipe.index(mobilId)
            this.daftarTipe = data
        }
    }
}
</script>