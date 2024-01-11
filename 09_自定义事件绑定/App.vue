<template>
  <div class="app">
    <h2 >{{msg}}  学生姓名是{{ studentName }}</h2>
    
    <!-- 通过父组件给子组件绑定一个自定义事件实现；子给父传递函数 (第一种写法，使用@或v-on)-->
    <student v-on:test="getStudentName" @a="getDemo"/>

    <!-- 通过父组件给子组件传递函数类型的props实现；子给父传递函数 -->
    <school :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现；子给父传递函数 (第二种写法，使用ref)-->
    <student ref="student"  @click.native="show"/>

  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  data(){
    return {
      msg:'欢迎李飞彪',
      studentName:''
    }
  },

  methods: {
    getSchoolName(name){
      console.log("学校名称是：", name)
    },
    getStudentName(name, ...params){
      console.log("APP收到了学生姓名",name)
      this.studentName = name
    },
    getDemo(){
      console.log("diaoyongl Demo")
    },
    show(){
      alert('aaa')
    }
  },
  mounted(){
    setTimeout(() => {
      this.$refs.student.$on('test', this.getStudentName)
      //this.$refs.student.$once('test', this.getStudentName)//绑定自定义时间（一次性）
    }, 3000);
  },

  // 注册组件
  components: {
    School,
    Student
  }
}
</script>

<style scoped>
  .app{
    background-color: blueviolet;
    padding: 10px;
  }
</style>

