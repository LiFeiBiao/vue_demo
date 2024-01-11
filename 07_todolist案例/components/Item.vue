<template>
    <!-- 组件结构 -->
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    </li>
    
</template>
 

<script>
    export default {
        name:'Item',
        //生命接收ToDo对象
        props:['todo','checkTodo','delTodo'],
        methods:{
            // 勾选或取消勾选
            handleCheck(id){
                //通知APP组件将对应的ToDo对象的done值取反
                this.checkTodo(id)
            },
            deleteTodo(id){
                if(confirm('确定删除吗')){
                    this.delTodo(id)
                }

                
            }
        }

    }
</script>


<style lang='css' scoped>
/*  组件样式 */
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 2px solid #ddd;
    }
    li label{
        float: left;
        cursor:pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button{
        float: right;
        display:none;
        margin-top: 3px;
    }

    li:before{
        content:initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display:block ;
    }
</style>

