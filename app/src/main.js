import Vue from 'vue'
import App from './App.vue'
//引入全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
import 'element-ui/lib/theme-chalk/index.css'
//elementUI按需引入
import { Button, MessageBox} from 'element-ui';
Vue.component(Button.name,Button);
//另一个写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入路由
import router from "@/router"
//引入仓库
import store from '@/store'
//引入mock
import '@/mock/mockServe'
//引入swiper
import 'swiper/css/swiper.css'
//引入icon
import './font/iconfont.css'
import './font/iconfont.js'
//引入表单校验插件
import "@/plugins/validate"
//统一接口api文件夹里所有请求函数引入
import * as API from '@/api'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
