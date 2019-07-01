<template>
    <div>
        <div id="safeshow_head">
            <img src="./imgs/back.png" alt="" @click="ret()">
            <span>食品监督安全公示</span>
        </div>
        <!-- 食品安全公示 -->
        <div id="safeshow_one">
            <div>
                <p>食品监督安全公示</p>
            </div>
            <p><img src="./imgs/lian.png" alt=""></p>
            <div id="cha">
                <p id="one">
                    <span>监督检查结果:</span>
                    <span>差</span>
                </p>
                <p id="two">检查日期</p>
            </div>
        </div>
        <!-- 工商登记信息 -->
        <div id="safeshow_two"> 
            <div><p>工商登记信息</p></div>
            <p class="toole">企业名称</p>
            <p class="toole">工商执行注册号</p>
            <p class="toole">注册资本</p>
            <p class="toole">注册地址</p>
            <p class="toole">房地监管所</p>
            <p class="toole">法定代表人</p>
            <p class="toole">经营范围</p>
        </div>
         <!-- 餐饮许可证 -->
        <div id="safeshow_three"> 
            <div><p>餐饮许可证</p></div>
            <p class="toole">营业范围</p>
            <p class="toole">许可证有效期</p>
            <p class="toole">许可证号</p>
            <p class="toole">发证时间</p>
            <p class="toole">发证机关</p>
        </div>
        <!-- 许可证书 -->
        <div id="safeshow_four">
            <div><p>许可证书</p></div>
           <div>
                <img src="" alt="">
                <img src="" alt="">
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"safeshow",
    methods:{
        ret(){
            this.$router.back();
        }
    }
}
</script>
<style scoped>
    #safeshow_head{
         width: 3.75rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #3191e8;
        position: fixed;
        top: 0rem;
        left: 0rem;
        z-index: 2;
    }
    #safeshow_head > img{
        height: 0.15rem;
        margin-left: 0.2rem;
    }
    #safeshow_head >span{
        font-size: 0.2rem;
        color: white;
        margin-left: 1rem;
    }
    #safeshow_one{
        height: 1.4rem;
        width: 3.75rem;
        background-color: #fff;
        position: absolute;
        top: 0.4rem;
        left: 0rem; 
    }
    #safeshow_one > div:nth-child(1){
        border-bottom: 0.01rem solid #6b6b6b;
    }
    #safeshow_one > div> p{
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.2rem;
    }
    #safeshow_one > p{
         float: left;
    }
    #safeshow_one > p>img{
        height: 0.8rem;
        margin-left: 0.2rem;
    }
    #cha{
        float: left;
        margin-left: 0.2rem;
        color: #6b6b6b;
    }
    #one > span:nth-child(2){
        color: red;   
    }
    #safeshow_two{
        width: 3.75rem;
        height: 2.4rem;
        background-color: #fff;
        position: absolute;
        top: 1.9rem;
        left: 0rem;
    }
    #safeshow_two > div{
        border-bottom: 0.01rem solid #6b6b6b;
    }
    #safeshow_two > div > p{
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.2rem;
    }
    .toole{
        color: #6b6b6b;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
    }
     #safeshow_three{
        width: 3.75rem;
        height: 2.4rem;
        background-color: #fff;
        position: absolute;
        top: 4.4rem;
        left: 0rem;
    }
    #safeshow_three > div{
        border-bottom: 0.01rem solid #6b6b6b;
    }
    #safeshow_three > div > p{
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.2rem;
    }
     #safeshow_four{
        width: 3.75rem;
        height: 2.4rem;
        background-color: #fff;
        position: absolute;
        top: 6.9rem;
        left: 0rem;
    }
    #safeshow_four > div:nth-child(1){
        border-bottom: 0.01rem solid #6b6b6b;
    }
    #safeshow_four > div:nth-child(1) > p{
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.2rem;
    }
</style>
