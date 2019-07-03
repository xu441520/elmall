<template>
<div id="home_two">
<div id="head">
<div id="head_one">
<img src="./imgs/back.png" @click="ret()">
<span>{{Name}}</span>
</div>
<div id="head_two">
<div class="block">
<el-cascader
:placeholder="this.$route.query.Name"
v-model="value"
:options="Sysp"
:props="sysPro"
@change="handleChange"
>
<template slot-scope="{node,data}">
<span>{{data.name}}</span>
<span id="geshu">{{data.count}}</span>
</template>
</el-cascader>

<el-cascader :options="Paixu" @change="getValue">
<template slot-scope="{node,data}">
<p>{{data.label}}</p>
</template>
</el-cascader>
<button @click="dian()" id="anniu">筛选</button>
</div>
<div class="class_3" v-if="xs2">
<p style="color:gray">配送方式</p>
<div class="peisong">
<span class="shuxing1">蜂鸟专送</span>
</div>
<p style="margin-top:0.1rem;color:gray;font-size:0.14rem">商家属性（可以多选）</p>
<div class="ps_1">
<div class="peisong">
<span class="shuxing" style="border:0.01rem solid aqua">品</span>
<span class="shuxing1">品牌商家</span>
</div>
<div class="peisong">
<span class="shuxing" style="border: 0.01rem solid gray">保</span>
<span class="shuxing1">外卖宝</span>
</div>
<div class="peisong">
<span class="shuxing" style="border: 0.01rem solid aqua">准</span>
<span class="shuxing1">准时达</span>
</div>
<div class="peisong">
<span class="shuxing" style="border: 0.01rem solid orange">新</span>
<span class="shuxing1">新店</span>
</div>
<div class="peisong">
<span class="shuxing" style="border: 0.01rem solid red">付</span>
<span class="shuxing1">在线支付</span>
</div>
<div class="peisong">
<span class="shuxing" style="border: 0.01rem solid gray">票</span>
<span class="shuxing1">开发票</span>
</div>
</div>
<div class="ps_btn">
<el-button class="btn_c">取消</el-button>
<el-button type="success" class="btn_c">
确定
<span v-text="btn_cf"></span>
</el-button>
</div>
</div>
</div>
</div>

<div id="business">
<div id="list">
<ul>
<li class="list_li" :key="i" v-for="(v,i) in list "  @click="getshopId(v.id)">
<!-- <router-link :to="'/store?id='+v.id"> -->
<img :src="'https://elm.cangdu.org/img/'+v.image_path" alt>
<span class="brand">品牌</span>
<span id="sj_name">{{v.name}}</span>
<div id="pat" :key="key" v-for="(value,key) in v.supports">
<span>{{value.icon_name}}</span>
<!-- <span v-if="value.icon_name == '准'" >{{value.name}}</span> -->
</div>
<div id="star_one">
 <van-rate
  v-model="v.rating"
  allow-half
  void-icon="star"
  void-color="#eee"
  size = 0.12rem
  gutter = 0.02rem
/>
<span id="pingfen">{{v.rating}}</span>
</div>
<span id="star_one_right">月售{{v.recent_order_num}}单</span>
<span id="star_two">
<span class="star_two_one">￥{{v.float_minimum_order_amount}}起送</span>
/
<span class="star_two_two">{{v.piecewise_agent_fee.tips}}</span>
</span>
<div>
<span id="fengniao">{{v.delivery_mode.text}}</span>
<span id="zhunshi">{{v.supports[1].name}}</span>
</div>
<div id="star_three">
<span id="star_three_one">{{v.distance}}</span>/
<span id="star_three_two">{{v.order_lead_time}}</span>
</div>
<!-- </router-link> -->
</li>
</ul>
</div>
</div>
</div>
</template>
<script>
export default {
name: "home_two",
data() {
return {
Name: "",
list: [],
Sysp: [],
dataV: "",
xs2:false,
sysPro: {
value: "id",
label: "name",
children: "sub_categories"
},
Paixu: [
{
label: "智能排序",
value: "4"
},
{
label: "距离最近",
value: "5"
},
{
label: "销量最高",
value: "6"
},
{
label: "起送价最低",
value: "1"
},
{
label: "配送速度最快",
value: "2"
},
{
label: "评分最高",
value: "3"
}
]
};
},
created() {
this.Name = this.$route.query.Name;
console.log(this.Name);
// this.getValue;
this.List();
this.sysp();
},
methods: {
getValue(value) {
console.log(value);
this.dataV = value;
this.List();
},
ret() {
this.$router.go(-1);
},
List() {
const api =
"https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=" +
this.dataV;
this.$http({
url: api,
method: "get"
}).then(res => {
// this.datas = res.data;
console.log(res.data);
this.list = res.data;
});
},
sysp() {
const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
this.$http({
url: api,
method: "get"
}).then(res => {
this.Sysp = res.data;
});
},
dian(){
this.xs2 = !this.xs2;
},
 getshopId(v) {
      this.$store.commit("getshopId", v);
      console.log(v);
      this.$router.push({ name: "store" });
    }
}
};
</script>
<style>
#head {
height: 1rem;
/* border: 0.01rem solid blue; */
}
#head_one {
background-color: blue;
height: 0.5rem;
position: relative;
}
#head_one img {
width: 0.16rem;
position: absolute;
top: 0.1rem;
left: 0.1rem;
}
#head_one span {
font-size: 0.22rem;
color: white;
font-weight: bold;
position: absolute;
top: 0.11rem;
left: 1.4rem;
}
.block {
height: 0.5rem;
/* border: 0.01rem solid black; */
text-align: center;
display: flex;
justify-content: space-between;
}

.el-input__inner {
/* float: left; */
width: 30vw;
/* margin: 0 auto; */
border: none;
border-radius: 0%;
height: 0.32rem;
margin-top: 0.07rem;
text-align: center;
border-right: 0.01rem solid rgb(197, 195, 195);
background-color: rgba(0, 0, 0, 0);
color: black;
}

#list {
height: 1rem;
}
.list_li {
position: relative;
/* border: 0.01rem solid black; */
border-bottom: 0.01rem solid grey;
padding-top: 0.1rem;
padding-bottom: 0.1rem;
}
.list_li img {
width: 0.9rem;
}
.brand {
width: 0.35rem;
height: 0.18rem;
/* border: 0.01rem solid black; */
display: inline-block;
text-align: center;
background-color: yellow;
color: black;
border-radius: 15%;
line-height: 0.18rem;
font-size: 0.12rem;
font-weight: bold;
position: absolute;
}
#sj_name {
width: 1rem;
height: 0.12rem;
/* border: 0.01rem solid black; */
display: inline-block;
line-height: 0.12rem;
position: absolute;
margin-left: 0.4rem;
font-weight: bold;
/* font-size: 0.17rem; */
color: black;
}
#pat {
float: right;
border: 1px solid grey;
margin-right: 0.03rem;
font-size: 0.12rem;
color: grey;
}
#star_one {
/* border: 0.01rem solid black; */
display: inline-block;
text-align: center;
color: black;
border-radius: 15%;
line-height: 0.18rem;
font-weight: bold;
position: absolute;
margin-top: 0.22rem;
}
#star_one_right {
/* border: 0.01rem solid black; */
/* display: inline-block; */
text-align: center;
  color: black;
  line-height: 0.18rem;
  font-size: 0.12rem;
  position: absolute;
  margin-top: 0.22rem;
  margin-left: 0.9rem;
}
#common_head {
width: 3.75rem;
height: 0.5rem;
background-color: blue;
position: fixed;
top: 0rem;
left: 0rem;
}
#common_head p {
color: white;
font-size: 0.25rem;
font-weight: bold;
text-align: center;
line-height: 0.5rem;
}
#common_icon {
background-color: #fff;
border-top: 0.5px solid lightgrey;
border-bottom: 0.01px solid lightgrey;
width: 3.75rem;
position: fixed;
left: 0rem;
bottom: 0rem;
display: flex;
flex-direction: row;
justify-content: space-between;
overflow: hidden;
height: 0.6rem;
}
#common_icon img {
/* border:1px solid red; */
display: block;
/* width: 0.8rem;
height: 0.7rem; */
}
#common_icon p {
/* border: 1px solid red; */
color: black;
text-align: center;
}
#imgOne {
/* border:1px solid red; */
width: 0.45rem;
height: 0.4rem;
margin-left: 0.2rem;
}
#pOne {
margin-left: 0.23rem;
}
#imgTwo {
/* margin-top: 0.21rem; */
/* border: 1px solid red; */
margin-top: 0.07rem;
width: 0.28rem;
height: 0.27rem;
margin-bottom: 0.06rem;
}
#pTwo {
margin-left: 0.23rem;
}
#imgThree {
/* margin-top: 0.21rem; */
/* border: 1px solid red; */
width: 0.4rem;
height: 0.41rem;
}

#imgfour {
margin-top: 0.08rem;
margin-left: 0.05rem;
margin-right: 0.2rem;
margin-bottom: 0.08rem;
/* border: 1px solid red; */
width: 0.25rem;
height: 0.25rem;
}
#pfour {
/* border: 1px solid red; */
margin-right: 0.12rem;
}
#fengniao {
margin-top: 0.1rem;
border: 0.01rem solid blue;
position: absolute;
top: 0.32rem;
right: 0.55rem;
font-size: 0.12rem;
color: white;
background-color: blue;
border-radius: 0.03rem;
border-radius: 0.05rem;
/* width: 0.5rem;
height: 0.18rem; */
}
#zhunshi {
/* margin-top: 0.2rem; */
position: absolute;
top: 0.3rem;
margin-top: 0.12rem;
right: 0.02rem;
border: 0.01rem solid blue;
font-size: 0.12rem;
width: 0.47rem;
text-align: center;
color: blue;
border-radius: 0.05rem;
}
#star_two {
/* border: 0.01rem solid black; */
position: absolute;
top: 0.4rem;
margin-top: 0.25rem;
left: 1rem;
font-size: 0.12rem;
color: gray;
}
#star_three {
/* border: 0.01rem solid black; */
position: absolute;
right: 0.1rem;
top: 0.65rem;
margin-top: 0.12rem;
font-size: 0.12rem;
}
#star_three_one {
color: grey;
}
#star_three_two {
color: gray;
}
.el-rate__item {
width: 0.2rem;
}
#geshu {
/* border: 0.01rem solid black; */
background-color: rgb(173, 171, 171);
font-size: 0.12rem;
color: white;
border-top-left-radius: 0.06rem;
border-top-right-radius: 0.06rem;
border-bottom-right-radius: 0.06rem;
border-bottom-left-radius: 0.06rem;
position: absolute;
right: 0.22rem;
top: 0.1rem;
line-height: 0.15rem;
}
.class_3 {
position: relative;
padding: 0.15rem;
/* border: 1px solid red; */
background-color: white;
z-index: 2;
}
.peisong {
height: 0.25rem;
position: relative;
margin-top: 0.2rem;
padding: 0.05rem;
width: 0.9rem;
/* border: 0.01rem solid grey; */
border-radius: 0.05rem;
font-size: 0.14rem
}
.shuxing1 {
position: absolute;
bottom: 0.1rem;
left: 0.35rem;
}
.ps_1 {
/* border: 1px solid red; */
display: flex;
flex-flow: wrap;
justify-content: space-between;
}
.shuxing {
position: absolute;
left: 0.05rem;
font-size: 0.18rem;
padding: 0.03rem;
border-radius: 0.05rem;
}
.ps_btn {
/* width: 100%; */
/* border: 1px solid red; */
display: flex;
justify-content: space-around;
}
.btn_c {
margin-top: 0.1rem;
font-size: 0.2rem;
width: 1.7rem;
}
.dh {
width: 100%;
position: fixed;
top: 0rem;
left: 0;
z-index: 2;
}
#anniu{
height: 0.31rem;
width: 1rem;
/* float: right; */
margin-top: 0.08rem;
margin-right: 0.1rem;
background-color: rgb(245, 245, 245);
border:none;
/* border-right: 0.01rem solid rgb(121, 120, 120); */
color: lightgrey;
font-size: 0.15rem;
}
#pingfen{
  font-size: 0.12rem;
  position: absolute;
  top: 0;
  left: 0.7rem;
  color: orange;
}
</style>