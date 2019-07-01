<template>
    <div id="sec">
        <p>{{$store.state.count}}</p>
        <p>store中的count2:{{count2}}</p>
        <p>store中的count3:{{count3}}</p>
        <p>{{arr[3]}}</p>
        <p>{{getStr}}</p>
        <p>{{getAll}}</p>
        <h1>我是second页面中的内容</h1>
        <div>
            <router-link to="/second/shop">购物类</router-link>----
            <router-link to="/second/sport">体育类</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
// 引入辅助函数
import { mapState } from 'vuex'
export default {
    name:"second",
    data(){
       return {
           price:10,
           num:5
       }
    },
    computed: {
        //属于自己的计算属性
        getAll(){
            return this.num * this.price;
        },
        //属于mapstate函数中展开的返回的对象
        ...mapState({
                 count2:'count2',
                 count3:'count3',
                 arr:'arr',
        getStr(state){
    return this.$store.state.str.split("").reverse().join("");
        }
        })
    }
    // 使用辅助函数的写法(计算属性获取store中的额状态值)，直接使用state接收
    //  computed:mapState({
    //      //计算属性第一种写法
    //      count2(state){
    //          return state.count2;
    //      },
    //      //也可以使用箭头函数
    //     //  count3:(state)=>{return state.count3},
    //      //或者一个参数，可以省略，函数体只有一行代码，也可省略,还可以省略{}
    //     // count3:state=>state.count3,
    //     // 传字符串参数 'count3' 等同于 `state => state.count3`
    //     count3:'count3',
    //     arr:'arr',
    //     // 如果要处理获取到的存储器中的状态值，必须使用原有方法，不能省略
    //     getStr(state){
    //       return this.$store.state.str.split("").reverse().join("");
    //     }
         
    //  })
}
</script>
<style scoped>
#sec{
    border: 2px solid blue;
}
</style>
