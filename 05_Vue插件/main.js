/*
该文件是整个项目的入口文件
*/
// 引入残缺版Vue
import Vue from 'vue'
// 引入APP组件，是所有组件的父组件
import App from './App.vue'

//全局引入混合
// import {hunhe, hunhe2} from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip = false

/*全局混合 */
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

// 引入插件
import plugins from './plugins'
// 应用插件
Vue.use(plugins)


/*
  关于不同版本的Vue：
    1.vue.js与vue.runtime.xxx.js的区别
      vue.js是完整版的Vue，包含：核心功能和模板解析器
      vue.runtime.xxx.js是运行版Vue，只包含，核心功能；没有模板解析器
    2.因为Vue.runtime.xxx.js没有模板解析器，所以不能用template配置项，需要使用
      render函数接收到的createElement函数去指定具体内容
*/

// 创建Vue实例对象
new Vue({
  el:'#app',
  // 完成将APP组件放入容器中
  render: h => h(App),

  // render(createElement){
  //   return createElement('h1','nihao')
  // }
})
