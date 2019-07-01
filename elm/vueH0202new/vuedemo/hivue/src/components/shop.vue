<template>
    <div>
        <ul>
           <li :key="i" v-for="(v,i) in datas">{{v.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"shop",
    data(){
      return {
          datas:[]
      }
    },
    // 组件创建完成时，请求该页面需要的数据
    created() {
        this.getData();
        this.getFood();
        this.addFood();
    },
    methods: {
        //网络请求方式一：
        getData(){
        const api = "https://elm.cangdu.org/v1/cities?type=hot";
        //get请求方式
        this.$http.get(api).then((response)=>{
            //请求成功后的回调函数
            console.log("成功");
            console.log(response.data);//返回请求到的数据
           this.datas = response.data;
        }) 
        },
        // 请求方式二：
        getFood(){
            const api = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
            this.$http({
                url:api,
                method:'get',
                data:{//post的请求参数
                   
                }
            }).then(res => {//请求返回的数据res
                console.log(res);
            })
        },
        addFood(){
            const api = "https://elm.cangdu.org/shopping/addfood";
            this.$http({
                url:api,
                method:"post",
                data:{
                  name:"汉堡包",
                  description:"餐饮快餐店.....",
                  restaurant_id:7
                }
            }).then(res=>{
               console.log("添加食品数据");
               console.log(res);
            })
        }
    },
}
</script>
<style scoped>

</style>
