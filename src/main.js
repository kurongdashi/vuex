import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/common.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
