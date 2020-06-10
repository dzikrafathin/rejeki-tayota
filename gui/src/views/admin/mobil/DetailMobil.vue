<template>
    <div>
                <v-tabs
                    background-color="grey"
                    dark
                >
                    <v-tab
                        :to="`/admin/mobil/${$route.params.id}/edit`"
                        append
                    >Ubah Data</v-tab>
                    <v-tab
                        :to="`/admin/mobil/${$route.params.id}/foto`"
                        append
                    >Galeri Foto</v-tab>
                    <v-tab
                        :to="`/admin/mobil/${$route.params.id}/tipe`"
                        append
                    >Daftar Tipe</v-tab>
                    <v-tab
                        :to="`/admin/mobil/${$route.params.id}/testimoni`"
                        append
                    >Testimoni</v-tab>
                </v-tabs>
                <router-view/>
    </div>
        
</template>

<script>
/*
import RepositoryFactory from '../../../repositories/RepositoryFactory'

const mobil = RepositoryFactory.get('mobil')

export default {
    data : () => ({
        mobil : null,
        loading : false,
        error : ''
    }),
    created() {
        this.mulai()
    },
    computed : {
        gagal() {
            return this.error != ''
        }
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
        }
    }
}*/
</script>