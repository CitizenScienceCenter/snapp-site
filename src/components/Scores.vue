<template>
    <div class="scores">
        <div class="content-wrapper">
            <div class="row row-centered">

                <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                    <div class="form-field form-field-block form-field-right-aligned form-field-big">
                        <label>High Score</label>
                        {{ highscore.score }}
                        <div v-if="highscore.username.substring(0,5) !== '_anon'" class="small">by {{ highscore.username }}</div>
                        <div v-else class="small">by Anonymous</div>
                    </div>
                </div>
                <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                    <div class="form-field form-field-block">
                        <label>Number of Users</label>
                        {{ allUsersCount }}
                    </div>
                    <div class="form-field form-field-block">
                        <label>Number of Submissions</label>
                        {{ allSubmissionsCount }}
                    </div>
                </div>

                <template>

                    <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                        <div class="form-field form-field-block form-field-right-aligned form-field-big">
                            <label>Your Score</label>
                            {{ score }}
                        </div>
                    </div>

                    <template>
                        <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                            <div class="form-field form-field-block">
                                <label>Your Rank</label>
                                <span>{{ rank }}.</span>
                            </div>
                            <div class="form-field form-field-block">
                                <label>Your Progress</label>
                                <span>{{ Math.round( (submissionsCount/totalTaskCount)*1000 )/10 }}% </span><span class="small">({{submissionsCount}}/{{totalTaskCount}})</span>
                            </div>
                        </div>
                    </template>
                    <template v-if="!user.currentUser || user.isAnon">
                        <div class="col centered col-wrapping col-no-bottom-margin extra-margin-top">
                            <h3 class="subheading">Create an Account to Take Part in the Challenge</h3>
                            <router-link tag="button" to="/login" class="button button-primary">Register</router-link>
                        </div>
                    </template>

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
                font-size: $font-size-xxlarge;
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
