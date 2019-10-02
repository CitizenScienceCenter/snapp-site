import store from "../store";

const state = {
    totalTaskCount: 0,
    totalUserCount: 0,
    totalSubmissionCount: 0,

    mySubmissionCount: 0
};

const getters = {

};

const actions = {
    updateTotalTaskCount({state, commit, rootState}) {

        console.log('update task count');

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


            console.log('task count returned');

            commit('SET_TOTAL_TASK_COUNT', res.body );

        });

    },

    updateTotalUserAndSubmissionCount({state, commit, rootState}) {

        console.log('update total user and submission count');

        const allSubmissionsQuery = {
            "select": {
                "fields": [
                    "users.username",
                    "count(*) as total_subs"
                ],
                "tables": [
                    "users",
                    "submissions"
                ],
                "groupBy": [
                    "user_id"
                ],
                "orderBy": {
                    "total_subs": 'DESC'
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
            'where': [
                {
                    "field": 'tasks.activity_id',
                    'op': 'e',
                    'val': store.state.consts.activityId
                }
            ]
        };
        store.dispatch('c3s/submission/getSubmissions', [allSubmissionsQuery, 99999]).then(res => {

            console.log('total user and submission count returned');
            console.log( res );

            let allUsersCount = 0;
            let allSubmissionsCount = 0;
            for (let i = 0; i < res.body.length; i++) {
                allUsersCount++;
                allSubmissionsCount += res.body[i].count;
            }
            commit('SET_TOTAL_USER_COUNT', allUsersCount);
            commit('SET_TOTAL_SUBMISSION_COUNT', allSubmissionsCount);

        });
    },

    updateMySubmissionCount({state, commit, rootState}) {

        console.log('update my submissions count');

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
                    "field": 'tasks.activity_id',
                    'op': 'e',
                    'val': store.state.consts.activityId,
                    "join": "a"
                }
            ]
        };
        store.dispatch('c3s/task/getTaskCount', submissionCountQuery).then(res => {


            console.log('my submissions count returned');
            console.log( res );

            commit('SET_MY_SUBMISSION_COUNT', res.body );

        });

    },
    increaseMySubmissionCount({state, commit, rootState}) {
        commit('INCREASE_MY_SUBMISSION_COUNT' );
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
    INCREASE_MY_SUBMISSION_COUNT(state) {
        state.mySubmissionCount++;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
