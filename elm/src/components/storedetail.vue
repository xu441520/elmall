//查看商家详情页面
<template>
    <div>
        <div id="storedetail_head">
            <img @click="ret()" src="./imgs/back.png" alt="">
            <span>商家详情</span>
        </div>
        <!-- 活动与属性 -->
        <div id="storedetail_one">
            <div><p>活动与属性</p></div>
            <p :key="i1" v-for="(v1,i1) in Detil.activities">
                <span id="re1">{{v1.icon_name}}</span>
                <span>{{v1.description}}(APP专享)</span>
            </p>
             <p :key="i2" v-for="(v2,i2) in Detil.supports" id="bl1">
                <span>{{v2.icon_name}}</span>
                <span>{{v2.description}}(APP专享)</span>
            </p>
        </div>
        <!-- 食品监督安全公示 -->
        <div id="storedetail_two" :key="i" v-for="(v,i) in Detil">
            <p>
                <span>食品监督安全公示</span>
                <router-link to="/safeshow">
                    <span style="color:#6b6b6b">企业认证详情</span>
                    <img src="./imgs/1.png" alt="">
                </router-link>
            </p>
            <p><img src="./imgs/lian.png" alt=""></p>
            <div>
                <p id="one">
                    <span>监督检查结果:</span>
                    <span>差</span>
                </p>
                <p id="two">检查日期</p>
            </div>
        </div>
        <!-- 商家详情 -->
        <div id="storedetail_three">
            <div id="rt"><p>商家信息</p></div>
            <p>{{Detil.name}}</p>
            <div>
                地址:{{Detil.address}}
            </div>
            <p>营业时间:[{{Detil.opening_hours[0]}}]</p>
            <p>
                <span>营业执照</span>
                <router-link to="/yingyezz"><img src="./imgs/1.png" alt="" id="imgs01"></router-link>
            </p>
            <p>
                <span>餐饮服务许可证</span>
                 <router-link to="/xukezheng"><img src="./imgs/1.png" alt="" id="imgs02"></router-link>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:"storedetail",
    data(){
        return{
            Detil:{}
        };
    },
    created(){
        this.ID = this.$route.query.id;
        this.storedetail();
    },
    methods:{
        ret(){
            this.$router.go(-1);
        },
        storedetail(){
            const api = "https://elm.cangdu.org/shopping/restaurant/"+this.ID;
            this.$http({
                url: api,
                method: "get"
            }).then(res => {
                console.log("数据返回成功");
                console.log(res.data);
                this.Detil = res.data;
            });
        }
    }
}
</script>
<style scoped>
    #storedetail_head{
        width: 3.75rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #3191e8;
        position: fixed;
        top: 0rem;
        left: 0rem;
        z-index: 2;
    }
    #storedetail_head > img{
        height: 0.15rem;
        margin-left: 0.2rem;
    }
    #storedetail_head >span{
        font-size: 0.2rem;
        color: white;
        margin-left: 1rem;
    }
    #storedetail_one{
        height: 2.2rem;
        background-color: #fff;
        position: absolute;
        top: 0.5rem;
        left: 0rem;
        /* border: 1px solid black */
    }
     #storedetail_one > div:nth-child(1){
         border-bottom: 0.01rem solid #6b6b6b;
     }
    #storedetail_one p:nth-child(1){
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.14rem;
        margin-left: 0.2rem;
    }
    #re1{
        background-color: red;
        color: white;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
    }
    #storedetail_one p:nth-child(2){
        font-size: 0.14rem;
        margin-left: 0.2rem;
        color: #6b6b6b;
        margin-top: 0.2rem;
    }
     #storedetail_one p:nth-child(3)>span:nth-child(1){
         background-color: #6b6b6b;
         width: 0.2rem;
         height: 0.2rem;
         line-height: 0.2rem;
         color: white;
     }
    #storedetail_one p:nth-child(3){
        font-size: 0.14rem;
        margin-left: 0.2rem;
        color: #6b6b6b;
        margin-top: 0.2rem;
    }
    #storedetail_one p:nth-child(4){
        font-size: 0.14rem;
        margin-left: 0.2rem;
        color: #6b6b6b;
        margin-top: 0.2rem;
    }
    #storedetail_one p:nth-child(4)>span:nth-child(1){
         background-color: #3191e8;
         width: 0.2rem;
         height: 0.2rem;
         line-height: 0.2rem;
         color: white;
     }
    #storedetail_one p:nth-child(5){
        font-size: 0.14rem;
        margin-left: 0.2rem;
        color: #6b6b6b;
        margin-top: 0.2rem;
    }
    #storedetail_one p:nth-child(5)>span:nth-child(1){
         background-color: #6b6b6b;
         width: 0.2rem;
         height: 0.2rem;
         line-height: 0.2rem;
         color: white;
     }
    #storedetail_two{
        height: 1.4rem;
        width: 3.75rem;
        background-color: #fff;
        position: absolute;
        top: 2.83rem;
        left: 0rem;
    }
    #storedetail_two > p:nth-child(1){
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: 0.01rem solid #6b6b6b;
    }
    #storedetail_two > p:nth-child(1) span:nth-child(1){
        font-size: 0.2rem;
        margin-left: 0.2rem;
    }
    #storedetail_two > p:nth-child(1) span:nth-child(2){
        font-size: 0.17rem;
        margin-left: 0.6rem;
    }
    #storedetail_two > p:nth-child(1) img{
        height: 0.2rem;
    }
    #storedetail_two > p:nth-child(2) img{
        height: 0.8rem;
        float: left;
        margin-left: 0.2rem;
    }
    #storedetail_two > p:nth-child(2) div{
        font-size: 0.1rem;
        float: right;
    }
     #one{
         margin-top: 0.1rem;
         margin-left: 0.5rem;
     }
     #one > span:nth-child(2){
         color: red;
     }
    #two{
        margin-top: 0.2rem;
        margin-left: 0.5rem;
    }
    #storedetail_three{
        height: 3rem;
        width: 3.75rem;
        background-color: #fff;
        position: absolute;
        top: 4.35rem;
        left: 0rem;
    }
    #rt{
        width: 3.75rem;
        border-bottom: 0.01rem solid #6b6b6b;
    }
    #rt>p{
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.2rem;
    }
    #storedetail_three > #rt+p{
        font-size: 0.14rem;
        margin-left: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border-bottom: 0.01rem solid #6b6b6b;
        color: #6b6b6b;
    }
    #storedetail_three > #rt+p+div{
        font-size: 0.14rem;
        margin-left: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border-bottom: 0.01rem solid #6b6b6b;
        color: #6b6b6b;
    }
     #storedetail_three > #rt+p+div+p{
        font-size: 0.14rem;
        margin-left: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border-bottom: 0.01rem solid #6b6b6b;
        color: #6b6b6b;
    }
    #storedetail_three > #rt+p+div+p+p{
        font-size: 0.14rem;
        margin-left: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border-bottom: 0.01rem solid #6b6b6b;
        color: #6b6b6b;
    }
    #imgs01{
        height: 0.2rem;
        margin-left: 2.7rem;
    }
     #storedetail_three > #rt+p+div+p+p+p{
         font-size: 0.14rem;
        margin-left: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
        /* border-bottom: 0.01rem solid #6b6b6b; */
        color: #6b6b6b;
     }
      #imgs02{
          height: 0.2rem;
        margin-left: 2.3rem;
      }
      
</style>
