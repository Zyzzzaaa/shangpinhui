import { reqCartList,reqDeleteCart,reqUpdataCheckedById } from "@/api";
const state={
    cartList:[]
};
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList;
    }
};
const actions={
    //获取购物车数据
    async getCartList({commit}){
        let r = await reqCartList();
        if(r.code == 200){
            commit('GETCARTLIST',r.data)
        }
    },
    //删除购物车的数据
    async deleteCartListBySkuId({commit},skuId){
        let r = await reqDeleteCart(skuId);
        if(r.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //调整勾选框
    async updataCheckedById({commit},{skuId,isChecked}){
        let r = await reqUpdataCheckedById(skuId,isChecked)
        if(r.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll=[];
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):'';
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    },
    //修改全部产品状态
    updateAllCartIsChecked({dispatch,state},isChecked){
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updataCheckedById',{
                skuId:item.skuId,
                isChecked
            })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
};
const getters={
    cartList(state){
        return state.cartList[0]||{}
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}
