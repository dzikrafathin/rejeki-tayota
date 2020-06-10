<template>
    <div>
        <v-snackbar
            v-model="pesan.tampil"
            :color="pesan.tipe"
        >
            {{pesan.isi}}
        </v-snackbar>
        <v-dialog
            v-model="dialog"
            max-width="500"
        >
            <template v-slot:activator="{on}">
                <v-btn
                    x-small
                    color="error"
                    outlined
                    v-on="on"
                >Hapus</v-btn>
            </template>
            <v-card
                :loading="loading"
            >
                <v-card-title>Hapus Foto</v-card-title>
                <v-card-text>
                    Anda yakin ingin menghapus foto {{foto.nama}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        outlined
                        color="success"
                        @click="dialog = false"
                    >
                        Batal
                    </v-btn>
                    <v-btn
                        outlined
                        color="error"
                        @click="hapus"
                    >
                        Hapus
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props : ['foto'],
    data : () => ({
        dialog : false,
        loading : false,
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    methods : {
        ...mapActions({
            hapusFoto : 'hapusFoto'
        }),
        hapus() {
            this.loading = true
            this.hapusFoto(this.foto.id)
            .then(() => {
                this.pesanSukses('Foto berhasil dihapus')
                this.loading = false
            }).catch(() => {
                this.pesanError('Terjadi kesalahan')
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