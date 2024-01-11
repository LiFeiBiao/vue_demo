<template>
    <div >
        <div >
          <h2>VueRouterDemo</h2>

          <button @click="back">后退</button>
          <button @click="forward">前进</button>

          <button @click="test">测试一下go方法</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'banner',
        methods:{
            back(){
                this.$router.back()
            },
            forward(){
                this.$router.forward()
            },
            test(){
                this.$router.go(-2) 
            }
        }
    }
</script>

<style>

</style>