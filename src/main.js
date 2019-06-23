// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import createRouter from './router'

require('@a/css/flex.css')
require('@a/css/base.css')
require('@a/css/patch.css')
require('@a/js/rem.js')

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const router = createRouter()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
