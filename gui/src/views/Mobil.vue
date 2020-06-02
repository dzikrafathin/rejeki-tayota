<template>
    <v-container fluid>
        <v-row
            no-gutters
        >
            <v-col
                md="9"
            >
                <v-row
                    justify="center"
                    no-gutters>
                    <v-col
                        md="8"
                    >
                        <router-view/>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                md="3"
            >
               <v-card>
                   <v-list-item>
                       <v-list-item-avatar>
                           <template v-if="mobil.foto == null">
                                <v-icon
                                        class="grey lighten-2"
                                >
                                    mdi-car
                                </v-icon>
                           </template>
                           <template v-else>
                               <v-img
                                    :src="$baseURL + mobil.foto.url"
                               ></v-img>
                           </template>
                       </v-list-item-avatar>
                       <v-list-item-content>
                           <v-list-item-title class="title">{{mobil.nama}}</v-list-item-title>
                       </v-list-item-content>
                   </v-list-item>
                   <v-divider/>
                        <v-list
                                nav
                                dense
                        >
                            <v-list-item 
                                v-for="(menu,i) in daftarMenu"
                                :key="i"
                                link
                                :href="`/mobil/${$route.params.id}/${menu.link}`"
                                >
                                <v-list-item-icon>
                                    <v-icon>
                                        {{menu.icon}}
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>{{menu.isi}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
               </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import RepositoryFactory from '../repositories/RepositoryFactory.js'

const mobil = RepositoryFactory.get('mobil');

export default {
    created() {
        const mobilId = this.$route.params.id

        mobil.lihat(mobilId)
        .then(res => {
            this.mobil = res.data
        })
    },
    data : () => ({
        mobil : {},
        daftarMenu : [
            {
                icon : 'mdi-pencil',
                isi : 'Ubah Data',
                link: 'edit'
            },
            {
                icon: 'mdi-car',
                isi: 'Tipe Mobil',
                link: 'tipe'
            },
            {
                icon : 'mdi-camera',
                isi: 'Galeri Foto',
                link: 'foto'
            },
            {
                icon : 'mdi-comment-multiple',
                isi: 'Testimoni',
                link: 'testimoni'
            }
        ]   
    })
}
</script>