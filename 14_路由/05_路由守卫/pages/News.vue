<template>
    <div>
        <ul>
            <li :style="{opacity}">
                欢迎李飞彪
            </li>
            <li>
                news01<input type="text">
            </li>
            <li>
                news01<input type="text">
            </li>
            <li>
                news01<input type="text">
            </li>
            <li>
                news01<input type="text">
            </li>
        </ul>
      </div>
</template>

<script>
    export default {
        name:'News',

        data(){
            return{
                opacity:1
            }
        },

        // mounted(){
        //     this.timer = setInterval(() => {
        //         this.opacity -= 0.01
        //         if(this.opacity <= 0) this.opacity = 1
        //     },20)
        // },

        // beforeDestroy(){
        //     console.log("NEWs组件即将被销毁了")
        //     clearInterval(this.timer)
        // },

        activated(){
            console.log("news组件被激活了")
            this.timer = setInterval(() => {
                this.opacity -= 0.01
                if(this.opacity <= 0) this.opacity = 1
            },20)
        },
        deactivated(){
            console.log("news组件失活了")
            clearInterval(this.timer)
        }
    }
</script>

<style>

</style>