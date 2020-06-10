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
                    color="success"
                    outlined
                    class="mx-2"
                    v-on="on"
                >
                    Ubah
                </v-btn>
            </template>
            <v-card>
                <v-card-title>Ubah Admin</v-card-title>
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
                        @click="ubah"
                    >
                        Simpan Perubahan
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
        form : {
            nama : '',
            email : '',
            password : ''
        }
    }),
    created() {
        this.form = {...this.user}
    },
    methods : {
        ...mapActions({
            ubahUser : 'ubahUser'
        }),
        ubah() {
            this.ubahUser(this.form)
            .then(() => {
                this.pesanSukses('Berhasil diubah')
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