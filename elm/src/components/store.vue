// 外卖店铺页
<template>
  <div id="store">
    <div id="store_head">
      <div id="store_head_one">
        <img id="beijing" :src="'https://elm.cangdu.org/img/'+Detil.image_path" alt="">
        <p>
          <img :src="'https://elm.cangdu.org/img/'+Detil.image_path" alt />
        </p>
        <div id="store_head_one_two">
          <p>{{Detil.name}}</p>
          <p>商家配送/分钟i送达/{{Detil.piecewise_agent_fee.tips}}</p>
          <p>公告：{{Detil.promotion_info}}</p>
        </div>
        <img src="./imgs/back.png" alt id="img1" @click="ret()" />
        <!-- <img src="./imgs/1.png" alt id="img2"> -->
        <router-link :to="'/storedetail?id='+Detil.id">
          <img src="./imgs/1.png" alt id="img2" />
        </router-link>
      </div>
      <!-- v-if ="Detil.activities.name !=''" -->
      <div id="huodong" v-if="Detil.activities.length > 0">
        <span id="huodong_sp1">{{Detil.activities[0].icon_name}}</span>
        <span id="huodong_sp2">{{Detil.activities[0].description}}(APP专享)</span>
        <router-link :to="'/huodong?id='+Detil.id">
          <span id="huodong_sp3">{{Detil.activities.length}}个活动</span>
          <img src="./imgs/1.png" id="huodong_img" />
        </router-link>
      </div>
      <div id="toogle">
        <router-link :to="'/sp?id='+Detil.id">
          <span :class="{red: !isshow,blue: isshow}" @click="isshow=!isshow" id="sp1">商品</span>
        </router-link>
        <router-link :to="'/pj?id='+Detil.id">
          <span :class="{blue: !isshow,red: isshow}" @click="isshow=!isshow" id="sp2">评价</span>
        </router-link>
      </div>
    </div>

    <div id="store_cecnter">
      <router-view></router-view>
    </div>

    <div id="store_bottom">
      <div v-if="$store.state.danjia == 0 || $store.state.dian==0" id="gwc1">
        <img src="./imgs/car.png" alt />
      </div>
      <div v-if="$store.state.danjia > 0 &&$store.state.dian >0" id="gwc2" @click="chu()">
        <img src="./imgs/car.png" alt />
        <div id="dian">{{$store.state.dian}}</div>
      </div>
      <div id="store_bottom_rig">
        <p>￥{{$store.state.danjia}}</p>
        <p>{{Detil.piecewise_agent_fee.tips}}</p>
      </div>
      <p v-if="$store.state.danjia == 0" id="qisong">还差￥{{Detil.float_minimum_order_amount}}起送</p>
      <p v-if="$store.state.danjia >0" id="qujiesuan">却结算</p>
    </div>
    <div id="Gwc" v-if="diang==true &&$store.state.danjia >0 &&$store.state.dian>0">
      <div id="Gwcb">
        <ul id="ul">
          <li id="li">
            <span id="gwc">购物车</span>
            <span
              id="qingkong"
              @click="qingkong();$store.state.dian=0;$store.state.danjia = 0;$store.state.sul=0"
            >清空</span>
          </li>
          <li
            class="li1"
            :key="index"
            v-for="(value,index) in $store.state.name"
            v-if="value.__v > 0"
          >
            <span id="spn">{{value.name}}</span>
            <span id="zongjia1">￥</span>
            <span id="zj" v-if="value.specfoods">{{value.specfoods[0].price}}</span>
            <span
              id="Jian1"
              @click="value.__v--;$store.state.dian--;$store.state.danjia-=value.specfoods[0].price;"
            >-</span>
            <span id="sul">{{value.__v}}</span>
            <span
              id="Jia"
              @click="value.__v++;$store.state.dian++;$store.state.danjia+=value.specfoods[0].price;"
            >+</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "store",
  data() {
    return {
      isshow: true,
      Detil: {},
      diang: false,
      ID: ""
    };
  },
  created() {
    this.ID = this.$store.state.id;
    console.log("店铺ID:" + this.$store.state.id);
    this.detil();
  },
  methods: {
    chuan() {
      this.$store.state.sul++;
    },
    chuan2() {
      this.$store.state.sul--;
    },
    ret() {
      // this.$router.go(-1);
      this.$router.push({
        path: "/home", //路径
        name: "home" //配置路由时的name
      });
    },
    detil() {
      const api =
        "https://elm.cangdu.org/shopping/restaurant/" + this.$store.state.id;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // this.datas = res.data;
        // console.log("hello");
        console.log(res.data);
        this.Detil = res.data;
      });
    },
    chu() {
      this.diang = !this.diang;
      // console.log("-----------", this.$store.state.name);
    },
    qingkong() {
      // this.$store.state.name = [];
      this.$store.commit("Qingkong");
      // $store.state.dian = 0;
    }
  }
};
</script>
<style scoped>
#store {
  position: relative;
}
#store_head {
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 3.75rem;
  z-index: 1;
  background-color: #fff;
  /* border: 0.01rem solid black; */
  height: 1.2rem;
}
#store_head_one {
  height: 0.8rem;
  color: white;
}
#store_head_one > p > img {
  height: 0.5rem;
  position: absolute;
  top: 0.05rem;
  left: 0.05rem;
  border-radius: 0.05rem;
}
#store_head_one_two p:nth-child(1) {
  position: absolute;
  left: 0.7rem;
  top: 0.05rem;
  font-size: 0.18rem;
}
#store_head_one_two p:nth-child(2) {
  position: absolute;
  left: 0.7rem;
  top: 0.25rem;
  font-size: 0.12rem;
}
#store_head_one_two p:nth-child(3) {
  position: absolute;
  left: 0.7rem;
  top: 0.4rem;
  font-size: 0.12rem;
}
#img1 {
  height: 0.18rem;
  position: absolute;
  top: 0.03rem;
  left: 0.05rem;
}
#img2 {
  height: 0.18rem;
  position: absolute;
  top: 0.25rem;
  right: 0.05rem;
}
#toogle {
  background-color: #ffffff;
  width: 3.75rem;
  height: 0.4rem;
  line-height: 0.4rem;
  /* position: absolute; */
  /* top: 0.8rem; */
  /* left: 0rem; */
  border-bottom: 1px solid#ededed;
}
.red {
  color: #6b6b6b;
}
.blue {
  color: #487db3;
}
#sp1 {
  position: absolute;
  left: 1rem;
}
#sp2 {
  position: absolute;
  right: 1rem;
}
#store_bottom {
  position: fixed;
  width: 3.75rem;
  height: 0.4rem;
  bottom: 0;
  left: 0rem;
  background-color: #373c38;
  color: white;
  /* border: 0.01rem solid black; */
  z-index: 3;
}
#gwc1 {
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  bottom: 0.1rem;
  left: 0.1rem;
  background-color: #373c38;
  box-shadow: #404541 0.03rem 0.02srem 0.03rem 0.01rem;
  /* border:0.01rem solid black; */
}
#gwc2 {
  border-radius: 50%;
  width: 0.45rem;
  height: 0.45rem;
  position: absolute;
  bottom: 0.1rem;
  left: 0.1rem;
  background-color: #3b58d8;
  /* box-shadow: #404541 0.03rem 0.02srem 0.03rem 0.01rem; */
  border: 0.05rem solid #373c38;
}
#gwc1 img {
  height: 0.3rem;
  margin-left: 0.09rem;
  margin-top: 0.09rem;
}
#gwc2 img {
  height: 0.3rem;
  margin-left: 0.08rem;
  margin-top: 0.08rem;
}
#dian {
  position: absolute;
  top: -0.08rem;
  right: -0.08rem;
  background-color: red;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  text-align: center;
  line-height: 0.2rem;
  font-size: 0.13rem;
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
#qisong {
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
#qujiesuan {
  width: 1.2rem;
  background-color: #2fb43a;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  height: 0.4rem;
  text-align: center;
  font-size: 0.16rem;
  line-height: 0.4rem;
}
#huodong {
  /* height: 0.2rem; */
  background-color: #abadb9;
}
#huodong_sp1 {
  width: 0.15rem;
  height: 0.15rem;
  font-size: 0.12rem;
  background-color: red;
  color: white;
  position: absolute;
  top: 0.6rem;
  left: 0.05rem;
  text-align: center;
  line-height: 0.15rem;
  border-radius: 0.02rem;
}
#huodong_sp2 {
  font-size: 0.12rem;
  color: white;
  position: absolute;
  top: 0.6rem;
  left: 0.25rem;
  text-align: center;
  line-height: 0.15rem;
  border-radius: 0.02rem;
}
#huodong_sp3 {
  font-size: 0.12rem;
  color: white;
  position: absolute;
  top: 0.6rem;
  right: 0.3rem;
  text-align: center;
  line-height: 0.15rem;
  border-radius: 0.02rem;
}
#huodong_img {
  height: 0.15rem;
  position: absolute;
  top: 0.6rem;
  right: 0.1rem;
}
#Gwc {
  height: 0.4rem;
  line-height: 0.4rem;
  position: absolute;
  top: 0;
  z-index: 2;
}
#ul {
  white: 3.7rem;
  position: absolute;
  bottom: 0;
  max-height: 2.8rem;
  overflow-y: scroll;
}
#li {
  background-color: rgb(228, 223, 223);
  width: 3.74rem;
  overflow: hidden;
}
#gwc {
  float: left;
  margin-left: 0.1rem;
}
#qingkong {
  float: right;
  margin-right: 0.1rem;
  font-size: 0.15rem;
}
.li1 {
  background-color: #fff;
  height: 0.5rem;
  position: relative;
}
#spn {
  font-size: 0.16rem;
  position: absolute;
  left: 0.1rem;
}
#zongjia1 {
  position: absolute;
  left: 2rem;
  font-size: 0.14rem;
  color: red;
  top: 0.02rem;
}
#zj {
  position: absolute;
  left: 2.14rem;
  font-size: 0.16rem;
  top: 0.005rem;
}
#Jian1 {
  position: absolute;
  left: 2.8rem;
  top: 0.15rem;
  font-size: 0.27rem;
  border: 0.01rem solid rgb(34, 34, 180);
  color: blue;
  width: 0.14rem;
  height: 0.14rem;
  line-height: 0.07rem;
  border-radius: 50%;
  text-align: center;
}
#sul {
  position: absolute;
  left: 3.07rem;
  top: 0.02rem;
}
#Jia {
  position: absolute;
  left: 3.3rem;
  top: 0.16rem;
  /* font-size: 0.15rem; */
  background-color: rgb(64, 64, 221);
  color: white;
  width: 0.15rem;
  height: 0.15rem;
  line-height: 0.14rem;
  border-radius: 50%;
  text-align: center;
}
#Gwcb {
  height: 5.15rem;
  width: 3.74rem;
  background-color: rgba(193, 193, 211, 0.4);
  /* border: 0.01rem solid black; */
  position: relative;
}
#beijing{
  width: 3.75rem;
  height: 0.8rem;
  filter: blur(0.05rem)
}
</style>

