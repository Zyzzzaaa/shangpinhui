import { reqGetSearchInfo } from "@/api";

const state = {
    searchList:{}
};

const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};

const actions = {
    //params默认值是空对象
    async getSearchList({commit},params={}){
        let r = await reqGetSearchInfo(params);
        if(r.code==200){
            commit('GETSEARCHLIST',r.data)
        }
    }
};
//简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList|| [];
    },
    attrsList(state){
        return state.searchList.attrsList|| [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}