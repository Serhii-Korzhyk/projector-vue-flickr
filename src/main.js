import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';
import UploadImage from 'vue-upload-image';

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  template: '<upload-image url=""></upload-image>',
   components: {
       UploadImage
   },
  render: h => h(App)
}).$mount('#app')
