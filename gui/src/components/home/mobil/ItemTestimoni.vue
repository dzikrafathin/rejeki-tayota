<template>
    <v-card
        outlined
    >
        <v-card-text>
            <b>{{testimoni.nama}}</b> - {{testimoni.isi}}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props : ['testimoni']
}
</script>