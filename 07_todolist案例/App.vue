<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <h2 class="title">你好哦啊</h2>
        
        <!-- 子组件给父组件传数据-->
        <MyHeader :addTodo="addTodo"></MyHeader>
        <List :todos="todos" 
        :checkTodo="checkTodo"
        :deleteTodo="delTodo"></List>
        <MyFooter :todos="todos" 
        :checkAllTodo="checkAllTodo"
        :clearAllDone="clearAllDone"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import List from './components/List.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  data(){
    return {
        todos:[
            {id:'0001', title:'吃饭',done:true},
            {id:'0002', title:'喝酒',done:false},
            {id:'0003', title:'开车',done:true}
        ]
    }
  },
  methods: {
    // 添加一个ToDo
    addTodo(x){
       console.log('我是APP组件')
       this.todos.unshift(x)
    },
    // 勾选或取消勾选一个ToDo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },

    //删除一个ToDo
    delTodo(id){
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      })
    },
    // 全选或全不选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done= done
      })
    },
    //清除所有已经完成的ToDo
    clearAllDone(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },

  // 注册组件
  components: {
    MyHeader,
    MyFooter,
    List
  }
}
</script>

<style>
  body {
    background: #fff;
  }

  .btn{
    display: inline-block;
    padding: 4px, 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger{
    color:#fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover{
    color:#fff;
    background-color: #bd362f;
  }

  .btn:focus{
    outline: none;
  }

  .todo-container{
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap{
    padding: 10px;
    border:1px solid #ddd;
    border-radius: 5px;
  }


</style>

