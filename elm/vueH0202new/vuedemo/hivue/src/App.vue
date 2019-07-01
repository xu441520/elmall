<template>
  <div class="one">
    <!-- 在vue脚手架中，页面会自动刷新（热更新：浏览器不会刷新，界面更新） -->
    <h1>{{name}}</h1>
    <p>app页面</p>
    <!-- 路由出口 -->
        <router-view></router-view>
    <img src="./assets/logo.png">
    <p>数量:{{num}}</p>
    <button @click="add()">点击</button>
    <!-- <First></First> -->

    <!-- 路由组件 在main.js中导入过 -->
    <!-- <router-view></router-view> -->

    <Home></Home>

  </div>
</template>



<script>
import First  from  './components/first'
import Home  from  './components/home'
// 引入first.vue文件
//第一种方式
// import {a,b} from './components/first'
// console.log(b);
//第二种方式
  //  import {a,b,c} from './components/first'
  //  console.log(c);
// 第三种方式 export default导出数据，导入使用
// import cus from './components/first'
// cus();
// console.log(d);
export default {
  name: 'App',
  data(){
    return {
      name:"hello",
      num:1
    }
  },
  methods: {
    add(){
      this.num++;
    }
  },
   //声明实例中的组件
     components:{ 
       First,
       Home 
       }
}
</script>

<style >

</style>
