<template>
    <div id="one">
        <p>{{sum}}</p>
        <p>{{$store.state.str}}</p>
        <p>获取store存储器中的值:{{$store.state.count}}</p>
        <h1>first页面内容:商品数量--{{count}}</h1>
        <button @click="add(1)">增加</button>

        <h1>来源于stroe中的数据：{{$store.state.count}}</h1>
        <button @click="add2(3)">点击</button>
         <button @click="redu()">减少</button>

        <ul>
            <li v-for="(v,i) in getArr" :key="i">{{v}}</li>
        </ul>

    </div>
</template>

<script>
//第一种方式： 一个个导出数据
//   export var a = 9;
//   export var b = "json";
//第二种方式：导出数据
    // var a = 77;
    // var b = "hi";
    // var c = 1990;
    // export {a,b,c};
//第三种方式 export default导出数据
//    export default function (){
//        console.log("函数");
//    };
    
// 组件导出
    export default {
     name:"first",
     data(){
         return {
             count:0
         }
     },
     methods: {
       add(v){
         this.count += v;
       },
       add2(v){
           //调用stroe存储器中的共享方法 increAdd 第二个参数开始，是传递的参数
        this.$store.commit("increAdd",v);
       },
       redu(){
           this.$store.commit("reduce");
       }
     },
     computed: {
         sum(){
             //访问存储器中的值
        return this.$store.state.count;
         },
         getArr(){
             return this.$store.state.arr;
         }
     },
    }
</script>
<style scoped>
   #one{
       border: 2px solid red;
   }
</style>

