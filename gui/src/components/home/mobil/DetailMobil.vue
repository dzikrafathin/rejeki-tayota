<template>
    <v-card
        :loading="loading"
    >
        <template
            v-if="!error"
        >
            <v-card-title>{{mobil.nama}}</v-card-title>
            <v-card-subtitle>Toyota</v-card-subtitle>
            <v-card-text>
                <p>
                    <b>Deskripsi</b>
                </p>
                
                <p> 
                    {{mobil.deskripsi}}
                </p>

                <p>
                    <b>Speksifikasi</b>
                </p> 
                {{mobil.speksifikasi}}
            </v-card-text>
        </template>
        <v-alert
            v-else
            type="error">
            {{errorMsg}}
        </v-alert>
    </v-card>
</template>

<script>
import RepositoryFactory from '../../../repositories/RepositoryFactory'

const mobil = RepositoryFactory.get('mobil')

export default {
    props : ['mobilId'],
    data : () => ({
        loading : true,
        error : false,
        errorMsg : '',
        mobil : {}
    }),
    created() {
        this.mulai()
    },
    methods : {
        mulai() {
            mobil.lihat(this.mobilId)
            .then(res => {
                this.mobil = res.data
                this.loading = false
            }).catch((err) => {
                this.errorMsg = err.response.data.message
                this.error = true
            })
        }
    }
}
</script>