import Vue from 'vue'
import './quasar'

Vue.config.productionTip = false

import router from "./router"

import App from './App'
// new Vue({
//   el: '#app',
//   router,
//   // mixins: [GeneraLMixin],
//   // store: store,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  render: h => h(App),
  // store,
  router,
  components: { App }
}).$mount('#app')

