import store from "../store";

const state = {
    highscore: undefined,
    allUsersCount: undefined,
    allSubmissionsCount: undefined,

    score: undefined,
    rank: undefined,
    submissionsCount: undefined,
    totalTaskCount: undefined
}

const getters = {
    highscore: state => state.highscore,
    allUsersCount: state => state.allUsersCount,
    allSubmissionsCount: state => state.allSubmissionsCount,

    score: state => state.score,
    rank: state => state.rank,
    submissionsCount: state => state.submissionsCount,
    totalTaskCount: state => state.totalTaskCount,
}

const actions = {
    calculateScore({state, commit, rootState}) {

        // user count

        /*

        const allUsersCountQuery = {
            "select": {
                "fields": [
                    "DISTINCT submissions.*"
                ],
                "tables": [
                    "submissions",
                    "users"
                ]
            },
            'where': [
                {
                    "field": 'users.activity_id',
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

        store.dispatch('c3s/submission/getSubmissions', [allUsersCountQuery, 0]).then(submissions => {

            commit('SET_ALLUSERSCOUNT', xy);

        });

        */





        if( store.state.c3s.user.currentUser ) {

            // user score

            const userSubmissionsQuery = {
                "select": {
                    "fields": [
                        "DISTINCT submissions.*"
                    ],
                    "tables": [
                        "submissions",
                        "tasks"
                    ]
                },
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

            store.dispatch('c3s/submission/getSubmissions', [userSubmissionsQuery, 0]).then(submissions => {

                let score = 0;
                for (let i = 0; i < submissions.body.length; i++) {
                    score += submissions.body[i].content.responses[0].score;
                }
                commit('SET_SCORE', score);

            });

        }
        else {
            commit('SET_SCORE', 0);
        }
    }
}

const mutations = {

    SET_HIGHSCORE(state, highscore) {
        state.highscore = highscore;
    },
    SET_ALLUSERSCOUNT(state, allUsersCount) {
        state.allUsersCount = allUsersCount;
    },
    SET_ALLSUBMISSIONSCOUNT(state, allSubmissionsCount) {
        state.allUsersCount = allSubmissionsCount;
    },

    SET_SCORE(state, score) {
        state.score = score;
    },
    SET_RANK(state, rank) {
        state.rank = rank;
    },
    SET_SUBMISSIONSCOUNT(state, submissionsCount) {
        state.submissionsCount = submissionsCount;
    },
    SET_TOTALTASKCOUNT(state, totalTaskCount) {
        state.totalTaskCount = totalTaskCount;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
