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
    mode:'hash',//默认hash模式，还有history模式

    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{
                isAuth:false,
                title:"关于"
            }

        },
        {
            name:"zhuye",
            path:'/home',
            component:Home,
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:true,
                        title:"新闻中心"
                    },
                    //独享路由守卫——只有前置守卫
                    // beforeEnter:(to, from, next)=>{
                    //     if(to.meta.isAuth){//是否需要鉴权
                    //         // next()//放行
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'xiaoxi',
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
                            },
                            //  不推荐使用
                            // props({query:{id, title}}){
                            //     return{id,title}
                            // }
                            meta:{
                                title:"详情"
                            }
                        
                        }
                    ],
                    meta:{
                        isAuth:true,
                        title:"主页"
                    }
                }
            ]
        },
    ]
})

//全局前置路由守卫——初始化的时候和切换之前被调用
// router.beforeEach((to, from, next)=>{
//     console.log("前置路由守卫被调用了",to,from)
//     // if(to.path === '/home/news' || to.path == '/home/message'){

//     // if(to.name === 'xinwen' || to.path == 'xiaoxi'){

//     if(to.meta.isAuth){//是否需要鉴权
    
//         // next()//放行
//     }else{
       
//         next()
//     }
// })


//全局后置路由守卫——初始化的时候和切换之后被调用
// router.afterEach((to, from)=>{
//     console.log("后置路由守卫被调用了",to,from)
//     document.title=to.meta.title || "哈哈系统"
// })


// 独享路由守卫


// 暴露路由器
export default router