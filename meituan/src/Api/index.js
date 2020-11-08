import Ajax from '@/Ajax/mock'

//获取首页二级分类列表的数据
export const reqCategoryList = ()=>{
    return Ajax({
        url:"/categoryList",
        method:"Get"
    })
}
//获取首页中轮播图的数据
export const reqBannersList = ()=>{
  return Ajax({
    url:"/indexBannersList",
    method:"Get"
  })
}
//获取首页中正在热映的电影数据
export const reqHotMoviesList = ()=>{
  return Ajax({
    url: "/hotMoviesList",
    method:"Get"
  })
}
//获取首页中即将上映得电影数据
export const reqComingMoviesList = ()=>{
  return Ajax({
    url:"/comingMoviesList",
    method:"Get"
  })
}
//获取首页中推荐民宿得城市数据
export const reqRecommendHouseCities = ()=>{
  return Ajax({
    url:"/minsuCitys",
    method:"Get"
  })
}
//获取首页中推荐民宿得具体数据
export const reqRecommendHouseList = ()=> {
  return Ajax({
    url: "/minsuInfoList",
    method: "Get"
  })
}
//获取首页中猜你喜欢的数据
export const reqGuessLikeList= ()=>{
  return Ajax({
    url:"/recommends",
    method:"Get"
  })
}
//获取更改城市中下方的城市列表数据
export const reqCitiesList = ()=>{
  return Ajax({
    url:"/cityList",
    method:"Get"
  })
}
//获取更改城市中对应省市的数据
export const reqProvinceCity = ()=>{
  return Ajax({
    url:"/provincecity",
    method:"Get"
  })
}

// 接口格式  每个接口必须注释 注释格式为

/**
 * @description:  描述
 * @param {*} 如果需要参数 写参数格式
 * @return {*} 返回什么 比如 [] {} ""
 */

// export const reqGetPoiList = () => {
//   return Ajax({
//     method: 'GET',
//     url: '/getPoiList'
//   });
// }
// 接口测试
// reqGetPoiList().then(v => {
//   console.log(v);
// }, e => {
//   console.log(e);
// })
