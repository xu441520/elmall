<template>
    <div id="shuo_wrap">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">我的优惠</span>
        </div>
        <div id="big_one">
            <div id="you_one">
                <h4>
                    尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 > 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
                </h4>
            </div>
            <div id="you_two">
                <h3>Q1: 特权介绍</h3>
                <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识</p>
                <h4>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。
                </h4>
                <h4>更多特权，敬请期待！</h4>
            </div>
            <div id="you_three">
                <h3>Q2: 资费介绍</h3>
                <p>饿了么会员卡：20元</p>
            </div>
            <div id="you_four">
                <h3>Q3: 使用说明</h3>
                <h4>当用户满足以下任一条件，会员服务自动失效</h4>
                <p>自绑定之日起超过31天；</p>
                <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；
</p>
            </div>
            <div id="you_five">
                <h3>Q4: 购卡说明</h3>
                <h4>在线购买：饿了么App>我的>饿了么会员卡</h4>
            </div>
            <div id="you_six">
                <h3>Q5: 温馨提示</h3>
                <h4>用户在当前会员服务失效前，无法购买新卡。</h4>
                <h4>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'shuoming',
    data(){
        return{
            shuodata:''
        }
    },
    
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
#shuo_wrap{
    height: 100vh;
    background-color: #fff;
}
#big_one{
    background-color: #fff;
    margin-top: 0.5rem;
    margin: 0.2rem auto;
    padding-top: 0.01rem;

}
#you_one h4{
    /* border: 1px solid red; */
    font-size: 0.15rem;
    margin: 0rem auto;
    margin-top: 0.4rem;
    width: 70%;
    line-height: 0.2rem;
}
#you_two h3{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.15rem;
    width: 93%;
}
#you_two p{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.05rem;
    width: 93%;
}
#you_two h4{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.05rem;
    width: 93%;
    line-height: 0.2rem;
}
#you_three h3{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.1rem;
    width: 93%;
}
#you_three p{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.05rem;
    width: 93%;
}
#you_four h3{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.1rem;
    width: 93%;
}
#you_four h4{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.05rem;
    width: 93%;
}
#you_four p{
    font-size: 0.15rem;
    /* border: 1px solid red; */
    width: 80%;
    margin-left: 15%;
    margin-top: 0.1rem;
}
#you_five h3{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.1rem;
    width: 93%;
}
#you_five h4{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.05rem;
    width: 93%;
}
#you_six h3{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.1rem;
    width: 93%;
}
#you_six h4{
    /* border: 1px solid red; */
    margin: 0rem auto;
    margin-top: 0.05rem;
    width: 93%;
}











</style>
