<template>
    <div>
        <v-list-item
            link
        >
            <v-list-item-avatar>
                <template v-if="foto == null">
                    <v-icon
                        class="grey lighten-2"
                    >
                        mdi-car
                    </v-icon>
                </template>
                <template v-else>
                    <v-img
                        :src="$baseURL + foto.url"
                        ></v-img>
                </template>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{nama}}</v-list-item-title>
            </v-list-item-content>
            <v-btn
                small
                class="ml-1"
                outlined
                :href="`mobil/${id}/edit`"
                color="success"
            >
                <v-icon
                    left
                >
                    mdi-pencil
                </v-icon>
                ubah
            </v-btn>
            <v-btn
                small
                class="ml-1"
                outlined
                color="error"
                @click="dialogHapus = true"
            >
                <v-icon
                    left
                >
                    mdi-delete
                </v-icon>
                hapus
            </v-btn>
            
        </v-list-item>
        <v-divider/>
        <v-dialog
            v-model="dialogHapus"
            max-width="500"
        >
            <v-card>
                <v-card-title>Hapus Mobil</v-card-title>
                <v-card-text>
                    Anda yakin ingin menghapus data mobil {{nama}} ?
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    
                    <v-btn 
                        outlined
                        color="primary"
                        @click="dialogHapus = false"
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
    </div>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory.js'

const mobil = RepositoryFactory.get('mobil');

export default {
    props : ['id','nama','foto', 'hapus'],
    data : () => ({
        dialogHapus : false,
    }),
    methods : {
        hapusLocal : function() {
            mobil.hapus(this.id)
            .then(() => {
                this.hapus(this.id)
            })
        }
    }
}
</script>