import Vue from 'vue';
Vue.config.productionTip = false;

// Init bootstrap-vue lib
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Configure font awesome
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faComments,
  faShare,
  faCheckCircle,
  faEllipsisH,
  faBookmark
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
library.add(faHeart, faComments, faShare, faCheckCircle, faEllipsisH, faBookmark)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Configure Router
import routerObj from './modules/router';

console.log('environment is ', process.ENV);

// Initialize vue root component
import App from './App.vue'
new Vue({
  router: routerObj,
  render: h => h(App),
}).$mount('#app');