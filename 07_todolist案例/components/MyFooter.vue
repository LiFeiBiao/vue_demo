<template>
    <!-- 组件结构 -->
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span>/全部{{total}}
        </span>
        <button  class="btn btn-danger" type="button" @click="clearAll">清除已完成任务</button>
    </div>
</template>


<script>
    export default {
        name:'MyFooter',
        data(){
            return {
                name1:'李飞彪',
                address:'北京市丰田区'
            }
        },
        props:['todos','checkAllTodo','clearAllDone'],
        computed:{
            total(){
                return this.todos.length
            },
            doneTotal(){
                // let i = 0
                // this.todos.forEach(element => {
                //     if(element.done) i++
                    
                // });
                // return i

                return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
            }, 
            isAll:{
                get(){
                    return this.total === this.doneTotal && this.total > 0
                },
                set(value){
                    this.checkAllTodo(value)
                }
            }
        },
        methods:{
            checkAll(e){
                this.checkAllTodo(e.target.checked)
            },

            clearAll(){
                this.clearAllDone()
            }

            
        }

    }
</script>


<style scoped>
/*  组件样式 */
    .todo-footer{
        height: 40px;
        line-height:40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footerlabel input{
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-left: 5px;
    }

    .todo-footer button{
        float: right;
        margin-top: 5px;

    }
</style>

