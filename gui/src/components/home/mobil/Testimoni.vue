<template>
    <v-card
        class="my-2"
        :loading="loading"
    >
        <v-card-title>
            Testimoni
        </v-card-title>
        <v-card-text>
            <v-alert v-if="kosong"
                type="info"
                outlined
            >Belum ada yang memberikan testimoni</v-alert>
            <template v-else>
                <ItemTestimoni 
                    v-for="testimoni in daftarTestimoni"
                    :key="testimoni.id"
                    :testimoni="testimoni"
                />
            </template>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <TambahTestimoni 
                :mobilId="mobilId"
            />
        </v-card-actions>
    </v-card>
</template>

<script>
import RepoFactory from '../../../repositories/RepositoryFactory'
import ItemTestimoni from '../../../components/home/mobil/ItemTestimoni'
import TambahTestimoni from '../../../components/home/mobil/TambahTestimoni'

const testimoni = RepoFactory.get('testimoni')

export default {
    props : ['mobilId'],
    data : () => ({
        daftarTestimoni : [],
        loading : true,
        error : false,
        kosong : false
    }),
    components : {
        ItemTestimoni,
        TambahTestimoni
    },
    created() {
        this.mulai()
    },
    methods : {
        mulai() {
            testimoni.indexPublik(this.mobilId)
            .then(res => {
                if (res.data.length > 0) {
                    this.daftarTestimoni = res.data
                } else {
                    this.kosong = true
                }
                this.loading = false
            }).catch(() => {
                this.error = true
            })
        }
    }
}
</script>