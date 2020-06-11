<template>
    <v-container fluid>
        <v-row
          justify="center"
        >
            <v-col
                md="10"
            >
                <v-card
                    :loading="loading"
                >
                    <v-card-title>Daftar Mobil</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col
                                md="3"
                                v-for="mobil in katalog"
                                :key="mobil.id"
                            >
                                <ItemMobil
                                    :mobil="mobil"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RepositoryFactory from '../../repositories/RepositoryFactory'
import ItemMobil from '../../components/home/mobil/ItemMobil'

const mobil = RepositoryFactory.get('mobil')

export default {
    components : {
        ItemMobil
    },
    data : () => ({
        loading : true,
        error : false,
        katalog : []
    }),
    created() {
        this.mulai()
    },
    methods : {
        mulai() {
            mobil.katalog()
            .then((res) => {
                this.katalog = res.data
                this.loading = false
            }).catch(() => {
                this.loading = false
                this.error = true
            });
        }
    }
}
</script> 