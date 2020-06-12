<template>
    <v-card
        :loading="loading"
    >
        <v-card-title>
            Administrasi Pemesanan
        </v-card-title>
        <v-card-text
            v-if="error"
        >
            <v-alert 
                type="error" 
                outlined
                
                >
                Terjadi kesalahan saat memuat data
                <v-btn
                    @click="mulai"
                >
                    Coba Lagi
                </v-btn>
            </v-alert>
        </v-card-text>
            <v-list
                v-else
            >
                <ItemPemesanan
                    v-for="pemesanan in daftar"
                    :key="pemesanan.id"
                    :pemesanan="pemesanan"
                />
            </v-list>
        
    </v-card>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ItemPemesanan from '../../../components/admin/pemesanan/ItemPemesanan'

export default {
    components : {
        ItemPemesanan
    },
    data : () => ({
        loading : true,
        error : false
    }),
    computed : {
        ...mapState({
            daftar : state => state.pemesanan.daftarPemesanan
        })
    },
    created() {
        this.mulai()
    },
    methods : {
        ...mapActions({
            index : 'indexPemesanan'
        }),
        mulai() {
            this.index()
            .then(() => {
                this.loading = false
            }).catch(() => {
                this.loading = false
                this.error = true
            })
        }
    }
}
</script>