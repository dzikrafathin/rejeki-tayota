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
                    outlined
                    color="success"
                    v-on="on"
                >Tulis Testimoni</v-btn>
            </template>
            <v-card>
                <v-card-title>Tulis Testimoni</v-card-title>
                <v-card-text>
                    <v-text-field
                        label="Nama"
                        v-model="form.nama"
                    ></v-text-field>
                    <v-text-field
                        label="E-Mail"
                        v-model="form.email"
                    ></v-text-field>
                    <v-textarea
                        label="Isi"
                        v-model="form.isi"
                    ></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="error"
                        outlined
                        @click="dialog = false"
                    >
                        Batal
                    </v-btn>
                    <v-btn
                        color="success"
                        outlined
                        @click="tambah"
                    >Kirim</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import RepoFactory from '../../../repositories/RepositoryFactory'

const testimoni = RepoFactory.get('testimoni')

export default {
    props : ['mobilId'],
    data : () => ({
        dialog : false,
        form : {
            nama : '',
            email : '',
            isi : ''
        },
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    methods : {
        tambah() {
            testimoni.buat(this.mobilId, this.form)
            .then(() => {
                this.dialog = false
                this.pesanSukses('Berhasil dikirim')
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