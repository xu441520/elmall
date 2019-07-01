<template>
    <div>
        <img :src="srcImg" alt="">
        <img :src="srcImg2" alt="">
        <img :src="srcImg3" alt="">
        <img src="../../../static/img/1.jpg" alt="">
    </div>
</template>
<script>
// 在vue中使用图片资源，都需要使用import，或者require导入成base64图片资源；因为项目在打包时，static静态文件夹中的文件，不会参与打包
// import img01 from "./imgs/a.png"
import img02 from "../../../static/lock.png"
// 或者
let img01 = require("./imgs/a.png")

export default {
    name:"person",
    data(){
        return {
            srcImg:img01,
            srcImg2:img02,
            srcImg3:require("./imgs/b.png")
        }
    },
    created() {
        // 接收编程式路由传递过来的值
        console.log(this.$route);
    }
}
</script>
<style scoped>

</style>
