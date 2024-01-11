<template>
    <!-- 组件结构 -->
    <div class="student">
        <h1>学生姓名是:{{name1}}</h1>
        <h1>学生家庭住址是：{{address}}</h1>
        <button type="button" @click="sendStudentName">把学生信息给school组件</button>

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

        methods: {
            sendStudentName(){
                this.$bus.$emit('hello',this.name1)
            }
        }


    }
</script>


<style scoped>
/*  组件样式 */
    .student{
        font: 1em sans-serif;
        background:blue;
        padding: 10px;
        margin:10px;
    }
</style>

