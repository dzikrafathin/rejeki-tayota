<template>
    <v-card>
        <v-img 
            v-if="punyaFoto"
            :src="$baseURL + mobil.foto.url"
            height="180"
            contain
        >
        </v-img>
        <v-sheet v-else
            height="180"
            color="grey"
        ></v-sheet>
        <v-card-text class="pa-1">
            <v-card-title>{{mobil.nama}}</v-card-title>
            <v-card-subtitle>{{mobil.deskripsi}}</v-card-subtitle>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <hapus-mobil
                :mobil="mobil"
            />
            <v-btn
                small
                outlined
                color="success"
                :to="`/admin/mobil/${mobil.id}/edit`"
            >
                Lihat
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import HapusMobil from './HapusMobil'

export default {
    props : ['mobil'],
    components : {
        HapusMobil
    },
    computed : {
        punyaFoto() {
            return this.mobil.foto != null
        }
    }
}
</script>