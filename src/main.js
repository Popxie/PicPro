import Vue from 'vue'
import { Dialog, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

Vue.use(Dialog)
Vue.use(Button)

// import '@/assets/js/flexible.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
