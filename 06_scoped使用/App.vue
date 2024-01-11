<template>
  <div>
    <h2 class="title">你好哦啊</h2>
    <!-- 使用组件标签 -->
    <student></student>
    <school></school>

  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  data(){
    return {
      msg:'欢迎李飞彪'
    }
  },

  // 注册组件
  components: {
    School,
    Student
  }
}
</script>

<style scoped>
  .title{
    color: blueviolet;
  }
</style>

