<template>
    <v-card
        :loading="loading"
    >
        <v-carousel
            v-if="!error"
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
        >
            <v-carousel-item
               v-for="foto in slideFoto"
               :key="foto.id"
            >
                <v-img
                    height="100%"
                    contain
                    :src="$baseURL + foto.url"
                ></v-img>
            </v-carousel-item>
        </v-carousel>
        <v-alert
            v-else
            type="error">
            Terjadi Kesalahan saat memuat data
        </v-alert>
    </v-card>
</template>

<script>
import RepositoryFactory from '../../../repositories/RepositoryFactory'

const foto = RepositoryFactory.get('foto')

export default {
    props : ['mobilId'],
    data : () => ({
        slideFoto : [],
        error : false,
        loading : true
    }),
    created() {
        this.mulai()
    },
    methods : {
        mulai() {
            foto.index(this.mobilId)
            .then(res => {
                this.slideFoto = res.data
                this.loading = false
            }).catch(() => {
                this.error = true
                this.loading = false
            })
        }
    }
}
</script>
