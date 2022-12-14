import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入重置的样式文件
import './assets/styles/reset.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
