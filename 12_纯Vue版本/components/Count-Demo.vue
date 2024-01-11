<template>
    <!-- 组件结构 -->
    <div class="category">
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="selectNumber" >
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>


<script>
    export default {
        name:'Count',
        props:['title'],
        data(){
            return{
                sum:0,
                selectNumber:1,
            }
        },
        methods:{
            increment(){
                this.sum += this.selectNumber
            },
            decrement(){
                this.sum -= this.selectNumber
            },
            incrementOdd(){
                if(this.sum % 2){
                    this.sum += this.selectNumber
                }
            },
            incrementWait(){
                setTimeout(()=>{
                    this.sum += this.selectNumber
                },500)
            }
        }
    }
</script>


<style scoped>
/*  组件样式 */

</style>

