import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/style.css'

import 'lib-flexible'
import { Icon, Tabbar, TabbarItem, NavBar } from 'vant'

Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
