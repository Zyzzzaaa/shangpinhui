//引入mockjs模块
import Mock from "mockjs";
//JSON引入，不需要暴露，默认暴露
import banner from './banner.json';
import floor from './floor.json';

//mock数据：第一个参数请求地址，第二个参数请求数据
Mock.mock('/mock/banner',{code:200,data:banner})//模拟轮播图数据
Mock.mock('/mock/floor',{code:200,data:floor})