<template>
    <v-card>
        <v-card-title>
            Buat pemesanan
        </v-card-title>
        <v-card-text>
            <v-text-field
                label="Nama"
            ></v-text-field>
            <v-textarea
                label="Alamat"
            ></v-textarea>
            <v-text-field
                label="No. HP"
            ></v-text-field>
        </v-card-text>
        <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Daftar Pesanan</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn 
                                color="primary" 
                                dark 
                                class="mb-2" 
                                small
                                v-on="on"    
                            >Tambah Mobil</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{formTitle}}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-select
                                    label="Mobil"
                                ></v-select>
                                <v-select
                                    label="Tipe"
                                ></v-select>
                                <v-text-field
                                    label="Jumlah"
                                    type="number"
                                ></v-text-field>
                                <v-select
                                    label="Warna"
                                ></v-select>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    data : () => ({
        dialog : false,
        headers : [
            {
                text: 'Mobil',
                value: 'mobil'
            },
            {
                text: 'Tipe',
                value: 'tipe'
            },
            {
                text: 'Jumlah',
                value: 'jumlah'
            },
            {
                text: 'Warna',
                value: 'warna'
            }
        ],
        items : [
            {
                mobil : 'Avanza',
                tipe : 'TIPE-X',
                jumlah : 2,
                warna : 'Silver'
            },
            {
                mobil : 'Avanza',
                tipe : 'TIPE-X',
                jumlah : 2,
                warna : 'Silver'
            }
        ]
    })
}
</script>