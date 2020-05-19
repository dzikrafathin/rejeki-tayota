<template>
    <v-row>
        <v-col md="1">{{id}}</v-col>
        <v-col md="3">{{tipe}}</v-col>
        <v-col md="2">{{stok}}</v-col>
        <v-col md="3">Rp. {{harga}}</v-col>
        <v-col md="3"></v-col>
    </v-row>
</template>

<script>
export default {
    props : [
        'id',
        'tipe',
        'stok',
        'harga'
    ]
}
</script>