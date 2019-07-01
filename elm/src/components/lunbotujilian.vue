<template>
  <div>
    <!-- 上部分 -->
    <div id="lunbotujilian_head">
      <img src="./imgs/back.png" @click="ret()">
      <span>{{Name}}</span>
    </div>
    <div id="lunbotujilian_first">
      <div>{{Name}}</div>
      <div>|</div>
      <div>排序</div>
      <div>|</div>
      <div>筛选</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lunbojilian",
  data(){
    return{
      Name:""
    }
  },
  created(){
    this.Name=this.$route.query.Name;
  },
  methods: {
    ret() {
      this.$router.back();
      
    }
  }
};
</script>
<style scoped>
#lunbotujilian_head {
  background-color: #3091e9;
  height: 0.5rem;
  line-height: 0.5rem;
  width: 3.75rem;
  /* line-height: 0.5rem; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
#lunbotujilian_head > img {
  height: 0.2rem;
  margin-left: 0.12rem;
}
#lunbotujilian_head > span {
  margin-left: 1.2rem;
  color: white;
  font-size: 0.2rem;
}
#lunbotujilian_first{
  width: 3.75rem;
  height: 0.5rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #6b6b6b;
}
#lunbotujilian_first > div {
  font-size: 0.2rem;
  color: #6b6b6b;
  padding-left: 0.3rem;
  margin-top: 0.5rem;
  float: left;
}

</style>
