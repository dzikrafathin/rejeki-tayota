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
                <v-card-title>Tambah Admin Baru</v-card-title>
                <v-card-text>
                    <v-text-field
                        label="Nama Lengkap"
                        v-model="form.nama"
                        prepend-icon="mdi-account"
                    />
                    <v-text-field
                        label="Alamat E-Mail"
                        v-model="form.email"
                        prepend-icon="mdi-email"
                    />
                    <v-text-field
                        label="Kata Sandi"
                        v-model="form.password"
                        type="password"
                        prepend-icon="mdi-lock"
                    />
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        outlined
                        color="error"
                        @click="dialog = false"
                    >
                        Batal
                    </v-btn>
                    <v-btn
                        outlined
                        color="success"
                        @click="tambah"
                    >
                        Tambahkan
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
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        },
        form : {
            nama : '',
            email : '',
            password : ''
        }
    }),
    methods : {
        ...mapActions({
            tambahUser : 'tambahUser'
        }),
        tambah() {
            this.tambahUser(this.form)
            .then(() => {
                this.pesanSukses('Admin baru berhasil ditambahkan')
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