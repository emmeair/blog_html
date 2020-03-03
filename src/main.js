import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$web_api = "https://baidu.com"



new Vue({
  vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
