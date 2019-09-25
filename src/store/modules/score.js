import store from "../store";

const state = {
    highscore: {score: 0, username: ''},
    allUsersCount: 0,
    allSubmissionsCount: 0,

    score: 0,
    rank: 0,
    submissionsCount: 0,
    totalTaskCount: 0,

    top30: []
}

const getters = {
    highscore: state => state.highscore,
    allUsersCount: state => state.allUsersCount,
    allSubmissionsCount: state => state.allSubmissionsCount,

    score: state => state.score,
    rank: state => state.rank,
    submissionsCount: state => state.submissionsCount,
    totalTaskCount: state => state.totalTaskCount,

    top30:  state => state.top30
}

const actions = {
    calculateScore({state, commit, rootState}) {

        console.log( 'calculate Score ....');

        if( store.state.c3s.user.currentUser ) {

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
            store.dispatch('c3s/submission/getSubmissions', [allSubmissionsQuery, 99999]).then(res => {

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
            store.dispatch('c3s/submission/getSubmissions', [userSubmissionsQuery, 99999]).then(res => {

                let score = 0;
                for (let i = 0; i < res.body.length; i++) {
                    score += res.body[i].content.responses[0].score;
                }
                commit('SET_SCORE', score);



                // highscore

                const highscoreQuery = {
                    "select": {
                        "fields": [
                            "users.username",
                            'sum((submissions.content->\'responses\'->0->>\'score\') :: int ) score'
                        ],
                        "tables": [
                            "users",
                            "submissions"
                        ],
                        "groupBy": [
                            "users.username"
                        ],
                        "orderBy": {
                            "score": "DESC"
                        }
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
                    "where": [
                        {
                            "field": "tasks.activity_id",
                            "op": "e",
                            "val": store.state.consts.activityId
                        },
                        {
                            "field": "users.id",
                            "op": "e",
                            "val": "submissions.user_id",
                            "type": "sql",
                            "join": "a"
                        }
                    ]
                };


                /*
                SELECT users.username,sum((submissions.content->'responses'->0->>'score') :: int ) score FROM submissions LEFT JOIN users ON users.id = submissions.user_id LEFT JOIN tasks ON tasks.id = submissions.task_id  WHERE tasks.activity_id = '74033a29-4346-485d-b0e3-3f263a507837'  GROUP BY users.username ORDER BY score DESC;

                 */

                store.dispatch('c3s/submission/getSubmissions', [highscoreQuery, 99999]).then(res => {

                    console.log( res );

                    commit('SET_HIGHSCORE', res.body[0] );

                    let allUsersCount = 0;
                    let rank;
                    let top30 = [];
                    let top30rankCounter = 0;
                    let top30complete = false;
                    let i;
                    for (i = 0; i < res.body.length; i++) {

                        if( state.score >= res.body[i].score && !rank) {
                            rank = i+1;
                        }

                        if( !top30complete ) {

                            if( i === 0 || (res.body[i].score < res.body[i-1].score) ) {
                                top30rankCounter++;
                                if( top30rankCounter >= 30 ) {
                                    top30complete = true;
                                }
                            }


                            top30.push( {
                                'rank': top30rankCounter+'.',
                                'username': res.body[i].username,
                                'score': res.body[i].score
                            } );

                        }

                        allUsersCount++;
                    }
                    if( !rank ) {
                        rank = allUsersCount;
                    }
                    commit('SET_ALLUSERSCOUNT', allUsersCount);
                    commit('SET_RANK', rank);

                    commit('SET_TOP30', top30 );

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
    },

    SET_TOP30(state, top30) {
        state.top30 = top30;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
