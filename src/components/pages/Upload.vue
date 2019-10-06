<template lang="html">
  <div id="app" class="form-upload">
    <v-form class="login-form"
        ref="form"
        v-model="valid"
        lazy-validation
      >
      <h1 class="login-form-h1">Uploading Photos</h1>
        <v-text-field
          v-model="title"
          :counter="20"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>

        <v-textarea
            v-model="description"
          :counter="100"
          :rules="descriptionRules"
          label="Description"
          required
        ></v-textarea>

        <v-text-field
            v-model="tags"
          :counter="100"
          :rules="tagsRules"
          label="Tags"
          required
        ></v-text-field>

          <v-file-input
            label="File input"
            filled
            prepend-icon="mdi-camera"
          ></v-file-input>

          <v-col class="d-flex" cols="12" sm="12">
             <v-select
               :items="items"
               filled
               label="Permissions"
             ></v-select>
           </v-col>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="I agree!"
          required
        ></v-checkbox>



        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 form-login-btn"
          @click="validate"
        >
          Login
        </v-btn>

      </v-form>

  </div>
</template>

<script>

export default {
  name: 'Upload',

  data: () => ({
    items: ['Public', 'Friend',   'Family'],
    valid: true,
    title: '',
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    description: '',
    descriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 100) || 'Description must be less than 100 characters',
    ],
    tags: '',
    tagsRules: [
      v => !!v || 'Tags is required',
      v => (v && v.length <= 100) || 'Tags must be less than 100 characters',
    ],
    checkbox: false,
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style lang="css">
@import "../../assets/css/styles.min.css";
</style>
