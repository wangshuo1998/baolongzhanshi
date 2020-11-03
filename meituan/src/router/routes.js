import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import ShopList from '@/pages/ShopList'
export default [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: 'index',
  children: [{
    path: 'index',
    name: 'Index',
    component: HomeIndex,
  }]
}, {
  path: '/shopList',
  name: 'shopList',
  component: ShopList,
}]