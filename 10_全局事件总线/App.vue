<template>
  <div class="app">
    <h2 >{{msg}} </h2>
    
    <school />
    <student/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',

  // 注册组件
  components: {School,Student},

  data(){
    return {
      msg:'欢迎李飞彪',
    }
  },

 


}
</script>

<style scoped>
  .app{
    background-color: blueviolet;
    padding: 10px;
  }
</style>

