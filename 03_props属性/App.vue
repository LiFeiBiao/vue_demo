<template>
  <div>

    <!-- 使用组件标签 -->
    <student name="lisi" address="北京昌平" :age="19"></student>
    <student name="wangwu" address="北京丰台" :age="19"></student>
    <student name="赵六" address="河南郑州" :age="19"></student>
    <student name="武器" address="四川成都" :age="19"></student>

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


