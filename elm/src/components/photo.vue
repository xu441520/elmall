<template>
    <div id="photo">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">{{this.$route.query.daser}}</span>
        </div>
        <div id="sta_one">
            <div>
            <img :src="imgs[0]" alt="">
            {{photowords[0]}}
            </div>
            <div>
            <img :src="imgs[1]" alt="">
            {{photowords[1]}}
            </div>
            <div>
            <img :src="imgs[2]" alt="">
            {{photowords[2]}}
            </div>
            <div>
            <img :src="imgs[3]" alt="">
            {{photowords[4]}}
            </div>
            <div>
            <img :src="imgs[5]" alt="">
            {{photowords[5]}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'supervip',
    data(){
        imgs:'';
        photowords:''
    },
    created(){
        console.log("打印超级会员部分");
        console.log(this.$route.query.daser);
        console.log(this.$route.query.serivers);
        this.imgs=this.$route.query.serivers;
        this.photowords=this.$route.query.words;
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
    /* line-height: 0.5rem; */
    margin-left: 0.85rem;
}
#photo{
    height: 100vh;
}
#sta_one{
    /* border: 1px solid red; */
    /* margin-top: 0.5rem; */
    font-size: 0.23rem;
    background-color: #fff;
    line-height: 0.28rem;
    /* word-wrap:break-word;  */
    position: relative;
    top: 0.5rem;
    left: 0rem;
}
#sta_one div{
    width: 100%;
}
</style>
