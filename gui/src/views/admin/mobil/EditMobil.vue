<template>
    <v-card
        :loading="loading"
    >
        <template v-if="gagal">
            <v-alert
                color="error"
                outlined
            >
                Terjadi kesalahan saat memuat data
            </v-alert>
        </template>
        <template v-else>
            <v-card-text>
                <v-text-field
                    outlined
                    dense
                    v-model="mobil.nama"
                    label="Nama Mobil"
                />
                <v-textarea
                    outlined
                    dense
                    v-model="mobil.deskripsi"
                    auto-grow
                    label="Deskripsi Mobil"
                    rows="3"
                />
                <v-textarea
                    outlined
                    dense
                    v-model="mobil.speksifikasi"
                    auto-grow
                    label="Speksifikasi Mobil"
                    rows="5"
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    outlined
                    color="success"
                    @click="ubah"
                >
                    Ubah
                </v-btn>
            </v-card-actions>
        </template>
        <v-snackbar
            v-model="pesan.tampil"
            :color="pesan.tipe"
            multi-line
        >
            {{pesan.isi}}
        </v-snackbar>
    </v-card>
</template>

<script>
import RepositoryFactory from '../../../repositories/RepositoryFactory'

const mobil = RepositoryFactory.get('mobil')

export default {
    data : () => ({
        mobil : {
            id : '',
            nama : '',
            deskripsi : '',
            speksifikasi : ''
        },
        loading : false,
        error : '',
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    computed : {
        gagal() {
            return this.error != ''
        }
    },
    created() {
        this.mulai()
    },
    methods : {
        mulai() {
            const id = this.$route.params.id
            this.loading = true
            
            mobil.lihat(id)
            .then(res => {

                this.mobil = res.data
                this.loading = false

            }).catch(err => {

                this.loading = false
                this.error = err.response.data.messages

            })
        },
        ubah() {
            const id = this.$route.params.id
            this.loading = true
            mobil.ubah(this.mobil, id)
            .then(res => {
                this.mobil = res.data
                this.pesanSukses('Data berhasil diperbarui')
                this.loading = false
            }).catch(err => {
                this.pesanError(err.response.data.messages)
                this.loading = false
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