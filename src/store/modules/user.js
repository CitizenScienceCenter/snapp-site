var SHA256 = require("crypto-js/sha256");
// initial state
// shape: [{ id, quantity }]
const state = {
  user: null,
  currentUser: null,
  settings: null, // TODO split this out into separate store
}

// getters
const getters = {
  user: state => state.user,
  currentUser: state => state.currentUser,
  id: state => state.currentUser.id
}

// actions
const actions = {
  login ({
    state,
    commit,
    dispatch,
    rootState
  }, user) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Users.login(user)
      .then(r => r.body)
      .then(user => {
        commit('SET_CURRENT_USER', user)
        commit('settings/SET_LOADING', false, {
          root: true
        })
      })
      .catch(err => {
        dispatch('settings/setError', {'message': 'Login Failed'}, {
          root: true
        })
        commit('settings/SET_LOADING', false, {
          root: true
        })
      })
  },
  async generateAnon({
    state,
    commit,
    dispatch,
    rootState
  }) {
    commit('settings/SET_LOADING', true, {root: true})
    const now = '' + Date.now()
    const id = "anon" + SHA256(now)
    const pwd  = '' + SHA256(id)
    let u = await dispatch('register', {'username': id, 'pwd': pwd})
    return u
  },
  logout ({
    state,
    commit
  }) {
    commit('SET__CURRENT_USER', null)
  },
  async register({
    state,
    commit,
    rootState
  }, user) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    console.log(user)
    try {
      let res = await rootState.api.client.apis.Users.register_user({user: user})
      console.log(JSON.stringify(res))
      commit('SET_CURRENT_USER', res.body)
      commit('settings/SET_LOADING', false, {root: true})
      return res.body
    } catch(err){
        console.log(err)
        commit('settings/SET_ERROR', err, {
          root: true
        })
        commit('settings/SET_LOADING', false, {
          root: true
        })
        return false
    }
  },
  getUser ({
    state,
    commit,
    rootState
  }, id) {
    rootState.api.client.apis.Users.get_user({
        id: id
      })
      .then(req => {
        commit('settings/SET_LOADING', false, {
            root: true
          })
        commit('SET_USER', req.body)
      }).catch(err => {
        console.error(err.response.status)
        commit('settings/SET_ERROR', err, {
          root: true
        })
        // TODO set path to login or 404 
      })
  },
  async validate ({
    state,
    commit,
    rootState
  }, id) {
    try {
        let res = await rootState.api.client.apis.Users.validate({key: state.currentUser.api_key})
        return true
    } catch (e) {
        return false
    }
  }
}

// mutations
const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
