<template>
  <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} Beetroot Academy <strong>Korzhik Sergei</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="css">
@import "../../assets/css/styles.min.css";
</style>
