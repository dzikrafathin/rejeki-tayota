<template>
    <v-card
        :loading="loading"
    >
        <TambahUser/>
        <v-card-title>Index Administrator</v-card-title>
        <v-card-text>
            <ItemUser
                v-for="user in daftarUser"
                :key="user.id"
                :user="user"
            />
        </v-card-text>
    </v-card>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ItemUser from '../../../components/admin/user/ItemUser'
import TambahUser from '../../../components/admin/user/TambahUser'

export default {
    data : () => ({
        loading : true,
        error : false
    }),
    components : {
        ItemUser,
        TambahUser
    },
    computed : {
        ...mapState({
            daftarUser : state => state.user.daftarUser
        })
    },
    created() {
        this.mulai()
    },
    methods : {
        ...mapActions({
            index : 'indexUser'
        }),
        mulai() {
            this.index()
            .then(() => {
                this.loading = false
            }).catch(() => {
                this.error = true
            })
        }
    }
}
</script>