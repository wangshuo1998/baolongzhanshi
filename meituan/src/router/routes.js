import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import Rules from '@/pages/Rules'
export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'index',
    children: [{
      path: 'index',
      name: 'Index',
      component: HomeIndex,
    }]
  },
  // 规则中心组件
  {
    path:'/Rules',
    component:Rules,
  }
]