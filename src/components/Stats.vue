<i18n>
    {

    "en": {

    "label-users": "Number of Users",
    "label-submissions": "Number of Submissions"

    },

    "de": {

    "label-users": "Anzahl Teilnehmer",
    "label-submissions": "Anzahl Antworten"

    }

    }
</i18n>

<template>
    <div class="content-wrapper stats-wrapper">
        <div class="row row-centered row-middle">

            <div class="col col-large-4 col-large-before-1 centered">
                <label>{{ $t('label-users') }}</label><span class="value">{{allUsersCount}}</span>
            </div>
            <div class="col col-large-4 col-large-after-1 centered">
                <label>{{ $t('label-submissions') }}</label><span class="value">{{allSubmissionsCount}}</span>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Stats",
        computed: {
        ...mapState({
                allUsersCount: state => state.score.allUsersCount,
                allSubmissionsCount: state => state.score.allSubmissionsCount,
            })
        }
    }
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .stats-wrapper {
        label {
            margin-right: $spacing-2;
        }
        .value {
            font-size: $font-size-medium;
            font-weight: 700;
        }
    }

</style>
