<template>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-default-footer
    >
        <template v-slot:top>
            <tambah-item/>
        </template>
        <template v-slot:item.aksi="{ item }">
            <v-btn
                x-small
                color="error"
                outlined
                @click="hapus(item.no)"
            >
                Hapus
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import TambahItem from './TambahItem'

export default {
    components : {
        TambahItem
    },
    computed : {
        ...mapState({
            items : state => state.pemesanan.items
        })
    },
    methods : {
        ...mapMutations({
            hapus : 'hapus_item'
        })
    },
    data : () => ({
        headers : [
            {
                text : 'No',
                value : 'no'
            },
            {
                text : 'Mobil',
                value : 'mobil'
            },
            {
                text : 'Tipe',
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
            {
                text : 'Aksi',
                value : 'aksi'
            }
        ]
    })
}
</script>