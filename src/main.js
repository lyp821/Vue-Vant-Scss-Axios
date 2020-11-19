import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './utils/global'
import common from './utils/common'
import './assets/icon/style.css'
import 'lib-flexible'
import {
  Tab,
  Tabs,
  Icon,
  Tabbar,
  TabbarItem,
  NavBar,
  DropdownMenu,
  DropdownItem,
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
} from 'vant'

Vue.use(Lazyload)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(global)
Vue.use(common)
Vue.config.productionTip = false

Vue.prototype.global = global
Vue.prototype.common = common
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
