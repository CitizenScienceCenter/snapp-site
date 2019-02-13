import snakes from "@/assets/snakes.min.json";


const actions = {
    createOptionContainers({state, commit, rootState}, newVersion ) {

        console.log('recreating option containers in store');

        let searchOptionsFamilies = [];
        let searchOptionsGenera = [];
        let searchOptionsBinomials = [];

        for( let i=0; i < snakes.length; i++ ) {

            if( snakes[i].family !== '') {
                let alreadyFound = false;
                let j;


                // add to families if not exist yet
                for( j=0; j < searchOptionsFamilies.length; j++ ) {
                    if( searchOptionsFamilies[j].value === snakes[i].family ) {
                        alreadyFound = true;
                        break;
                    }
                }
                if( !alreadyFound ) {
                    searchOptionsFamilies.push( {
                        'value': snakes[i].family,
                        'info': 'family'
                    } );
                }

                // add to genera if not exist yet
                alreadyFound = false;
                for( j=0; j < searchOptionsGenera.length; j++ ) {
                    if( searchOptionsGenera[j].value === snakes[i].genus ) {
                        alreadyFound = true;
                        break;
                    }
                }
                if( !alreadyFound ) {
                    searchOptionsGenera.push( {
                        'value': snakes[i].genus,
                        'info': 'genus',
                        'family': snakes[i].family
                    } );
                }

                // synoyms
                let synonyms = [];

                if( snakes[i].allNames.synonyms ) {
                    for (j = 0; j < snakes[i].allNames.synonyms.length; j++) {
                        /*
                        if (synonyms.indexOf(snakes[i].allNames.synonyms[j]) === -1) {
                            synonyms.push(snakes[i].allNames.synonyms[j]);
                        }
                        */
                        synonyms.push(snakes[i].allNames.synonyms[j]);
                    }
                }

                // add to binomials
                searchOptionsBinomials.push( {
                    'value': snakes[i].allNames.binomial,
                    'synonyms': synonyms,
                    'info': 'binomial',
                    'genus': snakes[i].genus,
                    'family': snakes[i].family
                } );
            }

        }

        function sortThings(a, b) {
            if (a.value > b.value) {
                return 1;
            } else if (a.value < b.value) {
                return -1;
            } else if (a.value === b.value) {
                return 0;
            }
        }
        searchOptionsBinomials.sort( sortThings );
        searchOptionsGenera.sort( sortThings );
        searchOptionsFamilies.sort( sortThings );


        let searchOptionContainerFamilies = { 'label': 'Families', 'showLabel': true, 'fontStyle': 'normal', 'options': searchOptionsFamilies };
        let searchOptionContainerGenera = { 'label': 'Genera', 'showLabel': true, 'fontStyle': 'normal', 'options': searchOptionsGenera };
        let searchOptionContainerBinomials = { 'label': 'Binomials', 'showLabel': true, 'fontStyle': 'italic', 'options': searchOptionsBinomials };

        commit('SET_OPTIONCONTAINERS', [ searchOptionContainerFamilies, searchOptionContainerGenera, searchOptionContainerBinomials ]);
        commit('SET_CONTAINERVERSION', newVersion );
    },
    setChallengeState({state, commit, rootState}, values) {
        commit('SET_CHALLENGE_STATE', values);
    },
    setDates({state, commit, rootState}, values) {
        commit('SET_DATES', values);
    }
}
const mutations = {
    SET_OPTIONCONTAINERS(state, value) {
        state.optionContainers = value;
    },
    SET_CONTAINERVERSION(state, value) {
        state.containerVersion = value;
    },
    SET_CHALLENGE_STATE(state, value) {
        state.challengeState = value;
    },
    SET_DATES(state, values) {
        state.challengeStartISO = values[0];
        state.challengeEndISO = values[1];
    }
}

const getters = {
    optionContainers: state => state.optionContainers
}

const state = {
    optionContainers: null,
    containerVersion: 0.2,
    activityId: '74033a29-4346-485d-b0e3-3f263a507837',
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
}
