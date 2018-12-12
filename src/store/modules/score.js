import store from "../store";

const state = {
    score: undefined
}

const getters = {
    score: state => state.score
}

const actions = {
    calculateScore({state, commit, rootState}) {

        if( store.state.c3s.user.currentUser ) {

            const submissionQuery = {
                "select": {
                    "fields": [
                        "DISTINCT submissions.*"
                    ],
                    "tables": [
                        "submissions",
                        "tasks"
                    ]
                },
                "where": {
                    "tasks.activity_id": {
                        "op": "e",
                        "val": store.state.consts.activityId,
                        "join": "a"
                    },
                    "submissions.user_id": {
                        "op": "e",
                        "val": store.state.c3s.user.currentUser.id
                    }
                }
            };

            store.dispatch('c3s/submission/getSubmissions', [submissionQuery]).then(submissions => {

                let score = 0;
                for (let i = 0; i < submissions.body.length; i++) {
                    if (submissions.body[i].content.responses[0].validation === "correct") {
                        score += 10;
                    }
                }
                commit('SET_SCORE', score);

            });

        }
        else {
            commit('SET_SCORE', undefined);
        }
    }
}

const mutations = {
    SET_SCORE(state, score) {
        state.score = score;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
