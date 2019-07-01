<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">推荐有奖</span>
        </div>
        <div id="hong_one">
            <img src="../../src/components/imgs/tuijian.png" alt="">
        </div>
        <div id="hong_two">
            <div id="hong_three">
                <img @click="weixin()" src="../../src/components/imgs/weixin.png" alt="">
                <p>邀请微信好友</p>
            </div>
            <div @click="weixin()" id="hong_four">
                <img src="../../src/components/imgs/qq.png" alt="">
                <p>邀请QQ好友</p>
            </div>
            <div @click="weixin()" id="hong_five">
                <img src="../../src/components/imgs/app.png" alt="">
                <p>面对面邀请</p>
            </div>
        </div>
        <div id="hong_six">
            <div id="hong_seven">
                <p>累计收益</p>
                <span id="hong_eight">0</span>
                <span id="hong_nine">元</span>
            </div>
            <div id="hong_fourth"></div>
            <div id="hong_ten">
                <p>成功邀请</p>
                <span id="hong_ele">0</span>
                <span id="hong_tew">人</span>
            </div>
        </div>
        <div id="hong_treth">
            <p>-收益明细-</p>
            <img src="../../src/components/imgs/hongbao.png" alt="">
            <div>还不赶紧去邀请好友</div>
        </div>
        <div v-show="hongshow" class="hong_fiveth animated heartBeat 0.4s">
            <img src="../../src/components/imgs/zhuyi.png" alt="">
            <p>请在饿了么APP中打开</p>
            <button @click="makesure()" >确认</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'tuijian',
    data(){
        return{
            hongshow:false
        }
    },
    created(){
        console.log("打印超级会员部分");
        console.log(this.$route.query.daser);
        console.log(this.$route.query.serivers);
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        weixin(){
            this.hongshow = true;
        },
        makesure(){
            this.hongshow =false;
        }
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
    margin-left: 0.9rem;
}
#hong_one{
    /* border: 1px solid red; */
    margin-top: 0.48rem;
    border-radius: 5px;
    overflow: hidden;
    
}
#hong_one img{
    width: 3.75rem;
    vertical-align: bottom;
}
#hong_two{
    /* border: 1px solid red; */
    overflow: hidden;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    vertical-align: top;
    padding-bottom: 0.15rem;
}
#hong_two img{
    display: inline-block;
    width: 0.63rem;
    height: 0.6rem;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
    margin-left: 0.13rem;
}
#hong_two p{
    font-size: 0.16rem;
}
#hong_six{
    display: flex;
    /* border: 1px solid red; */
    text-align: center;
    justify-content: space-evenly;
    margin-top: 0.2rem;
}
#hong_seven p{
    color: rgb(39, 37, 37);
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
}
#hong_eight{
    color: orangered;
    font-size: 0.25rem;
    font-weight: bold;
}
#hong_fourth{
    width: 1px;
    background-color: rgb(196, 196, 196);
}
#hong_ten p{
    color: rgb(39, 37, 37);
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
}
#hong_ele{
    color: gray;
    font-size: 0.25rem;
    font-weight: bold;
}
#hong_treth{
    /* border: 1px solid red; */
    text-align: center;
    margin-top: 0.2rem;
}
#hong_treth p{
    font-size: 0.17rem;
    color: rgb(39, 37, 37);
    margin-bottom: 0.15rem;
}
#hong_treth img{
    width: 0.35rem;
    height: 0.38rem;
}
#hong_treth div{
    margin-top: 0.1rem;
    font-size: 0.15rem;
    color: rgb(66, 65, 65);
}
.hong_fiveth{
    width: 70%;
    height: 1.8rem;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 1.9rem;
    left: 15%;
    overflow: hidden;
}
.hong_fiveth img{
    width: 1.33rem;
    height: 1rem;
}
.hong_fiveth p{
    margin-top: 0.06rem;
    font-size: 0.18rem;

}
.hong_fiveth button{
    height: 0.4rem;
    width: 100%;
    background-color: rgb(92, 240, 92);
    color: #fff;
    font-size: 0.2rem;
    margin-top: 0.14rem;
}
</style>
