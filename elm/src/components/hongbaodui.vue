<template>
<div>
<div id="common_head">
<img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
<span id="common_use">兑换红包</span>
</div>
<div id="duihuan_one">
<input id="duihuan_two" v-model="exchange_code" type="text" placeholder="请输入兑换码">
</div>
<div id="duihuan_three">
<input id="duihuan_four" v-model="captcha_code" type="text" placeholder="验证码">
<img id="img_code" :src="codes" alt="">
<input id="duihuan_five" type="text">
<p id="duihuan_seven">看不清</p>
<p @click="getCode()" id="duihuan_eight">换一张</p>
</div>
<button @click="getshow()" id="duihuan_six">兑换</button>
<div class="frame animated heartBeat 0.4s" id="duihuan_nine" v-show="outshow">
<img src="../../src/components/imgs/zhuyi.png" alt="">
<p>无效的兑换码</p>
<button @click="getshow()">确认</button>
</div>
</div>
</template>
<script>
export default {
name:'hongbaodui',
data(){
return{
datas:'',
codes:'',//存储验证码base64位验证码部分
exchange_code:'',//接收兑换码
captcha_code:'',//接收验证码部分
ueserNumber:'',//接收公用用户名
outshow:false//输入框的显示和隐藏
}
},
created(){
this.dcoupons();
this.getCode();
},
methods: {
goBack(){
this.$router.go(-1);
},
getshow(){
this.outshow =!this.outshow;
},
getCode(){
const api = "https://elm.cangdu.org/v1/captchas";
this.$http({
url:api,
method:'post',
withCredentials:true

}).then(res => {//请求返回的数据res
console.log("打印兑换用户名数据成功");
console.log(res);
this.codes = res.data.code;
console.log(this.codes);
})
},
dcoupons(){
const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.inputName+"/hongbao/exchange";
this.$http({
url:api,
method:'post',
withCredentials:true,
data:{
user_id: this.$store.state.inputName,
exchange_code: this.exchange_code,
captcha_code: this.captcha_code
}
}).then(res => {//请求返回的数据res
console.log("打印兑换红包2数据成功");
console.log(res);
this.datas = res.data;
})
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
#duihuan_two{
margin-top: 0.65rem;
width: 94%;
height: 0.5rem;
/* border: 1px solid red; */
margin-left: 0.1rem;
font-size: 0.2rem;
border-radius: 2px;
}
#duihuan_three{
display: flex;
justify-content: space-around;
margin-left: 0.1rem;
margin-top: 0.15rem;
margin-right: 0.1rem;
}
#duihuan_four{
width: 55%;
height: 0.5rem;

font-size: 0.2rem;
border-radius: 2px;
}
#duihuan_five{
width: 43%;
height: 0.5rem;
margin-left: 0.1rem;
font-size: 0.2rem;
border-radius: 2px;
}
#duihuan_six{
width: 94%;
height: 0.5rem;
/* border: 1px solid red; */
margin-left: 0.1rem;
font-size: 0.2rem;
border-radius: 2px;
color: white;
margin-top: 0.15rem;
background-color: rgb(66, 218, 66);
}
#img_code{

/* border: 1px solid red; */
position: absolute;
top: 1.4rem;
right: 0.75rem;
}
#duihuan_seven{
position: absolute;
top: 1.4rem;
right: 0.17rem;
font-size: 0.15rem;
}
#duihuan_eight{
position: absolute;
top: 1.6rem;
right: 0.17rem;
font-size: 0.15rem;
}
#duihuan_nine{
/* border: 1px solid red; */
background-color: #fff;
position: absolute;
top: 1.2rem;
left: 10%;
width: 80%;
height: 2.2rem;
border-radius: 5px;
overflow: hidden;
}
#duihuan_nine img{
display: block;
/* border: 1px solid red; */
height: 1.35rem;
width: 1.8rem;
margin: 0 auto;
}
#duihuan_nine p{
text-align: center;
font-size: 0.2rem;
}
#duihuan_nine button{
width: 100%;
font-size: 0.2rem;
margin-top: 0.2rem;
height: 0.45rem;
background-color: rgb(66, 218, 66);
color: white;
}
</style>