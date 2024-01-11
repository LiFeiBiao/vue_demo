<template>
    <!-- 组件结构 -->
    <div class="school">
        <h1>学校名称是：{{name1}}</h1>
        <h1>学校地址是：{{address}}</h1>

    </div>
</template>


<script>

    export default {
        name:'School',  
        props:['getSchoolName'],
        data(){
            return {
                name1:'东胜小学',
                address:"山西省太原市杏花岭"
            }
        },
        methods:{

        },
        mounted(){
            this.$bus.$on('hello', (data)=>{
                console.log("我是school组件，收到了数据", data)
            })
        },
        // 解绑事件
        beforeDestroy(){
            this.$bus.$off('hello')
        }


    }


</script>


<style scoped>
/*  组件样式 */
    .school{
        font: 1em sans-serif;
        background: oldlace;
        padding: 10px;
        margin: 10px;
    }
</style>

