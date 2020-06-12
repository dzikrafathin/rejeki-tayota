<template>
    <v-card>
        <v-card-title>Detail Pemesanan</v-card-title>
        <v-card-text>
            <v-text-field
                label="Nama"
                prepend-icon="mdi-account"
                v-model="form.nama"
                readonly
            />
            <v-text-field
                label="Nomor Handphone"
                prepend-icon="mdi-phone"
                v-model="form.noHp"
                readonly
            />
            <v-textarea
                prepend-icon="mdi-map-marker"
                label="Alamat"
                readonly
                v-model="form.alamat"
            />

        </v-card-text>
        <v-card-title>Item Yang Dipesan</v-card-title>
        <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
        >
            <template v-slot:item.tipe="{ item }">
                {{item.tipe.mobil.nama}} @ {{item.tipe.tipe}}
            </template>
        </v-data-table>
        <v-card-actions>
            <v-spacer/>
            <v-dialog
                max-width="500"
                v-model="dialog"
            >
                <template v-slot:activator="{on}">
                    <v-btn
                        color="error"
                        v-on="on"
                    >Hapus Pemesanan</v-btn>
                </template>
                <v-card>
                    <v-card-title>Hapus Pemesanan</v-card-title>
                    <v-card-text>Anda yakin ingin menghapus pemesanan ini ?</v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn
                            color="success"
                            @click="dialog = false"
                        >Batal</v-btn>
                        <v-btn
                            color="error"
                            @click="hapus"
                        >Hapus</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
import RepositoryFactory from '../../../repositories/RepositoryFactory'

const pemesanan = RepositoryFactory.get('pemesanan')


export default {
    data : () => ({
        form : {},
        dialog : false,
        headers : [
            {
                text : 'Mobil & Tipe',
                value : 'tipe'
            },
            {
                text : 'Jumlah',
                value : 'jumlah'
            },
            {
                text : 'Warna',
                value : 'warna'
            },
        ],
        items : []
    }),
    computed : {
        pemesananId() {
            return this.$route.params.id
        }
    },
    created() {
        this.mulai()
    },
    methods : {
        mulai() {
            pemesanan.lihat(this.pemesananId)
            .then(res => {
                this.form = res.data
            })
            pemesanan.lihatItem(this.pemesananId)
            .then(res => {
                this.items = res.data
            })
        },
        hapus() {
            pemesanan.hapus(this.pemesananId)
            .then(() => {
                this.$router.push('/admin/pemesanan')
            })
        }
    }
}
</script>