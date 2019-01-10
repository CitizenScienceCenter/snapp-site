import VueRouter from 'vue-router'
import { routes } from './routes.js'
import { i18n } from '../i18n.js'
import store from '../store/store.js'

export const router = new VueRouter({
  routes: routes,
  mode: 'history',
// eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  const lang = store.state.settings.language || 'de';

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.c3s.user.currentUser) {
      store.dispatch('c3s/user/validate').then(v => {
        if (v) {
          next()
        } else {
          // TODO error here with user not validated
            this.push({name: 'Login'})
        }
      })
    } else {
      // setTimeout(() => {
        store.dispatch('c3s/user/generateAnon').then(u => {
          next()
        })
      // }, 1000)

    }
  } else {
    next()
  }
});

router.afterEach((to, from, next) => {
    store.dispatch('score/calculateScore');
});
