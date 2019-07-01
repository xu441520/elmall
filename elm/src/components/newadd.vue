<template>
    <div id="add_new">
        <div id="common_head">
            <img @click="xiugaiBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">新增地址</span>
        </div>
        <div id="new_one">
            <input :style="{border:color1}" v-model="useadding" id="add_name" @input="showone()" type="text" placeholder="请填写你的名字">
            <p v-show="show_one" class="add_one">请输入您的姓名</p>
            <input v-model="keyword" @click="addschool()" id="add_school" type="text" placeholder="小区/写字楼/学校等">
            <input :style="{border:color2}" @input="showtwo()" v-model="adetail" id="add_detail" type="text" placeholder="请填写详细送餐地址">
            <p v-show="show_two" class="add_one">请详细填写送餐地址</p>
            <p v-show="show_three" class="add_one">送餐地址太短,不能识别</p>
            <input :style="{border:color3}" @input="showthree()" v-model="phone" id="add_school" type="text" placeholder="请填写能够搜到您的手机号">
            <p v-show="show_four" class="add_one">请输入正确的手机号</p>
            <input :style="{border:color4}"  @input="showfour()" v-model="phone_bk" id="add_tele" type="text" placeholder="备用联系电话">
            <p v-show="show_five" class="add_one">请输入正确的手机号</p>
        </div>
        <button @click="address()" id="new_two">新增地址</button>
    </div>
</template>
<script>
export default {
    name:'newadd',
    data(){
        return{
            user_id:"",//用户名id
            alladdress:'',
            useadding:'',//新增地址的用户名
            keyword: "",//新增收货地址
            adetail:'',//新增收货详细地址
            geohashing:'',//经纬度
            addname:'',//收货人姓名
            phone:'',//手机号
            phone_bk:'',//备用手机号
            tag_type:2,
            sex:1,
            poi_type:0,
            newdata:"",
            tag:"家",//标签部分
            arr:[],
            show_one:false,//以下全是正则匹配部分 
            color1:"", 
            show_two:false,
            color2:'',
            show_three:false,
            color3:"",
            show_four:false,
            color4:"",
            show_five:false,
            color5:"",

        }
    },
    created(){
        // this.useadd = this.$store.state.inputName.username;
        this.keyword = this.$store.state.cunname;

        // this.address();
        console.log("打印use——id");
        // console.log(this.$store.state.allcitydata);
        console.log(this.$store.state.inputName.user_id);
        // 打印公用数据的地址
        console.log(this.$store.state.cunaddress);
    },
    methods:{
        xiugaiBack(){
            this.$router.go(-1);
        },
        addschool(){
            this.$router.push({
                name: "sousuodizhi",
            });
        },
        xinzeng(){
            this.$router.push({
                name: "addressing",
            });
        },
        address(){
            const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.inputName.user_id+"/addresses";
            this.$http({
                url:api,
                method:'post',
                data:{
                    user_id:this.$store.state.inputName.user_id,
                    address:this.keyword,
                    address_detail:this.adetail,
                    geohash:this.$store.state.allcitydata,
                    name:this.$store.state.inputName.username,
                    phone:this.phone,
                    tag:this.tag,
                    sex:this.sex,
                    phone_bk:this.phone_bk,
                    tag_type:this.tag_type,
                }
            }).then(res => {//请求返回的数据res
                console.log("打印新增地址数据成功");
                console.log(res);
                console.log(res.data);
                this.newdata=res.data;
                console.log(this.newdata);
                console.log("打印use——id***");
                console.log(this.phone);
                console.log(this.keyword);
                // 把新增的手机号和地址存到公共数据源中
                // this.$store.commit("newname",this.phone);
                // this.$store.commit("newname",this.phone);
                this.$router.push({
                name: "addressing",

                });
            })
        },
        // 正则匹配部分
        showone(){
            if (this.useadding =="") {
                this.show_one=true;
                this.color1="1px solid red";
            }else{
                this.show_one=false;
                this.color1="";
            }
        },
        showtwo(){
           if (/\w{3,15}/.test(this.adetail)) {
                this.show_two=false;
                this.show_three=false;
                this.color2="";
            }else if(this.adetail.length<=2 && this.adetail.length!=0){
                this.show_two=false;
                this.show_three=true;
                // this.color2="1px solid red";
            }else{
                this.show_two=true;
                this.show_three=false;
                this.color2="1px solid red";
            }
        },
        showthree(){
            if (/^1[3456789]\d{9}$/.test(this.phone)) {
                this.show_four=false;
                this.color3="";
            }else if(this.phone.length<10){
                this.show_four=true;
                this.color3="1px solid red";
            }else{
                this.show_four=true;
                this.color3="1px solid red";
            }
        },
        showfour(){
            if (/^1[3456789]\d{9}$/.test(this.phone_bk)) {
                this.show_five=false;
                this.color4="";
            }else if(this.phone_bk.length<10){
                this.show_five=true;
                this.color4="1px solid red";
            }else{
                this.show_five=true;
                this.color4="1px solid red";
            }
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
#new_one{
/* border: 1px solid red; */
/* height: 2rem; */
margin-top:0.6rem;
background-color: #fff;
}
#new_one input{
    height: 0.4rem;
    width: 3.4rem;
    border: 1px solid lightgray;
    margin-top: 0.12rem;
    margin-left: 0.15rem;
    font-size: 0.18rem;
    background-color: lightgrey;
}
#new_one input:nth-child(5){
    margin-bottom: 0.12rem;
}
#new_two{
    height: 0.4rem;
    width: 3.4rem;
    color: #fff;
    font-size: 0.2rem;
    background-color: #4ade63;
    margin-top: 0.15rem;
    margin-left: 0.15rem;
    border-radius: 0.08rem;
}
.add_one{
    color: red;
    margin-left: 0.15rem;
    margin-top: 0.05rem;
}

</style>
