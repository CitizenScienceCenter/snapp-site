import store from "../store";

const state = {
    highscore: {score: 0, username: ''},
    allUsersCount: 0,
    allSubmissionsCount: 0,

    score: 0,
    rank: 0,
    submissionsCount: 0,
    totalTaskCount: 0
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

        console.log('calculate score');
        console.log( store.state.c3s.user.currentUser );

        if( store.state.c3s.user.currentUser ) {

            console.log( 'has user' );

            // total task count

            const taskCountQuery = {
                "select": {
                    "fields": [
                        "count(*)"
                    ],
                    "tables": [
                        "tasks"
                    ]
                },
                'where': [
                    {
                        "field": 'tasks.activity_id',
                        'op': 'e',
                        'val': store.state.consts.activityId
                    }
                ]
            };
            store.dispatch('c3s/task/getTaskCount', taskCountQuery).then(res => {

                commit('SET_TOTALTASKCOUNT', res.body );

                const taskCountQuery = {
                    "select": {
                        "fields": [
                            "count(*)"
                        ],
                        "tables": [
                            "submissions"
                        ]
                    },
                    'where': [
                        {
                            "field": 'submissions.user_id',
                            'op': 'e',
                            'val': store.state.c3s.user.currentUser.id
                        }
                    ]
                };
                store.dispatch('c3s/task/getTaskCount', taskCountQuery).then(res => {

                    commit('SET_SUBMISSIONSCOUNT', res.body );

                });

            });


            // submission count

            const allSubmissionsQuery = {
                "select": {
                    "fields": [
                        "count(*)"
                    ],
                    "tables": [
                        "submissions"
                    ],
                    "groupBy": [
                        "user_id"
                    ]
                },
                "join": {
                    "type": "LEFT",
                    "conditions":{
                        "from": {
                            "table": "tasks",
                            "field": "id"
                        },
                        "to": {
                            "table": "submissions",
                            "field": "task_id"
                        }
                    }
                },
                'where': [
                    {
                        "field": 'tasks.activity_id',
                        'op': 'e',
                        'val': store.state.consts.activityId
                    }
                ]
            };
            store.dispatch('c3s/submission/getSubmissions', [allSubmissionsQuery, 0]).then(res => {

                let allUsersCount = 0;
                let allSubmissionsCount = 0;
                for (let i = 0; i < res.body.length; i++) {
                    allUsersCount++;
                    allSubmissionsCount += res.body[i].count;
                }
                commit('SET_ALLUSERSCOUNT', allUsersCount);
                commit('SET_ALLSUBMISSIONSCOUNT', allSubmissionsCount);

            });



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
            store.dispatch('c3s/submission/getSubmissions', [userSubmissionsQuery, 0]).then(res => {

                let score = 0;
                for (let i = 0; i < res.body.length; i++) {
                    score += res.body[i].content.responses[0].score;
                }
                commit('SET_SCORE', score);



                // highscore

                const highscoreQuery = {
                    "select": {
                        "fields": [
                            "username",
                            'count(content->\'responses\'->0->>\'score\') score'
                        ],
                        "tables": [
                            "submissions"
                        ],
                        "groupBy": [
                            "username"
                        ],
                        "orderBy": {
                            "score": "DESC"
                        }
                    },
                    "join": {
                        "type": "LEFT",
                        "conditions":{
                            "from": {
                                "table": "users",
                                "field": "id"
                            },
                            "to": {
                                "table": "submissions",
                                "field": "user_id"
                            }
                        }
                    }
                };
                store.dispatch('c3s/submission/getSubmissions', [highscoreQuery, 0]).then(res => {

                    commit('SET_HIGHSCORE', res.body[0] );

                    let allUsersCount = 0;
                    let rank;
                    let i;
                    for (i = 0; i < res.body.length; i++) {

                        if( state.score >= res.body[i].score && !rank) {
                            rank = i+1;
                        }

                        allUsersCount++;
                    }
                    if( !rank ) {
                        rank = allUsersCount;
                    }
                    commit('SET_ALLUSERSCOUNT', allUsersCount);
                    commit('SET_RANK', rank);

                });

            });

        }
        else {
            console.log( 'has NO user' );
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
        state.allSubmissionsCount = allSubmissionsCount;
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
