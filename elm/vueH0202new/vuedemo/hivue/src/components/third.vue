<template>
    <div>
        <p>{{str}}</p>
        <h2>所有用户</h2>
        <ul>
            <li :key="i" v-for="(v,i) in todos">
                {{v.text}}
                <strong v-if="v.vip">VIP用户</strong>
                </li>
        </ul>
        <!-- VIP用户 -->
        <h2>VIP用户</h2>
        <ul>
            <li :key="i" v-for="(v,i) in vips">{{v.text}}</li>
        </ul>
        <p>数量:{{count}}</p>
        <button @click="reduce()">减少</button>
        <button @click="asyRe()">action测试减少</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
    name:"third",
    computed:{
    //    ...mapState({
    //        todos:'todos'
    //    })
     ...mapState(['todos','str','count']),
     //计算属性获取
     vips(){
         return this.$store.getters.vipTodos;
     }
    },
    methods:{
        //该组件用到的方法
        add(){

        },
        asyRe(){
          //调用action当中的方法
          this.$store.dispatch("asyReduce");
        },
        //store存储其中的mutations中的方法
      ...mapMutations(['reduce'])
    //   'reduce' 映射的是
    //   reduce(){
    //       this.$store.commit("reduce")
    //   }
    }
}
</script>
<style scoped>

</style>
