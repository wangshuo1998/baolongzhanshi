import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import Rules from '@/pages/Rules'
import Advices from '@/pages/Rules/Advices'
import Catalogue from '@/pages/Rules/Catalogue'
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
    path:'/advices',
    component:Advices
  }


]