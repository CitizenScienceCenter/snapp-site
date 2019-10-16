const actions = {
    setChallengeState({state, commit, rootState}, values) {
        commit('SET_CHALLENGE_STATE', values);
    },
    setDates({state, commit, rootState}, values) {
        commit('SET_DATES', values);
    }
};

const mutations = {
    SET_CHALLENGE_STATE(state, value) {
        state.challengeState = value;
    },
    SET_DATES(state, values) {
        state.challengeStartISO = values[0];
        state.challengeEndISO = values[1];
    }
};

const getters = {

};

const state = {
    challengeStartISO: null,
    challengeEndISO: null,
    challengeState: null
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
