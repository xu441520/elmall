import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import City from '@/components/city'
import Login from '@/components/login'
import Resetmima from '@/components/resetmima'
import Location from '@/components/location'
import Home from '@/components/home'
import Search from '@/components/search'
import Order from '@/components/order'
import User from '@/components/user'
import Store from '@/components/store'
import Citytwo from '@/components/citytwo'
import Sp from '@/components/sp'
import Pj from '@/components/pj'
import Huodong from  '@/components/huodong'
import Storedetail from '@/components/storedetail'
import Safeshow from '@/components/safeshow'
import Lunbotujilian from '@/components/lunbotujilian'
import Yingyezz from '@/components/yingyezz'
import Xukezheng from '@/components/xukezheng'

//外卖（贺子涵）
import Home_two from '@/components/home_two'
import Sp_two from '@/components/sp_two'


//我的
import Account from '@/components/account'
import Xiugai from '@/components/xiugai'
import Addressing from '@/components/addressing'
import Newadd from '@/components/newadd'
import Sousuodizhi from '@/components/Sousuodizhi'
import Usemoney from '@/components/usemoney'
import Yuershuom from '@/components/yuershuom'
import  Youhui from '@/components/youhui'
import Daijinquan from '@/components/daijinquan'
import Shangjiadai from '@/components/shangjiadai'
import Hongrecord from '@/components/hongrecord'
import Hongbaodui from '@/components/hongbaodui'
import Tuijian from '@/components/tuijian'
import Jifen from '@/components/jifen'
import Jfshuoming from '@/components/jfshuoming'
import Shop from '@/components/shop'
import Elecard from '@/components/elecard'
import Shuoming from '@/components/shuoming'
import Zhifu from '@/components/zhifu'
import Duihuan from '@/components/duihuan'
import Invoice from '@/components/invoice'
import Service from '@/components/service'
import Supervip from '@/components/supervip'
import Signin from '@/components/signin'
import Lever from '@/components/lever'
import Point from '@/components/point'
import Photo from '@/components/photo'
import Payfor from '@/components/payfor'
import Ordernumber from '@/components/ordernumber'
import Ontime from '@/components/ontime'
import Membertime from '@/components/membertime'
import Memberqu from '@/components/memberqu'
import Hongbao from '@/components/hongbao'
import Freshman from '@/components/freshman'
import Forgot from '@/components/forgot'
import Discount from '@/components/discount'
import Disclaimer from '@/components/disclaimer'
import Coupon from '@/components/coupon'
import Business from '@/components/business'
import Yuer from '@/components/yuer'
import Hongshuo from '@/components/Hongshuo'
import Chaozan from '@/components/chaozan'
import Niming from '@/components/niming'
import Huodonging from '@/components/huodonging'
import Xiae from '@/components/xiae'



Vue.use(Router)

export default new Router({
  routes: [
    {
         path: '/',
         name: 'city',
         component: City
    },
    {
      path: 'city',
      name: 'city',
      component: City
    },
    {
      path: 'citytwo',
      name: 'citytwo',
      component: Citytwo
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resetmima',
      name: 'resetmima',
      component: Resetmima
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/lunbotujilian',
      name: 'lunbotujilian',
      component: Lunbotujilian
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/store',
      name: 'store',
      component: Store,
       //设置默认子路由的出口
       redirect:'/sp',
       children:[
        {
          path: '/',
          name: 'sp',
          component: Sp
        },
        {
          path: '/sp',
          name: 'sp',
          component: Sp
        },
        {
          path: '/pj',
          name: 'pj',
          component: Pj
        },
        {
          path:'/sp_two',
          name:'sp_two',
          component:Sp_two
      }
  
      ]
    }
    ,{
      path:'/huodong',
      name:'huodong',
      component:Huodong
    },
    {
      path:'/storedetail',
      name:'storedetail',
      component:Storedetail
    },
    {
      path:'/safeshow',
      name:'safeshow',
      component:Safeshow
    },
    {
      path:'/yingyezz',
      name:'yingyezz',
      component:Yingyezz
    },
    {
      path:'/xukezheng',
      name:'xukezheng',
      component:Xukezheng
    },
    //hzh
    {
      path:'/home_two',
      name:'home_two',
      component:Home_two
    },

    //hgh
    {
      path: '/account',
      name: 'account',
      component: Account,
    },
    {
      path: '/xiugai',
      name: 'xiugai',
      component: Xiugai,
    },
    {
      path: '/addressing',
      name: 'addressing',
      component: Addressing,
    },
    {
      path: '/newadd',
      name: 'newadd',
      component: Newadd,
    },
    {
      path: '/sousuodizhi',
      name: 'sousuodizhi',
      component: Sousuodizhi,
    },
    {
      path: '/usemoney',
      name: 'usemoney',
      component: Usemoney,
    },
    {
      path: '/yuershuom',
      name: 'yuershuom',
      component: Yuershuom,
    },
    {
      path: '/youhui',
      name: 'youhui',
      component: Youhui,
    },
    {
      path: '/daijinquan',
      name: 'daijinquan',
      component: Daijinquan,
    },
    {
      path: '/shangjiadai',
      name: 'shangjiadai',
      component: Shangjiadai,
    },
    {
      path: '/hongrecord',
      name: 'hongrecord',
      component: Hongrecord,
    },
    {
      path: '/hongbaodui',
      name: 'hongbaodui',
      component: Hongbaodui,
    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component: Tuijian,
    },
    {
      path: '/jifen',
      name: 'jifen',
      component: Jifen,
    },
    {
      path: '/jfshuoming',
      name: 'jfshuoming',
      component: Jfshuoming,
    },
    
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/elecard',
      name: 'elecard',
      component: Elecard,
    },
    {
      path: '/shuoming',
      name: 'shuoming',
      component: Shuoming,
    },
    {
      path: '/zhifu',
      name: 'zhifu',
      component: Zhifu,
    },
    {
      path: '/duihuan',
      name: 'duihuan',
      component: Duihuan,
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice,
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/supervip',
      name: 'supervip',
      component: Supervip,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/lever',
      name: 'lever',
      component: Lever,
    },
    {
      path: '/point',
      name: 'point',
      component: Point,
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo,
    },
    {
      path: '/payfor',
      name: 'payfor',
      component: Payfor,
    },
    {
      path: '/ordernumber',
      name: 'ordernumber',
      component: Ordernumber,
    },
    {
      path: '/ontime',
      name: 'ontime',
      component: Ontime,
    },
    {
      path: '/membertime',
      name: 'membertime',
      component: Membertime,
    },
    {
      path: '/memberqu',
      name: 'memberqu',
      component: Memberqu,
    },
     
    {
      path: '/hongbao',
      name: 'hongbao',
      component: Hongbao,
    },
    {
      path: '/freshman',
      name: 'freshman',
      component: Freshman,
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot,
    },
    {
      path: '/discount',
      name: 'discount',
      component: Discount,
    },
    
    {
      path: '/disclaimer',
      name: 'disclaimer',
      component: Disclaimer,
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: Coupon,
    },
    {
      path: '/business',
      name: 'business',
      component: Business,
    },
    {
      path: '/yuer',
      name: 'yuer',
      component: Yuer,
    },
    {
      path: '/chaozan',
      name: 'chaozan',
      component: Chaozan,
    },
    {
      path: '/niming',
      name: 'niming',
      component: Niming,
    },
    {
      path: '/huodonging',
      name: 'huodonging',
      component: Huodonging,
    },
    {
      path: '/xiae',
      name: 'xiae',
      component: Xiae,
    },
    {
      path: '/hongshuo',
      name: 'hongshuo',
      component: Hongshuo,
    },
  ]
})
