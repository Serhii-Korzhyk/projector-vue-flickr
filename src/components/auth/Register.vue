<template>
  <v-form class="form-register"
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <h1 class="form-register-h1">Register</h1>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="passswords"
        :rules="passswordsRules"
        label="Passwords"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="I agree!"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 form-register-btn"
        @click="validate"
      >
        Register
      </v-btn>

      </v-form>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passswords: '',
      passswordsRules: [
        v => !!v || 'Passwords is required',
        v => (v && v.length <= 8) || 'Passwords must be less than 8 characters',
      ],
      select: null,
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
