<template>
  <div id="sp">
    <div id="sp_le">
      <a :href="'#'+v.name" :key="i" v-for="(v,i) in Detil">

        <div id="name">
          {{v.name}}
          <div v-if=" v.type> 1 &&$store.state.sul>0" id="dian">{{v.type-1}}</div>
        </div>
      </a>
    </div>
    <div id="sp_ri">
      <div :key="i" v-for="(v,i) in Detil" id="sp_ri_div">
        <div :id="v.name" class="one">
          <span id="sp_ri_one">{{v.name}}</span>
          <span id="sp_ri_two">{{v.description}}</span>
        </div>
        <div class="two" :key="index" v-for="(value,index) in v.foods">
          <!-- <div :v-if="value.attributes.legth > 0">
              <span>{{value.attributes.icon_name}}</span>
          </div>-->
          <img
            :src="'https://elm.cangdu.org/img/'+value.image_path"
            id="two_img"
            @click="sp(value)"
          >
          <div
            class="xin"
            v-if="(value.attributes.length>0 && value.attributes[0] && value.attributes[0].icon_color=='5ec452')||(value.attributes.length>1 && value.attributes[1] && value.attributes[1].icon_color=='5ec452')"
          >
            <div
              class="xinb"
              v-if="value.attributes.length>0 && value.attributes[0] && value.attributes[0].icon_color=='5ec452'"
            ></div>
            <p
              class="xinpin"
              v-if="value.attributes.length>0 && value.attributes[0] && value.attributes[0].icon_color=='5ec452'"
            >新品</p>
            <p
              class="xinpin"
              v-if="value.attributes.length>1 && value.attributes[1] && value.attributes[1].icon_color=='5ec452'"
            >新品</p>
          </div>
          <span id="two_name">{{value.name}}</span>
          <span id="two_fa">{{value.description}}</span>
          <div id="two_sl">
            <span id="shou">月售{{value.month_sales}}份</span>
            <span id="lv">好评率{{value.satisfy_rate}}%</span>
          </div>
          <div v-if="value.activity != null" id="de">
            <span>{{value.activity.image_text}}</span>
          </div>

          <div id="jq">
            <span id="jq_one">￥</span>
            <span id="jia">{{value.specfoods[0].price}}</span>
            <span id="qi">起</span>
          </div>
          <div id="xuan2">
            <!-- <span >选规格</span> -->
            <span
              id="xuan_gui"
              @click="value.__v++; Jia(value.specfoods[0].price); v.type++;
            Gwc(value);chuan(v.type-1)"
            >+</span>
          </div>
          <div id="ling" v-if="value.__v>0">
            <span>{{value.__v}}</span>
          </div>
          <div
            id="jian"
            v-if="value.__v>0"
            @click="value.__v--; Jian(value.specfoods[0].price);v.type--; Gwc(value);chuan(v.type-1)"
          >
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sp",
  data() {
    return {
      Detil: [],
      ID: ""
    };
  },
  created() {
    this.ID = this.$store.state.id;
    console.log(this.$store.state.id);
    this.detil();
    this.Jia(0);
    this.Jian(0);
    // this.Gwc()
  },
  methods: {
    sp(s) {
      this.$router.push({
        name: "sp_two",
        query: {
          Foods: s
        }
      });
    },
    ret() {
      this.$router.go(-1);
    },
    detil() {
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.ID;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // this.datas = res.data;
        // console.log("hello");

        this.Detil = res.data;
        console.log(res.data);
      });
    },
    Jia(a) {
      this.$store.commit("getdanjia", a);
      // console.log(this.$store.state.danjia);
    },
    Jian(b) {
      this.$store.commit("datadanjia", b);
      // console.log(b);
    },
    Gwc(a) {
    this.$store.commit("caidan", a);
    // console.log("a=" ,a);
  },
  chuan(a){
    this.$store.commit("chuanS", a);
  }
  },
};
</script>
<style scoped>
#sp {
  overflow: hidden;
  /* position: relative;
  top: 1.03rem;
  left: 0; */
  /* border: 0.01rem solid black; */
  /* height: 6rem; */
  margin-top: 1.2rem;
  position: relative;
}
::-webkit-scrollbar {
  display: none;
}
#sp_le {
  /* border: 0.01rem solid black; */
  width: 0.8rem;
  overflow: hidden;
  /* float: left; */
  overflow-y: scroll;
  height: 5rem;
  /* float: left; */
  display: inline-block;
}

#name {
  height: 0.5rem;
  /* border: 0.01rem solid black; */
  line-height: 0.5rem;
  background-color: #f5f5f5;
  position: relative;
  border-bottom: 0.01rem solid rgb(221, 220, 220);
  color: black;
}
#sp_ri {
  /* border:0.01rem solid black; */
  width: 2.9rem;
  overflow-y: scroll;
  height: 6rem;
  /* box-sizing: border-box; */
  display: inline-block;
  position: fixed;
  top: 1.3rem;
}
#sp_ri_div {
  width: 2.94rem;
  /* border: 0.01rem solid black; */
  overflow: hidden;
  /* position: fixed;
  top: 1rem; */
}
.one {
  background-color: #f5f5f5;
  height: 0.35rem;
  /* border: 0.01rem solid black; */
  overflow: hidden;
  width: 2.9rem;
  box-sizing: border-box;
}
#sp_ri_one {
  font-size: 0.18rem;
  font-weight: bolder;
  float: left;
  margin-top: 0.04rem;
  margin-left: 0.04rem;
}
#sp_ri_two {
  font-size: 0.12rem;
  float: left;
  margin-top: 0.08rem;
  margin-left: 0.05rem;
}
.two {
  /* border: 0.01rem solid black; */
  height: 1.3rem;
  background-color: #fff;
  position: relative;
  border-bottom: 0.01rem solid #f5f5f5;
  box-sizing: border-box;
  width: 2.9rem;
}
#two_img {
  width: 0.5rem;
  position: absolute;
  top: 0.13rem;
  left: 0.1rem;
}
#two_name {
  position: absolute;
  top: 0.1rem;
  left: 0.7rem;
  font-weight: bolder;
}
#two_fa {
  position: absolute;
  top: 0.3rem;
  left: 0.7rem;
  font-size: 0.11rem;
}
#two_sl {
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  font-size: 0.14rem;
}
#lv {
  margin-left: 0.03rem;
}
#de {
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  font-size: 0.12rem;
  color: red;
  border: 0.01rem solid red;
  border-top-left-radius: 0.05rem;
  border-top-right-radius: 0.05rem;
  border-bottom-right-radius: 0.05rem;
  border-bottom-left-radius: 0.05rem;
}
#jq {
  position: absolute;
  top: 0.9rem;
  left: 0.7rem;
}
#jq_one {
  font-size: 0.15rem;
  color: red;
}
#jia {
  color: red;
  font-size: 0.2rem;
}
#qi {
  font-size: 0.13rem;
}
/* #xuan {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  background-color: blue;
  border-radius: 0.05rem;
  width: 0.57rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
} */
#xuan_gui {
  font-size: 0.15rem;
  font-weight: bold;
  color: white;
}
#xuan2 {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  background-color: blue;
  border-radius: 50%;
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.15rem;
}
.xinb {
  width: 0;
  height: 0;
  border-bottom: 0.25rem solid transparent;
  border-left: 0.25rem solid transparent;
  border-top: 0.25rem solid transparent;
  border-right: 0.25rem solid green;
  transform: rotate(45deg);
  position: absolute;
  top: -0.24rem;
  left: -0.25rem;
  /* z-index: 1; */
}
.xinpin {
  position: absolute;
  top: 0.05rem;
  /* z-index: 3; */
  transform: rotate(-45deg);
  font-size: 0.1rem;
  color: white;
}
#ling {
  position: absolute;
  right: 0.46rem;
  bottom: 0.22rem;
}
#jian {
  position: absolute;
  bottom: 0.2rem;
  right: 0.6rem;
  border-radius: 50%;
  border: 0.01rem solid blue;
  width: 0.18rem;
  height: 0.18rem;
  text-align: center;
  line-height: 0.12rem;
  font-size: 0.3rem;
  color: blue;
}
#dian {
  background-color: rgb(255, 7, 7);
  width: 0.15rem;
  height: 0.15rem;
  border-radius: 50%;
  text-align: center;
  line-height: 0.15rem;
  font-size: 0.11rem;
  position: absolute;
  top: 0.02rem;
  right: 0.01rem;
  color: white;
}
</style>
