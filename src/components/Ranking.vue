<i18n>
    {

    "en": {

    "label-username": "Username",
    "label-score": "Score"

    },

    "de": {

    "label-username": "Benutzername",
    "label-score": "Punktezahl"

    }

    }
</i18n>

<template>
    <table class="ranking">
        <tr>
            <th></th>
            <th>{{ $t('label-username') }}</th>
            <th>{{ $t('label-score') }}</th>
        </tr>
        <tr v-for="(place,index) in top30" v-if="!limit || index < Number(limit)">
            <td>{{place.rank}}</td>
            <td v-if="place.username.substr(0,5) !== '_anon'"><b>{{place.username}}</b></td>
            <td v-else><b>(Anyonymous)</b></td>
            <td>{{place.score}}</td>
        </tr>
    </table>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: "Ranking",
        props: {
            limit: String
        },
        computed: {
            ...mapState({
                top30: state => state.score.top30
            })
        }
    }
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .ranking {
        table-layout: fixed;

        tr {

            th,td {
                &:nth-child(1), &:nth-child(3) {
                    text-align: right;
                }

                &:first-child {
                    width: 10%;
                }
            }

        }
    }



    @media only screen and (min-width: $viewport-large) {

        .ranking {
            table-layout: initial;

            tr {

                th,td {
                    &:first-child {
                        width: 1%;
                    }
                }

            }
        }

    }

</style>
