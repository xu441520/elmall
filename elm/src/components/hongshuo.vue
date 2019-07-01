<template>
    <div id="record_top">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">红包说明</span>
        </div>
        <div id="record_one">
            <h3>Q1:怎么获得红包?</h3>
            <p>通过邀请好友获得</p>
            <p>在下单返红包的商家下单获得</p>
            <p>抢微信朋友分享的红包获得</p>
        </div>
        <div id="record_two">
            <h3>Q2:红包可以做什么?</h3>
            <p>可以抵扣在线支付时的实际支付金额。</p>
        </div>
        <div id="record_three">
            <h3>Q3:红包的门槛金额按照什么金额计算?</h3>
            <p>红包的的门]槛金额按照( 选购菜品折后价+餐盒费)的金额作为计算门槛，即购物车显示的金额(7.3以上版本)。假设红包满30可用，只要选购的菜品现价(折后价) +餐盒费超过30，就可以使用红包。</p>
            <p>都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
        </div>
        <div id="record_four">
            <h3>Q8:预订早餐、预订午餐的红包怎么使用?在哪里查询?</h3>
            <p>预订早餐、预订午餐的红包暂时不支持直接点外卖使用,并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>
            <p>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</p>
            <p>预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>
            <p>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右.上角的个人中心中查找预订早餐、预订午餐的红包。</p>
        </div>
        <div id="record_five">
            <h3>Q9:互斥红包怎么使用?</h3>
            <p>互斥红包不与其他优惠活动(包含但不限于:新用户专享、满X元减X元、满X元赠XX)同时使用。</p>
        </div>
        <div id="record_six">
            <h3>Q10:返红包活动，红包领取规则是什么?</h3>
            <p>同一个手机号一天限领取三个。同一注册用户一天限领取三个。</p>
            <p>注册用户红包直接发送至用户账户里。</p>
            <p>非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</p>
            <p>红包的使用周期为1周，自红包发放的第2天开始计算。同一个手机号一天最多使用两个红包。</p>
            <p>未收到红包短信的用户注意查看手机里的拦截短信。有任何问题请拨打客服电话: 10105757。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'hongshuo',
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#record_top{
    height: 100%vh;
    background-color: #fff;
}
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
    margin-left: 1rem;
}
#record_one{
    /* border: 1px solid red; */
    margin-top: 0.49rem;
    padding-top: 0.1rem;
    margin-left: 0.1rem;
}
#record_one h3{
    margin-bottom: 0.1rem;
}
#record_one p{
    margin-bottom: 0.05rem;
    color: rgb(85, 84, 84);
    font-size: 0.16rem;
}
#record_two{
    /* border: 1px solid red; */
    margin-top: 0.2rem;
    margin-left: 0.1rem;
}
#record_two h3{
    margin-bottom: 0.1rem;
}
#record_two p{
    margin-bottom: 0.05rem;
    color: rgb(85, 84, 84);
    font-size: 0.16rem;
}
#record_three{
    /* border: 1px solid red; */
    margin-top: 0.2rem;
    margin-left: 0.1rem;
}
#record_three h3{
    margin-bottom: 0.1rem;
}
#record_three p{
    margin-bottom: 0.2rem;
    color: rgb(85, 84, 84);
    font-size: 0.16rem;
    /* border: 1px solid red; */
    line-height: 0.23rem;
    margin-right: 0.1rem;
}
#record_four{
    /* border: 1px solid red; */
    margin-left: 0.1rem;
}
#record_four h3{
    margin-bottom: 0.1rem;
    line-height: 0.23rem;
}
#record_four p{
    margin-bottom: 0.15rem;
    color: rgb(85, 84, 84);
    font-size: 0.16rem;
    /* border: 1px solid red; */
    line-height: 0.23rem;
    margin-right: 0.1rem;
}
#record_five{
    /* border: 1px solid red; */
    margin-left: 0.1rem;
}
#record_five h3{
    margin-bottom: 0.1rem;
    line-height: 0.23rem;
}
#record_five p{
    margin-bottom: 0.15rem;
    color: rgb(85, 84, 84);
    font-size: 0.16rem;
    /* border: 1px solid red; */
    line-height: 0.23rem;
    margin-right: 0.1rem;
}
#record_six{
    /* border: 1px solid red; */
    margin-left: 0.1rem;
}
#record_six h3{
    margin-bottom: 0.1rem;
    line-height: 0.23rem;
}
#record_six p{
    margin-bottom: 0.08rem;
    color: rgb(85, 84, 84);
    font-size: 0.16rem;
    /* border: 1px solid red; */
    line-height: 0.23rem;
    margin-right: 0.1rem;
}
</style>
