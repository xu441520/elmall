<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">购买记录</span>
        </div>
        <div id="ji_one">
            <img src="../../src/components/imgs/jifen.png" alt="">
            <p>没有购买记录</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'invoice',
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
#ji_one{
    position: relative;
    margin-top: 1.8rem;
}
#ji_one img{
    position: absolute;
    left: 38%;
    top: 0;
    width: 1rem;
    height: 1.2rem;
}
#ji_one p{
    position: absolute;
    left: 37%;
    top: 1.4rem;
    color: gray;
}
</style>
