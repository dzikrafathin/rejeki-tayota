<template>
    <v-dialog
        max-width="500"
        v-model="dialog"
    >
        <template v-slot:activator="{on}">
            <v-btn
                color="primary"
                v-on="on"
            >
                Tambah
            </v-btn>
        </template>
        <v-card>
            <v-card-title>Tambah Item</v-card-title>
            <v-card-text>
                <v-select
                    :items="daftarMobil"
                    item-text="nama"
                    item-value="id"
                    v-model="form.mobilId"
                    @change="indexTipe(form.mobilId)"
                    label="Pilih Mobil"
                ></v-select>
                <v-select
                    :items="daftarTipe"
                    item-text="tipe"
                    item-value="id"
                    v-model="form.tipe_mobil_id"
                    label="Pilih Tipe"
                ></v-select>
                <v-text-field
                    label="Warna"
                    v-model="form.warna"
                >
                </v-text-field>
                <v-text-field
                    label="Jumlah"
                    v-model="form.jumlah"
                    type="number"
                >
                </v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="error"
                    outlined
                    @click="dialog = false"
                >
                    Batal
                </v-btn>
                <v-btn
                    color="primary"
                    @click="tambah"
                >
                    Tambah
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data : () => ({
        dialog : false,
        form : {
            mobilId : 0,
            tipe_mobil_id : 0,
            warna : '',
            jumlah : 0
        },
    }),
    computed : {
        ...mapState({
            daftarMobil : state => state.pemesanan.daftarMobil,
            daftarTipe : state => state.pemesanan.daftarTipe
        })
    },
    methods : {
        ...mapActions({
            tambahItem : 'tambahItem',
            indexMobil  : 'indexPemesananMobil',
            indexTipe : 'indexPemesananTipe'
        }),
        tambah() {
            this.tambahItem(this.form)
            this.dialog = false
        }
    },
    created() {
        this.indexMobil()
    }
}
</script>