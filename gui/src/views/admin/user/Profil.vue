<template>
    <v-card
        :loading="loading"
    >
        <v-snackbar
                v-model="pesan.tampil"
                :color="pesan.tipe"
        >
                {{pesan.isi}}
        </v-snackbar>
        <v-card-title>Ubah Profil</v-card-title>
        <v-card-text>
            <v-form id="profil">
                <v-text-field
                    name="nama"
                    prepend-icon="mdi-account"
                    label="Nama Lengkap"
                    v-model="user.nama"
                />
                <v-text-field
                    name="email"
                    prepend-icon="mdi-email"
                    label="Alamat E-Mail"
                    v-model="user.email"
                />
                <v-text-field
                    name="password"
                    type="password"
                    prepend-icon="mdi-lock"
                    label="Kata Sandi"
                />
                <v-file-input 
                    name="foto"
                    label="Upload Foto Profil"
                    prepend-icon="mdi-camera"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn
                color="success"
                outlined
                @click="ubah"
            >Simpan Perubahan</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data : () => ({
        loading : false,
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        }
    }),
    computed : {
        ...mapState({
            user : state => state.user.userSekarang
        })
    },
    methods : {
        ...mapActions({
            ubahProfil : 'ubahProfil'
        }),
        ubah() {
            this.loading = true
            const data = new FormData(document.getElementById('profil'))
            this.ubahProfil(data)
            .then(() => {
                this.loading = false
                this.pesanSukses('Profil berhasil diubah')
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