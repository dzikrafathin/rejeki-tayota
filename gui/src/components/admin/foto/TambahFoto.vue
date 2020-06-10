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
                fab
                color="primary"
                bottom
                left
                fixed
                v-on="on"
                >
                <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    Upload Foto Baru
                </v-card-title>
                <v-card-text>
                    <v-form id="tambahFoto">
                        <v-file-input 
                            name="foto[]"
                            multiple
                            chips
                            label="Upload Foto"
                            prepend-icon="mdi-camera"
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="success"
                        outlined
                        @click="tambah"
                    >
                        Tambah
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props : ['mobilId'],
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
            tambahFoto : 'tambahFoto'
        }),
        tambah() {
            this.loading = true

            const payload = {
                id : this.mobilId,
                data : new FormData(document.getElementById('tambahFoto'))
            }

            this.tambahFoto(payload)
            .then(() => {
                this.dialog = false
                this.loading = false
                this.pesanSukses('Foto baru berhasil ditambahkan')
            }).catch(() => {
                this.loading = false
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