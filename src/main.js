import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'

// Vue.config.productionTip = false

import 'common/stylus/index.styl'

// 推荐用法
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
