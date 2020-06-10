<template>
    <v-card
        :loading="loading"
    >
        <template v-if="!loading">
            <template v-if="error">
                <v-alert type="error" outlined>
                    Terjadi kesalahan saat memuat data
                    <v-btn
                        @click="mulai"
                    >
                        Coba Lagi
                    </v-btn>
                </v-alert>
            </template>
            <template v-else>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img
                            v-if="punyaFoto"
                            :src="$baseURL + user.foto"
                        />
                        <v-icon
                            v-else
                            class="grey lighten-1 white--text"
                        >
                            mdi-account
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{user.nama}}</v-list-item-title>
                        <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-card-text
                    class="pa-1"
                >
                    <v-list
                        nav
                    >
                        <v-list-item
                            link
                            dense
                            :to="`/admin/profil`"
                        >
                            <v-list-item-content>
                                <v-list-item-title>Profil</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                            link
                            dense
                        >
                            <v-list-item-content>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </template>
        </template>
    </v-card>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    data : () => ({
        error : false,
        loading : true
    }),
    computed : {
        ...mapState({
            user : state => state.user.userSekarang
        }),
        ...mapGetters({
            isLoggedIn : 'isLoggedIn'
        }),
        punyaFoto() {
            return this.user.foto != null
        }
    },
    created() {
        this.mulai()
    },
    methods : {
        ...mapActions({
            isiUser : 'isiUser'
        }),
        mulai() {
            if (this.isLoggedIn) {
                this.loading = true
                if (this.user == null) {
                    this.isiUser()
                    .then(() => {
                        this.loading = false
                    })
                    .catch(() => {
                        this.loading = false
                        this.error = true
                    })
                }
            }
        }
    }
}
</script>