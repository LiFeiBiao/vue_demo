<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>学生姓名是：{{studentName}}</h1>
        <h1>学生家庭住址是：{{address}}</h1>
        <button @click="handleClick">点击我！</button>
    </div>
</template>


<script>
// 组件交互相关的代码（数据，方法等等）
    // 简写
    export default {
    // const school = Vue.extend({
        name:'Student',  
        data(){
            return {
                studentName:'lifeibiao',
                address:"北京丰台"
            }
        },

        methods: {
            handleClick(){
                alert(this.studentName)
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

