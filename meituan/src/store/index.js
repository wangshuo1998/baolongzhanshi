import Vue from 'vue'
import Vuex from 'vuex'
import ShopList from './ShopList'
import ShopDetail from './ShopDetail'
Vue.use(Vuex)
import indexModule from "./module/indexModule";
import headerModule from "./module/headerModule";
export default new Vuex.Store({
  modules: {
    ShopList,
    ShopDetail,
    indexModule,
    headerModule
  }
})