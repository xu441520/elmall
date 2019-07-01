<template>
    <div id="one">
       <p>{{Detil.name}}</p>
       <p>优惠信息</p>
       <div :key="i1" v-for="(v1,i1) in Detil.activities">
           <span>{{v1.icon_name}}</span>
           <span>{{v1.description}}(APP专享)</span>
       </div>
        <p id="ppx1">商家公告</p>
        <p>{{Detil.promotion_info}}</p>
        <img @click="back1()" src="./imgs/pro-fail (1).png" id="imgs">
    </div>
</template>
<script>
export default {
    name:"huodong",
    data(){
        return{
             Detil:{}
        };
    },
    created(){
        this.ID = this.$route.query.id;
        this.detil();
    },
    methods:{
        back1(){
            this.$router.go(-1);
        },
        detil() {
        const api = "https://elm.cangdu.org/shopping/restaurant/"+this.ID;
        this.$http({
            url: api,
            method: "get"
        }).then(res => {
            // this.datas = res.data;
            // console.log("hello");
            console.log(res.data);
            this.Detil = res.data;
        });
        }
    }
}
</script>
<style scoped>
    #one{
        color: white;
        height: 6.67rem;
        widows: 3.75rem;
        background-color: #262626;
        font-size: 0.1rem;
        position: relative;
    }
    #one p:nth-child(1){
        position: absolute;
        top: 0.3rem;
        left: 1.5rem;
    }
    #one p:nth-child(2){
        width: 0.8rem;
        text-align: center;
        height: 0.2rem;
        line-height: 0.2rem;
        position: absolute;
        top: 0.8rem;
        left: 1.5rem;
        border: 0.01rem solid gray;
        border-radius: 0.05rem;
    }
    #one > div{
        position: absolute;
        top: 1.2rem;
        left: 0.2rem;
    }
    #one > div span:nth-child(1){
        width: 0.18rem;
        text-align: center;
        height: 0.18rem;
        background-color: red;
        line-height: 0.18rem;
        border-radius: 0.02rem;
    }
    #one > div span:nth-child(2){
        margin-left: 0.1rem;
    }
    #ppx1{
        width: 0.8rem;
        text-align: center;
        height: 0.2rem;
        line-height: 0.2rem;
        position: absolute;
        top: 1.6rem;
        left: 1.5rem;
        border: 0.01rem solid gray;
        border-radius: 0.05rem;
        
    }
    #ppx1 + p{
        position: absolute;
        top: 2rem;
        left: 0.2rem;
    }
    #imgs{
        height: 0.5rem;
        position: absolute;
        top: 6rem;
        left: 1.5rem;

    }
</style>
