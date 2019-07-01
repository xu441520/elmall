<template>
    <div id="jf_head">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">积分问题</span>
        </div>
        <div id="jf_body">
            <div id="jf_one">
            <p>Q1:怎么获得积分?</p>
            <p>在线支付的订单将获得订单积分奖励:</p>
            <p>积分将在用户完成评价后获得。</p>
            <p>可获得积分=订单会额x10 (即1元=10点积分)。</p>
            <p>订单金额指实际付款全额，不包含活动优惠金额。</p>
            <p>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
        </div>
        <div id="jf_two">
            <p>Q2:积分用来做什么?</p>
            <p>可以在积分商城兑换各种礼品。</p>
        </div>
        <div id="jf_three">
            <p>Q3:礼品兑换很多天了还没有收到，该怎么办?</p>
            <p>礼品从兑换日起, 3个工作日(周末不算)内处理发货，发货后，通常会在3个工作日左右送达。</p>
        </div>
        <div id="jf_four">
            <h3>Q4:礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛?</h3>
            <p>不会，手机充值卡兑換，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'jfshuoming',
    methods: {
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
    z-index: 2;
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
    margin-left: 0.9rem;
}
#jf_head{
    height: 100vh;
    background-color: #fff;
}
#jf_one{
    /* border: 1px solid red; */
    margin-top: 0.5rem;
    padding-top: 0.15rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
#jf_one p:nth-child(1){
    font-size: 0.23rem;
    margin-bottom: 0.15rem;
}
#jf_one p:nth-child(2){
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
}
#jf_one p:nth-child(3){
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
    
}
#jf_one p:nth-child(4){
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
    line-height: 0.23rem;
}
#jf_one p:nth-child(5){
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
    line-height: 0.23rem;
}
#jf_one p:nth-child(6){
    font-size: 0.18rem;
    line-height: 0.23rem;
}
#jf_two{
    /* border: 1px solid red; */
    padding-top: 0.15rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
#jf_two p:nth-child(1){
    font-size: 0.23rem;
    margin-bottom: 0.15rem;
}
#jf_two p:nth-child(2){
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
}
#jf_three{
    /* border: 1px solid red; */
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
#jf_three p:nth-child(1){
    font-size: 0.23rem;
    margin-bottom: 0.1rem;
    line-height: 0.35rem;
}
#jf_three p:nth-child(2){
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
    line-height: 0.25rem;
}
#jf_four{
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
#jf_four h3{
    font-size: 0.23rem;
    margin-bottom: 0.1rem;
    line-height: 0.3rem;
}
#jf_four p{
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
    line-height: 0.25rem;
    background-color: #fff;
}
#jf_body{
    background-color: #fff;
    height: 8rem;
}
</style>
