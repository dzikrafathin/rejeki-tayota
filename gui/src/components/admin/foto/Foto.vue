<template>
    <v-card
        outlined
    >
        <v-img
            contain
            height="180"
            :src="$baseURL + foto.url"
        >
        </v-img>
        <v-card-actions>
            <v-spacer/>
            <hapus-foto 
                :foto="foto"
            />
        </v-card-actions>
    </v-card>
</template>

<script>
import HapusFoto from './HapusFoto'

export default {
    props : ['foto'],
    components : {
        HapusFoto
    }
}
</script>