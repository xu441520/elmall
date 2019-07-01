<template>
    <div id="account_head">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">账户信息</span>
        </div>
        <div id="account_body">
            <span>头像</span>
            <!-- <img id="user_count" :src="'elm.cangdu.org/img/'+imageUrl" alt=""> -->
            <el-upload class="avatar-uploader" action="https://elm.cangdu.org/v1/addimg/type=avatar" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <img class="avatar" v-else="" :src="img1" alt="">
            <i class="el-icon-plus avatar-uploader-icon"></i>
            
            </el-upload>

            <!-- <p id="account_one"><img src="../../src/components/imgs/touxiang.png" alt=""></p> -->
            <img id="one_img" src="../../src/components/imgs/youj.png" alt="">
        </div>
        <div id="account_two">
            <span>用户名</span>
            <!-- <span>{{$store.state.inputName.username}}</span> -->
            <span>{{$store.state.inputName.username}}</span>
            <router-link to="/xiugai">
                <img id="two_img" src="../../src/components/imgs/youj.png" alt="">
            </router-link>
        </div>
        <div id="account_three">
            <span>收货地址</span>
            <router-link to="/addressing">
                <img id="three_img" src="../../src/components/imgs/youj.png" alt="">
            </router-link>
        </div>
        <div id="account_four">
            <p>账户绑定</p>
        </div>
        <div @click="tele()" id="account_five">
            <div id="five_tele">
                <i class="el-icon-mobile-phone"></i> 
            </div>
            <span id="account_tele">手机</span>
            <img id="tele_img" src="../../src/components/imgs/youj.png" alt="">
        </div>
        <div id="account_six">
            <p>安全设置</p>
        </div>
        <div @click="reigi()" id="account_seven">
            <span>登录密码</span>
            <span>修改</span>
            <img id="seven_img" src="../../src/components/imgs/youj.png" alt="">
        </div>
        <button @click="tuichu()" id="accunt_button">退出登录</button>

        <!-- 弹出框部分 -->
        <div v-show="hongshow" class="hong_fiveth animated heartBeat 0.4s">
            <img src="../../src/components/imgs/zhuyi.png" alt="">
            <p>请在饿了么APP中打开</p>
            <button @click="makesure()" >确认</button>
        </div>

        <div v-show="fushow" class="hong_six animated heartBeat 0.4s">
            <img src="../../src/components/imgs/zhuyi.png" alt="">
            <p>是否退出登录</p>
            <div id="bu_three">
            <button @click="dengdeng()" id="bu_one">再等等</button>
            <button id="bu_two" @click="tiaozhuan()">退出登录</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'account',
    data(){
        return{
            accountName:"",
            imageUrl: "",
            hongshow:false,
            fushow:false,
            img1:'',
            daname:''
        }
    },
    created(){
        console.log("打印用户名");
        console.log(this.$route.query);
        this.img1=this.$store.state.userImages;
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        makesure(){
            this.hongshow =false;
        },
        tele(){
            this.hongshow = true;
        },
        // tuichu(){
        //     this.fushow = true;
        // },
        tiaozhuan(){
            this.$router.push({
                name: "user",
            });
            this.$store.commit("getInp","");
            this.$store.commit("giftamount",0);
        },
        reigi(){
            this.$router.push({
                name: "resetmima",
            });
        },
        dengdeng(){
            this.fushow = false;
        },
        // 头像部分
         usertou(){
            const api = "https://elm.cangdu.org/v1/user";
            this.$http({
                url:api,
                method:'get',
                withCredentials:true

            }).then(res => {//请求返回的数据res
                console.log("打印头像成功");
                console.log(res);
                this.daname = res.data;
                this.imageUrl = res.data.avatar;
                console.log(this.imageUrl);
                this.$store.commit("userImg",res.data);
            })
        },

        touxiang(){
            const api = "https://elm.cangdu.org/v1/addimg/type=avatar";
            this.$http({
                url:api,
                method:'post',
                data:{//post的请求参数
                   
                }
            }).then(res => {//请求返回的数据res
                console.log("返回头像成功");
                console.log(res);
                
            })
        },

        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$store.commit("userImg",this.imageUrl)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },

        // 退出登录部分
       tuichu(){
           const api = "https://elm.cangdu.org/admin/singout";
            this.$http({
                url:api,
                method:'get'
            }).then(res => {//请求返回的数据res
                console.log("返回退出登录数据");
                console.log(res);
                this.fushow = true;
            })
       }
    }

}
</script>
<style scoped>
#account_head{
    position: relative;
    top: 0rem;
    left: 0rem;
}
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
    margin-left: 1.0rem;
}
#account_body{
    /* border:1px solid red; */
    border-top: 0.5px solid lightgray;
    border-bottom: 0.5px solid lightgray;
    margin-top: 0.6rem;
    width: 3.75rem;
    height: 0.9rem;
    line-height: 0.9rem;
    background-color: #fff;
    position: relative;
    top: 0rem;
    left: 0rem;
}
#account_body span{
    display: block;
    margin-left: 0.15rem;
    font-size: 0.2rem;
    /* border: 1px solid red; */

}
#account_one{
    position: absolute;
    top: 0.12rem;
    right: 0.3rem;
    border: 1px solid rgb(226, 226, 226);
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    overflow: hidden;
}
#account_one img{
    display: block;
    margin-top: 0.05rem;
    width: 100%;
    height: 100%;
}

.avatar-uploader{
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 50%;
    border: 1px solid lightgrey;
    overflow: hidden;
    position: absolute;
    line-height: 0.68rem;
    top: 0.1rem;
    right: 0.3rem;
}

/* 头像部分 */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {

    border-color: #409EFF;
  }
  .avatar-uploader-icon {

    font-size: 10px;
    color: #8c939d;
    width: 0.68rem;
    height: 0.68rem;
    line-height: 0.65rem;
    text-align: center;
  }
  .avatar {
    /* border: 1px solid red; */
    width: 0.8rem;
    height: 0.8rem;
    display: block;
  }

#one_img{
    position: absolute;
    top: 0.42rem;
    right: 0.08rem;
    display: block;
     width: 0.1rem;
    height: 0.15rem;
}
#account_two{
    position: relative;
    top: 0rem;
    left: 0rem;
    /* border: 1px solid red; */
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #fff;
    border-bottom: 0.5px solid lightgray;
}
#account_two span:nth-child(1){
    display: inline-block;
    margin-left: 0.15rem;
    font-size: 0.2rem;
}
#account_two span:nth-child(2){
    display: inline-block;
    position: absolute;
    top: 0.02rem;
    right: 0.3rem;
    color: rgb(161, 161, 161);
}
#two_img{
    position: absolute;
    top: 0.19rem;
    right: 0.08rem;
    display: block;
    width: 0.1rem;
    height: 0.15rem;
}
#account_three{
    position: relative;
    top: 0rem;
    left: 0rem;
    /* border: 1px solid red; */
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #fff;
    border-bottom: 0.5px solid lightgray;
}
#account_three span:nth-child(1){
    display: inline-block;
    margin-left: 0.15rem;
    font-size: 0.2rem;
}
#three_img{
    position: absolute;
    top: 0.19rem;
    right: 0.08rem;
    display: block;
    width: 0.1rem;
    height: 0.15rem;
}
#account_four{
    /* border: 1px solid red; */
    height: 0.4rem;
    line-height: 0.4rem;  
}
#account_four p{
    margin-left: 0.15rem;
    font-size: 0.15rem;
}
#account_five{
    /* border: 1px solid red; */
    border-top: 0.5px solid lightgray;
    border-bottom: 0.5px solid lightgray;
    height: 0.5rem;
    line-height: 0.4rem; 
    position: relative;
    top: 0rem;
    left: 0rem;
    background-color: #fff;
}
#five_tele{
    /* border: 1px solid red; */
    background-color: rgb(37, 170, 253);
    margin-left: 0.15rem;
    margin-top: 0.08rem;
    height: 0.33rem;
    width: 0.3rem;
    text-align: center;
    border-radius: 15%;
}
.el-icon-mobile-phone{
    font-size: 0.25rem;
    color: #fff;
}
#account_tele{
    position: absolute;
    top: 0.05rem;
    left: 0.55rem;
    /* border: 1px solid red; */
}
#tele_img{
    position: absolute;
    top: 0.19rem;
    right: 0.08rem;
    display: block;
    width: 0.1rem;
    height: 0.15rem;
}
#account_six{
    /* border: 1px solid red; */
    height: 0.4rem;
    line-height: 0.4rem;  
}
#account_six p{
    margin-left: 0.15rem;
    font-size: 0.15rem;
}
#account_seven{
    position: relative;
    top: 0rem;
    left: 0rem;
    /* border: 1px solid red; */
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #fff;
    border-bottom: 0.5px solid lightgray;
}
#account_seven span:nth-child(1){
    display: inline-block;
    margin-left: 0.15rem;
    font-size: 0.2rem;
}
#account_seven span:nth-child(2){
    display: inline-block;
    position: absolute;
    top: 0.02rem;
    right: 0.3rem;
    color: rgb(161, 161, 161);
}
#seven_img{
    position: absolute;
    top: 0.19rem;
    right: 0.08rem;
    display: block;
    width: 0.1rem;
    height: 0.15rem;
}
#accunt_button{
    width: 3.4rem;
    height: 0.4rem;
    color: #fff;
    background-color: red;
    border: 1px solid red;
    margin-top: 0.3rem;
    margin-left: 0.155rem;
    border-radius: 0.08rem;
    font-size: 0.16rem;
}

/* 弹出框的CSS部分 */
.hong_fiveth{
    width: 70%;
    height: 1.8rem;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 1.1rem;
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

.hong_six{
    width: 70%;
    height: 2.2rem;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 1.2rem;
    left: 15%;
    overflow: hidden;
}
.hong_six img{
    width: 1.33rem;
    height: 1rem;
}
.hong_six p{
    margin-top: 0.06rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
}
#bu_one{
    height: 0.4rem;
    width: 38%;
    background-color: rgb(163, 163, 163);
    color: #fff;
    font-size: 0.18rem;
    position: absolute;
    top: 1.6rem;
    left: 9%;
    border-radius: 8px;
}
#bu_two{
    height: 0.4rem;
    width: 38%;
    background-color:rgb(236, 39, 39);
    color: #fff;
    font-size: 0.18rem;
    position: absolute;
    top: 1.6rem;
    left: 55%;
    border-radius: 8px;
}
</style>
