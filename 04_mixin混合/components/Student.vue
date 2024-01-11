<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1 @click="showName">学生姓名是:{{name1}}</h1>
        <h1>学生家庭住址是：{{address}}</h1>
    </div>
</template>


<script>

    //引入混合
    // import {hunhe, hunhe2} from "../mixin.js"

    export default {
        name:'Student',
        data(){
            return {
                name1:'李飞彪',
                address:'北京市丰田区'
            }
        },

        // mixins: [hunhe, hunhe2]
    }
</script>


<style>
/*  组件样式 */
    .demo{
        font: 1em sans-serif;
        background: oldlace;
    }
</style>

