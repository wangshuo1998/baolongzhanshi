import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
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
}]