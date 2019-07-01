<template>
  <!-- 搜索一级页面 -->
  <div id="search">
    <div id="to">
      <p id="common_head_pot">
        <img @click="back()" src="./imgs/back.png" id="imgss1">
        <span>搜索</span>
      </p>
    </div>
    <div id="bc">
      <input @input="add()" v-model="food" type="text" placeholder="请输入商家或者美食名称">
      <p id="pos" v-if="pos" @click="posi()">x</p>
      <button @click="search()">提交</button>
    </div>

    <p id="sw" v-if="sw">很抱歉,无搜索结果</p>
    <p v-if="sh" id="sh">搜索历史</p>
    <div id="hy" v-if="hy">
      <div :key="i" v-for="(n,i) in hisArr">
        <li @click="sec(i)">{{n}}</li>
        <p @click="thisRemove(i)">x</p>
      </div>
      <p id="sho" v-if="sho" @click="removeAll">清空历史记录</p>
    </div>

    <p id="shp" v-if="shp">商品</p>
    <!-- <router-link :to="'/store?id='+va.id"></router-link> -->
    <div class="fl" :key="i" v-for="(va,i) in shop">
      <router-link :to="'/store?id='+va.id">
        <div class="flo">
          <img :src="'https://elm.cangdu.org/img/'+va.image_path" class="restaurant_img">
        </div>
        <div class="flt" @click="get(va,va.id)">
          <p>{{va.name}}</p>
          <p>月售{{va.recent_order_num}}单</p>
          <p>{{va.float_minimum_order_amount}}元起送/距离{{va.distance}}</p>
        </div>
      </router-link>
    </div>
    <div id="common_icon">
      <router-link to="/home">
        <img id="imgOne" src="../../src/components/imgs/eliaomo.png" alt>
        <p id="pOne">外卖</p>
      </router-link>
      <router-link to="/search">
        <img id="imgTwo" src="../../src/components/imgs/zhinanzhen1.png" alt>
        <p id="ptwo">搜索</p>
      </router-link>
      <!-- <img src="../../src/components/imgs/zhinanzhen1.png" alt=""> -->
      <router-link to="/order">
        <img id="imgThree" src="../../src/components/imgs/icon-.png" alt>
        <p id="pthree">订单</p>
      </router-link>
      <!-- <img src="../../src/components/imgs/icon-1.png" alt=""> -->
      <router-link to="/user">
        <img id="imgfour" src="../../src/components/imgs/user.png" alt>
        <p id="pfour">我的</p>
      </router-link>
      <!-- <img src="../../src/components/imgs/wode.png" alt=""> -->
    </div>
  </div>
</template>
 <script>
export default {
  name: "common",
  props: [],
  data() {
    return {
      food: "",
      foods: [],
      hisArr: [],
      shop: [], //返回的数组数据
      laArr: [],
      loArr: [],
      sw: false,
      hy: true,
      sho: false,
      sh: false,
      pos: false,
      shp: false,
      lar: "",
      lon: "",
      geohash: ""
    };
  },
  // watch: {
  //   food: function(ne, old) {
  //     if (ne == "") {
  //       this.hy = true;
  //       this.sw = false;
  //       this.shop = [];
  //       this.shp=false;
  //     }
  //   }
  // },
  methods: {
    get(va, vi) {
      this.$store.commit("getter", { name: va, id: vi });
      // console.log(vi);
      this.$router.push({
        name: "CommodityPage"
      });
    },
    add() {
      if (this.food.length == 0) {
        this.history();
        this.show();
        this.pos = false;
        this.shp = false;
        this.hy = true;
        this.sw = false;
        this.shop = [];
      } else {
        this.pos = true;
      }
    },
    posi() {
      this.food = "";
      this.add();
    },
    back() {
      this.$router.back();
    },
    search() {
      if (this.food == "") {
        this.sw = false;
        this.shp = false;
        return;
      } else {
        this.hy = false;
        this.sh = false;
      }
      // this.lar = this.laArr[this.laArr.length - 1];
      // this.lon = this.loArr[this.loArr.length - 1];
      //   const api =
      //     "https://elm.cangdu.org/v4/restaurants?geohash=" +
      //     this.lar +
      //     "," +
      //     this.lon +
      //     "&keyword=" +
      //     this.food;
      // this.geohash = this.$route.query.geohash;
      this.geohash = this.$store.state.geohash;
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.geohash +
        "&keyword=" +
        this.food;
      console.log(api);
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        if (!res.data.message) {
          this.shop = res.data;
          this.shp = true;
        }
        if (res.data.length == 0) {
          this.sw = true;
          this.hy = false;
          this.sh = false;
          this.shp = false;
        }
        if (localStorage.history) {
          if (localStorage.history.indexOf(this.food) == -1) {
            localStorage.history += "," + this.food;
          }
        } else {
          localStorage.history = this.food;
        }
      });
    },
    sec(i) {
      this.pos = true;
      this.food = this.hisArr[i];
      this.search();
    },
    removeAll() {
      localStorage.removeItem("history");
      this.hisArr = [];
      this.show();
    },
    thisRemove(val) {
      localStorage.removeItem("history");
      //当数组中还剩一个元素的时候先清空数组
      if (this.hisArr.length == 1) {
        this.hisArr = [];
      }
      //遍历数组重新赋值
      for (var ky = 0; ky < this.hisArr.length; ky++) {
        if (ky != val) {
          if (localStorage.history) {
            if (localStorage.history.indexOf(this.hisArr[ky]) == -1) {
              localStorage.history += "," + this.hisArr[ky];
            }
          } else {
            localStorage.history = this.hisArr[ky];
          }
        }
      }
      this.history();
      this.show();
    },
    show() {
      if (this.hisArr.length != 0) {
        this.sho = true;
        this.sh = true;
      } else {
        this.sho = false;
        this.sh = false;
      }
    },
    history() {
      if (!localStorage.history) {
        return;
      } else {
        const his = localStorage.history;
        this.hisArr = his.split(",");
      }
    },
    localStora() {
      const la = localStorage.lat;
      const lo = localStorage.lon;
      this.loArr = lo.split(",");
      this.laArr = la.split(",");
    }
  },
  created() {
    this.localStora();
    this.history();
    this.show();
    this.ID = this.$store.state.id;
  }
};
</script>
<style scoped>
#to {
  width: 100vw;
  height: 7vh;
  background-color: rgb(49, 144, 232);
  position: relative;
}
#to img {
  height: 6vh;
  margin-top: 0.5vh;
  vertical-align: top;
}
#to > p:nth-of-type(2) {
  font-size: 0.19rem;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#bc {
  overflow: hidden;
  background-color: white;
  position: relative;
}
#pos {
  font-size: 0.2rem;
  position: absolute;
  right: 16vh;
  top: 3vh;
  color: rgba(128, 128, 128);
}
#bc > input,
#bc > button {
  font-size: 0.15rem;
  font-weight: bold;
  margin: 2vh 0 1.5vh 2vw;
  float: left;
  border-radius: 1vw;
}
#bc > input {
  width: 71vw;
  height: 5vh;
  padding-left: 1vw;
  color: black;
  background-color: rgb(243, 243, 243);
  border: 0.12vw solid rgba(128, 128, 128, 0.247);
}
#bc > button {
  width: 20vw;
  height: 5.2vh;
  color: white;
  background-color: rgb(49, 144, 232);
  border: 0.12vw solid rgb(49, 144, 232);
}

.fl {
  overflow: hidden;
  background-color: white;
  padding-top: 1.5vh;
  border-bottom: 0.01rem solid rgb(242, 242, 242);
}
#shp {
  background-color: rgb(245, 245, 245);
  padding: 2vh 0 2vh 2vw;
  color: rgb(102, 102, 102);
  font-weight: bold;
}
.flo {
  float: left;
  margin-bottom: 1.5vh;
}
.flt {
  float: left;
  width: 80vw;
  border-bottom: 0.02rem solid rgb(242, 242, 242);
  margin: 0 0 1.5vh 2vw;
}
.flt > p {
  color: black;
  font-size: 0.14rem;
  margin: 0 0 1vh 1.5vw;
}
.restaurant_img {
  width: 10vw;
  margin: 1vh 0 0 1vw;
  vertical-align: top;
}
#sw {
  text-align: center;
}
#sh {
  width: 85vw;
  height: 7vh;
  color: rgb(102, 102, 102);
  line-height: 7vh;
  font-size: 0.16rem;
  font-weight: bold;
  margin-left: 4vw;
}
#hy {
  background-color: #fff;
}
#hy > div {
  overflow: hidden;
  border-bottom: 0.01rem solid rgb(239, 239, 239);
}
#hy li {
  width: 90vw;
  height: 5vh;
  line-height: 5vh;
  font-size: 0.18rem;
  margin: 1vh 0 1vh 2vw;
  background-color: rgb(255, 255, 255);
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#hy > div > p:nth-of-type(1) {
  width: 6vw;
  height: 5vh;
  line-height: 5vh;
  font-size: 0.2rem;
  color: rgb(153, 153, 153);
  margin: 1vh 0 1vh 0;
  float: left;
}
#hy > p:nth-of-type(1) {
  height: 7vh;
  line-height: 7vh;
  text-align: center;
  font-size: 0.18rem;
  font-weight: bold;
  color: rgb(49, 144, 232);
  margin-bottom: 10vh;
}
#common_head {
  width: 3.75rem;
  height: 0.5rem;
  background-color: blue;
  position: fixed;
  top: 0rem;
  left: 0rem;
  z-index: 2;
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
  margin-top: 0.07rem;
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
#imgss1{
  height: 0.2rem;
}
#common_head_pot{
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 0.5rem;
}
#common_head_pot > img{
    height: 0.3rem;
    position: absolute;
    top: 0.08rem;
    left: 0.12rem;
}
</style>