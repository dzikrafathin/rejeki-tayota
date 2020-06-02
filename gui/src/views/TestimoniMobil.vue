<template>
    <div>
        <h3>Testimoni</h3>
        <item-testimoni 
            v-for="testimoni in daftarTestimoni"
            :key="testimoni.id"
            :data="testimoni"
            :ubah="ubah"
            :hapus="hapus"
        />
    </div>
</template>

<script>
import RepositoryFactory from '../repositories/RepositoryFactory.js'
import ItemTestimoni from '../components/mobil/ItemTestimoni.vue'

const testimoni = RepositoryFactory.get('testimoni')

export default {
    components : {
        ItemTestimoni
    },
    data : () => ({
        daftarTestimoni : []
    }),
    created() {
        this.index()
    },
    methods : {
        index() {
            const mobilId = this.$route.params.id

            testimoni.index(mobilId)
            .then(res => {
                this.daftarTestimoni = res.data
            })
        },
        ubah(payload) {
            const item = this.daftarTestimoni.find(item => item.id === payload.id);
            Object.assign(item,payload);
        },
        hapus(id) {
            const i = this.daftarTestimoni.map(item => item.id).indexOf(id);
            this.daftarTestimoni.splice(i,1);
        }
    }
}
</script>