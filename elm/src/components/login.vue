//登录
<template>
    <div>
        <div id="login_one">
            <img src="./imgs/back.png" alt="" @click="ret()">
            <span>密码登录</span>
        </div>
        <div id="login_two">
            <input v-model="username" type="text" placeholder="账号"><br>
        </div>
        <div id="login_three">
             <input v-model="password" type="text" placeholder="密码"><br>
        </div>
        <div id="login_four">
            <!-- <input v-model="codeNumber" type="text" placeholder="验证码">
             <img :src="code" alt="">

            <button @click="getCode()">换一张</button>
            <br> -->
            <input v-model="codeNumber" type="text" placeholder="验证码">
            <img :src="code" alt="">
            <div>
                <p>看不清</p>
                <p @click="getCode()">换一张</p>
            </div>
            <br>
        </div>
        <div id="login_five">
            <p>温馨提示：未注册过的账号，登录时将自动注册</p>
            <p>注册过的用户可凭账号密码登录</p>
        </div>
        <div id="login_six">
            <button @click="login()">登录</button>
        </div>
        <div id="login_seven">
            <router-link to="/resetmima" id="reset">重置密码？</router-link>
        </div>
    </div>
</template>
<script>
import { Loading } from 'element-ui';
let loadingInstance;
export default {
    name:"login",
    data(){
        return{
            code:"",//存储验证码base64图片
            username:"",
            password:"",
            codeNumber:""//存储验证码输入框的值
        }
    },
    created(){
        //正在加载效果
        loadingInstance = Loading.service({
            fullscreen: true,
            text:'加载中...',
            background:"grey",
            spinner:"el-icon-loading"
        });
        //首先，获取验证码
        this.getCode();
    },
    methods:{
        ret(){
            this.$router.go(-1);
        },
        getCode(){
            const api = "https://elm.cangdu.org/v1/captchas";
            this.$http({
                url:api,
                method:"post",
                //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies,即不使用缓存数据！每次写上不报错
                withCredentials:true
            }).then(res=>{
                console.log("验证码数据");
                console.log(res);
                this.code = res.data.code;
            })
        },
        //登录是什么时候点什么时候请求，不能写created中
        login(){
            const api = "https://elm.cangdu.org/v2/login";
            this.$http({
                url:api,
                method:"post",
                withCredentials:true,
                data:{
                    username:this.username,
                    password:this.password,
                    captcha_code:this.codeNumber
                }
            }).then(res=>{
                console.log("login数据");
                console.log(res);
                if(res.data.message){
                    alert(res.data.message);//登录失败
                }
                else{
                    //登录成功，跳转到首页，编程氏路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"citytwo",
                        // query:res.data,
                        // params:{pID:res.data.id}
                    });
                }
            })
        }
    }
}
</script>
<style lang="">
    #login_one{
        background-color: #3091e9;
        color: white;
        font-size: 0.16rem;
        height: 0.5rem;
        line-height: 0.5rem;
        position: relative;
    }
    #login_one img{
        position: absolute;
        top: 0.12rem;
        left: 0.12rem;
        height:0.3rem;
    }
     #login_one span{
         font-size: 0.16rem;
         color: white;
         position: absolute;
         left: 40%
     }
     #login_two {
         font-size: 0.12rem;
         height: 0.5rem;
         line-height: 0.5rem;
         background-color: #fff;
         border-bottom: 0.5px solid rgb(204, 204, 204);
     }
     #login_two input{
         margin-left: 0.12rem;
     }
     #login_three{
         font-size: 0.12rem;
         height: 0.5rem;
         line-height: 0.5rem;
         background-color: #fff;
         border-bottom: 0.5px solid rgb(204, 204, 204);
     }
     #login_three input{
         margin-left: 0.12rem;
     }
      #login_four{
        font-size: 0.12rem;
         height: 0.5rem;
         /* line-height: 0.5rem; */
         background-color: #fff;
         border-bottom: 0.5px solid rgb(204, 204, 204);
         position: relative;
     }
     #login_four input{
         position: absolute;
         top: 0.12rem;
         left: 0.12rem;
     }
     #login_four img{
         position: absolute;
         right: 1rem; 
         top: 0.12rem;
     }
      #login_four > div p:nth-child(1){
         position: absolute;
         top:0.12rem;
         right: 0.12rem;
     }
     #login_four > div p:nth-child(2){
         position: absolute;
         top:0.3rem;
         right: 0.12rem;
         color: #3091e9;
     }
     #login_five{
         color: red;
         height: 0.5rem;
         border-bottom: 0.5px solid rgb(204, 204, 204);
         font-size: 0.03rem;
     }
     #login_five p{
         margin-left: 0.08rem;
         padding-top: 0.08rem;
     }
     #login_six{
         
         background-color: green;
         text-align: center;
         height: 0.5rem;
         line-height: 0.5rem;
         font-size: 0.03rem; 
     }
     #login_six button{
         background-color: green;
         color: white;
         border: none;
     }
     #login_seven{
        height: 0.5rem;
         line-height: 0.5rem;
         position: relative;
     }
     #reset{
         color: #3091e9;
         font-size: 0.12rem;
         position: absolute;
         right:0%;
     }
    
</style>