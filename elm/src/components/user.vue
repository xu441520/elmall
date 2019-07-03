<template>
    <div id="common">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">我的</span>
        </div>

        <div id="user_one">
            <p id="user_first">
            <router-link to="/account">
            {{$store.state.userImages.avatar}}
                <img id="user_count" :src="img" alt="">
            </router-link>
            </p>
            <!-- <p>{{$store.state.inputName.username}}</p> -->
            <p class="tele" @click="denglu()" v-show="nameshow">{{this.$store.state.useName||nameing}}</p>
            <!-- <p class="tele">{{nameing}}</p> -->
            <p id="user_tele">
                <img src="../../src/components/imgs/telephone.png" alt="">
            </p>
            <span id="user_word">暂无绑定手机号</span>
            <p><router-link to="/account">
                <img id="img_right" src="../../src/components/imgs/jright.png" alt="">
            </router-link></p>
        </div>
        <div id="user_two">
            <div id="user_money" @click="yumoney()">
                <span>0.00</span>
                <span>元</span>
                <div>我的余额</div>
            </div>
            <div id="user_sale" @click="youhui()">
                <span @click="panhong()" v-show="hongshow">{{this.$store.state.gift_amount||gifting}}</span>
                <span>个</span>
                <div>我的优惠</div>
            </div>
            <div id="user_jifen" @click="jifen()">
                <span>0</span>
                <span>分</span>
                <div>我的积分</div>
            </div>
        </div>
        <div id="user_three">
           <div @click="order()" id="user_order">
                    <span class="icon1"><van-icon color="grey" size="32px" name="orders-o" /></span>
                    <span>我的订单</span>
                    <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="shop()" id="user_shop">
                <p class="icon2"><van-icon color="orangered" size="34px" name="bag-o" /></p>
                <span>积分商城</span>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="elecard()" id="user_card">
                <span class="icon3"><van-icon color="gold" size="32px" name="vip-card-o" /></span>
                <span>饿了吗会员卡</span>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="service()" id="user_fuwu">
                <span class="icon4"><van-icon color="rgb(20, 248, 96)" size="32px" name="service" /></span>
                <span>服务中心</span>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="xiazai()" id="user_app">
                <span class="icon5"><img src="../../src/components/imgs/elema.png" alt=""></span>
                <span>下载饿了么APP</span>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
        </div>
        <div id="common_icon">
            <router-link to="/home">
                <img id="imgOne" src="../../src/components/imgs/eliaomo.png" alt="">
                <p id="pOne">外卖</p>
            </router-link>
            <router-link to="/search">
                <img id="imgTwo" src="../../src/components/imgs/zhinanzhen.png" alt="">
                <p id="ptwo">搜索</p>
            </router-link>
            <!-- <img src="../../src/components/imgs/zhinanzhen1.png" alt=""> -->
            <router-link to="/order">
                <img id="imgThree" src="../../src/components/imgs/icon-.png" alt="">
                <p id="pthree">订单</p>
            </router-link>
            <!-- <img src="../../src/components/imgs/icon-1.png" alt=""> -->
            <router-link to="/user">
                <img id="imgfour" src="../../src/components/imgs/wode.png" alt="">
                <p id="pfour">我的</p>
            </router-link>
            <!-- <img src="../../src/components/imgs/wode.png" alt=""> -->
        </div>
        
        
    </div>
</template>
<script>
import Vue from 'vue'

import Icon from 'vant/lib/icon';
import 'vant/lib/icon/style';
// Vue.use(Icon);
export default {
    name:'common',
    data(){
        return{
            accountName:"",//全局页面的usename
            img:this.$store.state.userImages,
            gifts:'',
            usname:'',//该页面的usename
            nameing:"登录/注册",
            nameshow:true,
            hongbaoing:[],//存储红包的长度
            hongshow:true,
            gifting:0,
        }
    },
    created(){
        console.log("打印用户名");
        console.log(this.$route.query);
        console.log(this.$route.query.username);
        console.log(this.accountName);
        this.img = this.$store.state.userImages;
        this.usering();
        console.log("打印红包的个数："+this.$store.state.gift_amount);
        this.usname = this.$store.state.inputName.username;

        
        
    },
     methods: {
        goBack(){
            this.$router.go(-1);
        },
        yumoney(){
            this.$router.push({
                name: "usemoney",
            });
        },
        youhui(){
            if(this.hongbaoing.length==0){

                this.$router.push({
                name: "youhui",
            });
            }
        },
        jifen(){
            this.$router.push({
                name: "jifen",
            });
        },
        xiazai(){
            this.$router.push({
                name: "xiae",
            });
        },
        service(){
            this.$router.push({
                name: "service",
            });
        },
        elecard(){
            this.$router.push({
                name: "elecard",
            });
        },
        shop(){
            this.$router.push({
                name: "shop",
            });
        },
        order(){
            this.$router.push({
                name: "order",
            });
        },
        // 登录切换用户名部分
        denglu(){
            // this.$store.commit("giftamount",3);
            if(this.nameing=="登录/注册"){
               this.$store.commit("giftamount",3);
               this.$router.push({
               name: "login",
            });
            }
            // this.chuxian2();
        },

        // 判定红包部分
        panhong(){
            this.$store.commit("giftamount",3);
        },
        usering(){
            const api = "https://elm.cangdu.org/v1/user";
            this.$http({
                url:api,
                method:'get',
                withCredentials:true

            }).then(res => {//请求返回的数据res
                console.log("打印user数据成功");
                console.log(res);
                this.gifts = res.data;
                console.log(this.gifts.gift_amount);
                
            })
        },

        // 红包链接
        // couponing(){
        //     const api = "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
        //     this.$http({
        //         url:api,
        //         method:'get',
        //         withCredentials:true

        //     }).then(res => {//请求返回的数据res
        //         console.log("打印红包数据成功");
        //         console.log(res);
        //         // this.hongbaoing = res.data;
        //         if(this.$store.state.inputName.username != ""){
        //         this.$store.commit("honglength1",res.data.length)
        //         // this.$store.commit("getdetail",res.data)
        //        }
        //     })
        // }
    }
}
</script>
<style scoped>

/* #common{
    border: 1px solid red
} */
#common_head{
    width: 3.75rem;
    height: 0.5rem;
    background-color: rgb(49, 144, 232);
    position: fixed;
    top: 0rem;
    left: 0rem;
}
#common_head img{
    display: inline-block;
    width: 0.18rem;
    height: 0.23rem;
    margin-left: 0.2rem;
    margin-top: 0.13rem;
}
#common_use{
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 0.5rem;
    margin-left: 1.2rem;
}
#common_icon{
    background-color: #fff;
    border-top: 0.5px solid lightgrey;
    border-bottom: 0.5px solid lightgrey;
    width: 3.75rem;
    position: fixed;
    left: 0rem;
    bottom: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    height: 0.6rem;
}
#common_icon img{
    /* border:1px solid red; */
    display: block;
    /* width: 0.8rem;
    height: 0.7rem; */

}
#common_icon p{
    /* border: 1px solid red; */
    color: black;
    text-align: center;
}
#imgOne{
    /* border:1px solid red; */
    width: 0.45rem;
    height: 0.4rem;
    margin-left: 0.2rem;
}
#pOne{
margin-left: 0.23rem;
}
#imgTwo{
    /* margin-top: 0.21rem; */
    /* border: 1px solid red; */
    margin-top: 0.07rem;
    width: 0.28rem;
    height: 0.27rem;
    margin-bottom: 0.06rem;
}
#pTwo{
margin-left: 0.23rem;
}
#imgThree{
    /* margin-top: 0.21rem; */
    /* border: 1px solid red; */
    width: 0.4rem;
    height: 0.41rem;
}

#imgfour{
    margin-top: 0.08rem;
    margin-left: 0.05rem;
    margin-right: 0.2rem;
    margin-bottom: 0.08rem;
    /* border: 1px solid red; */
    width: 0.25rem;
    height: 0.25rem;
}
#pfour{
    /* border: 1px solid red; */
    margin-right: 0.12rem;
}

/* 我的的页面 */
#user_one{
    width: 3.75rem;
    height: 0.9rem;
    background-color: rgb(49, 144, 232);
    margin-top: 0.5rem;
    /* border: 1px solid red; */
    position: relative;
}
#user_first{
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 50%;
    border: 2px solid white;
    overflow: hidden;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
}
#user_count{
    display: block;
    margin-top: 0rem;
    width: 100%;
    height: 100%;
}
.tele{
    /* border: 1px solid red; */
    font-size: 0.21rem;
    position: absolute;
    top: 0.19rem;
    left: 0.95rem;
    color: white;
}
#user_tele{
    /* border: 1px solid red; */
    color: white;
    font-size: 0.22rem;
    position: absolute;
    top: 0.5rem;
    left: 0.9rem;
}
#user_tele img{
    width: 0.28rem;
    height: 0.25rem;

}
#user_word{
    /* border: 1px solid red; */
    color: white;
    position: absolute;
    top: 0.55rem;
    left: 1.2rem;
}
#img_right{
    width: 0.12rem;
    height: 0.21rem;
    position: absolute;
    top: 0.4rem;
    right: 0.2rem;
}
#user_two{
    /* border: 1px solid red; */
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 0.8rem;
}
#user_money{
    /* border: 1px solid red; */
    border-right: 0.5px solid lightgray;
    text-align: center;
    width: 1.24rem;
    
}
#user_money span:nth-child(1){
    margin-top: 0.15rem;
    display: inline-block;
    font-size: 0.3rem;
    /* font-weight: bold; */
    color:orange;
    
}
#user_money span:nth-child(2){
    margin-top: 0.15rem;
    display: inline-block;
    font-size: 0.12rem;
    /* font-weight: bold; */
    
}
#user_money div{
    margin-top: 0.06rem;
}
#user_sale{
    /* border: 1px solid red; */
    border-right: 0.5px solid lightgray;
    text-align: center;
    width: 1.24rem;
    
}
#user_sale span:nth-child(1){
    margin-top: 0.15rem;
    display: inline-block;
    font-size: 0.3rem;
    /* font-weight: bold; */
    color:orangered;
    
}
#user_sale span:nth-child(2){
    margin-top: 0.15rem;
    display: inline-block;
    font-size: 0.12rem;
    /* font-weight: bold; */
    
}
#user_sale div{
    margin-top: 0.06rem;
}
#user_jifen{
    text-align: center;
    width: 1.24rem;
    
}
#user_jifen span:nth-child(1){
    margin-top: 0.15rem;
    display: inline-block;
    font-size: 0.3rem;
    /* font-weight: bold; */
    color:green;
    
}
#user_jifen span:nth-child(2){
    margin-top: 0.15rem;
    display: inline-block;
    font-size: 0.12rem;
    /* font-weight: bold; */
    
}
#user_jifen div{
    margin-top: 0.06rem;
}
#user_three{
    /* border: 1px solid red; */
    position: relative;
    top: 0.12rem;
    left: 0rem;
}
#user_order{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    padding-left: 0.14rem;
    border-bottom: 0.5px solid lightgray;
    border-top: 0.5px solid lightgray;
}
.icon1{
    display: inline-block;
    margin-top: 0.09rem;
}
#user_order span:nth-child(2){
    display: inline-block;
    font-size: 0.21rem;
    position: absolute;
    top: 0.16rem;
    left: 0.5rem;
}
#user_order img{
    position: absolute;
    top: 0.16rem;
    right: 0.2rem;
}
#user_shop{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    padding-left: 0.13rem;
    border-bottom: 0.5px solid lightgray;
}
.icon2{
    display: inline-block;
    margin-top: 0.06rem;

}
#user_shop span:nth-child(2){
    font-size: 0.21rem;
    position: absolute;
    top: 0.68rem;
    left: 0.5rem;
}
#user_shop img{
    position: absolute;
    top: 0.68rem;
    right: 0.2rem;
}
#user_card{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.48rem;
    padding-left: 0.13rem;
    border-bottom: 0.5px solid lightgray;
}
.icon3{
    display: inline-block;
    margin-top: 0.07rem;
}
#user_card span:nth-child(2){
    font-size: 0.21rem;
    position: absolute;
    top: 1.15rem;
    left: 0.5rem;
}
#user_card img{
    position: absolute;
    top: 1.15rem;
    right: 0.2rem;
}
#user_fuwu{
    /* border: 1px solid red; */
    margin-top: 0.15rem;
    background-color: #fff;
    height: 0.5rem;
    padding-left: 0.13rem;
    border-bottom: 0.5px solid lightgray;
    border-top: 0.5px solid lightgray;
}
.icon4{
    margin-top: 0.1rem;
    display: inline-block;
}
#user_fuwu span:nth-child(2){
    font-size: 0.21rem;
    position: absolute;
    top: 1.8rem;
    left: 0.5rem;
}
#user_fuwu img{
    position: absolute;
    top: 1.79rem;
    right: 0.2rem;
}
#user_app{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    border-bottom: 0.5px solid lightgray;
}
.icon5 img{
    /* border: 1px solid red; */
    width: 0.3rem;
    height: 0.3rem;
    display: block;
    position: absolute;
    top: 0rem;
    left: 0.13rem;
    margin-bottom: 0.05rem;
}
#user_app span:nth-child(2){
    font-size: 0.21rem;
    position: absolute;
    top: 2.3rem;
    left: 0.5rem;
}
#user_app img{
    position: absolute;
    top: 2.3rem;
    right: 0.2rem;
}

</style>
