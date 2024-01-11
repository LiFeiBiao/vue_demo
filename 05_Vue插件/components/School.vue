<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>学校名称是：{{name1 | mySlice}}</h1>
        <h1>学校地址是：{{address}}</h1>
        <button @click="test">点我此时一下hello方法</button>
    </div>
</template>


<script>

    export default {
        name:'School',  
        data(){
            return {
                name1:'东胜小学',
                address:"山西省太原市杏花岭"
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }

    }


</script>


<style>
/*  组件样式 */
    .demo{
        font: 1em sans-serif;
        background: oldlace;
    }
</style>

