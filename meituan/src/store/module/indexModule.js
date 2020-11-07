import {reqCategoryList} from "@/Api";

let state = {
    categoryList:[]
};

let mutations = {
    getCategoryListMutation(state,data){
        state.categoryList = data;
    }
};

let actions = {
    //二级分类列表请求
    async getCategoryList({commit}){
        let result = await reqCategoryList();
        commit("getCategoryListMutation",result.data);
    }
};

let  getters = {
  my(state){
    return state.categoryList || []
  }
};

export default {
    state,
    mutations,
    actions,
    getters
}
