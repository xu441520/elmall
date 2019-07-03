<template>
    <div>
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">搜索地址</span>
        </div>
        <div id="souinp">
            <input v-model="keyword" type="text" placeholder="请输入小区/写字楼/学校等">
            <input @click="getsousuo()" type="button" value="确认">
        </div>
        <div id="advice">为了满足商家的送餐要求，建议你从列表中选择地址</div>
        <div id="sou_one">
            <ul>
                <li @click="cunchu(i)" id="btn" v-for="(v,i) in sousuocitys" :key="i">
                {{v.name}}<br>{{v.address}}
                </li>
            </ul>
        </div>
        <div id="content">
            <p>找不到地址？</p>
            <p>请尝试输入写字楼，学校，或者小区</p>
            <p>详细地址（如：门牌号）可以稍后再写哦！</p>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:"sousuodizhi",
    data(){
        return {
            geohash:'',
            address: "",
            keyword: "",
            type: "",
            citys: "", //存储搜索的地址
            sousuocitys: [],
            groupCities: {},
            names:''
        }
    },
    created(){
        console.log("打印搜索的地址");
        console.log(this.$store.state.allcitydata);
        this.getsousuo();
     
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
         getsousuo() {
        //get请求方式 第一个参数：地址
        const url ="https://elm.cangdu.org/v1/pois?city_id="+this.$store.state.cityID+"&keyword="+ this.keyword +'&type=search';
        this.$http({
            url:url,
            method:'get'
        }).then(res => {
            //res返回请求的数据
            //请求成功后的回调函数
            console.log("da2成功");
            console.log(res.data); //返回请求到的数据
            this.sousuocitys = res.data;
            console.log("打印搜索的地址");
            console.log(this.$store.state.allcitydata);
            // 把搜索的地址传递
            this.$store.commit("allcityshu",res.data);
        });
        },
        cunchu(i){
            this.$router.push({
                name:'newadd'
            })
            this.$store.commit("chunname",this.sousuocitys[i].name);
            this.$store.commit("cunaddress",this.sousuocitys[i].address);
        },
    },
    
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
#souinp{
    font-size: 0.15rem;
    /* border: 1px solid red; */
    background-color: #fff;
    margin-top: 0.5rem;
    height: 0.6rem;
    position: relative;
    padding-top: 0.2rem;
} 
#souinp input:nth-child(1){
    display: inline-block;
    width: 70%;
    /* border: 1px solid red; */
    background-color: rgb(231, 229, 229);
    height: 0.4rem;
    border-radius: 5px;
    margin-left: 0.1rem;
    font-size: 0.16rem;
}
#souinp input:nth-child(2){
    width: 23%;
    height: 0.4rem;
    background-color: rgb(49, 144, 232);
    display: inline-block;
    border-radius: 5px;
    color: #fff;
    font-size: 0.18rem;
}
#advice{
    position: absolute;
    top: 1.4rem;
    left: 0rem;
    color: orangered;
    background-color:rgb(252, 238, 212);
    height: 0.4rem;
}
#content{
    margin-top: 40%;
    text-align: center;
}
#content p{
    margin-bottom: 4%;
    color: rgb(116, 116, 116); 
}
#sou_one ul{
    margin-top: 0.2rem;
}
#sou_one ul li{
    border-top: 0.5px solid lightgray;
    border-bottom: 0.5px solid lightgray;
}
</style>