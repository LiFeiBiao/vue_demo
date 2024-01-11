<template>
    <!-- 组件结构 -->
    <div class="school">
        <h1>学校名称是：{{name1}}</h1>
        <h1>学校地址是：{{address}}</h1>

    </div>
</template>


<script>
    import pubsub from 'pubsub-js'

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
            demo(msgName, data){
                console.log('有人发布了hello消息，hello消息的回调函数执行了',msgName,data)
            }
        },
        mounted(){
            this.pubID = pubsub.subscribe('hello',this.demo)
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubID)
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

