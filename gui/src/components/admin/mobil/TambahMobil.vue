<template>
    <div>
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
                    Tambahkan Data Mobil
                </v-card-title>
                <v-card-text>
                    <v-form id="tambahMobil">
                        <v-text-field
                            name="nama"
                            label="Nama Mobil"
                        />
                        <v-textarea
                            name="deskripsi"
                            label="Deskripsi Mobil"
                            rows="2"
                        />
                        <v-textarea
                            name="speksifikasi"
                            label="Speksifikasi Mobil"
                            rows="4"
                        />
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
                        @click="dialog = false"
                        outlined
                        color="error">
                        Batal    
                    </v-btn>
                    <v-btn
                        color="success"
                        outlined
                        @click="tambah"
                    >
                        Tambahkan
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
                v-model="pesan.tampil"
                :color="pesan.tipe"
        >
                {{pesan.isi}}
        </v-snackbar>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
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
            tambahMobil : 'tambahMobil'
        }),
        tambah() {
            const data = new FormData(document.getElementById('tambahMobil'))
            this.tambahMobil(data)
            .then(() => {
                this.pesanSukses('Data berhasil ditambahkan')
                this.dialog = false
            }).catch(err => {
                console.log(err.response.data)
                this.pesanError(err.response.data.message)
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