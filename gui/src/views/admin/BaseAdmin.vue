<template>
    <v-container fluid>
        <v-row
          justify="center"
        >
            <v-col md="7">
                <router-view/>
            </v-col>
            <v-col md="3">
                <info-user />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import InfoUser from '../../components/admin/InfoUser'

export default {
    components : {
        InfoUser
    }
}
</script>