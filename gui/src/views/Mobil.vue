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
                           <v-icon
                                class="grey lighten-2"
                           >
                               mdi-car
                           </v-icon>
                       </v-list-item-avatar>
                       <v-list-item-content>
                           <v-list-item-title class="title">Avanza</v-list-item-title>
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
                                link>
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
export default {
    data : () => ({
        daftarMenu : [
            {
                icon : 'mdi-pencil',
                isi : 'Ubah Data'
            },
            {
                icon: 'mdi-car',
                isi: 'Tipe Mobil'
            },
            {
                icon : 'mdi-camera',
                isi: 'Galeri Foto'
            },
            {
                icon : 'mdi-currency-usd',
                isi : 'Pemesanan'
            },
            {
                icon : 'mdi-comment-multiple',
                isi: 'Testimoni'
            }
        ]   
    })
}
</script>