import {
  reqFilters
} from '@/Api'

const state = {
  filtersDatas: {}
}
const mutations = {
  REVEISEFILTERSDATAS(state, filtersDatas) {
    state.filtersDatas = filtersDatas
  }
}
const actions = {
  async getFiltersDatas({
    commit
  }) {
    const result = await reqFilters()
    commit('REVEISEFILTERSDATAS', result.data)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}