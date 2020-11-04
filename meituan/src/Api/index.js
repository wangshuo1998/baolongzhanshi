// mock
import Ajax from '@/Ajax/mock'
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
// })