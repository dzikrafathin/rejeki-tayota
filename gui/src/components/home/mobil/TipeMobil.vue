<template>
    <v-card
        class="my-2"
    >
        <v-card-title>
            Daftar Tipe Mobil
        </v-card-title>
        <v-card-text>
            <v-data-table
                hide-default-footer
                :headers="headers"
                :items="daftarTipe"
                :loading="loading"
            >
                <template v-slot:item.harga="{ item }">
                    {{formatRupiah(item.harga, 'Rp. ')}}
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import RepoFactory from '../../../repositories/RepositoryFactory'

const tipeMobil = RepoFactory.get('tipeMobil')

export default {
    props : ['mobilId'],
    data : () => ({
        loading : true,
        error : false,
        headers : [
            {
                text: 'Tipe',
                value : 'tipe'
            },
            {
                text: 'Harga',
                value : 'harga'
            },
        ],
        daftarTipe : []
    }),
    created() {
        this.mulai()
    },
    methods : {
        mulai() {
            tipeMobil.index(this.mobilId)
            .then(res => {
                this.daftarTipe = res.data
                this.loading = false
            }).catch(() => {
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

