import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelazyload from "vue-lazyload";
Vue.use(Vuelazyload,{
  loading:require("@/assets/lazy.png")
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
