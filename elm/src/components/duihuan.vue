<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">兑换会员</span>
        </div>
        <div id="dui_first">
            <span>成功兑换后将关联到当前账号：</span>
            <span>{{this.$store.state.useName}}</span>
        </div>
        <div id="dui_second">
            <input @input="kahao()" v-model="maxka" :maxLength="10" type="text" placeholder="请输入10位卡号">
            <input @input="kami()" v-model="maxmi" :maxLength="6" type="text" placeholder="请输入6位卡密">  
        </div>
        <button :style="{backgroundColor:bianse}" id="dui_third">兑换</button>
        <div id="dui_four">
            <p>——温馨提示——</p>
        </div>
        <div id="dui_five">
            <p>新兑换的会员服务，权益以「会员说明」为准。</p>
            <p>月卡30次减免配送费。</p>
            <p>季卡: 90次减免配送费。</p>
            <p>年卡360次减免配送费。</p>
            <p>*仅原蜂鸟专送订单。每日景多减免3单，每单最高减免4元(一个月技31天计算)</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'duihuan',
    data(){
        return{
            bianse:"",
            maxka:"",
            maxmi:"",
            show1:false,
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        kahao(){
            if (this.maxka.length<10 && this.maxmi.length<6) {
                this.bianse="rgb(192, 190, 190)";
            }
        },
        kami(){
            if (this.maxka.length==10 && this.maxmi.length==6) {
                this.bianse="green";
            }else{
                this.bianse="rgb(192, 190, 190)";
            }
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
    margin-left: 1.1rem;
}
#dui_first{
    margin-top: 0.6rem;
    margin-left: 0.1rem;
    margin-bottom: 0.1rem;
}
#dui_first span:nth-child(1){
    font-size: 0.16rem;
}
#dui_first span:nth-child(2){
    font-size: 0.17rem;
    font-weight: bold;
}
#dui_second{
    background-color: #fff;  
}
#dui_second input:nth-child(1){
    font-size: 0.2rem;
    height: 0.5rem;
    width: 100%;
    border-top: 0.5px solid rgb(235, 234, 234);
    border-bottom: 0.5px solid rgb(235, 234, 234);
    /* border: 1px solid red; */
}
#dui_second input:nth-child(2){
    font-size: 0.2rem;
    height: 0.5rem;
    width: 100%;
    border-bottom: 0.5px solid rgb(235, 234, 234);
    /* border: 1px solid red; */
}
#dui_third{
    width: 94%;
    height: 0.5rem;
    margin-top: 0.15rem;
    margin-left: 0.1rem;
    background-color: rgb(192, 190, 190);
    color: #fff;
    font-size: 0.21rem;
    border-radius: 10px;
}
#dui_four{
    /* border: 1px solid red; */
    text-align: center;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0.17rem;
    color: gray;
}
#dui_five{
    /* border: 1px solid red; */
    margin-left: 12%;
    font-size: 0.17rem;
    color: gray;
}
#dui_five p{
    margin-top: 0.05rem;
    line-height: 0.2rem;
}







</style>
