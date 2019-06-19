import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ArtListComponent from './../components/artList/artList.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'ArtList',
            component: ArtListComponent
        },
    ]
});