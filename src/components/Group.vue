<template lang="html">
  <div class="Group">
    <form class="search-form">
        <label class="search-form-label">
          Search:
          <input class="form-label-input" v-model="tag" type="text" onfocus="this.placeholder = ''" placeholder="Enter search images">
        </label>
        <!-- <button type="submit" class="go-button" @click.prevent="search">Search</button> -->
        <v-btn x-large color="primary" class="search-button" @click="search()">
          <v-icon>fas fa-search</v-icon>
          <span>Search</span>
        </v-btn>
      </form>
      <p v-if="loading">
        Loading...
      </p>
      <div v-else class="search__card">
        <group-card class="search__card__image"
          v-for="group in groups"
          :key="group.id"
          :group="group" />
      </div>
      <GroupCard />
  </div>
</template>

<script>
import key from '../key.js';
import axios from 'axios';
import GroupCard from '../components/GroupCard.vue';

export default {
  name: 'Group',
  components: {
    GroupCard
  },
  data() {
    return {
      loading: false,
      tag: '',
      groups: []
    }
  },
  computed: {
    cleanImages() {
      return this.groups.filter(group => groups.url_n)
    }
  },
  methods: {
    search() {
      this.loading = true;
      this.fetchGroup()
        .then((response) => {
          this.groups = response.data.groups.group;
          this.loading = false;
        })
        .catch((error) => {
          console.log("An error ocurred: ", error);
        })
    },
    fetchGroup() {
      return axios({
        method: 'get',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.groups.search',
          api_key: key.api_key,
          page: 1,
          per_page: 100,
        }
      })
    },
  }
}
</script>

<style lang="css" scoped>
</style>
