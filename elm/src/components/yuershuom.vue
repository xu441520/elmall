<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">余额问题</span>
        </div>
        <div id="money_one">
            <div id="yuer_one">
                <h3>Q1: 使用余额的条件
</h3>
                <h4>为了保护账户安全，使用余额前必须先绑定手机号。</h4>
            </div>
            <div id="yuer_two">
                <h3>Q2: 余额可以怎么用？
</h3>
                <h4>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。
</h4>
            </div>
            <div id="yuer_three">
                <h3>Q3:我要如何提现？
</h3>
                <h4>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</h4>
            </div>
            <div id="yuer_four">
                <h3>Q4:为什么会提现失败？
</h3>
                <h4>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。
</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'yuershuom',
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
    background-color: rgb(49, 144, 232);
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
#money_one{
    /* border: 1px solid red; */
    margin-top: 0.48rem;
    background-color: #fff;
    padding-top: 0.15rem;
    height: 7rem;
}
#yuer_one{
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
#yuer_one h4{
    margin-top: 0.05rem;
}
#yuer_two{
    margin: 0.1rem;
}
#yuer_two h4{
    margin-top: 0.05rem;
    line-height: 0.2rem;
}
#yuer_three{
    margin: 0.1rem;
}
#yuer_three h4{
    margin-top: 0.05rem;
    line-height: 0.2rem;
}
#yuer_four{
    margin: 0.1rem;
}
#yuer_four h4{
    margin-top: 0.05rem;
    line-height: 0.2rem;
}
</style>
