<template>
    <v-card class="my-2">
        <v-card-title>{{data.nama}}</v-card-title>
        <v-card-subtitle>{{data.email}}</v-card-subtitle>
        <v-card-text>{{data.isi}}</v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn
                v-if="!data.terverifikasi"
                outlined
                color="success"
                small
                @click="publikasikan"
            >
                Publikasikan
            </v-btn>
            <v-btn
                outlined
                color="error"
                small
                @click="hapusLocal"
            >
                Hapus
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory.js'

const testimoni = RepositoryFactory.get('testimoni')

export default {
    props : ['data','ubah','hapus'],
    methods : {
        publikasikan() {
            testimoni.ubah({
                terverifikasi : 1
            },this.data.id)
            .then(res => {
                this.ubah(res.data)
            })
        },
        hapusLocal() {
            testimoni.hapus(this.data.id)
            .then(() => {
                this.hapus(this.data.id)
            })
        }
    }
}
</script>