import { reqAddressInfo,reqOrderInfo } from "@/api";
const state = {
    address:[],
    order:{}
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address=address
    },
    GETORDERINFO(state,order){
        state.order = order
    }
};
const actions = {
    //获取用户地址
    async getUserAddress({commit}){
        let r = await reqAddressInfo();
        if(r.code==200){
            commit('GETUSERADDRESS',r.data)
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //获取商品清单
    async getOrderInfo({commit}){
        let r = await reqOrderInfo(); 
        if(r.code==200){
            commit('GETORDERINFO',r.data)
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}