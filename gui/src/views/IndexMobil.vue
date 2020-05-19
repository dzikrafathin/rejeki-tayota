<template>
    <v-list>
        <ItemMobil 
            :id="1"
            nama="Yaris"
        />
        <ItemMobil 
            :id="2"
            nama="Avanza"
        />
        <DialogTambah/>
    </v-list>
</template>

<script>
import ItemMobil from '../components/mobil/ItemMobil.vue'
import DialogTambah from '../components/mobil/DialogTambah.vue'

export default {
    components : {
        ItemMobil,
        DialogTambah
    }
}
</script>