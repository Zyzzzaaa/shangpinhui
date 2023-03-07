export default [
    {
        path: '/home',
        component:()=>import('@/pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: '/login',
        component: ()=>import('@/pages/Login'),
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: ()=>import('@/pages/Register'),
        meta: {
            show: false
        }
    },
    {
        //占位
        path: '/search/:keyword?',
        component:()=>import('@/pages/Search'),
        meta: {
            show: true
        },
        name: 'search'
    },
    {
        //占位,传递params参数
        path: '/detail/:skuid',
        component: ()=>import('@/pages/Detail'),
        meta: {
            show: true
        }
    },
    {
        //重定向，在项目跑起来时，访问/，立马跳转到指定网页
        path: '*',
        redirect: '/home'
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component:()=>import('@/pages/AddCartSuccess'),
        meta: {
            show: true
        }
    },
    {
        path: '/shopcart',
        component:()=>import('@/pages/ShopCart'),
        meta: {
            show: true
        }
    },
    {
        path: '/trade',
        component:()=>import('@/pages/Trade'),
        meta: {show: true},
        //路由独享守卫
        beforeEnter:(to,from,next)=>{
            //必须是从购物车而来
            if(from.path=='/shopcart'){
                next();
            }else{
                //否则停留在当前
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: ()=>import('@/pages/Pay'),
        meta: {show: true},
        beforeEnter:(to,from,next)=>{
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component:()=>import('@/pages/PaySuccess'),
        meta: {
            show: true
        }
    },
    {
        path: '/center',
        component:()=>import('@/pages/Center'),
        meta: {show: true},
        //二级路由组件
        children:[
            {path:'myorder',component:()=>import('@/pages/Center/myOrder')},
            {path:'grouporder',component:()=>import('@/pages/Center/groupOrder')},
            //重定向
            {path:'/center',redirect:'/center/myorder'}
        ]
    },
]