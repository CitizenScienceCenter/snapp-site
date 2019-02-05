import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import consts from './modules/consts'
import score from './modules/score'
import gdpr from './modules/gdpr'
import VuexPersist from 'vuex-persist'
import createPersistedState from 'vuex-persistedstate'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
});

const vuexLocalStorage = new VuexPersist({
    key: 'c3s',
    storage: window.localStorage, // or window.sessionStorage or localForage instance.
    // Function that passes the state and returns the state with only the objects you want to store.
    reducer: state => ({
        user: state.c3s.user
    })
})

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    settings,
    consts,
      score,
      gdpr
  },
  strict: debug,
  plugins: [createPersistedState({ storage: localStorage})]
});
