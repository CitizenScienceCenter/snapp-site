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

        <app-content-section>
            <div class="content-wrapper">

                <div class="content-subsection">
                    <div class="row row-centered">
                        <div class="col-6">

                            <template v-if="tasks.length && tasks[0] && taskMedia[0]">

                                <p class="centered">
                                    <img :src="'img/tasks/'+taskMedia[0].name" />
                                </p>


                                <p class="centered">
                                    {{ tasks[0].content.question.text }}
                                </p>

                                <p class="small">correct answer: {{ tasks[0].info.snake_name }}</p>

                                <div class="form-field" style="display: block">
                                    <input type="text" id="answer" :placeholder="tasks[0].content.answers[0].placeholder" :disabled="loading" v-model="responseText" />
                                </div>

                                <div class="button-group right-aligned">
                                    <button class="button button-primary" :disabled="loading || !responseText" @click.prevent="submitResponse()">Send</button>
                                    <button class="button button-secondary" @click.prevent="nextTask()" :disabled="loading">Skip</button>
                                </div>

                            </template>

                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>


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
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        data() {
            return {
                taskIndex: 0,
                taskCount: undefined,
                responseText: undefined,
                allUserSubmissions: [],
                userSubmissions: []
            }
        },
        computed: mapState({
            activityId: state => state.consts.activityId,
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity,
            tasks: state => state.c3s.task.tasks,
            taskMedia: state => state.c3s.task.media,
            currentUser: state => state.c3s.user.currentUser,
            submission: state => state.c3s.submission.submission,
            loading: state => state.c3s.settings.loading
        }),
        mounted() {
            this.$store.dispatch("c3s/activity/getActivity", [this.activityId, false]).then(activity => {

                const taskCountQuery = {
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
                    }
                };

                this.$store.dispatch('c3s/task/getTaskCount', taskCountQuery).then( count => {
                    this.taskCount = count.body;

                    this.loadTask();
                });

            });
        },
        methods: {
            loadTask: function (taskIndex) {

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
                    "offset": this.taskIndex
                };


                if (this.taskIndex < this.taskCount) {

                    this.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(tasks => {

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
                                    "val": this.tasks[0].id
                                }
                            }
                        };

                        this.$store.dispatch('c3s/media/getMedia', [mediaQuery, 'c3s/task/SET_MEDIA', 1]).then(media => {

                            this.responseText = "";

                        });
                    });
                }

            },
            nextTask: function () {
                if (this.taskIndex < this.taskCount - 1) {
                    this.taskIndex++;

                    this.loadTask();
                }
                else {
                    alert("no more tasks");
                }
            },
            submitResponse: function() {

                let validation = false;
                if( this.responseText === this.tasks[0].info.snake_name ) {
                    validation = "correct";
                }
                /*
                else if( this.responseText === this.tasks[0].info.snake_family ) {
                    correct = true;
                }
                */
                else {
                    validation = "incorrect";
                }


                const sub = {
                    "info": {},
                    "content": {
                        "responses": [{
                            "text": this.responseText,
                            "validation": validation
                        }]
                    },
                    "task_id": this.tasks[0].id,
                    "user_id": this.currentUser.id
                };

                this.$store.commit('c3s/submission/SET_SUBMISSION', sub );
                console.log( this.submission );
                this.$store.dispatch('c3s/submission/createSubmission').then(submission => {
                    this.$store.dispatch('score/calculateScore');
                    this.nextTask();
                });
            }
        }
    }

</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


</style>
