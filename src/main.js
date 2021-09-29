import Vue from 'vue'
import App from './App.vue'
import store from "../src/store/index"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')