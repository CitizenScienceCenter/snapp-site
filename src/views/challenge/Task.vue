<i18n>
    {
    "de": {
    "task-description": "Bitte übertragen Sie die im Bild ersichtlichen Sätze in das Eingabefeld."
    },
    "en": {
    "task-description": "Please transcribe the sentences from the picture above into the input field."
    }
    }
</i18n>


<template>

    <div>

        <section v-if="tasks.length">
            <task-question-image v-if="media.length > 0" :question="tasks[0].content.question"
                                 :imgPath="media[0].path"></task-question-image>
        </section>

        <app-content-section class="content-section-condensed">
            <div class="content-wrapper">

                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <p class="centered">
                                {{ $t('task-description') }}
                            </p>

                        </div>
                    </div>
                </div>

                <div class="content-subsection" v-if="responses.length">
                    <task-response :answers="tasks[0].content.answers" :responses="responses" :showSpecial="true"></task-response>
                </div>

                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <p class="button-group centered task-switch-bar">
                                <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                                <label>{{$route.query.count}} von {{taskCount}}</label>
                                <button v-on:click="submitTask" :disabled="loading" class="button button-primary">Nächster Bogen</button>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>


        <comments-list v-if="tasks.length" :id="tasks[0].id"></comments-list>

        <app-footer></app-footer>

    </div>

</template>

<script>

    import {mapState} from 'vuex'
    import CommentsList from '@/components/comments-list'
    import TaskQuestionImage from '@/components/TaskQuestionImage'
    import TaskResponse from '@/components/TaskResponse'
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'

    export default {
        name: 'Task',
        components: {
            TaskQuestionImage,
            TaskResponse,
            'app-content-section': ContentSection,
            CommentsList,
            'app-footer': Footer
        },
        computed: mapState({
            specialChars: state => state.consts.specialChars,
            tasks: state => state.c3s.task.tasks,
            media: state => state.c3s.task.media,
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity,
            comments: state => state.c3s.task.comments,
            loading: state => state.c3s.settings.loading
        }),
        watch: {
            '$route.query.count'(to, from) {
                this.loadTask(to)
            }
        },
        data() {
            return {
                task_help: '',
                nextTxt: 'Next',
                responses: [],
                taskCount: 1,
                submissions: []
            }
        },
        mounted() {
            if (this.activity && this.activity.id) {
                this.loadTask(this.$route.query['count']);
            } else {
                console.log('No activity set in the store!');
                //    TODO show error for no activity
                this.$router.push({name: 'TranscribeStart'})
            }
        },
        // TODO add route leave guard to save submission before exiting
        methods: {
            loadTask(count) {
                const taskQuery = {
                    "select": {
                        "fields": [
                            "*"
                        ],
                        "tables": [
                            "tasks"
                        ]
                    },
                    "where": {
                        "activity_id": {
                            "op": "e",
                            "val": this.activity.id
                        }
                    },
                    "limit": 1,
                    "offset": count - 1
                };
                if (this.$route.query.hasOwnProperty('region')) {
                    const userRegion = this.$route.query['region'];
                    taskQuery['where']["info ->> 'SchoolRegion'"] = {'op': 'e', 'val': userRegion, "join": "a"}
                }
                this.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
                    this.taskCount = c.body
                })
                this.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(t => {
                    if (t.body && t.body.length > 0) {
                        const task = t.body[0];
                        const mediaQuery = {
                            "select": {
                                "fields": [
                                    "*"
                                ],
                                "tables": [
                                    "media"
                                ]
                            },
                            "where": {
                                "source_id": {
                                    "op": "e",
                                    "val": task.id
                                }
                            },
                            "limit": 10
                        };
                        this.responses =[]
                        for (let i = 0; i < task.content.answers.length; i++) {
                            this.responses.push({text: ""})
                        }
                        this.createSubmission();
                        this.$store.dispatch('c3s/media/getMedia', [mediaQuery, undefined, 100]).then(m => {
                            let media = m.body.slice();
                            for (let index in media) {
                                media[index].path = media[index].path.replace('./static', 'https://wenker.citizenscience.ch/files')
                            }
                            console.log(media[0].path)
                            this.$store.commit('c3s/task/SET_MEDIA', media)
                        })
                    } else {
                        console.log('No tasks found');
                        this.$router.push({'name': 'TranscribeComplete'})
                    }
                })
            },
            createSubmission() {
                const submission = {
                    user_id: this.user.id,
                    task_id: this.tasks[0].id,
                    content: {}
                };
                this.$store.commit('c3s/submission/SET_SUBMISSION', submission)
            },
            endTask() {
                //TODO do not submit if responses are ALL empty
                this.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', this.responses);
                this.$store.dispatch('c3s/submission/createSubmission').then(s => {
                    this.$router.push({
                        name: 'TranscribeComplete'
                    })
                })
            },
            submitTask() {
                let responded = false;
                for (let i in this.responses) {
                    if (this.responses[i].text.length > 0) {
                        responded = true;
                        break;
                    }
                }
                let qu = Object.assign({}, this.$route.query);
                qu['count'] = parseInt(qu['count']) + 1;
                if (responded) {
                    this.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', this.responses);
                    this.$store.dispatch('c3s/submission/createSubmission').then(s => {
                        if (qu['count'] > this.taskCount) {
                            this.$store.commit('c3s/activity/SET_ACTIVITY', null);
                            this.$router.push({
                                name: 'TranscribeComplete'
                            })
                        } else {
                            this.$router.replace({name: 'TranscribeTask', query: qu})
                        }
                    })
                } else {
                    this.$router.replace({name: 'TranscribeTask', query: qu})
                }

            }
        }

      }

</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


</style>
