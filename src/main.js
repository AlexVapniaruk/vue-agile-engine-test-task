require('./bootstrap')
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Auth from "./auth"
import Api from "./api"

Vue.use(Vuex)

import store from './store'

Vue.config.productionTip = false
window.auth = new Auth()
window.api = new Api()

window.auth.check();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
