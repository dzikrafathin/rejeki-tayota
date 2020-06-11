<template>
    <v-card
        outlined
    >
        <v-img
            v-if="punyaFoto"
            :src="$baseURL + mobil.foto.url"
            height="180"
            contain
        ></v-img>
        <v-sheet
            v-else
            height="180"
            color="grey"
        ></v-sheet>
        <v-card-title>{{mobil.nama}}</v-card-title>
        <v-card-subtitle>{{harga}}</v-card-subtitle>
        <v-card-text>
            {{mobil.deskripsi}}
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn
                small
                color="success"
                :to="`/mobil/${mobil.id}`"
            >
                Lihat Detail Mobil
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props : ['mobil'],
    computed : {
        punyaFoto() {
            return this.mobil.foto != null
        },
        harga() {
            return this.formatRupiah(this.mobil.harga, 'Rp. ')
        }
    },
    methods : {
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