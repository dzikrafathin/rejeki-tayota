<template>
    <v-card>
        <v-card-title>
            Galeri Foto
        </v-card-title>
        <v-container class="pa-1">
            <v-item-group
                v-model="terpilih"
                multiple
                >
                <v-row>
                    <v-col
                        v-for="foto in galeri"
                        :key="foto.id"
                        cols="12"
                        md="6"
                    >
                        <v-item v-slot:default="{active, toggle}">
                            <v-img
                                :src="$baseURL + foto.url"
                                class="text-right pa-2"
                                @click="toggle"
                                >
                                <v-btn
                                    icon
                                    dark
                                >
                                    <v-icon>
                                        {{active ? 'mdi-heart' : 'mdi-heart-outline'}}
                                    </v-icon>
                                </v-btn>
                            </v-img>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-container>
        <v-card-actions>
            <v-spacer/>
            <template v-if="terpilih.length > 0">
                <v-btn
                    outlined
                    color="error"
                >
                    Hapus {{terpilih.length}} foto terpilih
                </v-btn>
            </template>
            <v-btn
                outlined
                color="primary"
                @click="dialogTambah = true"
            >
                Upload Foto baru
            </v-btn>
        </v-card-actions>
        <v-dialog
            v-model="dialogTambah"
            max-width="500"
        >
            <v-card>
                <v-card-title>
                    Upload Foto Baru
                </v-card-title>
                <v-card-text>
                    <v-form id="foto">
                        <v-file-input
                            label="Upload Foto"
                            name="foto[]"
                            multiple
                            prepend-icon="mdi-camera"
                            chips
                            dense
                            outlined
                        ></v-file-input>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn 
                        outlined
                        color="error"
                        @click="dialogTambah = false"
                        >
                        Batal
                    </v-btn>
                    <v-btn 
                        outlined
                        color="primary"
                        @click="tambah"
                        >
                        Tambah
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import RepositoryFactory from '../repositories/RepositoryFactory.js'

const foto = RepositoryFactory.get('foto');

export default {
    data : () => ({
        terpilih : [],
        galeri : [],
        dialogTambah : false
    }),
    created() {
        this.index()
    },
    methods : {
        index() {
            const mobilId = this.$route.params.id

            foto.index(mobilId)
            .then(res => {
                this.galeri = res.data
            })
        },
        tambah() {
            const mobilId = this.$route.params.id
            var dataFoto = new FormData(document.getElementById('foto'));

            foto.buat(mobilId,dataFoto)
            .then(res => {
                this.galeri = this.galeri.concat(res.data)
                this.dialogTambah = false
            })
        },
        hapus() {
            
        }
    }
}
</script>