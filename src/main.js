import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

// Vue.config.productionTip = false

import 'common/stylus/index.styl'

// 推荐用法
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router挂载到Vue实例上
  router,
  render: h => h(App)
})
