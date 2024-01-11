<template>
    <!-- 组件结构 -->
    <div class="student">
        <h1>学生姓名是:{{name1}}</h1>
        <h1>学生家庭住址是：{{address}}</h1>
        <button type="button" @click="sendStudentName">把学sheng名给APP</button>

        <button type="button" @click="unbind">解绑Test事件</button>
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
                //触发Student组件实例身上的Test事件
                this.$emit('test', this.name1)   
                this.$emit('a')
                this.$emit('click')
            },
            unbind(){
                // this.$off('test')//解绑一个自定义事件

                // this.$off(['test','a'])//解绑多个自定义事件

                this.$off()//解绑所有自定义事件
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

