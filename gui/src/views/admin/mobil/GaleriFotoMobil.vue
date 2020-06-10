<template>
    <v-card
        :loading="loading"
    >
        <tambah-foto
            :mobilId="mobilId"
        ></tambah-foto>
        <v-alert
            v-if="error"
            color="error"
            outlined
        >
                Terjadi kesalahan saat memuat data
        </v-alert>
        <v-container
            v-else
        >
            <v-row
                
            >
                <v-col
                    md="4"
                    v-for="foto in getFoto(mobilId)"
                    :key="foto.id"
                >
                    <Foto
                        :foto="foto"
                    />
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar
            v-model="pesan.tampil"
            :color="pesan.tipe"
            multi-line
        >
            {{pesan.isi}}
        </v-snackbar>
    </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Foto from '../../../components/admin/foto/Foto.vue'
import TambahFoto from '../../../components/admin/foto/TambahFoto.vue'

export default {
    data : () => ({
        loading : false,
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        },
        error : false
    }),
    components : {
        Foto,
        TambahFoto
    },
    computed : {
        ...mapGetters({
            getFoto : 'getFoto'
        }),
        mobilId() {
            return this.$route.params.id
        }
    },
    created() {
        this.mulai()
    },
    methods : {
        ...mapActions({
            indexFoto : 'indexFoto'
        }),
        mulai() {
            this.loading = true
            this.indexFoto(this.mobilId)
            .then(() => {
                this.loading = false
            }).catch(() => {
                this.error = true
                this.loading = false
            })
        },
        pesanError(pesan) {
            this.pesan = {
                tampil : true,
                isi : pesan,
                tipe : 'error'
            }
        },
        pesanSukses(pesan) {
            this.pesan = {
                tampil : true,
                isi : pesan,
                tipe : 'success'
            }
        }
    }
}
</script>