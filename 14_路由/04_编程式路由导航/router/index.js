//该文件专为用于创建整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'

import News from '../pages/News'
import Message from '../pages/Message'

import Detail from '../pages/Detail.vue'

//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'GUANYU',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {   
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:Detail,
                            // props第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:"nihao"}

                            // props第二种写法，值为Boolean值，若该值为真，会把该路由组件收到的所有params参数，以props形式传给Detail组件
                            // props:true

                            // props第三种写法，值为函数，会把该路由组件收到的所有query参数，以props形式传给Detail组件
                            props($route){
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                            //  不推荐使用
                            // props({query:{id, title}}){
                            //     return{id,title}
                            // }
                        
                        }
                    ]
                }
            ]
        },
    ]
})

// 暴露路由器
export default router