import Vue from 'vue'
import Vuex from 'vuex'
import ShopList from './ShopList'
import ShopDetail from './ShopDetail'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ShopList,
    ShopDetail
  }
})