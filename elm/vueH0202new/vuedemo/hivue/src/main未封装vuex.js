// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// let vue = require("路径")
// 导入vue.js核心库，
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 导入App.vue组件 组件名 App
import App from './App'
// 导入路由模块  导入的router文件夹下的index.js文件
import router from './router'

Vue.config.productionTip = false
// store存储器用来存储组件之间共享的数据以及共同调用的方法
const store = new Vuex.Store({
  //共享状态:类似组件data数据源
  state:{
    count:9,
    count2:88,
    count3:33,
    str:"hello world",
    arr:["9.9元","6.8元","88元","23元"],
    todos:[
      {id:1,text:"子涵",vip:true},
      {id:2,text:"紹冲",vip:false},
      {id:3,text:"欢迎",vip:true},
      {id:4,text:"红康",vip:false},
      {id:5,text:"赵鑫",vip:true}
    ]
  },
  //修改状态的方法：类似于组件methods方法
  mutations:{
    // 通过store.commit('方法名'，附加参数)调用  
    //创建方法 increAdd，第一个参数：接收state状态属性,第二个参数之后，是组件中调用该方法时，传递的参数
    increAdd(state,a){
    //  state.count += a;
    //  或者
       this.state.count += a;
    },
    reduce(state,n=1){//参数n默认值为1
      state.count -= n;
    }
  },
  // getters 类似于组件中的计算属性，用来处理state状态值的
  getters:{
     //筛选vip用户
     vipTodos(state){
        return state.todos.filter(todo=>todo.vip);
     }
  },
  // actions 类似于 mutations 用来创建方法，只不过不处理状态值，调用mutations中的方法；action可以处理异步操作，mutations不行
  actions:{
    // 异步操作
      // context 形参 接收store对象
       asyReduce(context){
         //调用
        context.commit("reduce",2);
       }
  }
})
// alert(store.state.count);//测试


/* eslint-disable no-new */
new Vue({
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  el: '#app',
  // 注入路由
  router,
  //声明实例中的组件
  components: { App },
  // 将App组件解析到#app对应的div内容中，也就是index.html中
  template: '<App/>'
})
