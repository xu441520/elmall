//二级级评价组件页面
<template>
    <div id="pj">
        <!-- 评价分数 -->
        <div id="pj_head">
        <!-- <img src="./imgs/car.png" alt=""> -->
        <div id="pj_one">
            <p id="pj_p1">{{this.$store.state.score2}}</p>
            <p>综合评价</p>
            <p>高于周边商家{{(data1.compare_rating*100).toFixed(1)}}%</p>
        </div>
         <div id="pj_two">
            <p>
                服务态度
                <van-rate
  v-model="data1.service_score.toFixed(1)"
  allow-half
  void-icon="star"
  void-color="#eee"
  size = 0.12rem
  gutter = 0.02rem
/>
<span id="pingfen">{{data1.service_score.toFixed(1)}}</span>
            </p>
            <p>菜品评价
        <van-rate
  v-model="data1.food_score.toFixed(1)"
  allow-half
  void-icon="star"
  void-color="#eee"
  size = 0.12rem
  gutter = 0.02rem
/>
<span id="pingfen1">{{data1.food_score.toFixed(1)}}</span>
            </p>
            <p>
                <span>送达时间</span>
                <span id="pj_sp1">分钟</span>
            </p>
        </div>
    </div>
    评价分类
    <div id="pj_center">
<el-row :gutter="20" id="el-row1">
  <el-col :span="6"><div class="grid-content bg-purple ttt">{{data2[0].name}}({{data2[0].count}})</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple ttt">{{data2[1].name}}({{data2[1].count}})</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple ttt" id="three">{{data2[2].name}}({{data2[2].count}})</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple ttt">{{data2[3].name}}({{data2[3].count}})</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple ttt">{{data2[4].name}}({{data2[4].count}})</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple ttt">{{data2[5].name}}({{data2[5].count}})</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple ttt">{{data2[6].name}}({{data2[6].count}})</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple ttt">{{data2[7].name}}({{data2[7].count}})</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple ttt">{{data2[8].name}}({{data2[8].count}})</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="10"><div class="grid-content bg-purple ttt">{{data2[9].name}}({{data2[9].count}})</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple ttt">{{data2[10].name}}({{data2[10].count}})</div></el-col>
</el-row>
    </div>
    <!-- 评价内容 -->
    <ul id="pj_content" :key="i" v-for="(v,i) in data3" style="position:relative;">
       <li style="border-bottom:0.005rem solid #6b6b6b; height:1.4rem;">
          <p><img src="./imgs/touxiang-kong.png" style="height:0.4rem;position:absolute;left:0.1rem;top:0.1rem;"></p>
           <div style="font-size:0.1rem;position:absolute;left:0.6rem;top:0.05rem;">
               <p style="margin-top:0.1rem">{{v.username}}</p>
               <p style="width:2rem;">
                     <el-rate
                v-model="v.rating_star"
                disabled
                show-score
                text-color="#ff9900"
                style="height=0.01rem">
                    </el-rate>
                <span style="position:absolute;left:1.4rem;top:0.25rem;">{{v.time_spent_desc}}</span>
               </p>
               <p :key="i1" v-for="(v1,i1) in v.item_ratings" style="float:left">
                   <img v-if="v1.image_hash" :src="'https://fuss10.elemecdn.com/'+v1.image_hash+'.jpeg'" style="height:0.6rem;"><br>
                   <span class="spp1">{{v1.food_name}}</span>
               </p>
              
           </div>
           <p style="position:absolute; right:0.1rem;top:0.1rem;font-size:0.1rem;">{{v.rated_at}}</p>
       </li>
    </ul>
    </div>
</template>

<script>
export default {
    name:"pj",
    data(){
        return{
            data1:{},
            data2:[],
            data3:[]
        }
    },
    // //计算属性
    // computed:{
    //     service_score(){
    //         return data1.service_score.toFixed(1);
    //     },
    //     food_score(){
    //         return data1.food_score.toFixed(1);
    //     }
    // },
    created(){
        this.ID = this.$route.query.id;
        this.getScore();//评价分数
        this.getClassify();//评价分类
        this.getSubstance();//评价内容
        this.score2 = this.$store.state.score2;
    },
    methods:{
        getScore(){
            const api = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.ID+"/ratings/scores";
            //get请求方式
            this.$http.get(api).then((res)=>{
                console.log("评价分数获取");
                console.log(res.data);
                this.data1 = res.data;
            })
        },
        getClassify(){
            const api = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.ID+"/ratings/tags";
            //get请求方式
            this.$http.get(api).then((res)=>{
                console.log("评价分类获取");
                console.log(res.data);
                this.data2 = res.data;
            })
        },
        getSubstance(){
            const api = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.ID+"/ratings?offect=0&limit=10";
            //get请求方式
            this.$http.get(api).then((res)=>{
                //请求成功后的回调函数
                console.log("评价数据获取成功");
                console.log(res.data);
                 //返回请求到的数据并显示出来
                this.data3 = res.data;
            });
        }
    }

}
</script>
<style scoped>
    #pj{
        overflow: hidden;
        margin-top: 1.2rem;
        width: 3.75rem;
        overflow: hidden;
        /* float: left; */
        overflow-y: scroll;
    }
   #pj_head{
        height: 1rem;
         background-color: #fff;
         position: relative;
   }
   #pj_one{
      position: absolute;
      top: 0.1rem;
      left: 0.2rem;
     text-align: center;
   }
   #pj_p1, #pj_p1+p,#pj_p1+p+p{
       margin-top: 0.06rem;
   }
   #pj_p1{
       font-size: 0.25rem;
       color: orange;
   }
    #pj_p1+p{
        font-size: 0.15rem;
         color: #6b6b6b;
     }
   #pj_p1+p+p{
       font-size: 0.12rem;
       color: #6b6b6b;
   }
   #pj_two{
       color: #6b6b6b;
       font-size: 0.15rem;
       height:0.4rem;
       position: absolute;
       left: 2rem;
       font-size: 0.12rem;
       margin-top: 0.15rem;
       margin-bottom: 0.2rem;
   }
  .el-row {
    margin-bottom: 15px;
  }
  .el-col {
    border-radius: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 0.2rem;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  #pj_center{
      padding-top: 0.01rem;
      background-color: #fff;
      margin-top: 0.1rem;
      border-bottom: 0.01rem solid #6b6b6b;
  }
  #el-row1{
       margin-top: 0.2rem
   }
  .bg-purple[data-v-4e2fc70a] {
    background: lightblue;
    }
   #three{
       background-color: lightgray;
   }
   .ttt{
        font-size:0.12rem; 
        text-align:center;
        height: 0.18rem;
        line-height: 0.18rem;
   } 
   #ppd{
       padding-left: 0.02rem;
       /* display: inline; */
       /* border: 1px solid black; */
       width: 1rem;
       position: absolute;
       left: 0rem;
       top: 1rem;
       display: block;
       /* border: 1px solid red; */
   }
   .spp1{
        display: inline-block;
        width: 0.35rem;
        height: 0.15rem;
        text-align: center;
        border: 0.01rem solid #9b9b9b;
        margin-left: 0rem; 
        margin-right: 0.2rem;
        line-height: 0.15rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: top;
   }
   #pingfen{
  font-size: 0.12rem;
  position: absolute;
  top: 0.1rem;
  left: 0.75rem;
  color: orange;
}
 #pingfen1{
  font-size: 0.12rem;
  position: absolute;
  top: 0.35rem;
  left: 0.75rem;
  color: orange;
}
</style>
