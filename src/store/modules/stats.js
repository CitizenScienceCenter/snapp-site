import store from "../store";

const state = {
    totalTaskCount: 0,
    totalUserCount: 0,
    totalSubmissionCount: 0,

    mySubmissionCount: 0,
    myRank: undefined,
    ranking: []
};

const getters = {

};

const actions = {
    updateTotalTaskCount({state, commit, rootState}) {

        //console.log('update task count');

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


            //console.log('task count returned');

            commit('SET_TOTAL_TASK_COUNT', res.body );

        });

    },

    updateSubmissionStats({state, commit, rootState}) {

        const submissionCountQuery = {
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
                },
                {
                    "field": 'submissions.task_id',
                    'op': 'i',
                    'val': "(select id from tasks where tasks.activity_id='"+store.state.consts.activityId+"')",
                    'type': 'sql',
                    "join": "a"
                }
            ]
        };
        store.dispatch('c3s/task/getTaskCount', submissionCountQuery).then(res => {

            commit('SET_MY_SUBMISSION_COUNT', res.body );



            const allSubmissionsQuery = {
                "select": {
                    "fields": [
                        "users.username",
                        "count(*) as subs"
                    ],
                    "tables": [
                        "submissions"
                    ],
                    "groupBy": [
                        "users.username"
                    ],
                    "orderBy": {
                        "subs": 'DESC'
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
                },
                'where': [
                    {
                        "field": 'submissions.task_id',
                        'op': 'i',
                        'val': "(select id from tasks where tasks.activity_id='"+store.state.consts.activityId+"')",
                        'type': 'sql'
                    }
                ]
            };
            store.dispatch('c3s/submission/getSubmissions', [allSubmissionsQuery, 99999]).then(res => {

                let allUsersCount = 0;
                let allSubmissionsCount = 0;
                let rankingCounter = 1;
                let myRank = undefined;
                let ranking = [];
                for (let i = 0; i < res.body.length; i++) {
                    allUsersCount++;
                    allSubmissionsCount += res.body[i].subs;

                    // fill complete ranking
                    if( i>0 ) {
                        if( res.body[i].subs < ranking[i-1].subs ) {
                            // less submissions than previous
                            rankingCounter = i+1;
                            ranking.push( {
                                'rank':rankingCounter,
                                'sameAsPrevious':false,
                                'username':res.body[i].username,
                                'subs':res.body[i].subs
                            });
                        }
                        else {
                            // same submissions as previous
                            ranking.push( {
                                'rank':rankingCounter,
                                'sameAsPrevious':true,
                                'username':res.body[i].username,
                                'subs':res.body[i].subs
                            });
                        }
                    }
                    else {
                        ranking.push( {
                            'rank':rankingCounter,
                            'sameAsPrevious':false,
                            'username':res.body[i].username,
                            'subs':res.body[i].subs
                        });
                    }

                    // set my rank
                    if( state.mySubmissionCount === res.body[i].subs ) {
                        myRank = rankingCounter;
                    }

                }
                if( !myRank ) {
                    //console.log('not found in ranking');
                    if( ranking.length > 0 ) {
                        myRank = rankingCounter+1;
                    }
                    else {
                        myRank = 1;
                    }
                }

                commit('SET_TOTAL_USER_COUNT', allUsersCount);
                commit('SET_TOTAL_SUBMISSION_COUNT', allSubmissionsCount);
                commit('SET_MY_RANK', myRank);
                commit('SET_RANKING', ranking);

            });

        });

    }

};

const mutations = {
    SET_TOTAL_TASK_COUNT(state, totalTaskCount) {
        state.totalTaskCount = totalTaskCount;
    },
    SET_TOTAL_USER_COUNT(state, totalUserCount) {
        state.totalUserCount = totalUserCount;
    },
    SET_TOTAL_SUBMISSION_COUNT(state, totalSubmissionCount) {
        state.totalSubmissionCount = totalSubmissionCount;
    },
    SET_MY_SUBMISSION_COUNT(state, mySubmissionCount) {
        state.mySubmissionCount = mySubmissionCount;
    },
    SET_MY_RANK(state, myRank) {
        state.myRank = myRank;
    },
    SET_RANKING(state, ranking) {
        state.ranking = ranking;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
