import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import indexModule from "./module/indexModule";
export default new Vuex.Store({
  modules: {
    indexModule
  }
})
