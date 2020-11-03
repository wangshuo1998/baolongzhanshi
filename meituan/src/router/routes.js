import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import maoyanHeader from '@/components/maoyanHeader'
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
  path: '/maoyanHeader',
  name: 'maoyanHeader',
  component: maoyanHeader,
}]