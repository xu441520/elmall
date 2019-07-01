<template>
    <div id="common">
         <div id="common_head">
            <p id="common_head_pot">
                <img @click="back()" src="./imgs/back.png" alt>
                <span>订单</span>
            </p>
        </div>
        <div id="common_icon">
            <router-link to="/home">
                <img id="imgOne" src="../../src/components/imgs/eliaomo.png" alt="">
                <p id="pOne">外卖</p>
            </router-link>
            <router-link to="/search">
                <img id="imgTwo" src="../../src/components/imgs/zhinanzhen.png" alt="">
                <p id="ptwo">搜索</p>
            </router-link>
            <!-- <img src="../../src/components/imgs/zhinanzhen1.png" alt=""> -->
            <router-link to="/order">
                <img id="imgThree" src="../../src/components/imgs/icon-1.png" alt="">
                <p id="pthree">订单</p>
            </router-link>
            <!-- <img src="../../src/components/imgs/icon-1.png" alt=""> -->
            <router-link to="/user">
                <img id="imgfour" src="../../src/components/imgs/user.png" alt="">
                <p id="pfour">我的</p>
            </router-link>
            <!-- <img src="../../src/components/imgs/wode.png" alt=""> -->
        </div>
        
        
    </div>
</template>
<script>
export default {
    name:'common',
    props:[],
    data(){
        return{

        };
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
    
}
</script>
<style scoped>
/* #common{
    border: 1px solid red
} */
#common_head{
    width: 3.75rem;
    height: 0.5rem;
    background-color: rgb(49, 144, 232);
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 2;
}
#common_head_pot{
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 0.5rem;
}
#common_head_pot > img{
    height: 0.3rem;
    position: absolute;
    top: 0.1rem;
    left: 0.12rem;
}
#common_icon{
    background-color: #fff;
    border-top: 0.5px solid lightgrey;
    border-bottom: 0.5px solid lightgrey;
    width: 3.75rem;
    position: fixed;
    left: 0rem;
    bottom: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    height: 0.6rem;

}
#common_icon img{
    /* border:1px solid red; */
    display: block;
    /* width: 0.8rem;
    height: 0.7rem; */

}
#common_icon p{
    /* border: 1px solid red; */
    color: black;
    text-align: center;
}
#imgOne{
    /* border:1px solid red; */
    width: 0.45rem;
    height: 0.4rem;
    margin-left: 0.2rem;
}
#pOne{
margin-left: 0.23rem;
}
#imgTwo{
    /* margin-top: 0.21rem; */
    /* border: 1px solid red; */
    margin-top: 0.07rem;
    width: 0.28rem;
    height: 0.27rem;
    margin-bottom: 0.06rem;
}
#pTwo{
margin-left: 0.23rem;
}
#imgThree{
    /* margin-top: 0.21rem; */
    /* border: 1px solid red; */
    width: 0.4rem;
    height: 0.41rem;
}

#imgfour{
    margin-top: 0.08rem;
    margin-left: 0.05rem;
    margin-right: 0.2rem;
    margin-bottom: 0.08rem;
    /* border: 1px solid red; */
    width: 0.25rem;
    height: 0.25rem;
}
#pfour{
    /* border: 1px solid red; */
    margin-right: 0.12rem;
}
</style>
