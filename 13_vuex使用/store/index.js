// 该文件用于创建vuex中最为核心的Store

// 引入vuex
import Vuex from 'vuex'
import Vue from 'vue' 

// 使用vuex插件
Vue.use(Vuex)


const countOptions = {
    namespaced:true,
    actions:{
        jiaOdd(context, value){
            console.log('actions中的jianodd被调用了',context,value)
            context.dispatch('demo1', value)
            if(context.state.sum % 2){
                context.commit('JIA',value)
            }
    
        },
        demo1(context, value){
            console.log('demo1处理',context,value)
            context.dispatch('demo2',value)
        },
        demo2(context, value){
            console.log('demo2处理了一些事情',context,value)
    
        },
        jiaWait(context,value){
            console.log('actions中的jianodd被调用了',context,value)
            setTimeout(()=>{
                context.commit('JIA',value)
            },500) 
        }
    },
    mutations:{
        JIA(state, value){
            console.log('mutations中的jia被调用了',state,value)
            state.sum += value
        },
        JIAN(state, value){
            console.log('mutations中的jian被调用了',state,value)
            state.sum -= value
        },
        ADD_PERSON(state,personObj){
            state.personList.unshift(personObj)
        }
    },
    state:{
        sum:0,
        company:'国新证券',
        work:'软件开发',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}

const personAbout  = {
    namespaced:true,
    actions:{
        addPersonLi(context,value){
            if(value.name.indexOf('李')=== 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人的姓名不符合要求')
            }
        }
    },
    mutations:{
        ADD_PERSON(state,personObj){
            state.personList.unshift(personObj)
        }
    },   
    state:{
        personList:[{id:'001',name:'张三'}]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}

// // 准备actions——用于响应组件中的动作
// const actions = {
//     // jia(context, value){
//     //     console.log('actions中的jia被调用了',context,value)
//     //     context.commit('JIA',value)
//     // },
//     // jian(context, value){
//     //     console.log('actions中的jian被调用了',context,value)
//     //     context.commit('JIAN',value)
//     // },
//     jiaOdd(context, value){
//         console.log('actions中的jianodd被调用了',context,value)
//         context.dispatch('demo1', value)
//         if(context.state.sum % 2){
//             context.commit('JIA',value)
//         }

//     },
//     demo1(context, value){
//         console.log('demo1处理',context,value)
//         context.dispatch('demo2',value)
//     },
//     demo2(context, value){
//         console.log('demo2处理了一些事情',context,value)

//     },
//     jiaWait(context,value){
//         console.log('actions中的jianodd被调用了',context,value)
//         setTimeout(()=>{
//             context.commit('JIA',value)
//         },500) 
//     }
// }

// // 准备mutations-用于操作数据（state)
// const mutations = {
//     JIA(state, value){
//         console.log('mutations中的jia被调用了',state,value)
//         state.sum += value
//     },
//     JIAN(state, value){
//         console.log('mutations中的jian被调用了',state,value)
//         state.sum -= value
//     },
//     ADD_PERSON(state,personObj){
//         state.personList.unshift(personObj)
//     }

// }

// // 准备states——用于存储数据
// const state = {
//     sum:0,
//     company:'国新证券',
//     work:'软件开发',
//     personList:[{id:'001',name:'张三'}]
// }

// // 准备getters用于将states中的数据进行加工
// const getters = {
//     bigSum(state){
//         return state.sum * 10
//     }
// }


// 创建Store
const store = new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters,

    modules:{
        countAbout:countOptions,
        personAbout:personAbout
    }
})

// 导出Store
export default store