import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import consts from './modules/consts'
import stats from './modules/stats'
import gdpr from './modules/gdpr'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    settings,
    consts,
      stats,
      gdpr
  },
  strict: debug,
  plugins: [createPersistedState({ storage: window.localStorage})]
});
