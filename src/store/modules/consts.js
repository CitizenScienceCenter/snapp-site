import snakes from "@/assets/snakes.min.json";

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


const searchOptionContainerBinomials = { 'label': 'Binomials', 'showLabel': false, 'options': searchOptionsBinomials };
const searchOptionContainerGenera = { 'label': 'Genera', 'showLabel': true, 'options': searchOptionsGenera };
const searchOptionContainerFamilies = { 'label': 'Families', 'showLabel': true, 'options': searchOptionsFamilies };

const searchOptionsContainers = [ searchOptionContainerBinomials, searchOptionContainerGenera, searchOptionContainerFamilies ];

console.log( searchOptionsContainers );

const state = {
    searchOptionsContainers: searchOptionsContainers,
    activityId: '6ed23678-aa60-4116-85cc-f5206679da2b'
}

export default {
  namespaced: true,
  state
}
