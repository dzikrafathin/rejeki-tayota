<template>
    <div>
        <tambah-tipe 
        />
        <v-data-table
            :loading="loading"
            :headers="headers"
            :items="getTipeMobil(mobilId)"
        >
            <template v-slot:item.harga="{ item }">
                {{formatRupiah(item.harga, 'Rp. ')}}
            </template>
            <template v-slot:item.aksi="{ item }">
                <edit-tipe
                    :tipe="item"
                />
                <hapus-tipe
                    :tipe="item"
                />
            </template>
        </v-data-table>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import TambahTipe from '../../../components/admin/tipe/TambahTipe'
import EditTipe from '../../../components/admin/tipe/EditTipe'
import HapusTipe from '../../../components/admin/tipe/HapusTipe'

export default {
    components : {
        TambahTipe,
        EditTipe,
        HapusTipe
    },
    data : () => ({
        loading : false,
        error : false,
        headers : [
            {
                text : 'Nama Tipe',
                value : 'tipe'
            },
            {
                text : 'Harga',
                value : 'harga'
            },
            {
                text : 'Stok',
                value : 'stok'
            },
            { text: 'Aksi', value: 'aksi', sortable: false }
        ],
        daftarTipeMobil : [
            {
                id : 1,
                tipe : 'X-Type',
                harga : 290300000,
                stok : 10
            }
        ]
    }),
    computed : {
        ...mapGetters({
            getTipeMobil : 'getTipeMobil'
        }),
        mobilId() {
            return this.$route.params.id
        }
    },
    created() {
        this.mulai()
    },
    methods : {
        ...mapActions({
            indexTipeMobil : 'indexTipeMobil'
        }),
        mulai() {
            this.error = false
            this.loading = true
            this.indexTipeMobil(this.mobilId)
            .then(() => {
                this.loading = false
            }).catch(() => {
                this.loading = false
                this.error = true
            })
        },
        formatRupiah(angka, prefix) {
            var number_string = angka.toString(),
            split = number_string.split(","),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi),
            separator;

            // tambahkan titik jika yang di input sudah menjadi angka ribuan
            if (ribuan) {
                separator = sisa ? "." : "";
                rupiah += separator + ribuan.join(".");
            }

            rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
            return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
        }
    }
}
</script>