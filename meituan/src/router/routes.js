import Home from '@/pages/Home'
import HomeIndex from "@/pages/HomeIndex"
import ChangeCity from "@/pages/ChangeCity"
import Login from "@/pages/Login"
import Register from "@/pages/Register"

export default [
  {
    path: "/",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        component: HomeIndex
      },
      {
        path:"/changecity",
        component:ChangeCity
      }
    ]
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/register",
    component:Register
  }
]
