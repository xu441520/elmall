<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">在线支付</span>
        </div>
        <div id="zhi_one">
            <p>支付剩余时间</p>
            <p>00:{{minute}}:{{second}}</p>
        </div>
        <p id="zhi_two">选择支付方式</p>
        <div id="zhi_three">
            <img id="icon_one" src="../../src/components/imgs/zhifubao.png" alt="">
            <span id="zhi_four">支付宝</span>
            <img @click="zhishow()" id="icon_two" :src="imgsrc" alt="">
        </div>
        <div id="zhi_five">
            <img id="icon_three" src="../../src/components/imgs/weixin.png" alt="">
            <span id="zhi_six">微信</span>
            <img id="icon_four" @click="zhishow()" :src="imgsrc2" alt="">
        </div>
        <button id="zhi_seven" @click="zhifu()">确认支付</button>
        <div v-show="hongshow" class="hong_fiveth animated heartBeat 0.4s">
            <img src="../../src/components/imgs/zhuyi.png" alt="">
            <p>暂不开放支付功能</p>
            <button @click="makesure()" >确认</button>
        </div>
        <div v-show="fushow" class="hong_six animated heartBeat 0.4s">
            <img src="../../src/components/imgs/zhuyi.png" alt="">
            <p>当前环境无法支付，请打开官方APP进行支付</p>
            <button @click="tiaozhuan()">确认</button>
        </div>
        <div v-show="endshow" class="hong_seven animated heartBeat 0.4s">
            <img src="../../src/components/imgs/zhuyi.png" alt="">
            <p>支付超时</p>
            <button @click="makesure2()">确认</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'zhifu',
    data(){
        return{
            header:{
                headerTitle:'订单详情',
            },
            minutes:15,
            seconds:0,
            hongshow:true,
            fushow:false,
            outshow:false,
            // showing:false,
            endshow:false,
            imgsrc:require("../../src/components/imgs/icon-test.png"),
            imgsrc2:require("../../src/components/imgs/icon-test2.png")
        }
    },
    mounted() {
      this.timer()
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        makesure(){
            this.hongshow = false;
        },
        zhifu(){
            this.fushow = true;
        },
        end(){
            this.endshow = true;
        },
        makesure2(){
            this.endshow = false;
        },
        tiaozhuan(){
            this.$router.push({
                name: "order",
            });
        },

        // 点击变色部分
        zhishow(){
            if(this.outshow){
                this.imgsrc=require('../../src/components/imgs/icon-test.png');
                this.imgsrc2=require('../../src/components/imgs/icon-test2.png')
                this.outshow=!this.outshow;
            }else{
                this.imgsrc=require('../../src/components/imgs/icon-test2.png');
                this.imgsrc2=require('../../src/components/imgs/icon-test.png')
                this.outshow=!this.outshow;
            }
        },
        // 倒计时
        num(n){
            return n < 10 ? '0' + n : '' + n
        },
        timer(){
            var _this = this
            var time = window.setInterval(function () {
            if (_this.seconds === 0 && _this.minutes !== 0) {
                _this.seconds = 59
                _this.minutes -= 1
            } else if (_this.minutes === 0 && _this.seconds === 0) {
                _this.seconds = 0
                window.clearInterval(time)
                _this.end();
            } else {
                _this.seconds -= 1
            }
            }, 1000)

            // 计时完成后，弹出框
            if (_this.seconds === 0 && _this.minutes === 0) {
                this.hongshow = true;
            }
        }
    },
    watch: {
      second: {
        handler (newVal) {
          this.num(newVal)
          
        }
    },
        minute: {
            handler (newVal) {
            this.num(newVal)
        }
        }
    },
    computed:{
        second:function(){
            return this.num(this.seconds);
        },
        minute:function(){
            return this.num(this.minutes)
        }
    },
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
#zhi_one{
    /* border: 1px solid red; */
    height: 1.4rem;
    padding-top: 0.49rem;
    background-color: #fff;
    text-align: center;
}
#zhi_one p:nth-child(1){
    /* border: 1px solid red; */
    margin-top: 0.2rem;
    font-size: 0.2rem;
}
#zhi_one p:nth-child(2){
    /* border: 1px solid red; */
    margin-top: 0.2rem;
    font-size: 0.5rem;
}
#zhi_two{
    margin-left: 0.15rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
}
#zhi_three{
    border: 0.5px solid lightgray;
    border-bottom: none;
    background-color: #fff;
    height: 1rem;
    line-height: 1rem;
    position: relative;
}
#icon_one{
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.2rem;
    margin-left: 0.15rem;
}
#zhi_four{
    position: absolute;
    top: 0.03rem;
    left: 0.85rem;
    font-size: 0.22rem;
}
#icon_two{
    position: absolute;
    top: 0.4rem;
    right: 0.15rem;
    font-size: 0.26rem;
    width: 0.3rem;
    height: 0.3rem;
}
#zhi_five{
    border: 0.5px solid lightgray;
    background-color: #fff;
    height: 1rem;
    line-height: 1rem;
    position: relative;
}
#icon_three{
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.2rem;
    margin-left: 0.15rem;
}
#icon_four{
    position: absolute;
    top: 0.4rem;
    right: 0.15rem;
    font-size: 0.26rem;
    width: 0.3rem;
    height: 0.3rem;
}
#zhi_six{
    position: absolute;
    top: 0.03rem;
    left: 0.85rem;
    font-size: 0.22rem;
}
#zhi_seven{
    width: 94%;
    margin-left: 0.1rem;
    height: 0.5rem;
    color: #fff;
    background-color: #18ee3b;
    margin-top: 0.2rem;
    font-size: 0.2rem;
}
.hong_fiveth{
    width: 70%;
    height: 1.8rem;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 1.9rem;
    left: 15%;
    overflow: hidden;
}
.hong_fiveth img{
    width: 1.33rem;
    height: 1rem;
}
.hong_fiveth p{
    margin-top: 0.06rem;
    font-size: 0.18rem;

}
.hong_fiveth button{
    height: 0.4rem;
    width: 100%;
    background-color: rgb(92, 240, 92);
    color: #fff;
    font-size: 0.2rem;
    margin-top: 0.14rem;
}
.hong_six{
    width: 70%;
    height: 2.2rem;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 1.9rem;
    left: 15%;
    overflow: hidden;
}
.hong_six img{
    width: 1.33rem;
    height: 1rem;
}
.hong_six p{
    margin-top: 0.06rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
}
.hong_six button{
    height: 0.4rem;
    width: 100%;
    background-color: rgb(92, 240, 92);
    color: #fff;
    font-size: 0.2rem;
    margin-top: 0.14rem;
}
.hong_seven{
    width: 70%;
    height: 1.9rem;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 1.9rem;
    left: 15%;
    overflow: hidden;
}
.hong_seven img{
    width: 1.33rem;
    height: 1rem;
}
.hong_seven p{
    margin-top: 0.06rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
}
.hong_seven button{
    height: 0.4rem;
    width: 100%;
    background-color: rgb(92, 240, 92);
    color: #fff;
    font-size: 0.2rem;
    margin-top: 0.14rem;
}





























</style>
