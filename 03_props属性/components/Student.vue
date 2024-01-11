<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>学生姓名是：{{name}}</h1>
        <h1>学生家庭住址是：{{address}}</h1>
        <h1>学生年龄是{{MyAge}}</h1>
        <button type="button" @click="updateAge()">点我增加年龄</button>

    </div>
</template>


<script>
// 组件交互相关的代码（数据，方法等等）
    // 简写
    export default {
        name:'Student',  
        data(){
            return {
                msg:'欢迎来到我的世界',
                MyAge:this.age
            }
        },

        // props:['name','address']   //简单接收

        // 接收的时候，对数据进项类型限制
        // props:{
        //     name:String,
        //     address:String,
        //     age: Number
        // }

        // 接收的时候，对数据进项类型限制,默认值的指定，+必要性的限制
        props:{
            name:{type: String ,required:true, default:"未知"},
            address:{type: String, required: true, default:'weizhi'},
            age:{type:Number, required:true, default:10}
        },

        methods: {
            updateAge(){
                this.MyAge++;
            }
        },


    }



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

