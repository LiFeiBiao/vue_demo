<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>学校名称是：{{name1}}</h1>
        <h1>学校地址是：{{address}}</h1>
        
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

    }


</script>


<style scoped>
/*  组件样式 */
    .demo{
        font: 1em sans-serif;
        background: oldlace;
    }
</style>

