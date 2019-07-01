import Vue from 'vue'
import Router from 'vue-router'
// 导入components模块中的HelloWorld.vue组件
import HelloWorld from '@/components/HelloWorld'
// 导入first和second组件
// import First from '../components/first'
// import Second from '../components/second'
// 或者 @ 是根目录 也就是src文件夹
import First from '@/components/first'
import Second from '@/components/second'
import Shop from '@/components/shop'
import Sport from '@/components/sport'
import Third from '@/components/third'
import Login from '@/components/login'
import Person from '@/components/person/person'
Vue.use(Router)
//路由组件 通过根目录访问的就是HelloWorld组件
export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: First
    },
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/third',
      name: 'third',
      component: Third
    },
    {
      path: '/second',
      name: 'second',
      component: Second,
      // 默认子路由路径
      redirect:"/second/shop",
      children:[
        {
          path: 'sport',//  /second/sport
          name: 'sport',
          component: Sport
        },
        {
          path: 'shop',// /second/shop
          name: 'shop',
          component: Shop
        }
      ]
    }
  ]
})
