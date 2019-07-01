<template>
    <div id="eleword">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">会员中心</span>
        </div>
        <div id="elecard_one">
            <span>为账户</span>
            <span>{{$store.state.inputName.username}}</span>
            <span>购买会员</span>
        </div>
        <router-link to="/shuoming">
            <div id="elecard_two">
            <span>会员特权</span>
            <span>会员说明</span>
            <img src="../../src/components/imgs/youj.png" alt="">
        </div>
        </router-link>
        <div id="elecard_three">
            <img src="../../src/components/imgs/pei.png" alt="">
            <p id="pei_one">减免配送费</p>
            <p id="pei_two">每月减免30单，每日可减免3单，每单最高减4元</p>
            <p id="pei_three">蜂鸟专送专享</p>
        </div>
        <div id="elecard_four">
            <img src="../../src/components/imgs/sheng.png" alt="">
            <p id="pei_four">减免配送费</p>
            <p id="pei_five">每月减免30单，每日可减免3单，每单最高减4元</p>
            <p id="pei_six">蜂鸟专送专享</p>
        </div>
        <div id="elecard_five">
            <p>开通会员</p>
        </div>
        <div id="elecard_six">
            <p>1个月</p>
            <p>￥20</p>
            <router-link to="/zhifu">
                <button>购买</button>
            </router-link>
        </div>
        <router-link to="/duihuan">
            <div id="elecard_seven">
            <span>兑换会员</span>
            <span>使用卡号卡密</span>
            <img src="../../src/components/imgs/youj.png" alt="">
        </div>
        </router-link>
        <router-link to="/invoice">
            <div id="elecard_eight">
            <span>购买记录</span>
            <span>开发票</span>
            <img src="../../src/components/imgs/youj.png" alt="">
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'elecard',
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#common_head{
    width: 3.75rem;
    height: 0.5rem;
    background-color: blue;
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
    margin-left: 1.05rem;
}
#elecard_one{
    /* border: 1px solid red; */
    margin-top: 0.6rem;
    font-size: 0.2rem;
    margin-bottom: 0.15rem;
}
#elecard_one span:nth-child(1){
    display: inline-block;
    margin-left: 0.15rem;
}
#elecard_one span:nth-child(2){
    font-weight: bold;
}
#elecard_two{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
}
#elecard_two span:nth-child(1){
    font-size: 0.22rem;
    display: inline-block;
    margin-left: 0.15rem;
}
#elecard_two span:nth-child(2){
    font-size: 0.2rem;
    display: inline-block;
    position: absolute;
    top: 0.02rem;
    right: 0.3rem;
    color: gray;
}
#elecard_two img{
    height: 0.2rem;
    position: absolute;
    top: 0.18rem;
    right: 0.1rem;

}
#elecard_three{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 1rem;
    position: relative;
    border-top: 0.5px solid lightgray;
    border-bottom: 0.5px solid lightgray;
}
#elecard_three img{
    /* border: 1px solid red; */
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
}

#pei_one{
    position: absolute;
    top: 0.1rem;
    left: 1.1rem;
    font-size: 0.2rem;
}
#pei_two{
    position: absolute;
    top: 0.35rem;
    left: 1.1rem;
    font-size: 0.15rem;
    /* border: 1px solid red; */
    line-height: 0.17rem;
}
#pei_three{
    position: absolute;
    top: 0.75rem;
    left: 1.1rem;
    font-size: 0.15rem;
    /* border: 1px solid red; */
}
#elecard_four{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 1rem;
    position: relative;
}
#elecard_four img{
    /* border: 1px solid red; */
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
}

#pei_four{
    position: absolute;
    top: 0.1rem;
    left: 1.1rem;
    font-size: 0.2rem;
}
#pei_five{
    position: absolute;
    top: 0.35rem;
    left: 1.1rem;
    font-size: 0.15rem;
    /* border: 1px solid red; */
    line-height: 0.17rem;
}
#pei_six{
    position: absolute;
    top: 0.75rem;
    left: 1.1rem;
    font-size: 0.15rem;
    /* border: 1px solid red; */
}
#elecard_five{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
    margin-top: 0.15rem;
    line-height: 0.5rem;
    font-size: 0.2rem;
}
#elecard_five p{
    margin-left: 0.15rem;
}
#elecard_six{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
    border-top: 0.5px solid lightgray;
    border-bottom: 0.5px solid lightgray;
}
#elecard_six p:nth-child(1){
    font-size: 0.2rem;
    display: inline-block;
    margin-left: 0.15rem;
}
#elecard_six p:nth-child(2){
    font-size: 0.22rem;
    font-weight: bold;
    display: inline-block;
    position: absolute;
    top: 0.02rem;
    left: 0.7rem;
    color: orangered;
}
#elecard_six button{
    position: absolute;
    top: 0.15rem;
    right: 0.12rem;
    border: 0.5px solid orangered;
    color: orangered;
    background-color: #fff;
    font-size: 0.16rem;
    width: 0.6rem;

}
#elecard_seven{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
    margin-top: 0.15rem;
}
#elecard_seven span:nth-child(1){
    font-size: 0.22rem;
    display: inline-block;
    margin-left: 0.15rem;
}
#elecard_seven span:nth-child(2){
    font-size: 0.2rem;
    display: inline-block;
    position: absolute;
    top: 0.02rem;
    right: 0.3rem;
    color: gray;
}
#elecard_seven img{
    height: 0.2rem;
    position: absolute;
    top: 0.18rem;
    right: 0.1rem;

}
#elecard_eight{
    /* border: 1px solid red; */
    background-color: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
}
#elecard_eight span:nth-child(1){
    font-size: 0.22rem;
    display: inline-block;
    margin-left: 0.15rem;
}
#elecard_eight span:nth-child(2){
    font-size: 0.2rem;
    display: inline-block;
    position: absolute;
    top: 0.02rem;
    right: 0.3rem;
    color: gray;
}
#elecard_eight img{
    height: 0.2rem;
    position: absolute;
    top: 0.18rem;
    right: 0.1rem;

}
</style>
