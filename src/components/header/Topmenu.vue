<template lang="html">
  <v-card
      color="grey lighten-4"
      flat
      height="50px"
      tile
    >
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="topmenu"><v-icon class="topmenu-ico"></v-icon><a class="topmenu__a" href="/">Home</a></v-toolbar-title>
        <v-toolbar-title class="topmenu"><v-icon class="topmenu-ico"></v-icon><a class="topmenu__a" href="/search">Search</a></v-toolbar-title>
        <v-toolbar-title class="topmenu"><v-icon class="topmenu-ico"></v-icon><a class="topmenu__a" href="/group">Group</a></v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-title class="topmenu"><router-link class="topmenu__a" to="/login">Login</router-link></v-toolbar-title>
        <v-toolbar-title class="topmenu"><router-link class="topmenu__a" to="/register">Register</router-link></v-toolbar-title>
        </v-toolbar>
    </v-card>
</template>

<script>

import key from '../../key.js'

export default {
  name: 'Topmenu',
  data: () => ({
    key: key,
  }),
}
</script>

<style lang="css">
@import "../../assets/css/styles.min.css";
</style>
