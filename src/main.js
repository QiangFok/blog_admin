import Vue from 'vue'
import axios from "axios";
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
