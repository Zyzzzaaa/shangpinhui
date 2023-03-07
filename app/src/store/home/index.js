//home模块的小仓库
import { reqCategoryList,reqGetBannerList,reqFloorList} from "@/api";
const state = {
    //state中数据默认值需要根据服务器返回值初始化的
    categoryList:[],
    bannerList:[],
    floorList:[]
};
//修改数据，mutations是唯一能修改state的地方
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
};
//通过API里面的接口函数调用，向服务器发请求，获取服务器数据
const actions = {
    async categoryList({commit}){
        let r =  await reqCategoryList();
        if(r.code == 200){
            commit('CATEGORYLIST',r.data);
        }
    },
    async getBannerList({commit}){
        let r = await reqGetBannerList();
        if(r.code == 200){
            commit('GETBANNERLIST',r.data)
        }
    },
    async getFloorList({commit}){
        let r = await reqFloorList();
        if(r.code == 200){
            commit('FLOORLIST',r.data)
        }
    }
};
//计算属性
const getters = {};

//默认暴露
export default {
    state,
    mutations,
    actions,
    getters
}