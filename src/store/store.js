import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import consts from './modules/consts'
import gdpr from './modules/gdpr'
import stats from './modules/stats'
import snakes from './modules/snakes'
import timer from './modules/timer'

import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';


let store;
if( window.localStorage ) {
  store = new Vuex.Store({
    modules: {
      settings,
      consts,
      snakes,
      timer,
      gdpr,
      stats
    },
    strict: debug,
    plugins: [createPersistedState({ storage: window.localStorage})]
  });
}
else {
  store = new Vuex.Store({
    modules: {
      settings,
      consts,
      snakes,
      timer,
      gdpr,
      stats
    },
    strict: debug
  });
}

export default store;
