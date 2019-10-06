<template lang="html">
  <v-content>
    <Topmenu/>
  </v-content>
</template>

<script>
import Topmenu from './header/Topmenu.vue';
export default {
  name: 'Header',
  components: {
    Topmenu,
  }
}
</script>

<style lang="css">
@import "../assets/css/styles.min.css";
</style>
