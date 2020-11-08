import Home from '@/pages/Home'
import HomeIndex from "@/pages/HomeIndex"
import ChangeCity from "@/pages/ChangeCity"

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
  }
]
