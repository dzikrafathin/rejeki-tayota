<template>
    <div>
        <v-list-item
            link
        >
            <v-list-item-avatar>
                <v-icon
                    class="grey lighten-2"
                >
                    mdi-car
                </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{nama}}</v-list-item-title>
            </v-list-item-content>
            <v-btn
                small
                class="ml-1"
                outlined
                color="error"
            >
                <v-icon
                    left
                >
                    mdi-delete
                </v-icon>
                delete
            </v-btn>
            
        </v-list-item>
        <v-divider/>
    </div>
</template>

<script>
export default {
    props : ['id','nama']
}
</script>