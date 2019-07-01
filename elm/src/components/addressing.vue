<template>
    <div id="addre">
        <div id="common_head">
            <img @click="xiugaiBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">编辑地址</span>
        </div>
        <div class="common_bian2">
                <div @click="showing()" v-show="bshow" class="common_bian">编辑</div>
                <div @click="wanshow()" v-show="wshow" class="common_bian">完成</div>
        </div>  
        <p></p>
        <!-- 新增收货地址部分 -->
        <ul id="xinzeng">
            <li :key="i" v-for="(v,i) in arr">{{v.address}}<br>{{v.phone}}
            <img v-show="wshow" @click="bianji(i)" id="quxiao" src="../../src/components/imgs/quxiao.png" alt="">
            </li>
        </ul>
        <div id="x_one">
            
            <router-link to="/newadd">
            <input id="xiu_inp" type="text" placeholder="新增地址">
                <img id="ad_img" src="../../src/components/imgs/youj.png" alt="">
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'addressing',
    data(){
        return{
            phone:'',
            keyword:'',
            arr:[],
            keyword:'',
            deleaddress:[],//删除收货地址
            bshow:true,
            wshow:false,
            wanchen:"编辑|完成"
        }
    },
    created(){
        this.allarr();
        // this.bianji();
        // 存储用户地址全局变量
        this.keyword = this.$store.state.cunname;
    },
     methods:{
        xiugaiBack(){
            this.$router.go(-1);
        },
        // 显示完成和编辑的地方
        showing(){
            this.bshow=false;
            this.wshow=true;
        },
        wanshow(){
            this.wshow=false;
            this.bshow=true;
        },
        // 添加地址
        allarr(){
            const url ="https://elm.cangdu.org/v1/users/"+this.$store.state.inputName.user_id+"/addresses";
        this.$http({
            url:url,
            method:'get'
        }).then(res => {
            //res返回请求的数据
            //请求成功后的回调函数
            console.log("打印获取地址成功");
            console.log(res); //返回请求到的数据
            console.log(res.data);
            this.arr=res.data;
            this.arr.reverse();
        });
        },
        // 删除收货地址
        bianji(i){
            const url ="https://elm.cangdu.org/v1/users/"+this.$store.state.inputName.user_id+"/addresses/"+this.arr[i].id;
        this.$http({
            url:url,
            method:'delete'
        }).then(res => {
            //res返回请求的数据
            //请求成功后的回调函数
            console.log("打印删除地址成功");
            console.log(res); //返回请求到的数据
            console.log(res.data);
            // this.deleaddress=res.data;
            console.log("打印删除地址成功ing");
            console.log(this.deleaddress);
            this.arr.splice(i,1);

        });
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
.common_bian2{
    /* border: 1px solid red; */
    width: 0.9rem;
    color: white;
    font-size: 0.2rem;
    position: absolute;
    top: 0.16rem;
    right: 0.13rem;
    z-index: 3;
}
.common_bian{
    /* border: 1px solid red; */
    position: absolute;
    top: 0rem;
    right: 0rem;
    z-index: 3;
}
#x_one{
    /* margin-top: 0.1rem;  */
    height: 0.5rem;
    border: 1px solid rgb(168, 168, 168);
    border-left: none;
    border-right: none;
    /* border-top: rgb(117, 117, 117);
    border-bottom: rgb(143, 143, 143); */
    position: relative;
}
#addre p{
    margin-top: 0.6rem; 
    border: 1px solid lightgrey;
    width: 3.75rem;
    margin-bottom: 0.1rem;
}
#xiu_inp{
    width: 3.75rem;
    height: 0.49rem;
    border-radius: 0.01rem;
    font-size: 0.19rem;
    /* border: 1px solid red; */
    
}
#ad_img{
    position: absolute;
    top: 0.15rem;
    right: 0.15rem;
    /* border: 1px solid red; */
}

#xinzeng li{
width: 100%;
height: 0.5rem;
font-size: 0.2rem;
background-color: #fffdc2;
color: rgb(51, 50, 50);
margin-bottom: 0.1rem;
line-height: 0.24rem;
/* border: 1px solid red; */
display: flex;
justify-content: space-between;

}
#quxiao{    
    /* border: 1px solid red; */
    height: 0.2rem;
    margin-top: 0.15rem;
    margin-right: 0.1rem;
}
</style>
