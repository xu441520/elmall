<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">我的优惠</span>
            <div id="youhui_one">
                <span><router-link to="/youhui">红包</router-link></span>
                <span><router-link to="/daijinquan">商家代金券</router-link></span>
                <p></p>
            </div>
        </div>
        <div id="dai_one">
            <span class="el-icon-question"></span>
            <span><router-link to="/shangjiadai">商家代金券说明</router-link></span>
        </div>
        <div id="dai_two">
            <img src="../../src/components/imgs/diqiu.png" alt="">
            <p id="dai_three">无法使用代金券</p>
            <p id="dai_four">非客户端或客户端版本过低</p>
            <button><router-link to="/xiae">下载或升级客户端</router-link></button>
        </div>
    </div>
</template>
<script>
export default {
    name:'daijinquan',
    created(){
        console.log("打印超级会员部分");
        console.log(this.$route.query.daser);
        console.log(this.$route.query.serivers);
    },
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
#youhui_one{
    /* border: 1px solid red; */
    width: 100%;
    margin-top: 0.48rem;
    height: 0.5rem;
    background-color: white;
    font-size: 0.2rem;
    /* text-align: center; */
    line-height: 0.5rem;
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 2;
    display: flex;
    justify-content: space-around;
}
#youhui_one span:nth-child(1){
    /* border: 1px solid red; */
    width: 40%;
    text-align: center;
}
#youhui_one span:nth-child(2){
    /* border: 1px solid red; */
    width: 40%;
    text-align: center;
}
#youhui_one p{
    width: 26%;
    height: 2px;
    background-color: blue;
    position: absolute;
    top: 0.4rem;
    right: 0.46rem;
}
#dai_one{
    /* border: 1px solid red; */
    position: relative;
    top: 1.1rem;
    right: 0rem;
    color: blue;
    font-size: 0.16rem;
}
#dai_one span:nth-child(1){
    position: absolute;
    top: 0;
    right: 1.25rem;
}
#dai_one span:nth-child(2){
    position: absolute;
    top: 0;
    right: 0.1rem;
}
#dai_two{
    /* border: 1px solid red; */
    position: absolute;
    top: 2.3rem;
    left: 23%;
}
#dai_two img{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    margin-left: 0.4rem;
}
#dai_three{
    text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    font-size: 0.2rem;
}
#dai_four{
    text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    font-size: 0.15rem;
    color: gray;
}
#dai_two button{
    height: 0.4rem;
    width: 1.5rem;
    font-size: 0.16rem;
    background-color: rgb(74, 240, 74);
    color: white;
    margin-top: 0.1rem;
    margin-left: 0.15rem;
}
</style>
