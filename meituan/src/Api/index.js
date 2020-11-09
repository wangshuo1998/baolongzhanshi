// mock
import Ajax from '@/Ajax/mock'

//获取首页二级分类列表的数据
export const reqCategoryList = () => {
  return Ajax({
    url: "/categoryList",
    method: "GET"
  })
}
//获取首页中轮播图的数据
export const reqBannersList = () => {
  return Ajax({
    url: "/indexBannersList",
    method: "GET"
  })
}
//获取首页中正在热映的电影数据
export const reqHotMoviesList = () => {
  return Ajax({
    url: "/hotMoviesList",
    method: "GET"
  })
}
//获取首页中即将上映得电影数据
export const reqComingMoviesList = () => {
  return Ajax({
    url: "/comingMoviesList",
    method: "GET"
  })
}
//获取首页中推荐民宿得城市数据
export const reqRecommendHouseCities = () => {
  return Ajax({
    url: "/minsuCitys",
    method: "GET"
  })
}
//获取首页中推荐民宿得具体数据
export const reqRecommendHouseList = () => {
  return Ajax({
    url: "/minsuInfoList",
    method: "GET"
  })
}
//获取首页中猜你喜欢的数据
export const reqGuessLikeList = () => {
  return Ajax({
    url: "/recommends",
    method: "GET"
  })
}
//获取更改城市中下方的城市列表数据
export const reqCitiesList = () => {
  return Ajax({
    url: "/cityList",
    method: "GET"
  })
}
//获取更改城市中对应省市的数据
export const reqProvinceCity = () => {
  return Ajax({
    url: "/provincecity",
    method: "GET"
  })
}
// 获取热门入住底的列表数据
export const reqHotPlaceList = () => {
  return Ajax({
    url:'/hotplacelist',
    method:'GET'
  })
}

//获取民宿详情页附近房源的列表数据
export const reqSimilarInfoList = () => {
  return Ajax({
    url: '/similarInfoList',
    method: 'GET'
  })
}
//获取民宿详情页底部热门城市数据
export const reqHotCity = () => {
  return Ajax({
    url: '/hotCity',
    method: 'GET'
  })
}
//获取民宿详情页底部热门房源数据
export const reqHotHouse = () => {
  return Ajax({
    url: '/hotHouse',
    method: 'GET'
  })
}
//获取民宿详情页评价列表数据
export const reqCommentTextList = () => {
  return Ajax({
    url: '/commentTextList',
    method: 'GET'
  })
}
// 获取房源位置周边列表数据
export const reqSurroundingList = () => {
  return Ajax({
    url: '/surroundList',
    method: 'GET'
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

/**
 * @description: 获取详情页筛选分类数据
 * @param {*} 无
 * @return {*} {cates:[],areas:[]}
 */
export const reqFilters = () => {
  return Ajax({
    url: '/filters',
    method: 'GET'
  })
}

/**
 * @description:  获取详情页列表信息
 * @param {*} 无
 * @return {*}   
 */
export const reqPoiList = () => {
  return Ajax({
    url: '/getPoiList',
    method: 'GET'
  });
}

/**
 * @description: 获取猜你喜欢列表
 * @param {*} 无
 * @return {*} 
 */
export const reqGuessInfo = () => {
  return Ajax({
    url: '/guessInfo',
    method: 'GET'
  });
}

/**
 * @description:  获取商品详情页信息
 * @param {*} shopId => 为对象 格式为 {shopId:"123"}
 * @return {*} 商品详情页信息 => {}
 */
export const reqShopDetailData = (shopId = {}) => {
  return Ajax({
    url: '/getShopDetailInfo',
    method: 'POST',
    data: shopId
  })
}

// reqShopDetailData({
//   shopId: '159279615'
// }).then(v => {
//   console.log(v);
// }




// http://www.wangshuo1998.cn:7300/mock/5f9fc77b5739e560520990e0/api/getMerchantComment/:shopId?
/**
 * @description: 获取商家评论信息
 * @param {*} shopId 为商家店铺ID
 * @return {*} {}
 */
export const reqMerchantComment = (shopId, isSea) => {
  return Ajax({
    url: `/getMerchantComment/${shopId}`,
    method: 'GET',
    params: {
      isSea
    }
  });
}