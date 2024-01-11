<template>
  <div>
    <img src="./assets/logo.png"> 
    <school></school>
    <student></student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>


