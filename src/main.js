import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import router from "./router";

Vue.config.productionTip = false
Vue.use(ElementUi)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
