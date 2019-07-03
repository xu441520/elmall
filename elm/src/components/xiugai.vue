<template>
    <div id="xiugaiuser">
        <div id="common_head">
            <img @click="xiugaiBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">修改用户名</span>
            
        </div>
        <div id="x_one">
            <input class="two" :style="{border:btnColor}" @input="xiuname()" type="text" v-model="usenameing"  placeholder="输入用户名">
            <p v-show="btnshow" class="xiu_text">用户名只能修改一次（5-25字符之间）</p>
            <p :style="{color:color1}" v-show="btnname" class="xiu_text">用户名只能修改一次（5-24字符之间）</p>
            <router-link to="/account">
                <button :style="{opacity:xiugai}" id="makesure" @click="change()">确认修改</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'xiugai',
    data(){
        return{
           btnshow:true,
           btnname:false,
           btnColor:"",
           color1:"",
           usenameing:"",
           xiugai:"",
        }
    },
    // created(){
    //     this.usenameing=this.$store.state.useName;
    // },
     methods:{
        xiugaiBack(){
             this.$router.push({
                name: "account",
                
            });  
        },
        change(){
            if (this.usenameing!="") {
                this.$store.commit("getname",this.usenameing);
                this.$store.commit("giftamount",3);
                this.$router.push({
                name: "account",
            });   
            }   
        },
        xiuname(){
            if(this.usenameing.length >= 5&&this.usenameing.length < 25){
                this.btnname=false;
                this.btnshow=true;
                this.btnColor="";
                this.color1="";
                this.xiugai="1";
            }else{
                this.btnshow=false;
                this.btnname=true;
                this.xiugai="0.3";
                this.color1="red"
                this.btnColor="1px solid red";
            }
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
#x_one{
    margin-top: 0.6rem; 
    height: 2rem;
    /* border: 1px solid red; */
    
}

.two{
  background-color: rgba(255, 255, 255, 0.8);
  color: #525661;
  width: 3.5rem;
  height: 0.45rem;
  border-radius: 0.01rem;
  margin-left: 0.13rem;
  font-size: 0.19rem;
}

.no-null-input {
  background-color: rgba(255, 255, 255, 1);
  color: #524F52;
  width: 3.5rem;
  height: 0.45rem;
  border-radius: 0.01rem;
  margin-left: 0.13rem;
  font-size: 0.19rem;
}
/* .xiu_inp{
    width: 3.5rem;
    height: 0.45rem;
    border-radius: 0.01rem;
    margin-left: 0.13rem;
    font-size: 0.19rem;
} */
.xiu_text{
    width: 3.5rem;
    position: absolute;
    top: 1.15rem;
    left: 0.1rem;
    font-size: 0.15rem;
}
#makesure{
    width: 3.5rem;
    height: 0.45rem;
    background-color:rgb(49, 144, 232);
    color: #fff;
    opacity: 0.3;
    margin-top: 0.3rem; 
    margin-left: 0.13rem;
    font-size: 0.19rem;
}

</style>
