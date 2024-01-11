<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>学生姓名是:{{name1}}</h1>
        <h1>学生家庭住址是：{{address}}</h1>
    </div>
</template>


<script>
    export default {
        name:'Student',
        data(){
            return {
                name1:'李飞彪',
                address:'北京市丰田区'
            }
        },

    }
</script>


<style>
/*  组件样式 */
    .demo{
        font: 1em sans-serif;
        background: oldlace;
    }
</style>

