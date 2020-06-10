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
                <v-card-title>Tambah Tipe Baru</v-card-title>
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
                        @click="dialog = false"
                        color="error"
                        outlined
                    >
                        Batal
                    </v-btn>
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
    data : () => ({
        dialog : false,
        form : {
            tipe : '',
            harga : 0,
            stok : 0
        },
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    computed : {
        mobilId() {
            return this.$route.params.id
        }
    },
    methods : {
        ...mapActions({
            tambahTipeMobil : 'tambahTipeMobil'
        }),
        tambah() {
            const payload = {
                id : this.mobilId,
                data : this.form
            }

            this.tambahTipeMobil(payload)
            .then(() => {
                this.pesanSukses('Data berhasil ditambahkan')
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