import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router/router.js'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import store from './store/store.js'
import Vuex from 'vuex'
import { i18n } from './i18n.js'
import c3s from 'vuex-c3s'
import Croppa from 'vue-croppa';

//let swaggerURL = 'https://api.citizenscience.ch/api/v2/swagger.json';
let swaggerURL = 'http://172.23.104.29:8080/api/v2/swagger.json';

Vue.config.productionTip = false

Vue.use(c3s.plugin, { store, swaggerURL})
Vue.use(VueRouter)
Vue.use(VueScrollTo, {
  offset: -32
})
Vue.use(Croppa)
Vue.use(Vuex)
Vue.use(Croppa)


Vue.use(Croppa);

store.watch(
    (state) => state.c3s && state.c3s.client,
    (value) => {
        if (value !== null) {
            new Vue({
                store,
                router,
                i18n,
                render: h => h(App),
                beforeCreate: function () {
                }
            }).$mount('#app')
        }
    }
)




