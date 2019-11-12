import snakes from "@/assets/snakes2.min.json";


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
                        'type': 'family'
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
                        'type': 'genus',
                        'family': snakes[i].family
                    } );
                }

                // synoyms
                let synonyms = [];
                if( snakes[i].allNames.synonyms ) {
                    for (j = 0; j < snakes[i].allNames.synonyms.length; j++) {
                        synonyms.push(snakes[i].allNames.synonyms[j]);
                    }
                }
                // add to binomials
                searchOptionsBinomials.push( {
                    'value': snakes[i].allNames.binomial,
                    'synonyms': synonyms,
                    'type': 'binomial',
                    'genus': snakes[i].genus,
                    'family': snakes[i].family,
                    'commonName': snakes[i].allNames.commonName
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


        let searchOptionContainerFamilies = { 'label': 'label-families', 'showLabel': true, 'options': searchOptionsFamilies };
        let searchOptionContainerGenera = { 'label': 'label-genera', 'showLabel': true, 'options': searchOptionsGenera };
        let searchOptionContainerBinomials = { 'label': 'label-binomials', 'showLabel': true, 'options': searchOptionsBinomials };

        commit('SET_OPTIONCONTAINERS', [ searchOptionContainerFamilies, searchOptionContainerGenera, searchOptionContainerBinomials ]);
        commit('SET_CONTAINERVERSION', newVersion );
    }
};
const mutations = {
    SET_OPTIONCONTAINERS(state, value) {
        state.optionContainers = value;
    },
    SET_CONTAINERVERSION(state, value) {
        state.containerVersion = value;
    }
};

const getters = {
    optionContainers: state => state.optionContainers
};

const state = {
    optionContainers: null,
    containerVersion: null
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
