import Vue from 'vue'
import App from './App.vue'
import router from './router'
import globals from './utils/globals'
import common from './utils/common'
import '@/assets/css/basis.scss'
import 'lib-flexible'

Vue.use(globals)
Vue.use(common)
Vue.config.productionTip = false

Vue.prototype.globals = globals
Vue.prototype.common = common

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
