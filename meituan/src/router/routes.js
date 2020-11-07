import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import Rules from '@/pages/Rules'
import FastFood from '@/pages/FastFood'
import Advices from '@/pages/Rules/Advices'
import HomestayInfo from '@/pages/HomestayInfo'
import Catalogue from '@/pages/Rules/Catalogue'
import ChangeCity from "@/pages/ChangeCity"
export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'Index',
      component: HomeIndex,
    }]
  },
  // 规则中心组件
  {
    path:'/rules',
    component:Rules,
    children:[
      {
        path:'/advices',
        component:Advices
      }
    ]
  },
  {
    path:'/catalogue',
    component:Catalogue
  },
  {
    path:'/fastfood',
    component:FastFood
  },
  {
    path:'/homestayInfo',
    component:HomestayInfo
  },
  {
    path:"/changecity",
    component:ChangeCity
  }
]

