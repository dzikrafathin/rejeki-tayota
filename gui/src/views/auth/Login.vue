<template>
    <v-container fluid  class="fill-height">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="grey"
                dark
                flat
              >
                <v-toolbar-title>Masuk</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                  <v-text-field 
                    label="Alamat E-Mail"
                    v-model="form.email"
                    prepend-icon="mdi-email"
                    outlined
                    @focus="hapusError"
                    :error-messages="error.email"
                    dense
                  />
                  <v-text-field 
                    label="Kata sandi"
                    prepend-icon="mdi-lock"
                    v-model="form.password"
                    @focus="hapusError"
                    :error-messages="error.password"
                    outlined
                    type="password"
                    dense
                  />
              </v-card-text>
              <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    small
                    color="success"
                    outlined
                    @click="cobaMasuk"
                  >
                      Masuk
                  </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar
            v-model="pesan.tampil"
            :color="pesan.tipe"
        >
            {{pesan.isi}}
        </v-snackbar>
    </v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data : () => ({
        form : {
            email : '',
            password : ''
        },
        pesan : {
            tampil : false,
            isi : '',
            tipe : ''
        },
        error : {
            email : '',
            password : ''
        }
    }),
    methods : {
        ...mapActions({
            masuk : 'masuk'
        }),
        cobaMasuk() {
            this.masuk(this.form)
            .then(() => {
                this.pesanSukses('Login Berhasil')
                this.$router.push('/admin')
            }).catch(err => {
                this.error = err.response.data
                this.pesanGagal('Terjadi Kesalahan')
            })
        },
        hapusError() {
            this.error = {
                email : '',
                password : ''
            }
        },
        pesanSukses(pesan) {
            this.pesan = {
                tampil : true,
                isi : pesan,
                tipe : 'success'
            }
        },
        pesanGagal(pesan) {
            this.pesan = {
                tampil : true,
                isi : pesan,
                tipe : 'error'
            }
        }
    }
}
</script>