import Home from '@/pages/Home'

import HomeIndex from '@/pages/HomeIndex'
import maoyanshouye from '@/pages/maoyanshouye'
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
  },  {
    path:"/changecity",
    component:ChangeCity
  }]
},{
  path: '/maoyanshouye',
  name: 'maoyanshouye',
  component: maoyanshouye,
}]

