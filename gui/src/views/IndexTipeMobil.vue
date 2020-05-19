<template>
    <v-card>
        <v-card-title>
            Daftar Tipe Mobil
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col md="1"><b>No</b></v-col>
                <v-col md="3"><b>Tipe</b></v-col>
                <v-col md="2"><b>Stok</b></v-col>
                <v-col md="3"><b>Harga</b></v-col>
                <v-col md="3"><b>Aksi</b></v-col>
            </v-row>
            <item-tipe-mobil
                :id="1"
                tipe="TIPE X"
                :harga="290000"
                :stok="2"
            >
            </item-tipe-mobil>
        </v-card-text>
    </v-card>
</template>

<script>
import ItemTipeMobil from '../components/mobil/ItemTipeMobil.vue'

export default {
    components : {
        ItemTipeMobil
    },
    data : () => ({
        
    })
}
</script>