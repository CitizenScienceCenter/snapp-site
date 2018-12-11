<i18n>
    {
    "de": {
    "heading": "Dein Profil",
    "label-email": "Email",
    "label-api-key": "API Key",
    "submission-heading": "Deine Statistik",
    "submission-transcription-prefix": "Du hast ",
    "submission-transcription-between": " Sätze auf ",
    "submission-transcription-suffix": " Bögen transkribiert.",
    "submission-translation-prefix": "Du hast ",
    "submission-translation-suffix": " Sätze übersetzt",
    "thanks": "Vielen Dank für Deine Hilfe!",
    "button-logout": "Ausloggen",
    "button-reset": "Passwort zurücksetzen"
    },
    "en": {
    "heading": "Your Profile",
    "label-email": "Email",
    "label-api-key": "API Key",
    "submission-heading": "Your Stats",
    "submission-transcription-prefix": "You have transcribed ",
    "submission-transcription-between": " sentences from ",
    "submission-transcription-suffix": " sheets.",
    "submission-translation-prefix": "You have translated ",
    "submission-translation-suffix": " sentences.",
    "thanks": "Thanks for helping!",
    "button-logout": "Logout",
    "button-reset": "Reset Password"
    }
    }
</i18n>

<template>
    <div>
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6">

                        <div class="content-subsection">
                            <h2 class="heading">{{ $t('heading') }}</h2>

                            <form novalidate disabled>
                                <div v-if="user" class="md-layout">
                                    <div>
                                        <label>{{ $t('label-email') }}</label>
                                        <p>{{ user.email }}</p>
                                    </div>

                                    <!--
                                    <div>
                                        <label>{{ $t('label-api-key') }}</label>
                                        <p>{{ user.api_key }}</p>
                                    </div>
                                    -->
                                </div>
                            </form>
                        </div>

                        <!--
                        <div class="content-subsection" v-if="submissions.length">
                            <h3 class="subheading">{{ $t('submission-heading') }}</h3>
                            <ul>
                                <li>
                                    {{ $t('challenge') }}99{{ $t('submission-transcription-between') }}{{this.submissionStats['Transkribieren']['count']}}{{ $t('submission-transcription-suffix') }}
                                </li>
                                <li>
                                    {{ $t('submission-translation-prefix') }}{{this.submissionStats['Übersetzen']['count']}}{{ $t('submission-translation-suffix') }}
                                </li>
                            </ul>
                            <p class="lead">{{ $t('thanks') }}</p>
                        </div>
                        -->

                        <div class="content-subsection">
                            <div class="button-group">
                                <router-link tag="button" to="/logout" class="button button-secondary">{{ $t('button-logout') }}</router-link>
                                <router-link tag="button" to="/reset" class="button button-secondary">{{ $t('button-reset') }}</router-link>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </app-content-section>

        <app-footer></app-footer>

    </div>
</template>

<script>
    import {mapState, mapGetters} from "vuex";
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'

    export default {
        name: "ViewUser",
        components: {
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        data() {
            return {
                submissions: [],
                submissionStats: {}
            };
        },
        computed: {
            ...mapState({
                //user: state => state.user.user,
                user: state => state.c3s.user.currentUser,
                loading: state => state.settings.loading
            }),
            totalSubs: () => {
                return this.submissions.length
            }
        },
        mounted() {
            const subQuery = {
                "select": {
                    "fields": [
                        "submissions.created_at",
                        "submissions.id as submission_id",
                        "activities.name as activity_name",
                        "submissions.user_id",
                        "submissions.content",
                        "submissions.task_id",
                        "activities.id as activity_id"
                    ],
                    "tables": [
                        "submissions",
                        "activities",
                        "tasks"
                    ]
                },
                "where": {
                    "submissions.user_id": {
                        "op": "e",
                        "val": this.user.id,
                        "join": "a"
                    },
                    "submissions.task_id": {
                        "op": "e",
                        'type': 'sql',
                        "val": "tasks.id",
                        "join": "a"
                    },
                    "tasks.activity_id": {
                        "op": "e",
                        'type': 'sql',
                        "val": "activities.id",
                        "join": "a"
                    }
                }
            };
            this.$store.dispatch('c3s/submission/getSubmissions', [subQuery, 100]).then(s => {
                if (s.ok) {
                    this.submissions = s.body;
                    for (let index in this.submissions) {
                        const sub = this.submissions[index];
                        const name = sub['activity_name'];
                        if (name in this.submissionStats) {
                            this.submissionStats[name]['subs'].push(sub);
                            this.submissionStats[name]['count'] += 1;
                        } else {
                            this.submissionStats[name] = {};
                            this.submissionStats[name]['subs'] = [];
                            this.submissionStats[name]['subs'].push(sub);
                            this.submissionStats[name]['count'] = 1;
                        }
                    }
                    //    TODO set up submissions table for users to see each project and see/delete details
                }
            })
        },
        methods: {
            calcTaskResponse(task) {
                let total = 0;

                for (let i in task) {
                    console.log(task[i].text.length)
                    if (task[i].text.length > 0) total += 1;
                }
                return total;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
