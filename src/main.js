import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './router/router.js';
import App from './App.vue';
import store from './store/store.js';
import Vuex from 'vuex';
import { i18n } from './i18n.js';
import c3s from 'vuex-c3s';
import Meta from 'vue-meta';
import SimpleAnalytics from "simple-analytics-vue";

import Croppa from 'vue-croppa';

Vue.config.productionTip = false;


// const apiURL = 'http://localhost:9000/v3/openapi.json'
// const server = 'http://localhost:9000/v3/'
const apiURL = 'https://staging.citizenscience.ch/v3/openapi.json'
const server = 'https://staging.citizenscience.ch/v3/'
Vue.use(c3s.plugin, {
   store,
   apiURL,
   server
})  
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Meta);
Vue.use(Croppa);
Vue.use(SimpleAnalytics, { skip: process.env.NODE_ENV !== "production" });

let VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
    easing: "easeInOut",
    duration: 600,
    offset: 0
});


store.watch(
    (state) => state.c3s && state.c3s.client,
    (value) => {
        if (value !== null) {
            new Vue({
                store,
                router,
                i18n,
                render: h => h(App)
            }).$mount('#app')
        }
    }
);

/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/
