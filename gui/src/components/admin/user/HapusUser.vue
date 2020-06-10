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
                    left
                    color="error"
                    outlined
                    v-on="on"
                >
                    Hapus
                </v-btn>
            </template>
            <v-card>
                <v-card-title>Hapus Admin</v-card-title>
                <v-card-text>
                    Anda yakin ingin menghapus admin {{user.nama}} ?
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
    props : ['user'],
    data : () => ({
        dialog : false,
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        },
    }),

    methods : {
        ...mapActions({
            hapusUser : 'hapusUser'
        }),
        hapus() {
            this.hapusUser(this.user.id)
            .then(() => {
                this.pesanSukses('Admin berhasil dihapus')
                this.dialog = false
            }).catch((err) => {
                this.pesanError(`Terjadi Kesalahan  ${err.response.data.message}`)
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