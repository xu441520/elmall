<template>
    <div>
        <div id="common_head">
            <router-link to="/user"><img src="../../src/components/imgs/back.png" alt=""></router-link>
            <span id="common_use">我的优惠</span>
            <div id="youhui_one">
                <span @click="hongbao()"><router-link to="/youhui">红包</router-link></span>
                <span @click="shangjia()"><router-link to="/daijinquan">商家代金券</router-link></span>
                <p v-show="showing"></p>
            </div>
        </div>
        
        <div id="youhui_head">
            
        <div id="youhui_two">
            <span>有</span>
            <span>3</span>
            <span>个红包即将过期</span>
            <span class="el-icon-question"></span>
            <span><router-link to="/hongshuo">红包说明</router-link></span>
        </div>
        <div id="youhui_three">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <div id="youhui_four">
                <div id="youhui_five">
                    <span>￥</span>
                    <span>{{this.datas[0].amount}}</span>
                    <p>{{this.datas[0].description_map.sum_condition}}</p>
                </div>
                <div id="youhui_six">
                    <span>{{this.datas[0].name}}</span>
                    <span>{{this.datas[0].description_map.validity_delta}}</span>
                    <p id="you_first">{{this.datas[0].description_map.validity_periods}}</p>
                    <p id="you_second">{{this.datas[0].description_map.phone}}</p>
                    
                </div>
            </div>
        </div>
        <div id="youhui_seven">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <img src="../../src/components/imgs/hong.png" alt="">
            <div id="youhui_eight">
                <div id="youhui_nine">
                    <span>￥</span>
                    <span>{{this.datas[1].amount}}</span>
                    <p>{{this.datas[1].description_map.sum_condition}}</p>
                </div>
                <div id="youhui_ten">
                    <span>{{this.datas[1].name}}</span>
                    <span>{{this.datas[1].description_map.validity_delta}}</span>
                    <p id="you_third">{{this.datas[1].description_map.validity_periods}}</p>
                    <p id="you_forth">{{this.datas[1].description_map.phone}}</p>
                    
                </div>
            </div>
        </div>
        <div id="you_eighth">
            <div id="youhui_ele">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <img src="../../src/components/imgs/hong.png" alt="">
                <div id="youhui_tew">
                    <div id="youhui_thres">
                        <span>￥</span>
                        <span>{{this.datas[2].amount}}</span>
                        <p>{{this.datas[2].description_map.sum_condition}}</p>
                    </div>
                    <div id="youhui_fourth">
                        <span>{{this.datas[2].name}}</span>
                        <span>{{this.datas[2].description_map.validity_delta}}</span>
                        <p id="you_fiveth">{{this.datas[2].description_map.validity_periods}}</p>
                        <p id="you_sixth">{{this.datas[2].description_map.phone}}</p>
                        
                    </div>
                    
                </div>
            
            </div>
            <div id="you_seventh">
                {{this.datas[2].limit_map.restaurant_flavor_ids}}
            </div>
        </div>
    </div>
    <router-link to="/hongrecord">
        <div id="you_eigth">
                查看历史记录>
    </div>
    </router-link>
    <div id="you_bottom">
        <div id="bottom_one">
            <router-link to="/hongbaodui">
                兑换红包
            </router-link>
        </div>
        <div id="bottom_two">
            <router-link to="/tuijian">推荐有奖</router-link>
        </div>
    </div>
        </div>
</template>
<script>
export default {
    name:'youhui',
    data(){
        return{
            datas:[],
            showing:true
        }
    },
    created(){
        this.coupons();
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        hongbao(){
            this.showing=true;
        },
        shangjia(){
            this.showing=false;
        },
        coupons(){
            const api = "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
            this.$http({
                url:api,
                method:'get',
                withCredentials:true

            }).then(res => {//请求返回的数据res
                console.log("打印红包数据成功");
                console.log(res);
                this.datas = res.data;
                
            })
        }
    }
}
</script>
<style scoped>
#common_head{
    width: 3.75rem;
    height: 0.5rem;
    background-color: blue;
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
    margin-left: 0.9rem;
}
#youhui_one{
    /* border: 1px solid red; */
    width: 100%;
    margin-top: 0.48rem;
    height: 0.5rem;
    background-color: white;
    font-size: 0.2rem;
    /* text-align: center; */
    line-height: 0.5rem;
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 2;
    display: flex;
    justify-content: space-around;
}
#youhui_one span:nth-child(1){
    /* border: 1px solid red; */
    width: 40%;
    text-align: center;
}
#youhui_one span:nth-child(2){
    /* border: 1px solid red; */
    width: 40%;
    text-align: center;
}
#youhui_one p{
    width: 10.5%;
    height: 2px;
    background-color: blue;
    position: absolute;
    top: 0.4rem;
    left: 0.73rem;
}

#youhui_head{
    /* border: 1px solid red; */
    margin: 0 auto;
    margin-top: 1.05rem;
    width: 93%;    
}
#youhui_two{
    /* border: 1px solid red; */
    font-size: 0.18rem;

}
#youhui_two :nth-child(2){
    font-size: 0.18rem;
    color: orangered;
}
#youhui_two :nth-child(4){
    font-size: 0.18rem;
    color: blue;
    position: absolute;
    top: 1.08rem;
    right: 0.95rem;
}
#youhui_two :nth-child(5){
    font-size: 0.18rem;
    color: blue;
    position: absolute;
    top: 1.08rem;
    right: 0.15rem;
    font-weight: bold;
}
#youhui_three{
    border: 1px solid red;
    border-radius: 10px;
    margin-top: 0.1rem;
    overflow: hidden;
    background-color: #fff;
}
#youhui_three img{
    width: 0.15rem;
    float: left;
}
#youhui_four{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    margin-left: 0.1rem;
}

#youhui_five span:nth-child(1){
    color: orangered;
    font-weight: bold;
    font-size: 0.2rem;
}
#youhui_five span:nth-child(2){
    color: orangered;
    font-weight: 540;
    font-size: 0.5rem;
}
#youhui_five p{
    color: gray;
    
}
#youhui_six{
    border-left: 1px dashed rgb(131, 131, 131);
}
#youhui_six span:nth-child(1){
    font-size: 0.22rem;
    margin-left: 0.15rem;
}
#youhui_six span:nth-child(2){
    font-size: 0.22rem;
    margin-left: 0.6rem;
    color: rgb(255, 38, 0);
}
#you_first{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
}
#you_second{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
}

#youhui_seven{
    border: 1px solid red;
    border-radius: 10px;
    margin-top: 0.1rem;
    overflow: hidden;
    background-color: #fff;
}
#youhui_seven img{
    width: 0.15rem;
    float: left;
}
#youhui_eight{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    margin-left: 0.1rem;
}
#youhui_nine span:nth-child(1){
    color: orangered;
    font-weight: bold;
    font-size: 0.2rem;
}
#youhui_nine span:nth-child(2){
    color: orangered;
    font-weight: 540;
    font-size: 0.5rem;
}
#youhui_nine p{
    color: gray;
    
}
#youhui_ten{
    border-left: 1px dashed rgb(131, 131, 131);
}
#youhui_ten span:nth-child(1){
    font-size: 0.22rem;
    margin-left: 0.15rem;
}
#youhui_ten span:nth-child(2){
    font-size: 0.22rem;
    margin-left: 0.6rem;
    color: rgb(255, 38, 0);
}
#you_third{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
}
#you_forth{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
}

#youhui_ele{
    border: 1px solid red;
    /* margin-top: 0.1rem; */
    overflow: hidden;
    background-color: #fff;
}
#youhui_ele img{
    width: 0.15rem;
    float: left;
}
#youhui_tew{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    margin-left: 0.1rem;
}
#youhui_thres span:nth-child(1){
    color: orangered;
    font-weight: bold;
    font-size: 0.2rem;
}
#youhui_thres span:nth-child(2){
    color: orangered;
    font-weight: 540;
    font-size: 0.45rem;
}
#youhui_thres p{
    color: gray;
    
}
#youhui_fourth{
    border-left: 1px dashed rgb(131, 131, 131);
}
#youhui_fourth span:nth-child(1){
    font-size: 0.22rem;
    margin-left: 0.15rem;
}
#youhui_fourth span:nth-child(2){
    font-size: 0.22rem;
    margin-left: 0.6rem;
    color: rgb(255, 38, 0);
}
#you_fiveth{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
}
#you_sixth{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
}
#you_eighth{
    background-color: rgb(230, 229, 229);
    border-radius: 10px;
    margin-top: 0.1rem;
    overflow: hidden;
}
#you_seventh{
    margin-top: 0.2rem;
    margin-left: 0.15rem;
    margin-bottom: 0.2rem;
    line-height: 0.2rem;
    color: dimgrey;
    margin-right: 0.15rem;
    font-size: 0.16rem;
}
#you_bottom{
    position: fixed;
    left: 0rem;
    bottom: 0rem;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    background-color: #fff;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
}
#bottom_one{
    border: 1px solid rgb(155, 155, 155);
    border-left: none;
    width: 50%;
    text-align: center;
    font-size: 0.2rem;
}
#bottom_two{
    border: 1px solid rgb(155, 155, 155);
    border-left: none;
    border-right: none;
    width: 50%;
    text-align: center;
    font-size: 0.2rem;
}
#you_eigth{
    text-align: center;
    margin-top: 0.2rem;
    color: rgb(134, 133, 133);
    font-size: 0.15rem;
}
</style>
