import VueRouter from 'vue-router'
import { routes } from './routes.js'
import { i18n } from '../i18n.js'
import store from '../store/store.js'

export const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  const lang = store.state.settings.language || 'de';

  if (to.matched.some(record => record.meta.requiresAuth)) {

    console.log('auth required');

    if (store.state.c3s.user.currentUser) {

      console.log('validate user '+store.state.c3s.user.currentUser.username);

      store.dispatch('c3s/user/validate').then(v => {

        console.log('success');

        if (v) {
          next();
        }
        else {
          // TODO error here with user not validated
            this.router.push('/login');
        }

      });
    }
    else {

      console.log('no currentuser');

      store.dispatch('c3s/user/generateAnon').then(u => {

        console.log('anon received:');
        console.log( u );

        next();

      });

    }
  }
  else {
    next();
  }
});

router.afterEach((to, from, next) => {
    store.dispatch('score/calculateScore');
});
