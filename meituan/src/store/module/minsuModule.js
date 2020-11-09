import {reqHotPlaceList} from "@/Api"

// 储存请求回来的数据
let state = {
    placeList:[]
};

// 修改数据
let mutations = {
    getPlaceListMutation(state,data){
        state.placeList = data;
    }
};

// 处理异步请求
let actions ={
    //热门入住地列表请求
    async getPlaceList({commit}){
        let result = await reqHotPlaceList();
        commit("getPlaceListMutation",result.data);
    }
};

// 计算数据
let getters = {

}

export default{
    state,
    mutations,
    actions,
    getters
}