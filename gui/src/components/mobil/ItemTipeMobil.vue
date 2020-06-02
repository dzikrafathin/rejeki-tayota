<template>
    <v-row>
        <v-col md="1">{{id}}</v-col>
        <v-col md="3">{{tipe}}</v-col>
        <v-col md="2">{{stok}}</v-col>
        <v-col md="3">Rp. {{harga}}</v-col>
        <v-col md="3">
            <v-btn 
                x-small
                left
                outlined
                @click="dialog.edit = true"
                class="mr-1"
                color="success"
                >
                ubah
            </v-btn>
            <v-btn
                outlined
                x-small
                @click="dialog.hapus = true"
                left
                color="error"
            >
                hapus
            </v-btn>
        </v-col>
        <v-dialog
            v-model="dialog.edit"
            max-width="500"
        >
            <v-card>
                <v-card-title>
                    Ubah data tipe
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
                        @click="dialog.edit = false"
                        >
                        Batal
                    </v-btn>
                    <v-btn 
                        outlined
                        color="success"
                        @click="ubahLocal"
                        >
                        Ubah
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="dialog.hapus"
            max-width="500"
        >
            <v-card>
                <v-card-title>
                    Hapus data tipe
                </v-card-title>
                <v-card-text>
                    Anda yakin ingin menghapus data tipe {{tipe}} ?
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    
                    <v-btn 
                        outlined
                        color="primary"
                        @click="dialog.hapus = false"
                        >
                        Batal
                    </v-btn>
                    <v-btn 
                        outlined
                        color="error"
                        @click="hapusLocal"
                        >
                        Hapus
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory.js'

const tipeMobil = RepositoryFactory.get('tipeMobil');

export default {
    props : [
        'id',
        'tipe',
        'stok',
        'harga',
        'ubah',
        'hapus'
    ],
    created() {
        this.form = {
            tipe : this.tipe,
            stok : this.stok,
            harga : this.harga
        }
    },
    data : () => ({
        dialog : {
            edit : false,
            hapus : false
        },
        form : {
            tipe : '',
            harga: 0,
            stok : 0
        }
    }),
    methods : {
        ubahLocal() {
            tipeMobil.ubah(this.form,this.id)
            .then(res => {
                this.ubah(res.data)
                this.dialog.edit = false
            })
        },
        hapusLocal() {
            tipeMobil.hapus(this.id)
            .then(() => {
                this.hapus(this.id)
                this.dialog.hapus = false
            })
        }
    }
}
</script>