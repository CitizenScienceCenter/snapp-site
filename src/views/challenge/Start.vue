<i18n>
    {
    "de": {
    "heading": "Transkribieren",
    "heading-activity-description": "Aufgabe",
    "activity-description": "Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!",
    "form-heading": "Ihre Angaben",
    "button-start": "Starten",
    "button-start-region": "Starten mit Bögen aus der Region",
    "login-heading": "Sie haben sich schon registiert?",
    "button-login": "Anmelden"
    },
    "en": {
    "heading": "Transcription",
    "heading-activity-description": "Task",
    "activity-description": "The 1700 hand-written swiss Wenker sheets must be accurately copied in order to process them digitally. For that we need your support!",
    "form-heading": "Your Info",
    "button-start": "Start",
    "button-start-region": "Start with sheets from your region",
    "login-heading": "Already registered?",
    "button-login": "Login"
    }
    }
</i18n>


<template>

    <div>

        <app-content-section class="content-section-condensed">
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col">
                        <h2 class="heading centered">{{ $t('heading') }}</h2>
                    </div>
                </div>

                <div class="row row-centered">

                    <div class="col col-tablet-portrait-10 col-large-4 col-large-after-2 col-wrapping col-large-no-bottom-margin">
                        <h3 class="subheading centered left-aligned-large">{{ $t('heading-activity-description') }}</h3>
                        <p class="lead" v-html="$t('activity-description')"></p>
                    </div>

                    <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-no-bottom-margin">

                        <div class="content-subsection">
                            <h3 class="subheading centered left-aligned-large">{{ $t('form-heading') }}</h3>
                            <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->

                            <activity-details-form ref="details" :activity="activity" :allRegions="false"
                                                   :errors="errors"></activity-details-form>

                            <div class="button-group centered left-aligned-large">
                                <button class="button button-primary" v-on:click="startProject">{{ $t('button-start')
                                    }}
                                </button>
                                <br>
                                <button class="button button-secondary" :disabled="$refs.details && $refs.details.taskCount === 0"
                                        v-on:click="startProjectRegion">{{
                                    $t('button-start-region') }}
                                </button>
                            </div>
                        </div>
                        <div class="content-subsection">
                            <h3 class="subheading centered left-aligned-large">{{ $t('login-heading') }}</h3>
                            <div class="button-group centered left-aligned-large">
                                <router-link to="/register" tag="button" class="button button-secondary">{{
                                    $t('button-login') }}
                                </router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </app-content-section>

        <comments-list :id=id></comments-list>

        <app-footer></app-footer>

    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import CommentsList from '@/components/comments-list.vue'
    import ActivityDetailsForm from '@/components/ActivityDetailsForm'
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'


    export default {
        name: 'Start',
        data() {
            return {
                regions: [],
                project: {},
                stats: {},
                id: "e4b5ebc5-47a2-430b-84a9-a03b1d4dda34",
                comments: [],
                errors: {
                    canton: false,
                    age: false
                },
                taskCount: 1
            }
        },
        watch: {
            tasks(to, from) {
            },
            '$route.params.id'(to, from) {
            },
            '$refs.details.taskCount'(to, from) {
                this.taskCount = to;
            }
        },
        components: {
            ActivityDetailsForm,
            CommentsList,
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity
        }),
        mounted() {
            this.$store.commit('c3s/activity/SET_ACTIVITY', null);
            this.$store
                .dispatch("c3s/activity/getActivity", [
                    this.id,
                    false
                ]).then(a => {
                // console.log(a)
            })
        },
        methods: {
            startProject() {
                if (this.userCheck()) {
                    this.$router.push({name: 'TranscribeTask', query: {'count': 1}})
                }
            },
            startProjectRegion() {
                if (this.userCheck()) {
                    this.$router.push({name: 'TranscribeTask', query: {'region': this.user.info.canton, 'count': 1}})
                }
            },
            userCheck() {
                if (this.user.hasOwnProperty('info') && this.user.info !== null) {
                    if (!(this.user.info.hasOwnProperty('ageRange'))) {
                        this.errors.age = true;
                    }
                    if (!(this.user.info.hasOwnProperty('canton'))) {
                        this.errors.canton = true;
                    }
                } else {
                    this.errors.age = true;
                    this.errors.canton = true;
                }
                if (this.errors.canton || this.errors.age) {
                    return false
                } else {
                    return true
                }
            }
        }
    }
</script>

<style lang="scss">



</style>
