<template>
  <div class="container">
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="'col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link :replace="true" class="list-group-item " active-class="active" to="/about">相关</router-link>
          <router-link replace class="list-group-item " active-class="active" to="/home">主页</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Banner from './components/Banner.vue'

export default {
  name: 'App',

  // 注册组件
  components: {Banner},

  data(){
    return {
      msg:'欢迎李飞彪',
      food:['香肠','面包','蛋糕'],
    }
  },

}
</script>

<style>


</style>

