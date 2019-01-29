<template>
    <div class="scores">
        <div class="content-wrapper">
            <div class="row row-centered">

                <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                    <div class="form-field form-field-block form-field-right-aligned form-field-big">
                        <label>High Score</label>
                        805
                        <div class="small">by some.username</div>
                    </div>
                </div>
                <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                    <div class="form-field form-field-block">
                        <label>Number of Users</label>
                        87
                    </div>
                    <div class="form-field form-field-block">
                        <label>Number of Submissions</label>
                        254
                    </div>
                </div>

                <template>

                    <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                        <div class="form-field form-field-block form-field-right-aligned form-field-big">
                            <label>Your Score</label>
                            {{ score }}
                        </div>
                    </div>

                    <template v-if="!user.isAnon && user.currentUser">
                        <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                            <div class="form-field form-field-block form-field-big">
                                <label>Your Rank</label>
                                <span style="font-weight: 400">87.</span>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                            <h2 class="subheading">Create an Account</h2>
                            <p>Create an account now or your score is lost.</p>
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
                score: state => state.score.score
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
                line-height: 1.35;
                label {
                    line-height: 1.25;
                    font-size: $font-size-medium;
                }
                .small {
                    font-weight: 400;
                    font-size: $font-size-small;
                }
            }
        }

        .subheading {
            line-height: 1.25;
            margin-bottom: calc( #{$spacing-1} /2 );
        }
        p {
            margin-bottom: $spacing-1;
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
                margin-bottom: $spacing-1;
            }
            p {
                margin-bottom: $spacing-2;
            }

        }

    }



</style>
