<template>
  <div id="common">
    <div id="common_head">
      <!-- <p>主页</p> -->
    </div>
    <div>
      <!-- 头部 -->
      <div id="home_hend" :key="i1" v-for="(v1,i1) in list">
        <!-- 搜索 -->
        <router-link to="'/search?geohash='+this.data1.geohash">
          <img src="./imgs/fangdajing.png" id="search" />
        </router-link>

        <!-- <img src="./imgs/fangdajing.png" id="'search?'"> -->

        <!-- 修改地址id -->
        <span id="add">{{dizhiname}}</span>
        <!-- 跳转到我的 -->
        <router-link to="/user">
          <img src="./imgs/reload.png" id="my" />
        </router-link>
      </div>
      <!-- 轮播图 -->
      <div id="top">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide class="flmk" v-show="datas.length > 0" :key="i" v-for="(v,i) in datas">
            <div class="spfl" :key="index" v-for="(value,index) in v">
              <!-- <router-link :to="'/lunbotujilian?Name='+value.title">
                <img :src="'https://fuss10.elemecdn.com'+value.image_url" alt>
                <p>{{value.title}}</p>
              </router-link>-->
              <router-link :to="'/home_two?Name='+value.title">
                <img :src="'https://fuss10.elemecdn.com'+value.image_url" />
                <p>{{value.title}}</p>
              </router-link>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
      </div>
      <!-- 附近商家 -->
      <div id="business">
        <div>
          <img id="business_img" src="./imgs/Group-.png" alt />
          <span id="business_span">附近商家</span>
        </div>
        <div id="list">
          <ul>
            <li
              class="list_li"
              :key="i"
              v-for="(v,i) in list"
              @click="getshopId(v.id);getscore2(v.rating)"
            >
              <!-- <router-link :to="'/store?id='+v.id" @click="getshopId(v.id)"> -->
              <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt />
              <span class="brand">品牌</span>
              <h2 id="sj_name">{{v.name}}</h2>
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
              <div id="star_two">
                <span>￥{{v.float_minimum_order_amount}}起送</span>
                /
                <span>{{v.piecewise_agent_fee.tips}}</span>
              </div>
              <div>
                <span id="fengniao">{{v.delivery_mode.text}}</span>
                <span id="zhunshi">{{v.supports[1].name}}</span>
              </div>
              <div id="star_three">
                <span>{{v.distance}}</span>/
                <span>{{v.order_lead_time}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="common_icon">
      <router-link to="/home">
        <img id="imgOne" src="../../src/components/imgs/eleme.png" alt />
        <p id="pOne">外卖</p>
      </router-link>
      <router-link :to="'/search?geohash='+this.data1.geohash">
        <img id="imgTwo" src="../../src/components/imgs/zhinanzhen.png" alt />
        <p id="ptwo">搜索</p>
      </router-link>
      <!-- <img src="../../src/components/imgs/zhinanzhen1.png" alt=""> -->
      <router-link to="/order">
        <img id="imgThree" src="../../src/components/imgs/icon-.png" alt />
        <p id="pthree">订单</p>
      </router-link>
      <!-- <img src="../../src/components/imgs/icon-1.png" alt=""> -->
      <router-link to="/user">
        <img id="imgfour" src="../../src/components/imgs/user.png" alt />
        <p id="pfour">我的</p>
      </router-link>
      <!-- <img src="../../src/components/imgs/wode.png" alt=""> -->
    </div>
  </div>
</template>
<script>
// import Vue from 'vue';
// import 'vant/rate/index.css';
// import 'vant/rate/style';
// import { Rate } from 'vant';

// Vue.use(Rate);
export default {
  name: "common",
  props: [],
  data() {
    return {
      score2: "",
      name: "",
      datas: [],
      list: [], //店铺列表接口返回一个数组数据
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数  swiper4.x
        // ...
        initialSlide: 0,
        
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
    // data1: "";
  },
  computed: {},
  created() {
    this.fenlei2();
    this.geohash = this.$store.state.geohash;
    this.dizhiname = this.$store.state.dizhiname;
    console.log(this.Name);
    this.List();
    this.data1 = this.$route.query; //从location页传过来名字和经纬度
    console.log("经纬度为:" + this.data1.geohash); //打印名字和经纬度
    console.log("jingweidu:" + this.$store.state.geohash);
    console.log("dizhiming:" + this.$store.state.dizhiname);
    this.score2 = this.$store.state.score2;
  },
  methods: {
    // getName(v1){
    //   this.$store.commit("getName",v1)
    //         console.log("jingweidu1:"+this.$store.state.getName);
    // },
    getshopId(v) {
      this.$store.commit("getshopId", v);
      console.log(v);
      this.$router.push({ name: "store" });
    },
    getscore2(v) {
      this.$store.commit("getscore2", v);
    },
    fenlei2() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // this.datas = res.data;
        const one = [];
        const two = [];
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          if (i < 8) {
            one.push(res.data[i]);
          } else {
            two.push(res.data[i]);
          }
        }
        this.datas.push(one);
        this.datas.push(two);
      });
    },
    List() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // this.datas = res.data;

        this.list = res.data;
        console.log(res.data);
      });
    }
  }
};
</script>
<style scoped>
#home_hend {
  background-color: #3091e9;
  height: 0.5rem;
  width: 3.75rem;
  /* line-height: 0.5rem; */
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
#search {
  width: 0.3rem;
  position: absolute;
  top: 0.12rem;
  left: 0.12rem;
}
#add {
  width: 2.3rem;
  height: 0.25rem;
  /* border: 0.01rem solid black; */
  display: inline-block;
  font-size: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.12rem;
  color: white;
}
#my {
  width: 0.3rem;
  position: absolute;
  top: 0.12rem;
  right: 0.12rem;
}
#swiper-container {
  margin-top: 1rem;
}
#top {
  background-color: #fff;
  margin-top: 0.5rem;
}
.flmk {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.2rem;
}
.spfl {
  width: 25%;
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.spfl img {
  width: 0.5rem;
}
#business {
  position: relative;
  background-color: #fff;
  margin-top: 0.13rem;
}
#business_img {
  width: 0.3rem;
  margin-left: 0.05rem;
}
#business_span {
  /* width: 0.12rem; */
  color: grey;
  position: absolute;
  left: 0.4rem;
  top: 0.1rem;
}
#list {
  height: 1rem;
}
.list_li {
  background-color: #fff;
  position: relative;
  /* border: 0.01rem solid black; */
  /* border-bottom: 0.01rem solid grey; */
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
  font-size: 0.16rem;
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
  margin-top: 0.2rem;
}
.el-rate__item {
  margin-right: 1rem;
}
#star_one_right {
  /* border: 0.01rem solid black; */
  /* display: inline-block; */
  text-align: center;
  color: black;
  line-height: 0.18rem;
  font-size: 0.12rem;
  position: absolute;
  margin-top: 0.2rem;
  margin-left: 0.9rem;
}
#common_head {
  width: 3.75rem;
  height: 0.5rem;
  background-color: rgb(49, 144, 232);
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
  border-bottom: 0.5px solid lightgrey;
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
  top: 0.2rem;
  right: 0.02rem;
  font-size: 0.12rem;
  color: white;
  background-color: blue;
  border-radius: 0.05rem;
  /* width: 0.5rem;
      height: 0.18rem; */
}
#zhunshi {
  /* margin-top: 0.2rem; */
  position: absolute;
  top: 0.4rem;
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
  top: 0.45rem;
  margin-top: 0.25rem;
  left: 1rem;
  font-size: 0.13rem;
  color: gray;
}
#star_three {
  /* border: 0.01rem solid black; */
  position: absolute;
  right: 0.1rem;
  top: 0.7rem;
  margin-top: 0.15rem;
  font-size: 0.13rem;
}
#star_three_one {
  color: grey;
}
#star_three_two {
  color: gray;
}
#pingfen{
  font-size: 0.12rem;
  position: absolute;
  top: 0;
  left: 0.7rem;
}
</style>
