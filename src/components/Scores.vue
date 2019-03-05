<i18n>
    {
    "en": {

    "scores-highscore": "High Score",
    "scores-highscore-by": "by",
    "scores-users": "Number of Users",
    "scores-submissions": "Number of Submissions",
    "scores-yourscore": "Your Score",
    "scores-yourrank": "Your Rank",
    "scores-yourprogress": "Your Progress",

    "scores-register-text": "Create an Account to Take Part in the Challenge",
    "scores-register-button": "Register Now"

    },
    "de": {

    "scores-highscore": "High Score",
    "scores-highscore-by": "von",
    "scores-users": "Anzahl Benutzer",
    "scores-submissions": "Anzahl Antworten",
    "scores-yourscore": "Deine Punktzahl",
    "scores-yourrank": "Dein Rang",
    "scores-yourprogress": "Dein Fortschritt",

    "scores-register-text": "Erstelle einen Account um teilzunehmen",
    "scores-register-button": "Jetzt Registrieren"

    }
    }
</i18n>


<template>
    <div class="scores">
        <div class="content-wrapper">
            <div class="row row-centered">

                <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                    <div class="form-field form-field-block form-field-right-aligned form-field-big">
                        <label>{{ $t('scores-highscore') }}</label>
                        {{ highscore.score }}
                        <div v-if="highscore.username.substring(0,5) !== '_anon'" class="small">{{ $t('scores-highscore-by') }} {{ highscore.username }}</div>
                        <div v-else class="small">{{ $t('scores-highscore-by') }} Anonymous</div>
                    </div>
                </div>
                <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                    <div class="form-field form-field-block">
                        <label>{{ $t('scores-users') }}</label>
                        {{ allUsersCount }}
                    </div>
                    <div class="form-field form-field-block">
                        <label>{{ $t('scores-submissions') }}</label>
                        {{ allSubmissionsCount }}
                    </div>
                </div>

                <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                    <div class="form-field form-field-block form-field-right-aligned form-field-big">
                        <label>{{ $t('scores-yourscore') }}</label>
                        {{ score }}
                    </div>
                </div>

                <template>
                    <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                        <div class="form-field form-field-block">
                            <label>{{ $t('scores-yourrank') }}</label>
                            <span>{{ rank }}.</span>
                        </div>
                        <div class="form-field form-field-block">
                            <label>{{ $t('scores-yourprogress') }}</label>
                            <span>{{ Math.round( (submissionsCount/totalTaskCount)*1000 )/10 }}% </span><span class="small">({{submissionsCount}}/{{totalTaskCount}})</span>
                        </div>
                    </div>
                </template>

                <template v-if="!user.currentUser || user.isAnon">
                    <div class="col centered col-wrapping col-no-bottom-margin extra-margin-top">
                        <h3 class="subheading">{{ $t('scores-register-text') }}</h3>
                        <router-link tag="button" to="/login" class="button button-primary">{{ $t('scores-register-button') }}</router-link>
                    </div>
                </template>

            </div>
        </div>
    </div>

</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: "Scores",
        computed: {
            ...mapState({
                user: state => state.c3s.user,

                highscore: state => state.score.highscore,
                allUsersCount: state => state.score.allUsersCount,
                allSubmissionsCount: state => state.score.allSubmissionsCount,
                score: state => state.score.score,
                rank: state => state.score.rank,
                submissionsCount: state => state.score.submissionsCount,
                totalTaskCount: state => state.score.totalTaskCount,
            })
        }
    }

</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


    .scores {

        .form-field {
            margin-bottom: $spacing-2;

            &.form-field-big {
                font-size: $font-size-xlarge;
                font-weight: bold;
                line-height: 1.3;
                label {
                    line-height: 1.25;
                    font-size: $font-size-medium;
                }
                .small {
                    font-weight: 400;
                    font-size: $font-size-normal;
                }
            }

            .small {
                font-weight: 400;
                font-size: $font-size-small;
            }
        }

        .subheading {
            margin-bottom: $spacing-2;
        }

    }

    @media only screen and (min-width: $viewport-tablet-portrait) {

        .scores {

            .form-field {
                margin-bottom: $spacing-2;

                &.form-field-big {
                    font-size: $font-size-xxlarge;
                    label {
                    }
                }
            }

            .subheading {
                margin-bottom: $spacing-3;
            }

        }

    }



</style>
