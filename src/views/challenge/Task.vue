<i18n>
    {
    "de": {
        "task-description": "Bitte übertragen Sie die im Bild ersichtlichen Sätze in das Eingabefeld.",

        "section-newsletter-heading": "Abonniere unseren Newsletter"
        },
    "en": {
        "task-description": "Please transcribe the sentences from the picture above into the input field.",

        "section-newsletter-heading": "Sign up for our Newsletter"
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
                                    <div class="custom-select settings-select">
                                        <select v-model="difficulty">
                                            <option selected value="0">Easy</option>
                                            <option value="1">Medium</option>
                                            <option value="2">Hard</option>
                                        </select>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                            <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="region-select">
                                    <label>Region</label>
                                    <div class="custom-select settings-select">
                                        <select v-model="region">
                                            <option selected value="All">All</option>
                                            <option value="Africa">Africa</option>
                                            <option value="Asia">Asia</option>
                                            <option value="Europe">Europe</option>
                                            <option value="Oceania">Oceania</option>
                                            <option value="North America">North America</option>
                                            <option value="South America">South America</option>
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


            <app-content-section class="content-section-condensed question-section">

                <div class="content-wrapper">
                    <div class="row row-centered row-large-right-aligned">
                        <div class="col col-large-5">

                            <h2 class="heading">
                                What Snake is This?
                                <!-- {{ tasks[0].content.question.text }} -->
                            </h2>
                            <ul>
                                <li>
                                    Earn 10 points for the correct binominal.
                                </li>
                                <li>
                                    Earn 8 points for the correct genus.
                                </li>
                                <li>
                                    Earn 6 points for the correct family.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </app-content-section>

            <app-content-section class="content-section-flat image-section">
                <image-viewer class="image-viewer" :src="'img/tasks/'+taskMedia[0].name" disableScrollToZoom></image-viewer>
                <div class="image-info image-location">
                    <span v-if="tasks[0].info.province">{{ tasks[0].info.province }}, </span>
                    <span v-if="tasks[0].info.country">{{ tasks[0].info.country }}, </span>
                    <span v-if="tasks[0].info.region">{{ tasks[0].info.region }}</span>
                </div>
                <div class="image-info image-source">
                    <span v-if="tasks[0].info.source">{{ tasks[0].info.source }}, </span>
                    <span v-if="tasks[0].info.photographer">{{ tasks[0].info.photographer }}</span>
                </div>
            </app-content-section>

            <app-content-section class="content-section-condensed response-section">
                <div class="content-wrapper">
                    <div class="row row-centered row-large-right-aligned">
                        <div class="col col-large-5">

                            <div class="form-field form-field-block">
                                <search-select
                                        placeholder="Binominal, Genus or Family"
                                        :optionContainers="searchOptionsContainers"
                                        v-model="value">
                                </search-select>
                            </div>

                            <div class="actions">

                                <div class="button-group right-aligned">
                                    <button ref="submit" class="button button-primary" :disabled="loading || !value || evaluation" @click.prevent="submitResponse()">Send</button>
                                    <!--<button ref="submit" id="submit" class="button button-primary" @click.prevent="submitResponse()">Send</button>-->
                                    <button ref="skip" class="button button-secondary" @click.prevent="nextTask()" :disabled="loading || evaluation">Skip</button>
                                </div>

                                <div class="evaluation" v-if="evaluation" :class="{ 'positive' : evaluation.type === 'success' || evaluation.type === 'almost' , 'negative' : evaluation.type === 'fail' }">
                                    <div class="message">
                                        {{evaluation.type}} -> {{evaluation.score}}
                                    </div>
                                </div>

                                <div class="mongo">
                                    <label>Binominal: </label>{{ tasks[0].info.binominal }}
                                    <label style="margin-left: 8px">Genus: </label>{{ tasks[0].info.genus }}
                                    <label style="margin-left: 8px">Family: </label>{{ tasks[0].info.family }}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </app-content-section>

        </div>

        <app-content-section class="content-section-condensed" color="light-greyish">
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col col-large-2 col-wrapping col-large-no-bottom-margin">
                        <div class="form-field form-field-block form-field-right-aligned">
                            <label>Current Rank</label>
                            24.
                        </div>
                    </div>
                    <div class="col col-large-2 col-wrapping col-large-no-bottom-margin">
                        <div class="form-field form-field-block form-field-right-aligned">
                            <label>Your Score</label>
                            value
                        </div>
                    </div>
                    <div class="col col-large-2 col-wrapping col-large-no-bottom-margin">
                        <div class="form-field form-field-block form-field-right-aligned">
                            <label>Highscore</label>
                            value
                        </div>
                    </div>

                    <div class="col col-large-3 col-wrapping col-large-no-bottom-margin">

                        <div class="form-field form-field-block form-field-right-aligned">
                            <label>Your Stats</label>
                            value
                        </div>

                    </div>
                    <div class="col col-large-3 col-wrapping col-no-bottom-margin">

                        <div class="form-field form-field-block form-field-right-aligned">
                            <label>This Image</label>
                            value
                        </div>

                    </div>
                </div>
            </div>
        </app-content-section>

        <app-content-section>
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col col-large-6">

                        <comments :taskId="tasks[0].id"></comments>

                    </div>
                </div>
            </div>
        </app-content-section>

        <app-content-section color="greyish">
            <div class="content-wrapper">
                <div class="row row-centered row-middle">

                    <div class="col col-10 col-large-6 col-wrapping col-large-no-bottom-margin">
                        <div>
                            <div class="extra-padding-h-big">
                                <img src="img/graphic-price.jpg" style="transform: rotate(-4deg); box-shadow: 0px 0px 48px -16px rgba(0,0,0, 0.8);" />
                            </div>
                        </div>
                    </div>

                    <div class="col col-large-5 col-large-after-1 col-wrapping col-no-bottom-margin">
                        <div>
                            <h2 class="heading centered left-aligned-large">Win a Copy of ‘Venomous Snakes of the World’</h2>
                            <p>
                                Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </app-content-section>

        <app-content-section color="dark">
            <div class="content-wrapper">
                <div class="row row-centered row-middle row-reverse-large">

                    <div class="col col-10 col-large-6 col-wrapping col-no-bottom-margin">
                        <div>
                            <div class="extra-padding-h">
                                <img src="img/graphic-about.jpg" style="border-radius: 50%" />
                            </div>
                        </div>
                    </div>

                    <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin">
                        <div>
                            <h2 class="heading centered left-aligned-large">Why this Challenge?</h2>
                            <p>
                                Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.
                            </p>
                            <p class="centered left-aligned-large">
                                <router-link tag="button" to="/about" class="button button-secondary button-secondary-inverted">About the Challenge</router-link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </app-content-section>

        <app-content-section color="greyish">
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col col-mobile-large-10">
                        <h2 class="heading centered">{{ $t('section-newsletter-heading') }}</h2>
                    </div>
                </div>
                <div class="row row-centered">
                    <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-12">
                        <app-newsletter-signup></app-newsletter-signup>
                    </div>
                </div>
            </div>
        </app-content-section>

        <app-footer></app-footer>

    </div>

</template>

<script>

import {mapState} from 'vuex'

import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'
import ImageViewer from '@/components/ImageViewer.vue'
import SearchSelect from '@/components/SearchSelect.vue'
import Comments from '@/components/Comments.vue'

export default {
    name: 'Task',
    components: {
        'app-content-section': ContentSection,
        'app-footer': Footer,
        'app-newsletter-signup': NewsletterSignup,
        'image-viewer': ImageViewer,
        'search-select': SearchSelect,
        'comments': Comments
    },
    data() {
        return {
            taskIndex: 0,
            taskCount: 0,
            difficulty: 0,
            region: 'All',
            searchOptionsContainers: [],
            value: null,
            evaluation: null
        }
    },
    computed: mapState({
        activityId: state => state.consts.activityId,
        families: state => state.consts.families,
        genera: state => state.consts.genera,
        binomials: state => state.consts.binomials,

        user: state => state.c3s.user.currentUser,
        activity: state => state.c3s.activity.activity,
        tasks: state => state.c3s.task.tasks,
        taskMedia: state => state.c3s.task.media,
        currentUser: state => state.c3s.user.currentUser,
        submission: state => state.c3s.submission.submission,

        loading: state => state.c3s.settings.loading
    }),
    watch: {
        value: function() {
            if( this.value ) {
                console.log( this.value );
                // v-bind for disabled is not done, workaround... ¯\_(ツ)_/¯
                this.$refs.submit.removeAttribute('disabled');
                this.$refs.submit.focus();
            }
        },
        difficulty: function(to, from) {
            this.loadTask();
        },
        region: function(to, from) {
            this.loadTask();
        }
    },
    mounted() {

        console.log( this.$route.params.id );

        this.$store.commit('c3s/task/SET_MEDIA', [] );

        // binominals
        let searchOptionsBinominal = [];
        for( let i=0; i < this.binomials.length; i++ ) {
            let option = { 'value': this.binomials[i][0], 'synonyms': this.binomials[i][1], 'info': 'binominal', 'id': null };
            searchOptionsBinominal.push( option );
        }
        let searchOptionContainerBinominals = { 'label': 'Binominals', 'showLabel': false, 'options': searchOptionsBinominal };

        // genera
        let searchOptionsGenera = [];
        for( let i=0; i < this.genera.length; i++ ) {
            let option = { 'value': this.genera[i], 'info': 'genus', 'id': null };
            searchOptionsGenera.push( option );
        }
        let searchOptionContainerGenera = { 'label': 'Genera', 'showLabel': true, 'options': searchOptionsGenera };

        // families
        let searchOptionsFamilies = [];
        for( let i=0; i < this.families.length; i++ ) {
            let option = { 'value': this.families[i], 'info': 'family', 'id': null };
            searchOptionsFamilies.push( option );
        }
        let searchOptionContainerFamilies = { 'label': 'Families', 'showLabel': true, 'options': searchOptionsFamilies };

        this.searchOptionsContainers = [ searchOptionContainerBinominals, searchOptionContainerGenera, searchOptionContainerFamilies ];


        console.log('load activity');

        this.$store.dispatch("c3s/activity/getActivity", [this.activityId, false]).then(activity => {

            console.log('activity loaded');
            this.loadTask();

        });

    },
    methods: {
        loadTask: function (taskIndex) {

            console.log('load task count');

            let taskCountQuery;
            if( this.region === 'All' ) {
                console.log( 'without region ');
                taskCountQuery = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'tasks'
                        ]
                    },
                    'where': {
                        'activity_id': {
                            'op': 'e',
                            'val': this.activity.id
                        },
                        'info ->> \'difficulty\'': {
                            'op': 'e',
                            'val': this.difficulty.toString(),
                            'join': 'a'
                        }
                    }
                };
            }
            else {
                console.log( 'with region ');
                taskCountQuery = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'tasks'
                        ]
                    },
                    'where': {
                        'activity_id': {
                            'op': 'e',
                            'val': this.activity.id
                        },
                        'info ->> \'difficulty\'': {
                            'op': 'e',
                            'val': this.difficulty.toString(),
                            'join': 'a'
                        },
                        'info ->> \'region\'': {
                            'op': 'e',
                            'val': this.region.toString(),
                            'join': 'a'
                        }
                    }
                };
            }

            this.$store.dispatch('c3s/task/getTaskCount', taskCountQuery).then( count => {
                this.taskCount = count.body;
                console.log('count='+ this.taskCount +'load task');

                if( this.taskCount == 0 ) {
                    alert("no tasks found");
                }

                let taskQuery;
                if( this.region === 'All' ) {
                    taskQuery = {
                        'select': {
                            'fields': [
                                '*'
                            ],
                            'tables': [
                                'tasks'
                            ]
                        },
                        'where': {
                            'activity_id': {
                                'op': 'e',
                                'val': this.activity.id
                            },
                            'info ->> \'difficulty\'': {
                                'op': 'e',
                                'val': this.difficulty.toString(),
                                'join': 'a'
                            }
                        },
                        'limit': 1,
                        'offset': this.taskIndex
                    };
                }
                else {
                    taskQuery = {
                        'select': {
                            'fields': [
                                '*'
                            ],
                            'tables': [
                                'tasks'
                            ]
                        },
                        'where': {
                            'activity_id': {
                                'op': 'e',
                                'val': this.activity.id
                            },
                            'info ->> \'difficulty\'': {
                                'op': 'e',
                                'val': this.difficulty.toString(),
                                'join': 'a'
                            },
                            'info ->> \'region\'': {
                                'op': 'e',
                                'val': this.region.toString(),
                                'join': 'a'
                            }
                        },
                        'limit': 1,
                        'offset': this.taskIndex
                    };
                }


                if (this.taskIndex < this.taskCount) {

                    this.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(tasks => {

                        console.log( 'task loaded: ');
                        console.log( this.tasks[0] );
                        console.log('load media');

                        const mediaQuery = {
                            'select': {
                                'fields': [
                                    '*'
                                ],
                                'tables': [
                                    'media'
                                ]
                            },
                            'where': {
                                'source_id': {
                                    'op': 'e',
                                    'val': this.tasks[0].id
                                }
                            }
                        };

                        this.$store.dispatch('c3s/media/getMedia', [mediaQuery, 'c3s/task/SET_MEDIA', 1]).then(media => {

                            console.log('media loaded');

                            this.value = null;

                        });


                    });
                }

            });

        },
        nextTask: function () {

            this.evaluation = null;

            if (this.taskIndex < this.taskCount - 1) {
                this.taskIndex++;

                this.loadTask();
            }
            else {
                alert("no more tasks");
            }
        },
        submitResponse: function() {

            let score = 0;

            if( this.value.info === 'binominal' ) {
                if( this.value.value === this.tasks[0].info.binominal ) {
                    score = 10;

                    this.evaluation = {
                        'type': 'success',
                        'score': score
                    };
                }
                else {
                    this.evaluation = {
                        'type': 'fail',
                        'score': score
                    };
                }
            }
            else if( this.value.info === 'genus' ) {
                if( this.value.value === this.tasks[0].info.genus ) {
                    score = 8;

                    this.evaluation = {
                        'type': 'almost',
                        'score': score
                    };
                }
                else {
                    this.evaluation = {
                        'type': 'fail',
                        'score': score
                    };
                }
            }
            else if( this.value.info === 'family' ) {
                if( this.value.value === this.tasks[0].info.family ) {
                    score = 6;

                    this.evaluation = {
                        'type': 'almost',
                        'score': score
                    };
                }
                else {
                    this.evaluation = {
                        'type': 'fail',
                        'score': score
                    };
                }
            }

            const submissionQuery = {
                "info": {},
                "content": {
                    "responses": [{
                        "value": this.value.value,
                        "info": this.value.info,
                        "score": score
                    }]
                },
                "task_id": this.tasks[0].id,
                "user_id": this.currentUser.id
            };

            this.$store.commit('c3s/submission/SET_SUBMISSION', submissionQuery );

            this.$store.dispatch('c3s/submission/createSubmission').then(submission => {

                this.$store.dispatch('score/calculateScore');

                const self = this;
                setTimeout(function(){
                    self.nextTask();
                }, 1000);

            });
        }
    }
}

</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


.settings-select {
    select {
        border-bottom: none;
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

.section-wrapper {

    .image-section {
        .image-viewer {
            height: 360px;
        }
        .image-info {
            position: absolute;
            color: white;
            background: rgba(0, 0, 0, 0.8);
            font-size: $font-size-small;

            &.image-location {
                bottom: 0;
                left: 0;
            }
            &.image-source {
                bottom: 0;
                right: 0;
            }
        }
    }
    .response-section {
        padding-top: 0;
    }
}

.actions {
    position: relative;

    .evaluation {
        position: absolute;
        bottom: $spacing-1;
        left: 0;
        height: 40px;
        padding: $spacing-1 0;

        &.positive {
            color: darkgreen;
        }
        &.negative {
            color: darkred;
        }
    }

    .mongo {
        position: absolute;
        right: 0;
        bottom: -$spacing-3;
        font-size: $font-size-small/1.25;
        color: $color-black-tint-50;

        label {
            font-size: $font-size-small/1.25/1.25;
            font-weight: 700;
            color: $color-black-tint-80;
        }
    }
}


@media only screen and (min-width: $viewport-tablet-portrait) {


    .actions {
        position: relative;

        .evaluation {
            height: 48px;
        }
    }

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

            .image-info {
                &.image-location, &.image-source {
                    z-index: 1;
                }
            }
        }
    }


}




</style>
