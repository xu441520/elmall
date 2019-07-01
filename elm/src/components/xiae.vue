<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">下载</span>
        </div>
        <div id="e_one">
            <img src="../../src/components/imgs/eicon.png" alt="">
            <p>下载饿了么App</p>
        </div>
        <button id="e_two">下载</button>
    </div>
</template>
<script>
export default {
    name:'xiae',
    methods: {
        goBack(){
            this.$router.go(-1);
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
    margin-left: 1.2rem;
}
#e_one{
    /* border: 1px solid red; */
    position: relative;
    width: 2.1rem;
    top: 0.9rem;
    left: 20%;
    text-align: center;
}
#e_one p{
    margin-top: 0.15rem;
    font-size: 0.2rem;
}
#e_two{
   position: relative;
   width: 3.3rem;
   height: 0.45rem;
    top: 1.2rem;
    left: 0.22rem; 
    font-size: 0.2rem;
    color: white;
    border-radius: 5px;
    background-color: rgb(69, 240, 69);
}
</style>
