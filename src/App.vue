<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import {loadList} from '@/api/category'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data() {
            return {
                params: {
                    name: '',
                    page: 1,
                    size: 10
                },
            }
        },
        mounted() {
            this.loadData();
        },
        methods: {
            // async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。
            async loadData() {
                const res = await loadList({...this.params})
                if (res.code === 200) {
                    this.list = res.data
                    this.host = res.host
                    this.total = res.total
                } else {
                    alert("错误！")
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
