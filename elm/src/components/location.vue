// 定位
<template>
  <div>
    <div id="location_head">
      <img @click="loBack()" src="./imgs/back.png" alt>
      <span>{{Name}}</span>
      <router-link to="/city">
        <span
          style=" color: rgb(255, 255, 255);
          font-size: 0.17rem;
          position: absolute;
          right: 0.12rem;
          top: 0.17rem;"
        >切换城市</span>
      </router-link>
    </div>
    <div id="location_one">
      <input @input="addHistory()" v-model="value" id="one" type="text" placeholder="输入学校、商务楼、地址">
      <img @click="value=''" src="./imgs/quxiao.png" alt id="location_img">
      <button id="one_bnt" @click="diZi()">提交</button>
    </div>
    <div id="location_two">
      <ul id="ul1">
        <li :key="i" v-for="(v,i) in datas" @click="getGeohash(v.geohash);getdizhiname(v.name)">
          <router-link to="/home" id="na">{{v.name}}</router-link>
          <br>
          <!-- 将名字和经纬度传给home -->
          <router-link :to="'/home?cityname='+v.name+'&geohash='+v.geohash" id="dre">{{v.address}}</router-link>
        </li>
      </ul>
      <!-- <span>搜索历史</span> -->
      <ul id="ul2">
        <li @click="sousuoli()" :key="i" v-for="(v,i) in history">{{v}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.Id = this.$route.query.cityID;
    this.Name = this.$route.query.cityName;
    this.add();
  },
  data() {
    return {
      datas: [], //搜索地址接口返回的数组类型数据
      value: "",
      geohash: "",
      history: [],
      dizhiname:""
    };
  },
  methods: {
    getGeohash(v){
      this.$store.commit("getGeohash",v)
            console.log("jingweidu1:"+this.$store.state.geohash)
    },
    getdizhiname(v){
      this.$store.commit("getdizhiname",v)
    },
    loBack() {
      javascript: history.go(-1);
    },
    sousuoli(){
      this.$router.push({
        name: "home",
      });
    },
    diZi() {
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.Id +
        "&keyword=" +
        this.value +
        "&type=search";
      this.$http.get(api).then(response => {
        //请求成功后的回调函数
        console.log("成功");
        this.datas = response.data;
        console.log(response.data); //返回请求到的数据
      });
      if (localStorage.history) {
        if (localStorage.history.indexOf(this.value) == -1) {
          localStorage.history += "," + this.value;
        }
      } else {
        localStorage.history = this.value;
      }
      this.add();
    },
    add() {
      if (!localStorage.history) {
        return;
      } else {
        this.history = localStorage.history.split(",");
      }
    }
  }
};
</script>
<style scoped>
body {
  background-color: gray;
}
#location_head {
  background-color: #3091e9;
  width: 3.75rem;
  height: 0.5rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
#location_head img {
  width: 0.1rem;
  position: absolute;
  left: 0.12rem;
  top: 0.12rem;
}
#location_head span:nth-child(2) {
  color: rgb(255, 255, 255);
  font-size: 0.25rem;
  position: absolute;
  top: 0.1rem;
  left: 1.5rem;
}
#location_one {
  background-color: rgb(255, 255, 255);
  margin-top: 0.1rem;
  text-align: center;
  margin-top: 0.5rem;
  position: relative;
}
#location_img {
  position: absolute;
  right: 0.4rem;
  top: 0.23rem;
}
#one {
  display: inline-block;
  border: 0.01rem solid gray;
  height: 0.3rem;
  width: 3rem;
  margin-bottom: 0.1rem;
  margin-top: 0.15rem;
  font-size: 0.18rem;
}
#one_bnt {
  background-color: #3091e9;
  width: 3rem;
  height: 0.3rem;
  color: white;
  font-size: 0.15rem;
  margin-bottom: 0.15rem;
}
#location_two {
  /* border: 0.02rem solid gainsboro; */
  height: 0.25rem;
  line-height: 0.25rem;
}
#location_two span:nth-child(1) {
  margin-left: 0.15rem;
}
#ul1 li {
  /* height: 0.5rem; */
  border-bottom: 0.01rem solid grey;
  /* line-height: 0.5rem; */
}
#ul2{
  position: relative;
  top: 0.1rem;
  left: 0rem;
}
#ul2 li{
  margin-top: 0.1rem;
  font-size: 0.2rem;
  text-indent:0.8em; 
}
#na {
  color: black;
  font-size: 0.2rem;
  margin-left: 0.12rem;
}
#dre {
  font-size: 0.12rem;
  color: #6b6b6b;
  margin-left: 0.12rem;
}
</style>

