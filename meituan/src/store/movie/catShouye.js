import {reqHotMoviesList} from '@/Api';
import {reqComingMoviesList} from '@/Api';
const state ={
  hotMoviesList:[],
  comingMoviesList:[],
}
const mutations ={
  RECEIVEHOTMOVIESLIST(state,hotMoviesList){
    state.hotMoviesList=hotMoviesList
  },
  RECEIVECOMINGMOVIESLIST(state,comingMoviesList){
    state.comingMoviesList=comingMoviesList
  },
}
const actions ={
  async getHotMoviesList({commit}){
    const result =await reqHotMoviesList()
    commit('RECEIVEHOTMOVIESLIST',result.data)
  },
  async getComingMoviesList({commit}){
    const result =await reqComingMoviesList()
    commit('RECEIVECOMINGMOVIESLIST',result.data)
  }
}
const getters ={}
export default {
  state,
  mutations,
  actions,
  getters,
}