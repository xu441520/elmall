// 城市
<template>
  <div>
    <div id="city_head">
      <a href="javascript:location.reload()">ele.me</a>
      <router-link to="/login"><span style=" position: absolute;right: 0.12rem;">登陆|注册</span></router-link>
    </div>
    <div>
      <div id="city_one">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/location?cityID='+dangqian.id+'&cityName='+dangqian.name">
        <div id="city_two">
          <span>{{dangqian.name}}</span>
          <img src="./imgs/1.png" alt>
        </div>
      </router-link>
      
        <div id="city_hot">
          <div>热门城市</div>
          <ul>
            <li :key="i" v-for="(v,i) in datas"><router-link :to="'/location?cityID='+v.id+'&cityName='+v.name">{{v.name}}</router-link></li>
          </ul>
        </div>
          <div id="city_all">
        <ul>
          <li :key="key" v-for="(value,key) in allCity">
            <h4 id="paiX">{{key}}（按字母排序）</h4>
            <span :key="i" v-for="(v,i) in value" id="city">
                 <router-link :to="'/location?cityID='+v.id+'&cityName='+v.name">
              {{v.name
              }}</router-link>
            </span>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      datas: [],
      dangqian: "",
      allCity: {}
    };
  },
  created() {
    this.getData();
    this.allData();
    this.getHot();
  },
  methods: {
    getData() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      //get请求方式
      this.$http.get(api).then(Response => {
        //请求成功后的回调函数
        console.log("成功");
        console.log(Response.data); //返回请求到的数据
        this.dangqian = Response.data;
      });
    },
    getHot() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      //get请求方式
      this.$http.get(api).then(response => {
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data); //返回请求到的数据
        this.datas = response.data;
      });
    },
    allData() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api, //请求的地址
        method: "get",
        data: {
          //post的请求参数
        }
      }).then(res => {
        //请求返回的数据res
        console.log("所有城市");
        console.log(res);
        var arr = [];
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
          this.$set(this.allCity, arr[i], res.data[arr[i]]);
        }
      });
    }
  }
};
</script>
<style scoped>
body {
  background-color: #f5f5f5;
}
#city_head {
  background-color: #3091e9;
  color: white;
  font-size: 0.19rem;
  width: 3.75rem;
  height: 0.5rem;
  line-height: 0.5rem;
  /* position: relative; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
#city_head a {
  margin-left: 0.12rem; 
  color: white
}

#city_one {
  border-bottom: 0.02rem solid #ececec;
  height: 0.4rem;
  line-height: 0.4rem;
  position: relative;
  margin-top: 0.6rem;
}
#city_one span:nth-child(1) {
  font-size: 0.15rem;
  color: #666666;
  margin-left: 0.12rem;
}
#city_one span:nth-child(2) {
  font-size: 0.13rem;
  color: #9b9b9b;
  position: absolute;
  right: 0.12rem;
}
#city_two {
  border-bottom: 0.02rem solid #ececec;
  height: 0.4rem;
  line-height: 0.4rem;
  position: relative;
  color: #3091e9;
}
#city_two img {
  width: 0.13rem;
  position: absolute;
  right: 0.12rem;
  top: 0.1rem;
}
#city_two span {
  font-size: 0.16rem;
  margin-left: 0.12rem;
}
#city_hot {
  border-top: 0.5px solid rgb(204, 204, 204);
  border-bottom: 0.5px solid rgb(204, 204, 204);
  background-color: #fff;
  height: 0.4rem;
  position: relative;
  top: 0.1rem;
  left: 0;
}
#city_hot div:nth-child(1) {
  font-size: 0.16rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-left: 0.09rem;
}
#city_hot ul {
  /* border: 1px solid black; */
  height: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-left: none;
  text-align: center;
  line-height: 0.5rem;
  background-color: #fff;
  font-size: 0.15rem;
  color: #3091e9;
}
#city_hot ul li {
  width: 0.932rem;
  border: 0.5px solid rgb(204, 204, 204);
}
#city_hot ul li:nth-child(1) {
  border-left: none;
  border-bottom: none;
  border-right: none;
}
#city_hot ul li:nth-child(2) {
  border-bottom: none;
}
#city_hot ul li:nth-child(3) {
  border-left: none;
  border-bottom: none;
  border-right: none;
}
#city_hot ul li:nth-child(4) {
  border-right: none;
  border-bottom: none;
}
#city_hot ul li:nth-child(5) {
  border-left: none;
  border-right: none;
}
#city_hot ul li:nth-child(7) {
  border-left: none;
}
#city_hot ul li:nth-child(8) {
  border-left: none;

  border-right: none;
}
#city_all {
  font-size: 0.15rem;
  margin-top: 1.2rem;
  background-color: #fff;
  overflow: hidden;
}
#city {
  display: inline-block;
  width: 0.915rem;
  height: 0.4rem;
  text-align: center;
  border: 0.01rem solid #9b9b9b;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
#paiX {
  height: 0.4rem;
  line-height: 0.4rem;
  /* overflow: hidden; */
}
</style>

