<template lang="html">
  <h2>{{ msg || 'Error' }}</h2>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    msg: String
  }
}
</script>

<style lang="css">
@import "../../assets/css/styles.min.css";
</style>
