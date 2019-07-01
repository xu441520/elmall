<template>
<div id="sp_two">
<div id="head">
<img src="./imgs/back.png" alt id="img1" @click="ret()">
<span id="head_span">我问问</span>
</div>
<div id="one">
<img :src="'https://elm.cangdu.org/img/'+sp.image_path" alt id="img2">
<span id="span1" >{{sp.description}}</span>
<span id="span2">{{sp.name}}</span>
<span id="span3">评分
<el-rate
v-model="sp.rating"
disabled
show-score
text-color="#ff9900"
score-template="{value}"
></el-rate>
</span>
<span id="span4">月售{{sp.month_sales}}</span>
<span id="span5">售价￥{{sp.specfoods[0].price}}起</span>
<span id="span6">不知道是啥</span>
<span id="span7">好评率{{sp.satisfy_rate}}</span>
</div>
</div>
</template>
<script>
export default {
name: "sp_two",
data() {
return {
// foods:''
// Detil: [],
sp:[]
// Detil:[]
};
},
created() {
this.Foods1();
// console.log(this.$route.query.sp);
// this.detil()
},
methods: {
ret() {
this.$router.go(-1);
},
Foods1() {
this.sp = this.$route.query.Foods;
console.log(this.$route.query.Foods);
},
// detil(){
// const api =
// "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.sp;
// this.$http({
// url:api,
// method:"get"
// }).then(res =>{
// this.Detil = res.data;
// console.log(res.data)
// })
// }
}
};
</script>
<style scoped>
#sp_two{
background-color: rgb(230, 227, 227);
/* border: 0.01rem solid black; */
position: relative;
height: 6.25rem;
z-index: 2;
}
#head {
height: 0.4rem;
/* border: 0.01rem solid black; */
background-color: blue;

}
#img1 {
width: 0.14rem;
position: absolute;
top: 0.08rem;
left: 0.1rem;
}
#head_span {
color: white;
font-size: 0.2rem;
font-weight: bold;
position: absolute;
top: 0.1rem;
left: 1.5rem;
}
#one {
position: relative;
}
#img2 {
width: 3.75rem;
height: 4rem;
}
#span1 {
position: absolute;
top: 4rem;
left: 0.2rem;
}
#span2 {
position: absolute;
top: 4.3rem;
left: 0.2rem;
}
#span3 {
position: absolute;
top: 4.59rem;
left: 0.2rem;
font-size: 0.13rem;
color: gray;
}
#span4 {
position: absolute;
top: 4.9rem;
left: 0.2rem;
}
#span5 {
position: absolute;
top: 4.9rem;
left: 1rem;
color: red;
}
#span6 {
position: absolute;
top: 5.2rem;
left: 0.2rem;
}
#span7 {
position: absolute;
top: 5.2rem;
left: 1.3rem;
}
#store_bottom {
position: fixed;
width: 3.75rem;
height: 0.5rem;
bottom: 0rem;
left: 0rem;
background-color: #373c38;
color: white;
}
#store_bottom div:nth-child(1) {
border-radius: 50%;
width: 0.4rem;
height: 0.4rem;
position: absolute;
bottom: 0.15rem;
left: 0.12rem;
background-color: #373c38;
box-shadow: #404541 0.03rem 0.02srem 0.03rem 0.01rem;
}
#store_bottom div:nth-child(1) img {
height: 0.3rem;
margin-left: 0.05rem;
/* margin-top: 0.05rem; */
}
#store_bottom_rig {
position: absolute;
left: 0.6rem;
bottom: 0rem;
}
#store_bottom_rig p:nth-child(1) {
margin-top: 0.08rem;
font-size: 0.2rem;
}
#store_bottom_rig p:nth-child(2) {
margin-bottom: 0.08rem;
font-size: 0.12rem;
}
#store_bottom_rig + p {
width: 1.2rem;
background-color: #515151;
position: absolute;
bottom: 0rem;
right: 0rem;
height: 0.4rem;
text-align: center;
font-size: 0.16rem;
line-height: 0.4rem;
}
</style>