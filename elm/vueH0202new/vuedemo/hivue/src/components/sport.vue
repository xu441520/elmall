<template>
    <div>
        <ul>
            <li>篮球</li>
            <li>足球</li>
            <li>乒乓球</li>
            <li>台球</li>
            <li>排球</li>
        </ul>
        <!-- 使用轮播图
         -->
         <div id="one">
              <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide :key="i" v-for="(v,i) in swiperImgs">
        <img width="300" :src="v" alt="">
    </swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
         </div>
    </div>
</template>
<script>
export default {
    name:"sport",
    data(){
        return {
            swiperImgs:[require("./imgs/1.jpg"),require("./imgs/2.jpg"),require("./imgs/3.jpg")],
              swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数   swiper4.x 
          initialSlide :1,
           navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
  },
  effect : 'cube'
        }
        }
    }
}
</script>
<style scoped>
#one{
    width:300px;
    border:1px solid black;
    margin: 0 auto;
}
</style>
