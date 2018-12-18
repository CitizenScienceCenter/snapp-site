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

    <div v-if="tasks.length && tasks[0] && taskMedia[0]">

        <div class="section-wrapper">

            <app-content-section class="content-section-flat settings-section" color="light-greyish">
                <div class="settings">

                    <div class="content-wrapper">
                        <div class="row row-centered row-large-right-aligned">
                            <div class="col col-large-5">

                                <div class="difficulty-select">
                                    <label>Difficulty</label>
                                    <div class="custom-select custom-select-mini">
                                        <select>
                                            <option selected>Easy</option>
                                            <option>Medium</option>
                                            <option>Hard</option>
                                        </select>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                            <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="region-select">
                                    <label>Region</label>
                                    <div class="custom-select custom-select-mini">
                                        <select>
                                            <option selected>Africa</option>
                                            <option>Asia</option>
                                        </select>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                            <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </app-content-section>


            <app-content-section class="content-section-condensed response-section">

                <div class="content-wrapper">
                    <div class="row row-centered row-large-right-aligned">
                        <div class="col col-large-5">

                            <h2 class="heading">
                                What Snake is This?
                                <!-- {{ tasks[0].content.question.text }} -->
                            </h2>
                            <ul>
                                <li>
                                    Earn 10 points for the correct answer.
                                </li>
                                <li>
                                    Earn 5 points for the correct family.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </app-content-section>

            <app-content-section class="content-section-flat image-section">
                <image-viewer class="image-viewer":src="'img/tasks/'+taskMedia[0].name" disableScrollToZoom></image-viewer>
            </app-content-section>

            <app-content-section class="content-section-condensed">
                <div class="content-wrapper">
                    <div class="row row-centered row-large-right-aligned">
                        <div class="col col-large-5">

                            <div class="form-field" style="display: block">
                                <search-select
                                        :placeholder="tasks[0].content.answers[0].placeholder"
                                        :optionContainers="searchOptionsContainers"
                                        v-model="value">
                                </search-select>
                            </div>

                            <div class="button-group right-aligned">
                                <button ref="submit" class="button button-primary" :disabled="loading || !value" @click.prevent="submitResponse()">Send</button>
                                <!--<button ref="submit" id="submit" class="button button-primary" @click.prevent="submitResponse()">Send</button>-->
                                <button ref="skip" class="button button-secondary" @click.prevent="nextTask()" :disabled="loading">Skip</button>
                            </div>

                            <div class="mongo">correct answer: {{ tasks[0].info.snake_name }}</div>


                        </div>
                    </div>
                </div>
            </app-content-section>

        </div>

        <app-content-section class="content-section-condensed" color="light-greyish">
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col">
                        stats
                    </div>
                </div>
            </div>
        </app-content-section>

        <app-content-section>
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col">
                        price info
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
import ImageViewer from '@/components/ImageViewer.vue'
import SearchSelect from '@/components/shared/SearchSelect.vue'

export default {
    name: 'Task',
    components: {
        'app-content-section': ContentSection,
        'app-footer': Footer,
        'image-viewer': ImageViewer,
        'search-select': SearchSelect
    },
    data() {
        return {
            taskIndex: 0,
            taskCount: 0,
            searchOptionsContainers: [],
            value: null
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
        loading: state => state.c3s.settings.loading,
        snakeNames: state => state.consts.snakeNames,
        snakeFamilyNames: state => state.consts.snakeFamilyNames
    }),
    watch: {
        value: function() {
            if( this.value ) {
                // v-bind for disabled is not done yet... ¯\_(ツ)_/¯
                this.$refs.submit.removeAttribute('disabled');
                this.$refs.submit.focus();
            }
        }
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


                        this.value = null;

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
            if( this.value.value === this.tasks[0].info.snake_name ) {
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
                        "text": this.value.value,
                        "validation": validation
                    }]
                },
                "task_id": this.tasks[0].id,
                "user_id": this.currentUser.id
            };

            this.$store.commit('c3s/submission/SET_SUBMISSION', sub );

            this.$store.dispatch('c3s/submission/createSubmission').then(submission => {

                this.$store.dispatch('score/calculateScore');
                this.nextTask();
            });
        }
    },
    mounted() {

        this.$store.commit('c3s/task/SET_MEDIA', [] );

        let searchOptionsSpecies = [];
        for( let i=0; i < this.snakeNames.length; i++ ) {
            let option = { 'value': this.snakeNames[i], 'info': 'species', 'id': null };
            searchOptionsSpecies.push( option );
        }
        let searchOptionContainerSpecies = { 'label': 'Species', 'showLabel': false, 'options': searchOptionsSpecies };

        let searchOptionsFamilies = [];
        for( let i=0; i < this.snakeFamilyNames.length; i++ ) {
            let option = { 'value': this.snakeFamilyNames[i], 'info': 'family', 'id': null };
            searchOptionsFamilies.push( option );
        }
        let searchOptionContainerFamilies = { 'label': 'Families', 'showLabel': true, 'options': searchOptionsFamilies };

        this.searchOptionsContainers = [searchOptionContainerSpecies,searchOptionContainerFamilies];



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
    }
}

</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


.custom-select-mini {
    select {
        border-bottom: none;
        font-size: $font-size-small;
    }
}

.settings {

    padding: $spacing-2 0;

    .difficulty-select {
        display: inline-block;
        margin-right: $spacing-2;

        label {
            font-weight: bold;
            margin-right: $spacing-2;
        }
    }
    .region-select {
        display: inline-block;

        label {
            font-weight: bold;
            margin-right: $spacing-2;
        }
    }
}

.image-viewer {
    height: 360px;
}

.mongo {
    position: absolute;
    bottom: 0;
    font-size: $font-size-small/1.25;
}



@media only screen and (min-width: $viewport-tablet-portrait) {


}

@media only screen and (min-width: $viewport-large) {

    .section-wrapper {
        position: relative;

        .image-section {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;

            .image-viewer {
                height: 100%;
                z-index: 1;
            }
        }
    }


}




</style>
