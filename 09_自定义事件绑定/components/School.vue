<template>
    <!-- 组件结构 -->
    <div class="school">
        <h1>学校名称是：{{name1}}</h1>
        <h1>学校地址是：{{address}}</h1>
        <button type="button" @click="sendSchoolName">把学校名给APP</button>
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
            sendSchoolName(){
                this.getSchoolName(this.name1 )
            }
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

