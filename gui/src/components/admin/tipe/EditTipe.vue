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
                    color="success"
                    outlined
                    v-on="on"
                >
                    Ubah
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    Ubah Data Tipe
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        label="Nama Tipe"
                        v-model="form.tipe"
                    />
                    <v-text-field
                        label="Harga"
                        type="number"
                        v-model="form.harga"
                    />
                    <v-text-field
                        label="Stok"
                        type="number"
                        v-model="form.stok"
                    />
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="error"
                        outlined
                        @click="dialog = false"
                    >Batal</v-btn>
                    <v-btn
                        color="success"
                        outlined
                        @click="ubah"
                    >Ubah</v-btn>
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
        form : {
            id : 0,
            tipe : '',
            harga : 0,
            stok  : 0
        },
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    created() {
        this.form = {...this.tipe}
    } ,
    methods : {
        ...mapActions({
            ubahTipeMobil : 'ubahTipeMobil'
        }),
        ubah() {
            this.ubahTipeMobil(this.form)
            .then(() => {
                this.pesanSukses('Data berhasil diubah')
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