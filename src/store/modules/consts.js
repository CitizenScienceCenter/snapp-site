import snakes from "@/assets/snakes.json";

let searchOptionsFamilies = [];
let searchOptionsGenera = [];
let searchOptionsBinomials = [];

for( let i=0; i < snakes.length; i++ ) {

    let alreadyFound = false;
    let j;


    // !!!! FAMILIES AND GENERA ARE MIXED UP IN THE DATA !!!!


    // add to families if not exist yet
    for( j=0; j < searchOptionsFamilies.length; j++ ) {
        if( searchOptionsFamilies[j].value === snakes[i].genus ) {
            alreadyFound = true;
            break;
        }
    }
    if( !alreadyFound ) {
        searchOptionsFamilies.push( {
            'value': snakes[i].genus,
            'info': 'family'
        } );
    }

    // add to genera if not exist yet
    alreadyFound = false;
    for( j=0; j < searchOptionsGenera.length; j++ ) {
        if( searchOptionsGenera[j].value === snakes[i].family ) {
            alreadyFound = true;
            break;
        }
    }
    if( !alreadyFound ) {
        searchOptionsGenera.push( {
            'value': snakes[i].family,
            'info': 'genus',
            'family': snakes[i].genus
        } );
    }

    // synoyms
    let synonymsFixed = [];
    for( j=0; j < snakes[i].allNames.synonyms.length; j++ ) {
        if( snakes[i].allNames.synonyms[j] !== '' ) {
            synonymsFixed.push( snakes[i].allNames.synonyms[j] );
        }
    }
    // add to binomials
    searchOptionsBinomials.push( {
        'value': snakes[i].allNames.binomial,
        'synonyms': synonymsFixed,
        'info': 'binomial',
        'genus': snakes[i].family,
        'family': snakes[i].genus
    } );
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
