import Ajax from '@/Ajax/mock'
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