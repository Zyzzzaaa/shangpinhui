<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo',1)" :class='{active:pageNo==1}'>1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>
    <!-- 中间部分 -->
    <template v-for="(page,index) in startNumAndEndNum.end" >
        <button :key="index" v-if="page>=startNumAndEndNum.start" @click="$emit('getPageNo',page)" :class='{active:pageNo==page}'>{{page}}</button>
    </template>

    <button v-if="startNumAndEndNum.end<totalPages-1">···</button>
    <button v-if="startNumAndEndNum.end<totalPages" @click="$emit('getPageNo',totalPages)" :class='{active:pageNo==totalPages}'>{{totalPages}}</button>
    <button :disabled="pageNo==totalPages" @click="$emit('getPageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>
  
  <script>
export default {
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    //总页数
    totalPages(){
        return Math.ceil(this.total/this.pageSize)
    },
    //连续的页码
    startNumAndEndNum(){
        const{continues,pageNo,totalPages} = this;
        let start = 0,end = 0;
        //总页数没有连续页码多
        if(continues > totalPages){
            start = 1;
            end = totalPages;
        }else{
            start = pageNo - parseInt(continues/2);
            end = pageNo + parseInt(continues/2);
            if(start < 1){
                start = 1;
                end = parseInt(continues);
            }
            if(end >totalPages){
                end = totalPages;
                start = totalPages - continues + 1;
            }
        };
        return {start,end}
    }
  }
};
</script>
  
<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active{
    background: skyblue;
}
</style>
  