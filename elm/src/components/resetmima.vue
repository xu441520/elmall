//重置密码
<template>
    <div>
        <div id="resetmima_one">
            <img src="./imgs/back.png" alt="" @click="ret()">
            <span>重置密码</span>
        </div>
        <div id="resetmima_two">
            <input v-model="username" type="text" placeholder="账号"><br>
        </div>
        <div id="resetmima_three" @click="display()"> 
             <input v-model="oldpassWord" type="text" placeholder="旧密码" :type="show">
             <el-switch v-model="value" active-color="#13ce66" inactive-color="rgb(204,204,204)"></el-switch>
             <br>
        </div>
        <div id="resetmima_four">
             <input v-model="newpassword" type="text" placeholder="请输入新密码">
             <br>
        </div>
        <div id="resetmima_five">
             <input v-model="confirmpassword" type="text" placeholder="请确认密码">
             <br>
        </div>
        <div id="resetmima_six">
            <input v-model="captcha_code" type="text" placeholder="验证码">
            <img :src="code" alt="">
            <div>
                <p>看不清</p>
                <p @click="getCode()">换一张</p>
            </div>
            <br>
        </div>
        <div id="resetmima_seven">
            <button @click="resetmima()">确认修改</button>
        </div>
    </div>
</template>

<script >
export default {
    name:"login",
    data(){
        return{
            value:false,
            show:"password",
            code:"",//存储验证码base64图片
            username:"",//存储用户名
            oldpassWord:"",//存储旧密码
            newpassword:"",//存储新密码
            confirmpassword:"",//确认密码
            captcha_code:""//存储验证码输入框的值
        }
    },
    created(){
        //首先，获取验证码
        this.getCode();
    },
    methods:{
         display() {
      if (this.value == false) {
        this.show = "password";
      } else {
        this.show = "text";
      }
    }
        ,
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
        resetmima(){
            const api = "https://elm.cangdu.org/v2/changepassword";
            this.$http({
                url:api,
                method:"post",
                withCredentials:true,
                data:{
                    username:this.username,
                    oldpassWord:this.oldpassWord,
                    newpassword:this.newpassword,
                    confirmpassword:this.confirmpassword,
                    captcha_code:this.captcha_code
                }
            }).then(res=>{
                console.log("重置密码数据");
                console.log(res);
                if(res.data.message){
                    alert(res.data.message);//登录失败
                }
                else{
                    //登录成功，跳转到首页，编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"home",
                        // query:res.data,
                        // params:{pID:res.data.id}
                    });
                }

            });
        }
    }
}
</script>
<style lang="">
    #resetmima_one{
        background-color: #3091e9;
        color: white;
        font-size: 0.16rem;
        height: 0.5rem;
        line-height: 0.5rem;
        position: relative;
    }
    #resetmima_one img{
        position: absolute;
        top: 0.12rem;
        left: 0.12rem;
        height:0.3rem;
    }
     #resetmima_one span{
         font-size: 0.16rem;
         color: white;
         position: absolute;
         left: 40%
     }
     #resetmima_two {
         font-size: 0.12rem;
         height: 0.5rem;
         line-height: 0.5rem;
         background-color: #fff;
         border-bottom: 0.01rem  solid rgb(204, 204, 204);
     }
     #resetmima_two input{
         margin-left: 0.12rem;
     }
     #resetmima_three{
         font-size: 0.12rem;
         height: 0.5rem;
         line-height: 0.5rem;
         background-color: #fff;
         border-bottom: 0.01rem solid rgb(204, 204, 204);
     }
     #resetmima_three input{
         margin-left: 0.12rem;
     }
     #resetmima_four{
         font-size: 0.12rem;
         height: 0.5rem;
         line-height: 0.5rem;
         background-color: #fff;
         border-bottom: 0.01rem solid rgb(204, 204, 204);
     }
     #resetmima_four input{
         margin-left: 0.12rem;
     }
     #resetmima_five{
         font-size: 0.12rem;
         height: 0.5rem;
         line-height: 0.5rem;
         background-color: #fff;
         border-bottom: 0.01rem solid rgb(204, 204, 204);
         position: relative;
     }
     #resetmima_five input{
         margin-left: 0.1rem;
         position: absolute;
         top: 0rem;
     }
      #resetmima_six{
        font-size: 0.12rem;
         height: 0.5rem;
         /* line-height: 0.5rem; */
         background-color: #fff;
         border-bottom: 0.01rem solid rgb(204, 204, 204);
         position: relative;
     }
     #resetmima_six input{
         position: absolute;
         top: 0.12rem;
         left: 0.12rem;
     }
     #resetmima_six img{
         position: absolute;
         right: 1rem; 
         top: 0.12rem;
     }
     #resetmima_six > div p:nth-child(1){
         position: absolute;
         top:0.12rem;
         right: 0.12rem;
     }
    #resetmima_six > div p:nth-child(2){
         position: absolute;
         top:0.3rem;
         right: 0.12rem;
         color: #3091e9;
     }
     #resetmima_seven{
         background-color: green;
         text-align: center;
         height: 0.6rem;
         line-height: 0.5rem;
         font-size: 0.03rem; 
         border-radius:0.05rem; 
     }
     #resetmima_seven button{
         width: 80%;
         background-color: green;
         color: white;
         border: none;
         margin-top: 0rem;
     }
    
    .el-switch__core{
         position: absolute;
        left: 1.2rem;
     }
</style>