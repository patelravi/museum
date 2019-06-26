import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ArtListComponent from './../components/artList/artList.vue';
import ArtDetailComponent from './../components/artDetails/artDetail.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'ArtList',
            component: ArtListComponent
        },
        {
            path: "/art/detail",
            name: 'ArtDetail',
            component: ArtDetailComponent
        },
    ]
});