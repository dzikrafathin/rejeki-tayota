<template>
    <v-dialog
        v-model="dialog"
        max-width="500"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                fab
                bottom
                right
                v-on="on"
                absolute
                color="primary"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                Tambah tipe baru
            </v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="form.tipe"
                    label="Nama Tipe"
                >
                </v-text-field>
                <v-text-field
                    v-model="form.harga"
                    label="Harga Rp."
                    type="number"
                ></v-text-field>
                <v-text-field
                    v-model="form.stok"
                    label="Stok"
                    type="number"
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
                    @click="tambahLocal"
                    >
                    Tambah
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory.js'

const tipeMobil = RepositoryFactory.get('tipeMobil');

export default {
    props : ['tambah'],
    data : () => ({
        dialog : false,
        form : {
            tipe:'',
            stok:0,
            harga:0
        }
    }),
    methods : {
        tambahLocal() {
            const mobilId = this.$route.params.id

            tipeMobil.buat(mobilId, this.form)
            .then(res => {
                this.tambah(res.data)
                this.dialog = false
            })
        }
    }
}
</script>