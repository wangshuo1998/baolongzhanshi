import {
  reqSimilarInfoList,
  reqHotCity,
  reqHotHouse,
  reqCommentTextList,
  reqSurroundingList,
} from "@/Api";

let state = {
  similarInfoList: [],
  hotCity: [],
  hotHouse: [],
  commentTextList: [],
  surroundingList: {}
}


let mutations = {
  getSimilarInfoListMutation(state, data) {
    state.similarInfoList = data
  },

  getHotCityMutation(state,data){
    state.hotCity = data
  },

  getHotHouseMutation(state,data){
    state.hotHouse = data
  },

  getCommentTextListMutation(state,data){
    state.commentTextList = data
  },

  getSurroundingListMutation(state,data){
    state.surroundingList = data
  }


}

let actions = {
  //获取民宿详情页附近房源的列表数据
  async getSimilarInfoList({ commit }) {
    let result = await reqSimilarInfoList();
    commit("getSimilarInfoListMutation", result.data.similarInfoList);
  },

  //获取民宿详情页底部热门城市数据
  async getHotCity({commit}){
    let result = await reqHotCity()
    commit('getHotCityMutation',result.data.hotCity)
  },

  //获取民宿详情页底部热门城市数据
  async getHotHouse({commit}){
    let result = await reqHotHouse()
    commit('getHotHouseMutation',result.data.hotHouse)
  },

 //获取民宿详情页评价列表数据
  async getCommentTextList({commit}){
    let result = await reqCommentTextList()
    commit('getCommentTextListMutation',result.data.list)
  },

  //获取房源位置周边列表数据
  async getSurroundingList({commit}){
    let result = await reqSurroundingList()
    commit('getSurroundingListMutation',result.data)
  }
 
}


let getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}