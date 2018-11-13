import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { i18n } from '../i18n.js';
import store from '../store/store.js';

export const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  // const lang = store.state.language;
  // const title = i18n.messages[lang][to.meta.page]['title'];
  // if (title) {
  //   document.title = title;
  // } else {
  //   document.title = "";
  // }
  //
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (store.state.user.currentUser) {
  //     store.dispatch('user/validate').then(v => {
  //       if (v) {
  //         next()
  //       } else {
  //         store.dispatch('user/generateAnon').then(u => {
  //           next()
  //         })
  //       }
  //     })
  //   } else {
  //     store.dispatch('user/generateAnon').then(u => {
  //       next()
  //     })
  //   }
  // } else {
  //   next()
  // }

});