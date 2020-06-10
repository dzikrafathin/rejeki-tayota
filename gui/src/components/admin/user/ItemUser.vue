<template>
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
        <edit-user
            :user="user"
        />
        <hapus-user
            :user="user"
        />
    </v-list-item>
</template>

<script>
import EditUser from './EditUser'
import HapusUser from './HapusUser'

export default {
    props : ['user'],
    components : {
        EditUser,
        HapusUser  
    },
    computed : {
        punyaFoto() {
            return this.user.foto != null
        }
    }
}
</script>