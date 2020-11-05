import {
  // 获取店铺详细信息
  reqShopDetailData
} from '@/Api'
const state = {
  shopDetailData: {}
}
const mutations = {
  // 修改店铺详细信息
  REVISESHOPDETAILDATA(state, shopDetailData) {
    state.shopDetailData = shopDetailData
  }
}
const actions = {
  // 分发店铺详细信息
  async getShopDetailData({
    commit
  }, shopId) {
    const result = await reqShopDetailData(shopId)
    commit('REVISESHOPDETAILDATA', result.data)
  }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}