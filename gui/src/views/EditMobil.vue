<template>
    <v-card
    >
        <v-card-title>
            Data Mobil
        </v-card-title>
        <v-card-text>
            <v-text-field
                label="Nama"
            ></v-text-field>
            <v-textarea
                label="Deskripsi"
            >
            </v-textarea>
            <v-textarea
                label="Speksifikasi"
            >
            </v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn
                outlined
                color="primary"
            >
                Simpan Perubahan
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    
}
</script>