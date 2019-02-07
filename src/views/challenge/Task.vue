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

    <div>

        <template v-if="tasks[0] && taskMedia[0] && !complete">

            <div v-if="tasks[0] && taskMedia[0]" class="section-wrapper">

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
                                                <option value="1">Hard</option>
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
                                </h2>

                            </div>
                        </div>
                    </div>
                </app-content-section>

                <app-content-section class="content-section-flat image-section" color="greyish">
                    <template>
                        <image-viewer v-if="taskMedia[0]" class="image-viewer" :src="'/img/tasks/'+taskMedia[0].name" disableScrollToZoom></image-viewer>
                        <div class="image-info image-location">
                            <span v-if="tasks[0].info.province">{{ tasks[0].info.province }}, </span>
                            <span v-if="tasks[0].info.country">{{ tasks[0].info.country }}, </span>
                            <span v-if="tasks[0].info.region">{{ tasks[0].info.region }}</span>
                        </div>
                        <div class="image-info image-source">
                            <span v-if="tasks[0].info.source">{{ tasks[0].info.source }}, </span>
                            <span v-if="tasks[0].info.photographer">{{ tasks[0].info.photographer }}</span>
                        </div>
                    </template>
                </app-content-section>

                <app-content-section class="content-section-condensed response-section">
                    <div class="content-wrapper">
                        <div class="row row-centered row-large-right-aligned">
                            <div class="col col-large-5">

                                <div class="form-field form-field-block">
                                    <search-select
                                            :disabled="hasSubmissionAlready"
                                            placeholder="Family, Genus or Binomial"
                                            :optionContainers="searchOptionsContainers"
                                            v-model="value">
                                    </search-select>
                                </div>

                                <div v-if="tasks[0]" class="actions margin-bottom">
                                    <div class="button-group right-aligned">
                                        <template v-if="challengeState === 'before'">
                                            <router-link tag="button" to="/login" class="button button-primary">Register</router-link>
                                        </template>
                                        <template v-if="challengeState === 'ongoing'">
                                            <button class="button button-secondary" v-if="!hasSubmissionAlready" :disabled="loading || evaluation" @click.prevent="value = null;submitResponse()">Skip</button>
                                            <button ref="submit" class="button button-primary" v-if="!hasSubmissionAlready" :disabled="loading || !value || Object.keys(value).length === 0 || evaluation" @click.prevent="submitResponse()">Submit</button>
                                        </template>
                                    </div>

                                    <div class="info">
                                        <div v-if="challengeState === 'before'" class="message message-info">
                                            <div class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                </svg>
                                            </div>
                                            Not started yet!
                                        </div>
                                        <div v-else-if="challengeState === 'after'" class="message message-info">
                                            <div class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                </svg>
                                            </div>
                                            Challenge already over!
                                        </div>
                                        <div v-else-if="hasSubmissionAlready" class="message message-info">
                                            <div class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                </svg>
                                            </div>
                                            Already Done!
                                        </div>
                                        <div v-else-if="evaluation" ref="scoreinfo" class="message hidden" :class="{'message-wrong': evaluation.score === 0, 'message-correct': evaluation.score > 0}">
                                            <div v-if="evaluation.score === 0" class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M322.72,256,422.79,155.93a31.46,31.46,0,0,0,0-44.48L400.55,89.21a31.46,31.46,0,0,0-44.48,0L256,189.28,155.93,89.21a31.46,31.46,0,0,0-44.48,0L89.21,111.45a31.46,31.46,0,0,0,0,44.48L189.28,256,89.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L256,322.72,356.07,422.79a31.46,31.46,0,0,0,44.48,0l22.24-22.24a31.46,31.46,0,0,0,0-44.48Z"></path>
                                                </svg>
                                            </div>
                                            <div v-else class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                </svg>
                                            </div>
                                            {{ evaluation.score }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mongo">
                                    <label>Binomial: </label><i>{{ tasks[0].info.binomial }}</i>
                                    <label>Genus: </label>{{ tasks[0].info.genus }}
                                    <label>Family: </label>{{ tasks[0].info.family }}
                                </div>

                                <div class="content-container">
                                    <ul class="evaluation-list">

                                        <li ref="evaluation-step-3" :class="{
                                            'correct': evaluation && evaluation.successRate === 3,
                                            'wrong': evaluation && evaluation.successRate < 3 && value.info === 'binomial',
                                            'missing': evaluation && evaluation && value.info !== 'binomial'
                                        }">
                                            <div class="evaluation">
                                                <template v-if="evaluation && evaluation.successRate === 3"> <!-- correct -->
                                                    {{ tasks[0].info.binomial }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 3 && value.info === 'binomial'">  <!-- wrong -->
                                                    <span class="wrongAnswer">{{ value.value }}</span>{{ tasks[0].info.binomial }}
                                                </template>
                                                <template v-else-if="evaluation && value.info !== 'binomial'"> <!-- missing -->
                                                    {{ tasks[0].info.binomial }}
                                                </template>
                                            </div>
                                            <div class="default">
                                                Earn {{binomialScore}} points for the correct binomial.
                                            </div>
                                        </li>


                                        <li ref="evaluation-step-2" :class="{
                                            'correct': evaluation && evaluation.successRate >= 2,
                                            'wrong': evaluation && evaluation.successRate < 2 && ( value.info === 'genus' || value.hasOwnProperty('genus') ),
                                            'missing': evaluation && evaluation && value.info !== 'genus' && value.info !== 'binomial'
                                        }">
                                            <div class="evaluation">
                                                <template v-if="evaluation && evaluation.successRate >= 2"> <!-- correct -->
                                                    {{ tasks[0].info.genus }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 2 && value.info === 'genus'"> <!-- wrong -->
                                                    <span class="wrongAnswer">{{ value.value }}</span>{{ tasks[0].info.genus }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 2 && value.hasOwnProperty('genus')"> <!-- wrong because of parent -->
                                                    <span class="wrongAnswer">{{ value.genus }}</span>{{ tasks[0].info.genus }}
                                                </template>
                                                <template v-else-if="evaluation && value.info !== 'genus' && value.info !== 'binomial'"> <!-- missing -->
                                                    {{ tasks[0].info.genus }}
                                                </template>
                                            </div>
                                            <div class="default">
                                                Earn {{genusScore}} points for the correct genus.
                                            </div>
                                        </li>


                                        <li ref="evaluation-step-1" :class="{
                                            'correct': evaluation && evaluation.successRate >= 1,
                                            'wrong': evaluation && evaluation.successRate < 1 && ( value.info === 'family' || value.hasOwnProperty('family') )
                                        }">
                                            <div class="evaluation">
                                                <template v-if="evaluation && evaluation.successRate >= 1"> <!-- correct -->
                                                    {{ tasks[0].info.family }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 1 && value.info === 'family'"> <!-- wrong -->
                                                    <span class="wrongAnswer">{{ value.value }}</span>{{ tasks[0].info.family }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 1 && value.hasOwnProperty('family')"> <!-- wrong because of parent -->
                                                    <span class="wrongAnswer">{{ value.family }}</span>{{ tasks[0].info.family }}
                                                </template>
                                            </div>
                                            <div class="default">
                                                Earn {{familyScore}} points for the correct family.
                                            </div>
                                        </li>

                                    </ul>

                                    <div class="button-group">
                                        <button style="padding:0" class="button button-secondary button-secondary-naked" v-if="!hasSubmissionAlready" :disabled="loading || evaluation" @click.prevent="openInNewTab('mailto:info@citizenscience.ch?subject=Snake ID Challenge Feedback (Image: ' + tasks[0].id + ')')">Send Feedback on this Image</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </app-content-section>

            </div>


            <app-content-section class="content-section-condensed" color="light-greyish">
                <div v-if="challengeState !== 'before'" class="content-subsection">
                    <scores></scores>
                </div>
                <div class="content-subsection">
                    <div class="content-wrapper">
                        <div class="row row-centered">
                            <div class="col">
                                <duration></duration>
                            </div>
                        </div>
                    </div>
                </div>
            </app-content-section>


        </template>

        <template v-else-if="complete">

            <app-content-section>
                <div class="content-wrapper">
                    <div class="row row-centered">
                        <div class="col col-large-6">

                            <h2 class="heading">Challenge Complete</h2>

                            <p>
                                You did everything!
                            </p>

                        </div>
                    </div>
                </div>
            </app-content-section>

            <app-content-section class="content-section-condensed" color="light-greyish">
                <scores></scores>
            </app-content-section>

        </template>

        <template v-if="(tasks[0] && taskMedia[0]) || complete">


            <app-content-section color="greyish">
                <div class="content-wrapper">
                    <div class="row row-centered row-middle">

                        <div class="col col-10 col-large-6 col-wrapping col-large-no-bottom-margin">
                            <div>
                                <div class="extra-padding-h-big">
                                    <img src="/img/graphic-price.jpg" style="transform: rotate(-4deg); box-shadow: 0px 0px 48px -16px rgba(0,0,0, 0.8);" />
                                </div>
                            </div>
                        </div>

                        <div class="col col-large-5 col-large-after-1 col-wrapping col-no-bottom-margin">
                            <div>
                                <h2 class="heading centered left-aligned-large">What's to win?</h2>
                                <p>
                                    <b>The top 3 snake identifiers receive a copy of Mark O’Shea’s new book <a href="https://press.uchicago.edu/ucp/books/book/chicago/B/bo33852453.html" target="_blank">«The Book of Snakes»</a>.</b> In addition they'll be mentioned on this website with a short bio, if wanted.
                                </p>
                                <p>
                                    All participants who tag more than 30 images will get a limited-edition HerpMapper Snapp SnakeID challenge badge (if registered with the same email address as on <a href="https://www.herpmapper.org/" target="_blank">HerpMapper.org</a>)
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </app-content-section>


            <app-content-section>
                <div class="content-wrapper">
                    <div class="row row-centered row-middle row-reverse-large">

                        <div class="col col-10 col-large-6 col-wrapping col-no-bottom-margin">
                            <div>
                                <div class="extra-padding-h">
                                    <img src="/img/graphic-about.jpg" style="border-radius: 50%; min-width: 100%" />
                                </div>
                            </div>
                        </div>

                        <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin">
                            <div>
                                <h2 class="heading centered left-aligned-large">Why this Challenge?</h2>
                                <p>
                                    The ultimate goal is to create tools that anyone can use to identify snakes, using a combination of humans and artificial intelligence, in order to improve snake conservation through educating people, help scientists discover new species, and help doctors better treat snakebite cases. Your knowledge is uniquely valuable & someday your rapid IDs could help save the life of a person!
                                </p>
                                <p class="centered left-aligned-large">
                                    <router-link tag="button" to="/about" class="button button-secondary">Learn more</router-link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </app-content-section>

            <app-content-section class="content-section-condensed">
                <div class="content-wrapper">
                    <div class="row row-centered">
                        <div class="col col-large-10">
                            <div>
                                <div>
                                    <img src="img/logos.png" />
                                </div>
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

        </template>

    </div>

</template>

<script>

import {mapState} from 'vuex'

import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'
import ImageViewer from '@/components/ImageViewer.vue'
import SearchSelect from '@/components/SearchSelect.vue'
import Comments from '@/components/shared/Comments.vue'
import Scores from "@/components/Scores";
import Duration from "@/components/Duration";


export default {
    name: 'Task',
    components: {
        Scores,
        Duration,
        'app-content-section': ContentSection,
        'app-footer': Footer,
        'app-newsletter-signup': NewsletterSignup,
        'image-viewer': ImageViewer,
        'search-select': SearchSelect,
        'comments': Comments
    },
    data() {
        return {
            id: null,
            hasSubmissionAlready: false,
            difficulty: '0',
            completedDifficulties: [],
            value: {},
            responseTime: null,
            evaluation: null,
            complete: false
        }
    },
    computed: {
        ...mapState({
            //user: state => state.user.user,
            activityId: state => state.consts.activityId,

            searchOptionsContainers: state => state.consts.searchOptionsContainers,
            challengeState: state => state.consts.challengeState,

            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity,
            tasks: state => state.c3s.task.tasks,
            taskMedia: state => state.c3s.task.media,
            currentUser: state => state.c3s.user.currentUser,
            submission: state => state.c3s.submission.submission,

            loading: state => state.c3s.settings.loading
        }),
        familyScore: function() {
            switch( this.difficulty ) {
                case '0': {
                    return 6;
                }
                case '1': {
                    return 8;
                }
            }
        },
        genusScore: function() {
            switch( this.difficulty ) {
                case '0': {
                    return 9;
                }
                case '1': {
                    return 12;
                }
            }
        },
        binomialScore: function() {
            switch( this.difficulty ) {
                case '0': {
                    return 12;
                }
                case '1': {
                    return 16;
                }
            }
        }
    },
    watch: {
        value: function() {

            //if( this.value && this.value.hasOwnProperty('info') ) {
            if( this.value && Object.keys(this.value).length > 0 ) {
                // v-bind for disabled is not done, workaround... ¯\_(ツ)_/¯
                this.$refs.submit.removeAttribute('disabled');

                this.$refs.submit.focus();
            }

        },
        difficulty: function(to, from) {
            console.log("difficulty changed "+from +" "+ to);
            this.loadTask();
        }
    },
    beforeCreate() {
        this.$store.commit('c3s/task/SET_TASKS', [] );
        this.$store.commit('c3s/task/SET_MEDIA', [] );
    },
    mounted() {

        this.$store.dispatch("c3s/activity/getActivity", [this.activityId, false]).then(activity => {

            //console.log('activity loaded');

            if( this.$route.params.id ) {
                if( this.$route.params.id.length !== 36 ) {
                    console.log('invalid id');
                    delete this.$route.params.id;
                    this.$router.replace('/challenge');
                    this.id = null;
                    this.loadTask();
                }
                else {
                    this.id = this.$route.params.id;
                    this.loadTask();
                }
            }
            else {
                this.id = null;
                //console.log('load without id');
                this.loadTask();
            }

        });

    },
    methods: {
        openInNewTab: function(url) {
            var win = window.open(url, '_blank');
            win.focus();
        },
        loadTask: function() {

            console.log('load task');

            this.evaluation = null;

            let taskQuery;
            if( !this.id ) {


                taskQuery = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'tasks'
                        ],
                        'group_by': [
                            'submissions.task_id'
                        ],
                        'order_by': {
                            'submissions.task_id': 'DESC'
                        }
                    },
                    'where': [
                        {
                            "field": 'tasks.activity_id',
                            'op': 'e',
                            'val': this.activity.id
                        },
                        {
                            'field': 'tasks.id',
                            'op': 'ni',
                            'val': "(SELECT task_id FROM submissions WHERE submissions.task_id = tasks.id AND user_id = '" + this.user.id + "')",
                            'join': 'a',
                            'type': 'sql'
                        },
                        {
                            'field': 'tasks.info ->> \'difficulty\'',
                            'op': 'e',
                            'val': this.difficulty.toString(),
                            'join': 'a'
                        }
                    ]
                };

            }
            else {
                //console.log('load task id ' + id);

                taskQuery = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'tasks'
                        ]
                    },
                    'where': [
                        {
                            "field": 'id',
                            'op': 'e',
                            'val': this.id
                        }
                    ]
                };

            }

            this.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(tasks => {

                //console.log('responded tasks');

                this.hasSubmissionAlready = false;

                if( this.id ) {

                    let query = {
                        'select': {
                            'fields': [
                                '*'
                            ],
                            'tables': [
                                'submissions'
                            ]
                        },
                        'where': [
                            {
                                'field': 'task_id',
                                'op': 'e',
                                'val': this.id
                            },
                            {
                                'field': 'user_id',
                                'op': 'e',
                                'val': this.user.id,
                                'join': 'a'
                            }
                        ]
                    };

                    this.$store.dispatch('c3s/submission/getSubmissions', [query,0] ).then(submissions => {


                        if( submissions.body.length > 0 ) {
                            this.hasSubmissionAlready = true;
                        }
                        else {
                            this.hasSubmissionAlready = false;
                        }

                        this.id = false;

                    });

                }


                if ( this.tasks[0] ) {

                    console.log( 'task loaded');
                    //console.log('load media');

                    const mediaQuery = {
                        'select': {
                            'fields': [
                                '*'
                            ],
                            'tables': [
                                'media'
                            ]
                        },
                        'where': [
                            {
                                "field": "source_id",
                                'op': 'e',
                                'val': this.tasks[0].id
                            }
                        ]
                    };


                    this.$store.dispatch('c3s/media/getMedia', [mediaQuery, 'c3s/task/SET_MEDIA', 1]).then(media => {

                        //console.log('media loaded');

                        this.value = null;

                    });

                }

                else {

                    console.log('no more tasks');

                    if ( this.difficulty === '0') {
                        this.completedDifficulties.push('0');

                        if (this.completedDifficulties.indexOf('1') === -1) {
                            this.difficulty = '1';
                        }
                        else {
                            this.complete = true;
                        }
                    }
                    else if ( this.difficulty === '1') {
                        this.completedDifficulties.push('1');

                        if (this.completedDifficulties.indexOf('0') === -1) {
                            this.difficulty = '0';
                        }
                        else {
                            this.complete = true;
                        }
                    }


                }


            });

        },
        submitResponse: function() {

            // evaluation if value
            let submissionQuery;

            //console.log( this.value );

            if( this.value && Object.keys(this.value).length > 0 ) {

                if (this.value.info === 'binomial') {
                    if (this.value.value === this.tasks[0].info.binomial) {
                        this.evaluation = {
                            'successRate': 3,
                            'score': this.binomialScore
                        };
                    }
                    else if (this.value.genus === this.tasks[0].info.genus) {
                        this.evaluation = {
                            'successRate': 2,
                            'score': this.genusScore
                        };
                    }
                    else if (this.value.family === this.tasks[0].info.family) {
                        this.evaluation = {
                            'successRate': 1,
                            'score': this.familyScore
                        };
                    }
                    else {
                        this.evaluation = {
                            'successRate': 0,
                            'score': 0
                        };
                    }
                }
                else if (this.value.info === 'genus') {
                    if (this.value.value === this.tasks[0].info.genus) {
                        this.evaluation = {
                            'successRate': 2,
                            'score': this.genusScore
                        };
                    }
                    else if (this.value.value === this.tasks[0].info.family) {
                        this.evaluation = {
                            'successRate': 1,
                            'score': this.familyScore
                        };
                    }
                    else {
                        this.evaluation = {
                            'successRate': 0,
                            'score': 0
                        };
                    }
                }
                else if (this.value.info === 'family') {
                    if (this.value.value === this.tasks[0].info.family) {
                        this.evaluation = {
                            'successRate': 1,
                            'score': this.familyScore
                        };
                    }
                    else {
                        this.evaluation = {
                            'successRate': 0,
                            'score': 0
                        };
                    }
                }

                submissionQuery = {
                    "info": {},
                    "content": {
                        "responses": [{
                            "value": this.value.value,
                            "info": this.value.info,
                            "score": this.evaluation.score
                        }]
                    },
                    "task_id": this.tasks[0].id,
                    "user_id": this.currentUser.id
                };

            }
            else {
                submissionQuery = {
                    "info": {},
                    "content": {
                        "responses": [{
                            "value": null,
                            "info": null,
                            "score": 0
                        }]
                    },
                    "task_id": this.tasks[0].id,
                    "user_id": this.currentUser.id
                };
            }

            this.$store.commit('c3s/submission/SET_SUBMISSION', submissionQuery );

            this.$store.dispatch('c3s/submission/createSubmission').then(submission => {


                //if( this.value && this.value.hasOwnProperty('info') ) {
                if( this.value && Object.keys(this.value).length > 0 ) {

                    const self = this;
                    var counter = 1;
                    this.$refs['evaluation-step-' + counter].classList.add('evaluated');
                    var interval = setInterval(function () {

                        counter++;

                        if (counter === 2) {
                            self.$refs['evaluation-step-' + counter].classList.add('evaluated');
                        }
                        else if (counter === 3) {
                            self.$refs['evaluation-step-' + counter].classList.add('evaluated');
                        }
                        else if (counter === 4) {
                            self.$refs.scoreinfo.classList.remove('hidden');
                        }
                        else if (counter === 6) {
                            self.$refs['evaluation-step-1'].classList.remove('evaluated');
                            self.$refs['evaluation-step-2'].classList.remove('evaluated');
                            self.$refs['evaluation-step-3'].classList.remove('evaluated');
                            self.$store.dispatch('score/calculateScore');
                            self.$refs.scoreinfo.classList.add('hidden');
                            self.loadTask();
                            clearInterval(interval);
                        }

                    }, 600);

                }
                else {
                    this.loadTask();
                }

            });
        }
    }
}

</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


.section-wrapper {

    .settings-section {
        .settings {

            padding: $spacing-1 0;

            .settings-select {
                select {
                    border-bottom: none;

                    &:focus {
                        border-bottom: none;
                    }
                }
            }

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
    }

    .question-section {
        padding-bottom: 0;
    }

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

        .form-field {
            margin-bottom: $spacing-2;
        }

        .actions {
            position: relative;

            .button-group {
                position: absolute;
                top: 0;
                right: 0;
            }
            .info {
                min-height: 40px;
                position: relative;
                pointer-events: none;

                .message {
                    display: block;
                    line-height: 40px;

                    .icon {
                        float: left;
                        height: 40px;
                        width: 40px;
                        position: relative;
                        border-radius: 50%;
                        background-color: green;

                        margin-right: $spacing-1;

                        svg {
                            fill: white;
                            position: absolute;
                            left: 12px;
                            top: 11px;
                            width: 16px;
                            height: 16px;
                        }
                    }

                    &.message-info {
                        color: $color-info;
                        .icon {
                            background-color: $color-info;
                        }
                    }
                    &.message-wrong {
                        font-size: $font-size-medium;
                        font-weight: 700;
                        color: $color-error;
                        .icon {
                            background-color: $color-error;
                        }
                    }
                    &.message-correct {
                        font-size: $font-size-medium;
                        font-weight: 700;
                        color: $color-success;
                        .icon {
                            background-color: $color-success;
                        }
                    }

                    &.hidden {
                        display: none;
                    }
                }
            }
        }


        .evaluation-list {
            li:first-child {
                .evaluation {
                    font-style: italic;
                }
            }
            li {
                .evaluation {
                    display: none;
                }
                .default {
                    display: inline;
                }

                &.evaluated {

                    &:before {
                        width: 1rem;
                        height: 1rem;
                        top: 0.25rem;
                        left: 0.25rem;

                        transition: all $transition-duration-long $transition-timing-function;
                    }

                    .evaluation {
                        display: inline;
                    }
                    .default {
                        display: none;
                    }


                    &.correct {
                        &:before {
                            background-color: $color-success;
                        }
                    }
                    &.wrong {
                        &:before {
                            background-color: $color-error;
                        }

                        .wrongAnswer {
                            text-decoration: line-through;
                            margin-right: $spacing-1;
                        }
                    }
                    &.missing {
                        &:before {
                            background-color: $color-black-tint-50;
                        }
                    }
                }

            }
        }
    }
}

.mongo {
    position: fixed;
    right: 0;
    bottom: 0;
    font-size: $font-size-small/1.25;
    color: white;
    background: $color-black;
    z-index: 20;
    padding: 0 $spacing-1;
    border-top-left-radius: $border-radius;

    label {
        font-size: $font-size-small/1.25/1.25;
        font-weight: 700;
        color: $color-black-tint-50;
        opacity: 0.5;
    }
}


@media only screen and (min-width: $viewport-tablet-portrait) {

    .section-wrapper {

        .settings-section {
            .settings {
                padding: $spacing-2 0;
            }
        }

        .response-section {

            .form-field {
                margin-bottom: $spacing-3;
            }
            .actions {
                .info {
                    min-height: 48px;

                    .message {
                        line-height: 48px;

                        .icon {
                            height: 48px;
                            width: 48px;
                            margin-right: $spacing-2;

                            svg {
                                left: 16px;
                                top: 15px;
                            }
                        }
                    }
                }
            }
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
            z-index: 1;

            .image-viewer {
                position: relative;
                height: 100%;
            }

            .image-info {
                &.image-location, &.image-source {
                    z-index: 1;
                }
            }
        }

        .response-section {
            padding-top: 0;

            .content-container {
                min-height: 180px;
            }
        }
    }

}


@media only screen and (min-width: $viewport-xlarge) {


}



</style>
