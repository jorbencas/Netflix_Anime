/* import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
 */
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import store from "./store";
import router from "./router";
import $mixings from "./mixings";

Vue.use(axios);

new Vue({
  mixins: [$mixings],
  router,
  store,
  render: h => h(App),
}).$mount('#app')
