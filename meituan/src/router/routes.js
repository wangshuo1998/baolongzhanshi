import Register from "@/pages/Register";
import Home from '@/pages/Home'
import HomeIndex from "@/pages/HomeIndex"
import Login from "@/pages/Login";
import Homestay from "@/pages/Homestay"


export default [
    {
        path: "/",
        component:Home,
        redirect:"/index",
        children:[
            {
                path: "/index",
                component: HomeIndex
            }
        ]
    },
    {
        path:"/login",
        component:Login,
        name:"login"
    },
    {
        path:"/register",
        component:Register
    },
    {
        path:"/homestay",
        component:Homestay
    }
]
