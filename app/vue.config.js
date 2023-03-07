const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  
  transpileDependencies: true
})
module.exports = {
  //打包不要map
  productionSourceMap:false,
  //关闭校验
  lintOnSave:false,
  //代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        pathRewriter:{'^/api':''},
      }
    }
  }
}
