<template>
    <div>
        <v-snackbar
                v-model="pesan.tampil"
                :color="pesan.tipe"
        >
                {{pesan.isi}}
        </v-snackbar>
        <v-dialog
            max-width="500"
            v-model="dialog"
        >
            <template v-slot:activator="{on}">
                <v-btn
                    x-small
                    color="error"
                    outlined
                    v-on="on"
                >
                    Hapus
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    Hapus Tipe
                </v-card-title>
                <v-card-text>
                    Anda yakin ingin menghapus tipe {{tipe.tipe}} ?
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="success"
                        outlined
                        @click="dialog = false"
                    >Batal</v-btn>
                    <v-btn
                        color="error"
                        outlined
                        @click="hapus"
                    >Hapus</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props : ['tipe'],
    data : () => ({
        dialog : false,
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    methods : {
        ...mapActions({
            hapusTipeMobil : 'hapusTipeMobil'
        }),
        hapus() {
            this.hapusTipeMobil(this.tipe.id)
            .then(() => {
                this.pesanSukses('Data berhasil dihapus')
                this.dialog = false
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