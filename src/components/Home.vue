<template lang="html">
  <v-content class="home">
    <Carousels/>
      <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
      <v-row
      align="center"
      justify="center"
      >
      <h1 class="display-2 font-weight-thin mb-4">Vue API and flickr.com search pictures</h1>
      <h3 class="subheading">  <a href="search">Go Go Go Go Go</a></h3>
      </v-row>
    </v-parallax>
  </v-content>
</template>

<script>
import Carousels from './header/Carousels.vue'

export default {
  name: 'Home',
  components:{
    Carousels,
  }
}
</script>

<style lang="css">
@import "../assets/css/styles.min.css";
</style>
