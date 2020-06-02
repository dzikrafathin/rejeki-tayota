<template>
    <v-card
    >
        <v-card-title>
            Data Mobil
        </v-card-title>
        <v-card-text>
            <v-text-field
                label="Nama"
                v-model="mobil.nama"
            ></v-text-field>
            <v-textarea
                label="Deskripsi"
                v-model="mobil.deskripsi"
            >
            </v-textarea>
            <v-textarea
                label="Speksifikasi"
                v-model="mobil.speksifikasi"
            >
            </v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn
                outlined
                color="primary"
                @click="perbarui"
            >
                Simpan Perubahan
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import RepositoryFactory from '../repositories/RepositoryFactory.js'

const mobil = RepositoryFactory.get('mobil');

export default {
    data : () => ({
        mobil : {}
    }),
    created() {
        const mobilId = this.$route.params.id

        mobil.lihat(mobilId)
        .then(res => {
            this.mobil = res.data
        })
    },
    methods : {
        perbarui() {
            const mobilId = this.$route.params.id

            mobil.ubah(this.mobil,mobilId)
            .then(res => {
                this.mobil = res.data
            })
        }
    }
}
</script>