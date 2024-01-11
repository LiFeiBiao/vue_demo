<template>
  <div>
    <img src="./assets/logo.png"> 
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点击输出上方的DOM元素</button>
    <!-- 使用组件标签 -->
    <school ref="sch"></school>
    <school></school>
    <school></school>
    <student></student>
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
  methods:{
    showDom(){
      console.log(this.$refs.title);//DOM元素
      console.log(this.$refs.sch);//vc实例对象
      console.log(this.$ref.btn);//DOM元素
    }
  }, 
  // 注册组件
  components: {
    School,
    Student
  }
}
</script>


