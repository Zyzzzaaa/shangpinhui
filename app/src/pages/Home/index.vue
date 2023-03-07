<template>
<!-- 在一个div中 -->
<div>
  <TypeNav/>
  <ListContainer/>
  <Recommand/>
  <Rank/>
  <Like/>
  <Floor v-for='(floor) in floorList' :key='floor.id' :list='floor'/>
  <Brand/>
</div>
</template>
<script>
//引入其他组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommand from '@/pages/Home/Recommand'
import Brand from '@/pages/Home/Brand'
import Floor from '@/pages/Home/Floor'
import Like from '@/pages/Home/Like'
import Rank from '@/pages/Home/Rank'
import { mapState } from "vuex";
export default {
    name:'',
    mounted() {
      //派发action,获取floor组件数据
      this.$store.dispatch('getFloorList')
      //获取用户信息在首页展示  在路由守卫完成了
      // this.$store.dispatch('getUserInfo')
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    },
    components:{
      ListContainer,
      Recommand,
      Brand,
      Floor,
      Like,
      Rank
    },
}
</script>
<style lang="">
    
</style>