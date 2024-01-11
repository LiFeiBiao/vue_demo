<template>
  <div class="app">
    <count></count>
  </div>
</template>

<script>
import count from './components/Count-Demo.vue'


export default {
  name: 'App',

  // 注册组件
  components: {count},

  data(){
    return {
      msg:'欢迎李飞彪',
      food:['香肠','面包','蛋糕'],
    }
  },

}
</script>

<style>
  .app{
    background-color: blueviolet;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }
  button{
    margin:5px;
  }
</style>

