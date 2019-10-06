<template lang="html">
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
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
            <div class="display-3">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  name: 'Carousels',
  data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
        ],
        slides: [
          'Beetroot Academy',
          'Project Vue from Sergei Korzhik',
          'Please strictly not judge',
        ],
      }
    },

}
</script>

<style lang="css">
@import "../../assets/css/styles.min.css";
</style>
