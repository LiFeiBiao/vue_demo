export default{
    install(Vue){
        console.log('@@@@install',Vue)

        // 全局过滤器
        Vue.filter('mySlice',function(v){
            return v.slice(0,2)
        })

        //自定义指令
        Vue.directive('fbind',{
            // 指令元素被成功绑定时
            bind(element, binding){
                element.value = binding.value
            },
            // 指令元素被插入页面时
            inserted(el,binding){
                el.focus()
            },
            // 指令所在模板被重新解析时
            updated(el,binding) {
                el.value = binding.value
            },
        })

        // 定义一个混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })

        //给Vue原型上添加一个方法（vm和vc都可以用了）
        Vue.prototype.hello = ()=>{alert('你好啊 ')}
    }
}

