<template>
    <div>
        <h2>登陆界面</h2>
        <input v-model="username" placeholder="用户" type="text"><br>
         <input v-model="password" placeholder="密码" type="text"><br>
          <input v-model="codeNumber" placeholder="验证码" type="text">
          <img :src="code" alt="">
          <button @click="getCode()">换一张</button>
          <br>
          <button @click="login()">登陆</button>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {
            code:"",//存储验证码base64图片
            username:"",
            password:"",
            codeNumber:""//存储验证码输入框的值
        }
    },
    created() {
        //首先，获取验证码
         this.getCode();
    },
    methods: {
        getCode(){
          const api = "https://elm.cangdu.org/v1/captchas";
          this.$http({
                url:api,
                method:"post",
                //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
                withCredentials:true
          }).then(res=>{
            console.log("验证码数据");
            console.log(res);
            this.code = res.data.code;
          })
        },
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
                if (res.data.message) {
                    alert(res.data.message);//登陆失败
                } else {
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"person",
                        query:res.data,
                        params:{pID:res.data.id}
                    })
                }
            })
        }
    }
}
</script>
<style scoped>

</style>
