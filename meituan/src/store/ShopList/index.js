import {
  reqFilters,
  reqPoiList,
  reqGuessInfo
} from '@/Api'

const state = {
  filtersDatas: {},
  poiList: [],
  guessInfo: []
}
const mutations = {
  REVISEFILTERSDATAS(state, filtersDatas) {
    state.filtersDatas = filtersDatas
  },
  REVISEPOILIST(state, poiList) {
    state.poiList = poiList
  },
  REVISEGUESSINFO(state, guessInfo) {
    state.guessInfo = guessInfo
  }
}
const actions = {
  // 获取商品分类筛选数据
  async getFiltersDatas({
    commit
  }) {
    const result = await reqFilters()
    commit('REVISEFILTERSDATAS', result.data)
  },
  // 获取商品分类数据
  async getPoiList({
    commit
  }) {
    const result = await reqPoiList()
    commit('REVISEPOILIST', result.data.data || {})
  },
  // 获取猜你喜欢数据
  async getGuessInfo({
    commit
  }) {
    const result = await reqGuessInfo()
    commit('REVISEGUESSINFO', result.data)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}