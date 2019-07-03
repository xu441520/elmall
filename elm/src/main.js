// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// let vue = require("路径")
// 导入vue.js核心库，
import Vue from 'vue'
// 导入App.vue组件 组件名 App
import App from './App'
// 导入路由模块  导入的router文件夹下的index.js文件
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//导入vuex封装的模块  store文件夹下的index.js
import store from './store'

//引入Element.UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false
//在main.js中创建store
// const store = new Vuex.Store({
//   state: {
//     count: 9
//   },
//   mutations: {
    
//   }
// })
/* eslint-disable no-new */
new Vue({
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,//store:store
  el: '#app',
  // 注入路由,app控制范围内可以使用路由
  router,
  //声明实例中的组件
  components: { App },
  // 将App组件解析到#app对应的div内容中，也就是index.html中
  template: '<App/>'
})
