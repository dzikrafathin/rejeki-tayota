<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                fab
                bottom
                right
                v-on="on"
                fixed
                color="primary"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                Tambah Data Mobil
            </v-card-title>
            <v-card-text>
                <v-text-field
                    label="Nama"
                ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn 
                    outlined
                    color="error"
                    @click="dialog = false"
                    >
                    Batal
                </v-btn>
                <v-btn 
                    outlined
                    color="primary"
                    >
                    Tambah
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data : () => ({
        dialog : false
    })
}
</script>