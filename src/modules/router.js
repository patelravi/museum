import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ArtListComponent from './../components/artList/artList.vue';
import ArtDetailComponent from './../components/artDetails/artDetail.vue';
import ProfileComponent from './../components/profile/profile.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'ArtList',
            component: ArtListComponent
        },
        {
            path: "/art/:id",
            name: 'ArtDetail',
            component: ArtDetailComponent
        },
        {
            path: "/profile/:email",
            name: 'Profile',
            component: ProfileComponent
        },
    ]
});