//对于axios进行二次封装
import axios from 'axios';
//引入进度条及其样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css';
import store from '@/store'
//创建一个axios实例,request是对axios的二次封装
const request = axios.create({
    //基础路径，发请求的时候，路径中默认加上api
    baseURL:'/api',
    //请求超时的上限为5s
    timeout:5000,
})

//请求拦截器
request.interceptors.request.use((config)=>{
    //游客身份
    if(store.state.detail.uuid_token){
        //请求头添加一个字段(userTempId)
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //进度条开始
    nprogress.start();
    //需要携带token带给服务器
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
    return config;
})

//响应拦截器
request.interceptors.response.use((res)=>{
    //成功回调函数
    //进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    //失败回调函数
    return Promise.reject(new Error('faile'))
})
//对外暴露
export default request;