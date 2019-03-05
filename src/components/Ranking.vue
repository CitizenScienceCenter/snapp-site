<template>
    <table class="ranking">
        <tr>
            <th></th>
            <th>Username</th>
            <th>Score</th>
        </tr>
        <tr v-for="(place,index) in top30" v-if="!limit || index < Number(limit)">
            <td>{{place.rank}}</td>
            <td v-if="place.username.substr(0,5) !== '_anon'"><b>{{place.username}}</b></td>
            <td v-else>(Anyonymous)</td>
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
        tr {

            th,td {
                &:nth-child(1), &:nth-child(3) {
                    text-align: right;
                }
            }

        }
    }

</style>
