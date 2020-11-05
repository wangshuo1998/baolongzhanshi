import Ajax from '@/Ajax/mock'
// 格式
// export const aaa = Ajax({
//   method:'GET',
//   url:'/index'
// })

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
