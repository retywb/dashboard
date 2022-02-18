import Vue from 'vue'
import App from './App.vue'
import store from './store'
import registerFilters from './filters'

Vue.config.productionTip = false

registerFilters()

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
