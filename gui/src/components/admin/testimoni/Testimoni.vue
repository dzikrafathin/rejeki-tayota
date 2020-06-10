<template>
    <v-card
        outlined
        class="my-2"
        >
        <v-snackbar
                v-model="pesan.tampil"
                :color="pesan.tipe"
        >
                {{pesan.isi}}
        </v-snackbar>
        <v-list-item>
            <v-list-item-avatar>
                <v-icon
                    class="grey lighten-1 white--text"
                >mdi-account</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{testimoni.nama}}</v-list-item-title>
                <v-list-item-subtitle>{{testimoni.email}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text class="text--primary">
            {{testimoni.isi}}
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn
                :outlined="!terverifikasi"
                small
                color="success"
                @click="toggle"
            >
                {{terverifikasi ? 'Batal Publikasi' : 'Publikasikan'}}
            </v-btn>
            <v-btn
                outlined
                small
                color="error"
                @click="hapus"
            >
                Hapus
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props : ['testimoni'],
    data : () => ({
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    computed : {
        terverifikasi() {
            return this.testimoni.terverifikasi
        }
    },
    methods : {
        ...mapActions({
            ubahTestimoni : 'ubahTestimoni',
            hapusTestimoni : 'hapusTestimoni'
        }),
        toggle() {

            if (this.terverifikasi) {

                this.ubahTestimoni({
                    id : this.testimoni.id,
                    terverifikasi : false
                }).then(() => {
                    this.pesanSukses('Testimoni batal dipublikasikan')
                }).catch(() => {
                    this.pesanError('Terjadi Kesalahan')
                })

            } else {

                this.ubahTestimoni({
                    id : this.testimoni.id,
                    terverifikasi : true
                }).then(() => {
                    this.pesanSukses('Testimoni telah dipublikasikan')
                }).catch(() => {
                    this.pesanError('Terjadi Kesalahan')
                })

            }
        },
        hapus() {

            this.hapusTestimoni(this.testimoni.id)
            .then(() => {
                this.pesanSukses('Berhasil dihapus')
            }).catch(() => {
                this.pesanError('Terjadi kesalahan')
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