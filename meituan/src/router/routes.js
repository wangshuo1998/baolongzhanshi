import Home from '@/pages/Home'
import HomeIndex from '@/pages/HomeIndex'
import maoyanHeader from '@/components/maoyanHeader'
import maoyanshouye from '@/pages/maoyanshouye'
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
},{
  path: '/maoyanshouye',
  name: 'maoyanshouye',
  component: maoyanshouye,
},{
  path: '/maoyanHeader',
  name: 'maoyanHeader',
  component: maoyanHeader,
}]