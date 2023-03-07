import {reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api";
//封装游客身份的模块
import { getUUID } from "@/utils/uuid_token";
const state = {
    goodInfo:{},
    //游客临时身份
    uuid_token:getUUID()
};
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
};
const actions={
    //获取产品信息action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code==200){
            commit('GETGOODINFO',result.data);
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //加入购物车以后发请求，前台将参数带给服务器，服务器不返回其他数据，不需写三连环
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
//简化数据
const getters={
    categoryView(state){
        //至少是个空对象
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    skuSaleAttrValueList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
};
export default{
    state,
    actions,
    mutations,
    getters
}