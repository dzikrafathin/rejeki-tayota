<template>
    <v-list-item
        :to="`/admin/pemesanan/${pemesanan.id}`"
    >
        <v-list-item-avatar>
            <v-icon
                class="grey lighten-1 white--text"
            >
                mdi-account
            </v-icon>
        </v-list-item-avatar>
        <v-list-content>
            <v-list-item-title>{{pemesanan.nama}}</v-list-item-title>
            <v-list-item-subtitle>{{pemesanan.noHp}}</v-list-item-subtitle>
        </v-list-content>
    </v-list-item>
</template>

<script>
export default {
    props : ['pemesanan']
}
</script>