<template>
    <v-container fluid>
        <v-row
          justify="center"
        >
            <v-col
                md="6"
            >
                <v-card>
                    <v-card-title>Form Pemesanan</v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Nama"
                            prepend-icon="mdi-account"
                            v-model="form.nama"
                        />
                        <v-text-field
                            label="Nomor Handphone"
                            prepend-icon="mdi-phone"
                            v-model="form.noHp"
                        />
                        <v-textarea
                            prepend-icon="mdi-map-marker"
                            label="Alamat"
                            v-model="form.alamat"
                        />
                        <index-item-pemesanan/>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn
                            color="primary"
                            @click="kirim"
                        >
                            Kirim
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions} from 'vuex'
import IndexItemPemesanan from '../../components/home/pemesanan/IndexItemPemesanan'

export default {
    components : {
        IndexItemPemesanan
    },
    data : () => ({
        form : {
            nama : '',
            alamat : '',
            noHp : '',
            status : 0
        }
    }),
    methods : {
        ...mapActions({
            kirimPemesanan : 'kirimPemesanan'
        }),
        kirim() {
            this.kirimPemesanan(this.form)
            .then(() => {
                this.$router.push('/katalog')
            }).catch(err => {
                console.log(err.response.data.messages)
            })
        }
    }
}
</script>