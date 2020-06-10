<template>
    <v-card
        :loading="loading"
    >
        <v-card-text>
            <template v-if="error">
                <v-alert
                    type="error"
                >
                    <v-row align="center">
                        <v-col class="grow">
                            Terjadi Kesalahan saat memuat data
                        </v-col>
                        <v-col class="shrink">
                            <v-btn
                                @click="mulai"
                            >
                                Coba Lagi
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
            </template>
            <template v-else>
                <Testimoni
                    v-for="testimoni in get(mobilId)"
                    :key="testimoni.id"
                    :testimoni="testimoni"
                />
            </template>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Testimoni from '../../../components/admin/testimoni/Testimoni'

export default {
    components : {
        Testimoni
    },
    data : () => ({
        loading : false,
        error : false
    }),
    created() {
        this.mulai()
    },
    computed : {
        ...mapGetters({
            get : 'getTestimoni'
        }),
        mobilId() {
            return this.$route.params.id
        }
    },
    methods : {
        ...mapActions({
            index : 'indexTestimoni'
        }),
        mulai() {
            this.loading = true
            this.index(this.mobilId)
            .then(() => {
                this.loading = false
            }).catch(() => {
                this.error = true
                this.loading = false
            })
        }
    }
}
</script>