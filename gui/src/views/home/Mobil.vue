<template>
    <v-container fluid>
        <v-row
          justify="center"
        >
            <v-col
                md="7"
            >
                
                <SlideFoto
                    :mobilId="mobilId"
                />
                <TipeMobil
                    :mobilId="mobilId"
                />
            </v-col>
            <v-col
                md="3"
            >
                <DetailMobil
                    :mobilId="mobilId"
                />
                <Testimoni
                    :mobilId="mobilId"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import DetailMobil from '../../components/home/mobil/DetailMobil'
import SlideFoto from '../../components/home/mobil/SlideFoto'
import TipeMobil from '../../components/home/mobil/TipeMobil'
import Testimoni from '../../components/home/mobil/Testimoni'

export default {
    components : {
        DetailMobil,
        SlideFoto,
        TipeMobil,
        Testimoni
    },
    computed : {
        mobilId() {
            return this.$route.params.id
        }
    }
}
</script>