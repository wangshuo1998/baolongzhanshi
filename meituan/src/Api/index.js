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
