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
                        "submissions.*"
                    ],
                    "tables": [
                        "submissions",
                        "tasks"
                    ]
                },
                /*
                "where": {
                    "tasks.activity_id": {
                        "op": "e",
                        "val": store.state.consts.activityId
                    },
                    "submissions.user_id": {
                        "op": "e",
                        "val": store.state.c3s.user.currentUser.id,
                        "join": "a"
                    }
                },
                */
                'where': [
                    {
                        "field": 'tasks.activity_id',
                        'op': 'e',
                        'val': store.state.consts.activityId
                    },
                    {
                        "field":'submissions.user_id',
                        'op': 'e',
                        "val": store.state.c3s.user.currentUser.id,
                        'join': 'a'
                    }
                ]
            };

            store.dispatch('c3s/submission/getSubmissions', [submissionQuery]).then(submissions => {

                let score = 0;
                for (let i = 0; i < submissions.body.length; i++) {
                    score += submissions.body[i].content.responses[0].score;
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
