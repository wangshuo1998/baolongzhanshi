import Ajax from '@/Ajax/mock'
<<<<<<< HEAD
// 格式
// export const aaa = Ajax({
//   method:'GET',
//   url:'/index'
// })
export const reqFilters = () => {
  return Ajax({
    method: 'GET',
    url: '/filters'
  });
}
=======
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
>>>>>>> main
