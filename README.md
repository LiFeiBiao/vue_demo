# vue_demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方法：
        1.定义混合，如
            {
                data(){},
                methods:{....}
                ....
            }
        2.使用混合，例如
            1.全局混入：Vue.mixin(xxx)
            2.局部混入：mixins:['XXX']
## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后得参数是插件使用者传递的数据
    定义插件：
        对象.install = function(Vue, options){
            // 1.添加全局过滤器
            Vue.filter(....)
             // 添加全局指令
             Vue.directive(...)
             //配置全局混入
             Vue。mixin(....)
             //添加实例方法
             Vue.prototype.$myMethod = function(){....}
             Vue.prototype.$myProperty = xxxx
        }
    使用插件
        Vue.use()

## scoped样式
    作用：让样式在局部生成，防止冲突
    写法：<style scoped></style> 

## 总结ToDolist案例
    1.组件化编码流程
        1.1拆分静态组件：组件要按照功能点拆分，命名不要和HTML元素冲突
        1.2实现动态组件：考虑好数据的存放发位置，数据是一个组件在用，还是一些组件咋用
            （1）一个组件在用，放在组件自身就可以
            （2）一些组件再用，放在他们共同的父组件上（状态提升）
        1.3实现交互：从绑定事件开始
    2.props适用于
        父组件=>子组件通信
        子组件=>父组件通信（要求父组件先给子组件一个函数）
    3.使用v-model时，v-model绑定的值不能是props传过来的值，因为props是不可以修改的
    4.props传过来的若是对象类型的值，修改对象中的属性的Vue不会报错，但不推荐这样做