/*
该文件是整个项目的入口文件
*/
// 引入残缺版Vue
import Vue from 'vue'
// 引入APP组件，是所有组件的父组件
import App from './App.vue'

// 引入vue-router插件
import VueRouter from 'vue-router'

// 引入路由器
import router from './router';


Vue.config.productionTip = false

//应用插件
Vue.use(VueRouter)


// 创建Vue实例对象
new Vue({
  el:'#app',
  // 完成将APP组件放入容器中
  render: h => h(App),
  router:router

})
