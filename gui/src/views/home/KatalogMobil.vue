<template>
    <v-container fluid>
        <v-row>
            <item-mobil
                v-for="mobil in katalog"
                :key="mobil.id"
                :nama="mobil.nama"
                :deskripsi="mobil.deskripsi"
                :harga="mobil.harga"
                :foto="mobil.foto"
            />
        </v-row>
    </v-container>
</template>

<script>
import ItemMobil from '../../components/home/ItemMobil.vue'
import RepositoryFactory from '../../repositories/RepositoryFactory.js'

const mobil = RepositoryFactory.get('mobil')

export default {
    components : {
        ItemMobil
    },
    data : () => ({
        katalog : []
    }),
    created() {
        this.index()
    },
    methods : {
        async index() {
            const { data } = await mobil.katalog(); 
            this.katalog = data;
        }
    }
}
</script>