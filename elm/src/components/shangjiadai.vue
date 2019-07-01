<template>
    <div id="quan_head">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">代金券说明</span>
        </div>
        <div id="quan_one">
            <div id="quan_two">
                <h3>Q1:什么是商家代金券?</h3>
                <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
            </div>
            <div id="quan_three">
                <h3>Q2:怎么获得商家代金券?
</h3>
                <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
                <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
            </div>
            <div id="quan_four">
                <h3>Q3:商家代金券使用条件
</h3>
                <p>商家代金券仅限在指定商家使用</p>
                <p>商家代金券仅限在线支付使用</p>
                <p>每个订单只能使用一张商家代金券，不可与其他代金券受加使用</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'shangjiadai',
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
#quan_head{
    height: 100vh;
    background-color: #fff;
    margin-top: 0.5rem;
}
#quan_one{
    /* border: 1px solid red; */
    /* margin-top: 0.6rem; */
    width: 94%;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
}
#quan_two h3{
    margin-top: 0.5rem;
    font-size: 0.2rem;
    padding-top: 0.15rem;
}
#quan_two p{
    margin-top: 0.1rem;
    font-size: 0.17rem;
    line-height: 0.2rem;
}
#quan_three h3{
    margin-top: 0.1rem;
    font-size: 0.2rem;
}
#quan_three p{
    margin-top: 0.05rem;
    font-size: 0.17rem;
    line-height: 0.2rem;
}
#quan_four h3{
    margin-top: 0.1rem;
    font-size: 0.2rem;
    margin-bottom: 0.05rem;
}
#quan_four p{
    margin-top: 0.02rem;
    font-size: 0.17rem;
    line-height: 0.2rem;
}
</style>
