const actions = {
    setProjectId({state, commit, rootState}, value) {
        commit('SET_PROJECT_ID', value);
    },
    setActivityId({state, commit, rootState}, value) {
        commit('SET_ACTIVITY_ID', value);
    }
}
const mutations = {
    SET_PROJECT_ID(state, value) {
        state.projectId = value;
    },
    SET_ACTIVITY_ID(state, value) {
        state.activityId = value;
    }
}

const getters = {

}

const state = {
    languages: ['en','de'],
    projectId: 'b04bc186-1e0e-4fd3-87b8-a25262c1c79f',
    //activityId: '74033a29-4346-485d-b0e3-3f263a507837',
    activityId: '09a565c4-73f8-483d-b59a-c3e5791f9a16', // new one
};

export default {
  namespaced: true,
  state,
    actions,
    mutations,
    getters
}
