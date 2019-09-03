import Router from 'vue-router'

import homePage from './pages/home/home';

import Vue from 'vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: homePage
        }
    ]
});