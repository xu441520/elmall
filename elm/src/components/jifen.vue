<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">我的积分</span>
        </div>
        <div id="ji_one">
            <div id="ji_seven">
                <div id="ji_two">
                    <span>当前积分</span>
                    <span class="el-icon-question"></span>
                    <span @click="jifenshuoming()">积分说明</span>
                </div>
                <div id="ji_three">
                    <span>0</span>
                    <span>分</span>
                </div>
                <button id="ji_four" @click="jifen()">积分兑换商品</button>
            </div>
        </div>
        <p id="ji_five">最近30天积分记录</p>
        <div id="ji_six">
            <img src="../../src/components/imgs/jifen.png" alt="">
            <p>最近30天无积分记录</p>
            <h4>快去下单赚取大量积分吧</h4>
        </div>
        <div id="ji_nine" v-show="jishow">
            <img src="../../src/components/imgs/zhuyi.png" alt="">
            <p>快去下单赚取大量积分吧</p>
            <button @click="jf()">确认</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'jifen',
    data(){
        return{
            jishow:false
        }
    },
    methods: {
        goBack(){
            this.$router.push({
                name: "user",
            });
        },
        jifen(){
            this.jishow = true;
        },
        jf(){
            this.jishow = false;
        },
        jifenshuoming(){
            this.$router.push({
                name: "jfshuoming",
            });
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
#ji_one{
    /* border: 1px solid red; */
    background-color: rgb(49, 144, 232);
    height: 1.5rem;
    margin-top: 0.5rem;
    padding-top: 0.1rem;
}
#ji_seven{
    /* border: 1px solid red; */
    width: 3.5rem;
    height: 1.4rem;
    margin-left: 0.11rem;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
}
#ji_two{
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
#ji_two span:nth-child(1){
font-size: 0.17rem;
}
#ji_two span:nth-child(2){
font-size: 0.18rem;
color: rgb(49, 144, 232);
position: absolute;
top: 0.691rem;
right: 0.91rem;
}
#ji_two span:nth-child(3){
font-size: 0.17rem;
color: rgb(49, 144, 232);
position: absolute;
top: 0.7rem;
right: 0.2rem;
}
#ji_three{
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    margin-bottom: 0.15rem;
}
#ji_three span:nth-child(1){
    color: rgb(36, 35, 35);
    font-size: 0.35rem;
}
#ji_three span:nth-child(2){
    color: rgb(36, 35, 35);
    font-size: 0.19rem;
}
#ji_four{
    background-color: red;
    color: #fff;
    height: 0.45rem;
    width: 94.5%;
    margin-left: 0.1rem;
    font-size: 0.2rem;
}
#ji_five{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    font-size: 0.17rem;
    color: gray;
}
#ji_six{
    text-align: center;
    margin-top: 0.4rem;
}
#ji_six img{
    /* border: 1px solid red; */
    width: 0.86rem;
    height: 1rem;
}
#ji_six p{
    margin-top: 0.2rem;
    font-size: 0.22rem;
    color: rgb(43, 42, 42);
}
#ji_six h4{
    margin-top: 0.15rem;
    color: gray;
}
#ji_nine{
    /* border: 1px solid red; */
    width: 80%;
    height: 1.72rem;
    position: absolute;
    top: 1.8rem;
    left: 10%;
    background-color: #fff;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
}
#ji_nine img{
    width: 1.1rem;
    height: 0.9rem;
}
#ji_nine p{
    margin-top: 0.02rem;
    font-size: 0.18rem;
}
#ji_nine button{
    width: 100%;
    margin-top: 0.2rem;
    background-color: rgb(46, 226, 46);
    height: 0.4rem;
    color: #fff;
    font-size: 0.22rem;
}
</style>
