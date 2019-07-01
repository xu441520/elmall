<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">我的余额</span>
        </div>
        <div id="money_one">
            <div id="money_five">
                <div id="money_two">
                    <span>当前余额</span>
                    <span class="el-icon-question"></span>
                    <span>
                        <router-link to="/yuershuom">
                        余额说明
                        </router-link>
                    </span>
                    
                </div>
                <div id="money_three">
                    <span>0.00</span>
                    <span>元</span>
                </div>
                <button id="money_six">提现</button>
                
            </div>
            
        </div>
        <div id="money_four">
            交易明细       
        </div>
    </div>
</template>
<script>
export default {
    name:'usemoney',
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
    margin-top: 0.5rem;
    background-color: rgb(49, 144, 232);
    line-height: 0.28rem;
    padding-bottom: 0.15rem;
    padding-top: 0.2rem;
}
#money_five{
    border: 1px solid red;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    background-color: #fff;
}
#money_two span:nth-child(1){
    /* border: 1px solid red; */
    display: inline-block;
    margin-left: 0.1rem;
    color: gray;
    margin-top: 0.05rem;
}
#money_two span:nth-child(2){
    /* border: 1px solid red; */
   position: absolute;
    top: 0.82rem;
    right: 0.95rem;
    color: rgb(49, 144, 232);
}
#money_two span:nth-child(3){
    /* border: 1px solid red; */
    position: absolute;
    top: 0.78rem;
    right: 0.2rem;
    color: rgb(49, 144, 232);
    
}
#money_three span:nth-child(1){
    /* border: 1px solid red; */
    display: inline-block;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    font-size: 0.35rem;
    margin-right: 0.05rem;
}
#money_three span:nth-child(2){
    /* border: 1px solid red; */
    font-size: 0.15rem;
}
#money_six{
    width: 94%;
    height: 0.4rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    background-color: rgb(189, 187, 187);
    color: #fff;
    font-size: 0.2rem;
    margin-bottom: 0.1rem;
    border-radius: 5px;
}
#money_four{
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    color: gray;
    font-size: 0.18rem;
}
</style>
