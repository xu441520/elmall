// 积分商城部分
<template>
    <div id="shop_head">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
        </div>
        <div id="shop_one">
            <h2>请重新输入</h2>
            <p>请返回后重新进入积分商城</p>
            <img id="img_shop" src="../../src/components/imgs/shop.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'shop',
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
#shop_one{
    /* border: 1px solid red; */
    margin: 40% auto;
}
#shop_one h2{
    margin-top: 0.15rem;
    color: rgb(49, 144, 232);
    text-align: center;
}
#shop_one p{
    margin-top:0.15rem;
    font-size: 0.2rem;
    text-align: center;
    margin-bottom: 0.2rem;
}
#shop_one img{
    display: block;
    margin: 0 auto;
    width: 1.5rem;
    height: 1.5rem;
}
</style>
