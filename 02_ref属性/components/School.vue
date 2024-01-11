<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>学校名称是：{{schoolName}}</h1>
        <h1>学校地址是：{{address}}</h1>
        <button @click="handleClick">点击我！</button>
    </div>
</template>


<script>
// 组件交互相关的代码（数据，方法等等）
    // 简写
    export default {
    // const school = Vue.extend({
        name:'School',  
        data(){
            return {
                schoolName:'东胜小学',
                address:"山西省太原市杏花岭"
            }
        },

        methods: {
            handleClick(){
                alert(this.schoolName)
            }
        },
    }
    // })


    // 统一暴露
    // export{school}
    //默认暴露（常用）
    // export default school

</script>


<style>
/*  组件样式 */
    .demo{
        font: 1em sans-serif;
        background: oldlace;
    }
</style>

