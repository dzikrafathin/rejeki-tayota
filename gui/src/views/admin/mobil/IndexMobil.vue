<template>
    <v-card
        :loading="loading"
    >
        <v-card-title>
            Administrasi data Mobil
        </v-card-title>
        <v-card-text>
            <v-row>
                <template v-if="error">
                    <v-alert type="error" outlined>
                        Terjadi kesalahan saat memuat data
                        <v-btn
                            @click="mulai"
                        >
                            Coba Lagi
                        </v-btn>
                    </v-alert>
                </template>
                <template v-else>
                    <v-col
                        md="4"
                        v-for="mobil in daftarMobil"
                        :key="mobil.id"
                    >
                        <item-mobil
                            :mobil="mobil"
                        ></item-mobil>
                    </v-col>
                </template>
                <tambah-mobil/>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import ItemMobil from '../../../components/admin/mobil/ItemMobil'
import TambahMobil from '../../../components/admin/mobil/TambahMobil'

export default {
    components : {
        ItemMobil,
        TambahMobil
    },
    data : () => ({
        error : false,
        loading : true
    }),
    created() {
        this.mulai()
    },
    computed : {
        ...mapState({
            daftarMobil : state => state.mobil.daftarMobil
        })
    },
    methods : {
        ...mapActions({
            indexMobil : 'indexMobil'
        }),
        mulai() {
            this.indexMobil()
            .then(() => {
                this.loading = false
            })
            .catch(() => {
                this.error = true
            })
        }
    }
}
</script>