import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import indexModule from "./module/indexModule";
import headerModule from "./module/headerModule";
import minsuModule from './module/minsuModule'
export default new Vuex.Store({
  modules: {
    indexModule,
    headerModule,
    minsuModule
  }
})
