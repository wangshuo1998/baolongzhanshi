import {
  // 获取店铺详细信息
  reqShopDetailData,
  reqMerchantComment
} from '@/Api'
const state = {
  shopDetailData: {},
  merchantComment: {}
}
const mutations = {
  // 修改店铺详细信息
  REVISESHOPDETAILDATA(state, shopDetailData) {
    state.shopDetailData = shopDetailData
  },
  // 修改商家评论信息
  REVISEMERCHANTCOMMENT(state, merchantComment) {
    state.merchantComment = merchantComment
  }
}
const actions = {
  // 分发店铺详细信息
  async getShopDetailData({
    commit
  }, shopId) {
    const result = await reqShopDetailData(shopId)
    commit('REVISESHOPDETAILDATA', result.data)
  },
  // 分发商家评论信息
  async getMerchantComment({
    commit
  }, {
    shopId,
    isSea
  }) {
    const result = await reqMerchantComment(shopId, isSea)
    commit('REVISEMERCHANTCOMMENT', result.data)
  }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}