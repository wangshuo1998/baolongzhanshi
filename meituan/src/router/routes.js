import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import Detail from '@/pages/Detail'
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
  path: '/detail',
  name: 'Detail',
  component: Detail,
}]