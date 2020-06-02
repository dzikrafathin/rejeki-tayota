<template>
    <v-row>
        <v-col md="4">{{tipe}}</v-col>
        <v-col md="2">{{stok}}</v-col>
        <v-col md="3">Rp. {{harga}}</v-col>
        <v-col md="3">
            <v-btn 
                x-small
                left
                outlined
                @click="dialog.edit = true"
                class="mr-1"
                color="success"
                >
                pesan
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>

export default {
    props : [
        'id',
        'tipe',
        'stok',
        'harga',
    ],
}
</script>