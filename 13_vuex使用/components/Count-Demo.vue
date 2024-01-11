<template>
    <!-- 组件结构 -->
    <div class="category">
        <h1>当前求和为：{{sum}}</h1>
        <h1>当前求和放大10倍为:{{ bigSum }}</h1>

        <h2>我在{{ company }}从事{{ work }}工作</h2>

        <h3>下方数组的总人数是{{ personList.length }}</h3>
        <select v-model.number="selectNumber" >
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(selectNumber)">+</button>
        <button @click="decrement(selectNumber)">-</button>
        <button @click="incrementOdd(selectNumber)">当前和为奇数再加</button>
        <button @click="incrementWait(selectNumber)">等一等再加</button>
    </div>
</template>


<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        props:['title'],
        data(){
            return{
                
                selectNumber:1,
            }
        },
        computed:{
            /*程序员自己亲手去写计算属性*/
            // sum(){
            //     return this.$store.state.sum
            // },
            // company(){
            //     return this.$store.state.company
            // },
            // work(){
            //     return this.$store.state.work
            // },

            // 借助mapstate生成计算属性，从state中读取数据（对象写法）
            // ...mapState({sum:'sum',company:'company',work:'work'}),

            // 借助mapstate生成计算属性，从state中读取数据（数组写法）
            ...mapState('countAbout',['sum','company','work']),
            ...mapState('personAbout',['personList']),
            ...mapGetters('countAbout',['bigSum'])

            // bigSum(){
            //     return this.$store.getters.bigSum
            // },
            // ...mapGetters(['bigSum'])
        },
        methods:{
            // increment(){
            //     // this.$store.dispatch('jia',this.selectNumber)
            //     this.$store.commit('JIA',this.selectNumber)
            // },
            // decrement(){
            //     // this.$store.dispatch('jian',this.selectNumber)
            //     this.$store.commit('JIAN',this.selectNumber)
            // },

            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            ...mapMutations('countAbout',{increment:'JIA', decrement:'JIAN'}),
            
            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
            // ...mapMutations(['JIA', 'JIAN']),

            
            // incrementOdd(){
            //     this.$store.dispatch('jiaOdd',this.selectNumber)
            // },
            // incrementWait(){
            //     this.$store.dispatch('jiaWait',this.selectNumber)
            // }

            // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
            ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
            // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
            // ...mapActions(['jiaOdd','jiaWait'])
        },
        mounted(){
        
        }
    }
</script>


<style scoped>
/*  组件样式 */

</style>

