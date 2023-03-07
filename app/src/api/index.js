//对API进行统一管理
import requests from './request';
import mockRequests from './mockrequest';
//三级联动接口 发请求：axios发请求返回结果promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

//获取banner
export const reqGetBannerList = ()=>mockRequests.get('/banner')
//获取floor
export const reqFloorList = ()=>mockRequests.get('/floor')

//获取搜索模块数据，带参数。当前这个接口给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

//获取产品详细信息的接口
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'})

//将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`cart/addToCart/${skuId}/${skuNum}`,method:'post'})

//购物车
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

//删除购物车
export const reqDeleteCart = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//改变购物车勾选框的状态
export const reqUpdataCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册 k-v一致省略
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'})

//登录
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'})

//获取用户数据
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录
export const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'})

//获取用户地址
export const reqAddressInfo= ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//获取商品清单
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'})

//提交订单的接口
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取订单支付信息
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//查询订单支付状态
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取个人中心订单
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})