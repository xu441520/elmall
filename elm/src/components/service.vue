// 服务中心
<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">服务中心</span>
        </div>
        <div id="service_body">
            <div id="service_one">
                <div>
                    <img src="../../src/components/imgs/kefu.png" alt="">
                    <p>在线客服</p>
                </div>
                <div id="linge"></div>
                <div>
                    <img src="../../src/components/imgs/dianhua.png" alt="">
                    <p>在线客服</p>
                </div>
            </div>
            <div id="service_two">
                <div>
                <h3>热门问题</h3>
            </div>
            <div @click="ser1()">
                <p>{{this.serdatas.supervipCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser2()">
                <p>{{this.serdatas.signCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser3()">
                <p>{{this.serdatas.rankCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser4()">
                <p>{{this.serdatas.pointtextCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser5()">
                <p>{{this.serdatas.phototutorialCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser6()">
                <p>{{this.serdatas.paymentCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser7()">
                <p>{{this.serdatas.otherCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser8()">
                <p>{{this.serdatas.ontimeCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser9()">
                <p>{{this.serdatas.memberTimesCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser10()">
                <p>{{this.serdatas.memberCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser11()">
                <p>{{this.serdatas.hongbaoCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser12()">
                <p>{{this.serdatas.freshmanCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser13()">
                <p>{{this.serdatas.forgotCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser14()">
                <p>{{this.serdatas.discountCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser15()">
                <p>{{this.serdatas.disclaimerCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser16()">
                <p>{{this.serdatas.couponCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser17()">
                <p>{{this.serdatas.businessCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser18()">
                <p>{{this.serdatas.balanceCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser19()">
                <p>{{this.serdatas.awesomeRestaurantCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser20()">
                <p>{{this.serdatas.anonymousBuyCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            <div @click="ser21()">
                <p>{{this.serdatas.activityCaption}}</p>
                <img src="../../src/components/imgs/youj.png" alt="">
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'service',
    data(){
        return{
            serdatas:{},
            datas:''
        }
    },
    created(){
        this.serviceing();
    },
    methods:{
        goBack(){
            this.$router.push({
                name: "user",
            });
        },
        serviceing(){
            const api = "https://elm.cangdu.org/v3/profile/explain";
            this.$http({
                url:api,
                method:'get',
                withCredentials:true

            }).then(res => {//请求返回的数据res
                console.log("打印服务中心数据成功");
                console.log(res);
                console.log(res.data.supervipCaption);
                this.serdatas = res.data;
                this.datas = res.data;
                query:res.data;
                this.$store.commit("allServices",res.data);
            })
        },
        ser1(){
            this.$router.push({
                name: "supervip",
                query: {
                daser:this.datas.supervipCaption,
                serivers: this.datas.supervipContent,
                
                }
            });
        },
        ser2(){
            this.$router.push({
                name: "signin",
                query: {
                daser:this.datas.signCaption,
                serivers: this.datas.signContent,
                
                }
            });
        },
        ser3(){
            this.$router.push({
                name: "lever",
                query: {
                daser:this.datas.rankCaption,
                serivers: this.datas.rankContent,
                
                }
            });
        },
        ser4(){
            this.$router.push({
                name: "point",
                query: {
                daser:this.datas.pointtextCaption,
                serivers: this.datas.pointtextContent,
                
                }
            });
        },
        ser5(){
            var a = 1;
            var b = false;
            var str = this.datas.phototutorialContent;
            var arr = [];
            var reg1 = /\([^\)]+\)/g;
            str.replace(reg1, function(s,value) {
//          alert(value); // value 就是 123456
            var s2 = s.substring(1,s.length-1);
            arr.push(s2);//所有图片的路径
            });
            
            // 字体
            var str2 = this.datas.phototutorialContent;
            var arr2 = [];
            var reg2 = /#{2}[^\<]+(。|~)/g;
            str.replace(reg2, function(s,value) {
        //  console.log(s);
        //  console.log(value);
            var s3 = s.substring(2,s.length-2);
            console.log(s3);
            
            arr2.push(s3);//所有图片的路径
            
            
            })

            this.$router.push({
                name: "photo",
                query: {
                daser:this.datas.phototutorialCaption,
                serivers: arr,
                words:arr2
                }
            });
        },
        ser6(){
            this.$router.push({
                name: "payfor",
                query: {
                daser:this.datas.paymentCaption,
                serivers: this.datas.paymentContent,
                
                }
            });
        },
        ser7(){
            this.$router.push({
                name: "ordernumber",
                query: {
                daser:this.datas.otherCaption,
                serivers: this.datas.otherContent,
                
                }
            });
        },
        ser8(){
            this.$router.push({
                name: "ontime",
                query: {
                daser:this.datas.ontimeCaption,
                serivers: this.datas.ontimeContent,
                
                }
            });
        },
        ser9(){
            this.$router.push({
                name: "membertime",
                query: {
                daser:this.datas.memberTimesCaption,
                serivers: this.datas.memberTimesContent,
                
                }
            });
        },
        ser10(){
            this.$router.push({
                name: "memberqu",
                query: {
                daser:this.datas.memberCaption,
                serivers: this.datas.memberFullCutContent,
                
                }
            });
        },
        ser11(){
            this.$router.push({
                name: "hongbao",
                query: {
                daser:this.datas.hongbaoCaption,
                serivers: this.datas.hongbaoContent,
                
                }
            });
        },
        ser12(){
            this.$router.push({
                name: "freshman",
                query: {
                daser:this.datas.freshmanCaption,
                serivers: this.datas.freshmanContent,
                
                }
            });
        },
        ser13(){
            this.$router.push({
                name: "forgot",
                query: {
                daser:this.datas.forgotCaption,
                serivers: this.datas.forgotContent,
                
                }
            });
        },
        ser14(){
            this.$router.push({
                name: "discount",
                query: {
                daser:this.datas.discountCaption,
                serivers: this.datas.discountContent,
                }
            });
        },
        ser15(){
            this.$router.push({
                name: "disclaimer",
                query: {
                daser:this.datas.disclaimerCaption,
                serivers: this.datas.freshmanContent,
                
                }
            });
        },
        ser16(){
            this.$router.push({
                name: "coupon",
                query: {
                daser:this.datas.couponCaption,
                serivers: this.datas.couponContent,
                
                }
            });
        },
        ser17(){
            this.$router.push({
                name: "business",
                query: {
                daser:this.datas.businessCaption,
                serivers: this.datas.businessContent,
                
                }
            });
        },
        ser18(){
            this.$router.push({
                name: "yuer",
                query: {
                daser:this.datas.balanceCaption,
                serivers: this.datas.balanceContent,
                
                }
            });
        },
        ser19(){
            this.$router.push({
                name: "chaozan",
                query: {
                daser:this.datas.awesomeRestaurantCaption,
                serivers: this.datas.awesomeRestaurantContent,
                
                }
            });
        },
        ser20(){
            this.$router.push({
                name: "niming",
                query: {
                daser:this.datas.anonymousBuyCaption,
                serivers: this.datas.businessContent,
                
                }
            });
        },
        ser21(){
            this.$router.push({
                name: "huodonging",
                query: {
                daser:this.datas.activityCaption,
                serivers: this.datas.activityContent,
                
                }
            });
        },
    }
}
</script>
<style scoped>
#common_head{
    width: 3.75rem;
    height: 0.5rem;
    background-color: rgb(49, 144, 232);
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 2;
}
#common_head img{
    display: inline-block;
    width: 0.18rem;
    height: 0.23rem;
    margin-left: 0.2rem;
    margin-top: 0.13rem;
}
#common_use{
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 0.5rem;
    margin-left: 1rem;
}

/* 服务中心部分 */
#service_one{
    /* border: 1px solid red; */
    margin-top: 0.48rem;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    background-color: #fff;
    position: relative;
}
#service_one div:nth-child(1){
    width: 50%;
    height: 0.8rem;
    text-align: center;
    font-size: 0.15rem;
    margin-top: 0.1rem;
}
#linge{
    height: 0.9rem;
    border-left: 1px solid lightgray;
    
}

#service_one div:nth-child(3){
    width: 50%;
    height: 0.8rem;
    text-align: center;
    font-size: 0.15rem;
    margin-top: 0.1rem;
}
#service_one div img{
    width: 0.35rem;
    height: 0.35rem;
}
#service_one div p{
    margin-top: 0.1rem;
}
#service_two{
    position: relative;
}
#service_two div:nth-child(1){
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.5rem;
   line-height: 0.5rem;
 
}
#service_two div:nth-child(1) h3{
    margin-left: 0.2rem;

}
#service_two div:nth-child(2){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(2) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(2) img{
    /* border: 1px solid red; */
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 0.65rem;
    right: 0.15rem;
}
#service_two div:nth-child(3){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(3) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(3) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 1.05rem;
    right: 0.15rem;
}
#service_two div:nth-child(4){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(4) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(4) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 1.5rem;
    right: 0.15rem;
}
#service_two div:nth-child(5){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(5) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(5) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 1.88rem;
    right: 0.15rem;
}
#service_two div:nth-child(6){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(6) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(6) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 2.28rem;
    right: 0.15rem;
}
#service_two div:nth-child(7){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(7) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(7) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 2.7rem;
    right: 0.15rem;
}
#service_two div:nth-child(8){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(8) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(8) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 3.13rem;
    right: 0.15rem;
}
#service_two div:nth-child(9){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(9) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(9) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 3.52rem;
    right: 0.15rem;
}
#service_two div:nth-child(10){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(10) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(10) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 3.92rem;
    right: 0.15rem;
}
#service_two div:nth-child(11){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(11) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(11) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 4.32rem;
    right: 0.15rem;
}
#service_two div:nth-child(12){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(12) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(12) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 4.76rem;
    right: 0.15rem;
}
#service_two div:nth-child(13){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(13) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(13) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 5.18rem;
    right: 0.15rem;
}
#service_two div:nth-child(14){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(14) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(14) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 5.57rem;
    right: 0.15rem;
}
#service_two div:nth-child(15){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(15) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(15) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 5.98rem;
    right: 0.15rem;
}
#service_two div:nth-child(16){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(16) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(16) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 6.4rem;
    right: 0.15rem;
}
#service_two div:nth-child(17){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(17) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(17) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 6.82rem;
    right: 0.15rem;
}
#service_two div:nth-child(18){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(18) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(18) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 7.2rem;
    right: 0.15rem;
}
#service_two div:nth-child(19){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(19) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(19) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 7.63rem;
    right: 0.15rem;
}
#service_two div:nth-child(20){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(20) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(20) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 8.05rem;
    right: 0.15rem;
}
#service_two div:nth-child(21){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(21) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(21) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 8.45rem;
    right: 0.15rem;
}
#service_two div:nth-child(22){
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    height: 0.4rem;
   line-height: 0.4rem;
 
}
#service_two div:nth-child(22) p{
    margin-left: 0.2rem;
    font-size: 0.15rem;
}
#service_two div:nth-child(22) img{
    width: 0.11rem;
    height: 0.18rem;
    position: absolute;
    top: 8.85rem;
    right: 0.15rem;
}







































































































































</style>
