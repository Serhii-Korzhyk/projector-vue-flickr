<template lang="html">
  <div class="search">
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
        <image-card class="search__card__image"
          v-for="image in images"
          :key="image.id"
          :image="image" />
      </div>
      <ImageCard />
  </div>
</template>

<script>
import key from '../key.js';
import axios from 'axios';
import ImageCard from '../components/ImageCard.vue';

export default {
  name: 'Search',
  components: {
    ImageCard
  },
  data() {
    return {
      loading: false,
      tag: '',
      images: []
    }
  },
  computed: {
    cleanImages() {
      return this.images.filter(image => image.url_n)
    }
  },
  methods: {
    search() {
      this.loading = true;
      this.fetchImages()
        .then((response) => {
          this.images = response.data.photos.photo;
          this.loading = false;
        })
        .catch((error) => {
          console.log("An error ocurred: ", error);
        })
    },
    fetchImages() {
      return axios({
        method: 'get',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.photos.search',
          api_key: key.api_key,
          tags: this.tag,
          extras: 'url_n, owner_name, date_taken, views',
          page: 1,
          format: 'json',
          nojsoncallback: 1,
          per_page: 30,
        }
      })
    },
  }
}
</script>

<style lang="css" scoped>
</style>
