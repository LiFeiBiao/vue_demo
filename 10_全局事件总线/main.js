/*
该文件是整个项目的入口文件
*/
// 引入残缺版Vue
import Vue from 'vue'
// 引入APP组件，是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

// const Demo = Vue.extend()
// const a = new Demo()
// Vue.prototype.x = a

// 创建Vue实例对象
new Vue({
  el:'#app',
  // 完成将APP组件放入容器中
  render: h => h(App),

  // render(createElement){
  //   return createElement('h1','nihao')
  // }

  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  }
})
