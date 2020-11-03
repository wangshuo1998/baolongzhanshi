import Home from '@/pages/Home'
import HomeIndex from "@/pages/HomeIndex"

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
    }
]
