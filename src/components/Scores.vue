<template>
    <div class="content-wrapper">
        <div class="row row-centered">

            <template v-if="user">

                <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                    <div class="form-field form-field-block form-field-right-aligned">
                        <label>Your Score</label>
                        <div class="text-large right-aligned">{{ score }}</div>
                    </div>
                </div>

                <template v-if="!user.isAnon">
                    <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                        <div class="form-field form-field-block">
                            <label>Your Rank</label>
                            <div class="text-large">805</div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="col col-6 col-large-3 col-wrapping col-large-no-bottom-margin">
                        <h2 class="subheading">Create Account</h2>
                        <p>Create an account now or your score is lost.</p>
                        <router-link tag="button" to="/login" class="button button-primary">Login</router-link>
                    </div>
                </template>

            </template>

            <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                <div class="form-field form-field-block form-field-right-aligned">
                    <label>High Score</label>
                    <div class="text-large right-aligned">805</div>
                    <div class="text-small right-aligned">by anon</div>
                </div>
            </div>
            <div class="col col-6 col-large-3 col-wrapping col-no-bottom-margin">
                <div class="form-field form-field-block">
                    <label>Number of Users</label>
                    87
                </div>
                <div class="form-field form-field-block">
                    <label>Number of Submissions</label>
                    254
                </div>
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



</style>
