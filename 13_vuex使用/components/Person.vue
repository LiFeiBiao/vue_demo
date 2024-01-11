import { mapState } from 'vuex';
<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
            
        </ul>
        <h3>求和为{{ sum }}</h3>
        <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>

        <button @click="addLi">添加一个姓李的人</button>
        
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
import {mapState} from 'vuex'

export default {

    name:'Person',
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        // ...mapState('countAbout',['sum']),
        // ...mapState('personAbout',['personList']),
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    data(){
        return{
            name:''
        }
    },
    methods:{
        addPerson(){
            const personObj = {id:nanoid(), name:this.name}
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            this.name=''
        },
        addLi(){
            const personObj = {id:nanoid(), name:this.name}
            this.$store.dispatch('personAbout/addPersonLi',personObj)
            this.name=''
        }
    }
}
</script>

<style scoped>

</style>
