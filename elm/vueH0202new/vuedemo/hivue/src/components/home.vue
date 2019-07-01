<template>
    <div id="home">
        <h2>home页面轮播图部分</h2>
        <div>
            <router-link to="/first">first模块</router-link>
            -----
            <router-link :to="{name:'second'}">second模块</router-link>
            -----
            <router-link :to="{name:'third'}">Third模块</router-link>
            -----
            <router-link :to="{name:'person'}">Person模块</router-link>
            -----<router-link :to="{name:'login'}">登陆模块</router-link>
        </div>
        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>

<script>
    
export default {
    name:"home"
}
</script>
<style scoped>
#home{
    border: 1px solid green;
}
</style>
