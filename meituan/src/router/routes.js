import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import ShopList from '@/pages/ShopList'
import ShopDetail from '@/pages/ShopList/ShopDetail'
import ShopListIndex from '@/pages/ShopList/ShopListIndex'
import ChangeCity from "@/pages/ChangeCity"
export default [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: 'index',
  children: [{
      path: 'index',
      name: 'Index',
      component: HomeIndex,
    },
    {
      path: "/changecity",
      component: ChangeCity
    }
  ]
}, {
  path: '/shopList',
  name: 'shopList',
  component: ShopList,
  redirect: '/shopList/shopListIndex',
  children: [{
      path: 'shopDetail/:shopId?',
      name: 'shopDetail',
      component: ShopDetail
    },
    {
      path: 'shopListIndex',
      name: 'shopListIndex',
      component: ShopListIndex
    }
  ]
}]