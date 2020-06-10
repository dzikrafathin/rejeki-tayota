<template>
    <div
    class="px-2"
    >
        <v-dialog
            v-model="dialog"
            max-width="500"
        >
            <template v-slot:activator="{on}">
                <v-btn
                    small
                    outlined
                    color="error"
                    v-on="on"
                    
                >
                    Hapus
                </v-btn>
            </template>
            <v-card>
                <v-card-title>Hapus Mobil</v-card-title>
                <v-card-text>Anda yakin ingin menghapus mobil {{mobil.nama}}</v-card-text>
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
        <v-snackbar
                v-model="pesan.tampil"
                :color="pesan.tipe"
                multi-line
            >
                {{pesan.isi}}
        </v-snackbar>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props : ['mobil'],
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
            hapusMobil : 'hapusMobil'
        }),
        hapus() {
            const id = this.mobil.id

            this.hapusMobil(id)
            .then(() => {
                this.dialog = false
                this.pesanSukses('Data mobil berhasil dihapus')
            }).catch(err => {
                this.pesanError(err.response.data.messages)
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