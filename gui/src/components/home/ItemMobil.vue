<template>
    <v-col
        md="3"
    >
        <v-card>
             <v-img
                :src=" foto != null ?  $baseURL + foto.url : 'https://cdn.vuetifyjs.com/images/backgrounds/bg.jpg' "
                height="200px"
                class="white--text align-end"
                >
                <v-card-title>{{nama}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">Rp.{{harga.min}} - Rp.{{harga.max}}</v-card-subtitle>
            <v-card-text class="text--primary">
                {{deskripsi}}
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="primary"
                    text
                    outlined
                    small
                >
                    Selengkapnya
                </v-btn>
                <v-btn
                    color="success"
                    text
                    outlined
                    small
                >
                    Pesan
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props : [
        'nama',
        'deskripsi',
        'foto',
        'harga'
    ]
}
</script>