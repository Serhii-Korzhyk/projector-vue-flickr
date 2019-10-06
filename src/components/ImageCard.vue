<template lang="html">
  <!-- <li class="image-card">
<img class="image-card__image" :src="image.url_n" :alt="image.title">


      <div class="image-card__body">
        <p v-if="image.title" class="image-title">{{image.title}}</p>
        <p v-else class="image-title">No Title Found</p>

        <p class="image-owner">By {{image.ownername}}</p>
        <section class="image-date-view-wrapper">
          <p class="image-date">{{image.datetaken | moment}}</p>
          <p class="image-views">Views: {{image.views}}</p>
        </section>
      </div>
    </li> -->


    <v-card
        class="mx-auto image-card"
        max-width="260"

      >
        <v-img
          class="white--text"
          height="200px"
          :src="image.url_n"
          :alt="image.title"
          :title="image.title"
        >
          <v-card-title class="align-end fill-height">
            <p v-if="image.title" class="image-title">{{ image.title }}</p>
            <p v-else class="image-title">No Title Found</p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <span class="image-date">{{ image.datetaken | moment}}</span><br>
          <span class="text--primary">
            <span class="image-views">Views: {{ image.views }}</span><br>
            <span class="image-owner">By {{ image.ownername }}</span>
          </span>
        </v-card-text>

        <!-- <v-card-actions>
          <v-btn
            text
            color="orange"
          >
            Share
          </v-btn>
          <v-btn
            text
            color="orange"
          >
            Explore
          </v-btn>
        </v-card-actions> -->
      </v-card>
</template>

<script>
import moment from 'moment';
export default {
  name: 'ImageCard',
  props: ['image'],
  filters: {
    moment(date) {
      return moment(date).format("MMMM Do, YYYY");
    }
  }
}
</script>

<style lang="css">
@import "../assets/css/styles.min.css";
</style>
