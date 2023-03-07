import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout } from "@/api";
import { setToken,getToken,removeToken } from "@/utils/token";

//登录与注册模块
const state={
    code:'',
    token:getToken(),
    userInfo:{}
};
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo || {}
    },
    USERLOGOUT(state){
        state.token='';
        state.userInfo={};
        //本地存储
        removeToken();
    }
};
const actions={
    //获取验证码
    async getCode({commit},phone){
        let r = await reqGetCode(phone);
        if(r.code==200){
            commit('GETCODE',r.data);
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //注册
    async userRegister({commit},user){
        let r = await reqUserRegister(user);
        if(r.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //登录
    async userLogin({commit},data){
        let r = await reqUserLogin(data);
        if(r.code==200){
            commit('USERLOGIN',r.data.token);
            //本地存储token
            setToken(r.data.token)
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户数据
    async getUserInfo({commit}){
        let r = await reqUserInfo();
        if(r.code==200){
            commit('GETUSERINFO',r.data);
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async userLogout({commit}){
        //向服务器发请求，通知服务器清除token
        let r = await reqLogout();
        //action里不能操作state,提交mutation修改state
        if(r.code==200){
            commit('USERLOGOUT');
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    }

};
const getters={};
export default{
    state,
    mutations,
    actions,
    getters
}