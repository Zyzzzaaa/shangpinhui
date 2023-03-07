import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
//使用插件
Vue.use(VueRouter);
//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push,replace.解决多次执行抛出错误问题
VueRouter.prototype.push = function (location,resolve,reject) {
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

VueRouter.prototype.replace = function (location,resolve,reject) {
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

//配置路由
let router = new VueRouter({
    routes,
    //滚动行为
    scrollBehavior (to, from, savedPosition) {
        return{y:0}
    }
});

//全局守卫，前置守卫 
router.beforeEach(async (to,from,next)=>{
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    //用户登录
    if(token){
        //登录之后 不能去登录页面
        if(to.path=='/login'){
            next('/home')
        }else{
            //用户信息已有
            if(name){
                next()
            }else{
                //登录了没有用户信息
                try {
                    //获取用户信息成功
                    await store.dispatch('getUserInfo');
                    next()
                } catch (error) {
                    //token失效获得不了用户信息
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    }else{
        //没登录
        let toPath = to.path;
        //不能去支付/支付成功/个人中心页面
        if(toPath.indexOf('/trade')!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
            next('/login')
        }else{
            next()
        }
    }
})
export default router;