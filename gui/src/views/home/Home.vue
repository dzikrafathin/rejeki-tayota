<template>
    <v-container fluid>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                md="8"
            >
                <v-card
                    min-height="200px"
                    style="margin-top:200px;padding-top:100px"
                >
                <v-row
                    justify="center"
                >
                    <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    show-arrows-on-hover
    
    style="position:absolute;top:-200px;width:60%"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
                </v-row>
                <v-sheet>
                    <h1>Rejeki Toyota</h1>
                </v-sheet>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }

</script>