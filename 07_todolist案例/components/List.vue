<template>
    <!-- 组件结构 -->
    <ul class="todo-main">
        <Item v-for="todoobj in todos" 
            :key="todoobj.id" 
            :todo="todoobj" 
            :checkTodo="checkTodo"
            :delTodo="deleteTodo"></Item>
    </ul>
</template>


<script>
    import Item from './Item.vue'

    export default {
        name:'List',
        
        components:{
            Item
        },
        props:['todos','checkTodo','deleteTodo']



    }
</script>


<style scoped>
/*  组件样式 */
    .todo-main{
        margin-left:0px;
        border:1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>

