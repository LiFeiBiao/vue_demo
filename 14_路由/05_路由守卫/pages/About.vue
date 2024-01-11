<template>
    <h2>我是About内容</h2>
</template>

<script>
    export default {
        name:'About',

        //通过路由规则进入该组件时，被调用
        beforeRouteEnter(to, from, next){
            if(to.meta.isAuth){
                console.log("nihao")
            }else{
                next()
            }
        },

        //通过路由规则离开该组件时，被调用
        beforeRouteLeave(to, from, next){
            console.log("beforeRouteLeave",to,from)
            next()
        }
    }
</script>

<style>

</style>