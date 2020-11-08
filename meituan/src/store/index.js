import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import indexModule from "./module/indexModule";
import headerModule from "./module/headerModule";
import homestayInfoModule from "./module/homestayInfoModule";
export default new Vuex.Store({
  modules: {
    indexModule,
    headerModule,
    homestayInfoModule
  }
})
