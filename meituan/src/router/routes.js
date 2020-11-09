/*
* import Register from "@/pages/Register"; 为正常加载
* const Home = ()=>import('@/pages/Home') 懒加载路由 提高效率
*
* */
// import Register from "@/pages/Register";
const Register = ()=>import('@/pages/Register')
// import Home from '@/pages/Home'
const Home = ()=>import('@/pages/Home')

// import HomeIndex from '@/pages/HomeIndex'
const HomeIndex = ()=>import('@/pages/HomeIndex')

// import ShopList from '@/pages/ShopList'
const ShopList = ()=>import('@/pages/ShopList')

// import ShopDetail from '@/pages/ShopList/ShopDetail'
const ShopDetail = ()=>import('@/pages/ShopList/ShopDetail')

// import ShopListIndex from '@/pages/ShopList/ShopListIndex'
const ShopListIndex = ()=>import('@/pages/ShopList/ShopListIndex')


// import ChangeCity from "@/pages/ChangeCity"
const ChangeCity = ()=>import('@/pages/ChangeCity')


// import Login from "@/pages/Login"
const Login = ()=>import('@/pages/Login')

// import Rules from '@/pages/Rules'
const Rules = ()=>import('@/pages/Rules')

// import FastFood from '@/pages/FastFood'
const FastFood = ()=>import('@/pages/FastFood')

// import HomestayInfo from '@/pages/HomestayInfo'
const HomestayInfo = ()=>import('@/pages/HomestayInfo')

// import Catalogue from '@/pages/Catalogue'
const Catalogue = ()=>import('@/pages/Catalogue')

// import Homestay from '@/pages/Homestay'
const Homestay = ()=>import('@/pages/Homestay')

// import maoyanshouye from '@/pages/maoyanshouye'
const maoyanshouye = ()=>import('@/pages/maoyanshouye')

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
  },
  {
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
  },
  {
    path: "/login",
    name:'login',
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/homestay",
    component: Homestay
  },
  // 规则中心组件
  {
    path: '/rules',
    component: Rules,
  },
  {
    path: '/catalogue',
    component: Catalogue
  },
  {
    path: '/fastfood',
    component: FastFood
  },
  {
    path: '/homestayInfo',
    component: HomestayInfo
  },
  {
    path: '/maoyanshouye',
    name: 'maoyanshouye',
    component: maoyanshouye,
  }
]
