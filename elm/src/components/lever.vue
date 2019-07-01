<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">{{this.$route.query.daser}}</span>
        </div>
        <div id="sta_one">
            {{this.$route.query.serivers}}
        </div>
    </div>
</template>
<script>
export default {
    name:'supervip',
    created(){
        console.log("打印超级会员部分");
        console.log(this.$route.query.daser);
        console.log(this.$route.query.serivers);
    },
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
    margin-left: 0.65rem;
}
#sta_one{
    margin-top: 0.5rem;
    font-size: 0.23rem;
    background-color: #fff;
    line-height: 0.28rem;
}
</style>
