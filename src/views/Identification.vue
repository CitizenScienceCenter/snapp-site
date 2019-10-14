<i18n>
{

"en": {

    "page-title": "Challenge",

    "challenge-heading": "What Snake is This?",
    "challenge-placeholder": "Family, Genus, Binomial or Common Name",
    "challenge-button-register": "Register",
    "challenge-button-skip": "Skip",
    "challenge-button-submit": "Submit",
    "button-submit-confirmation": "Thanks!",
    "challenge-info-before": "Challenge has not started yet.",
    "challenge-info-after": "Already over.",
    "challenge-info-done": "Already done.",
    "challenge-scoreinfo-prefix": "Earn",
    "challenge-scoreinfo-suffix-binomial": "points for the correct binomial.",
    "challenge-scoreinfo-suffix-genus": "points for the correct genus.",
    "challenge-scoreinfo-suffix-family": "points for the correct family.",
    "challenge-button-feedback": "Send Feedback on this Image",
    "challenge-complete-heading": "Challenge Complete",
    "challenge-complete-text": "You did everything!",

    "section-next-challenge-heading": "Stay tuned for our next Challenge",
    "section-next-challenge-text": "A big thank you to everyone who took part in this challenge! Every single contribution brings us closer to our overall goal: to protect snakes and humans and to support the treatment of snake bite. But this was only the beginning, we are already thinking of the next challenge. Stay tuned and become part of the next step.",
    "section-next-challenge-button": "Register",

    "section-winners-heading": "Winners of our First Challenge Announced!",
    "section-winners-text": "Thank you for participating and congratulations! Here are the winners of the spring 2019 challenge:",
    "section-winners-button": "See the Top 30",

    "section-prize-heading": "Prizes for the Top Contributors",
    "section-prize-intro-1": "<b>The top 3 snake identifiers will receive:</b>",
    "section-prize-list-1-1": "A copy of Mark O’Shea’s new book <b><a href='https://press.uchicago.edu/ucp/books/book/chicago/B/bo33852453.html' target='_blank'>The Book of Snakes</a></b>",
    "section-prize-list-1-2": "A short profile/bio on this webpage (optional)",
    "section-prize-intro-2": "<b>All participants who tag more than 30 images will receive:</b>",
    "section-prize-list-2-1": "A Limited-edition HerpMapper Snake ID challenge badge (if the same email was used to register as for the <a href='https://herpmapper.org' target='_blank'>HerpMapper.org</a> account)",
    "section-prize-list-2-2": "A Certificate of participation from the Citizen Science Center Zurich",

    "section-partners-heading": "Project Partners",

    "section-newsletter-heading": "Sign up for our Newsletter"

    },

"de": {

    "page-title": "Challenge",

    "challenge-heading": "Welche Schlange ist's?",
    "challenge-placeholder": "Familie, Genus, Binomial oder engl. Name",
    "challenge-button-register": "Registrieren",
    "challenge-button-skip": "Auslassen",
    "challenge-button-submit": "Senden",
    "button-submit-confirmation": "Danke!",
    "challenge-info-before": "Challenge ist noch nicht gestartet.",
    "challenge-info-after": "Challenge schon vorüber.",
    "challenge-info-done": "Schon erledigt.",
    "challenge-scoreinfo-prefix": "Erhalte",
    "challenge-scoreinfo-suffix-binomial": "Punkte für den korrekten Binomial.",
    "challenge-scoreinfo-suffix-genus": "Punkte für den korrekten Genus.",
    "challenge-scoreinfo-suffix-family": "Punkte für die korrekte Familie.",
    "challenge-button-feedback": "Sende Feedback zum Foto",
    "challenge-complete-heading": "Challenge komplett",
    "challenge-complete-text": "Du hast alles erledigt!",

    "section-next-challenge-heading": "Mach mit bei der nächsten Challenge",
    "section-next-challenge-text": "Ein großes Dankeschön an alle, die bei dieser Challenge mitgemacht haben! Jeder einzelne Beitrag bringt uns dem Ziel, Schlangen und Menschen zu schützen und die Behandlung von Schlangenbissen zu unterstützen, ein Stück näher. Dies war jedoch erst der Anfang, wir denken bereits an die nächste Challenge. Bleib auf dem Laufenden.",
    "section-next-challenge-button": "Registrieren",

    "section-winners-heading": "Gewinner der ersten Challenge bekannt",
    "section-winners-text": "Vielen Dank für die Teilnahme und herzlichen Glückwunsch! Hier sind die Gewinner der ersten Challenge:",
    "section-winners-button": "Zu den Top 30",

    "section-prize-heading": "Das gibt's zu gewinnen",
    "section-prize-intro-1": "<b>Die 3 besten Schlangenbestimmer bekommen:</b>",
    "section-prize-list-1-1": "Eine Ausgabe von Mark O’Shea’s neuem Buch <b><a href='https://press.uchicago.edu/ucp/books/book/chicago/B/bo33852453.html' target='_blank'>The Book of Snakes</a></b>",
    "section-prize-list-1-2": "Ein Kurzportrait auf dieser Webseite (optional)",
    "section-prize-intro-2": "<b>Alle Teilnehmer, die mehr als 30 Bilder bestimmen, bekommen:</b>",
    "section-prize-list-2-1": "Ein Limited-edition HerpMapper “Snake ID Challenge-Badge” (bitte dafür hier die gleiche Email-Adresse für die Registrierung verwenden wie im <a href='https://herpmapper.org' target='_blank'>HerpMapper.org</a> Account)",
    "section-prize-list-2-2": "Ein Teilnahme-Zertifikat des Citizen Science Centers Zürich",

    "section-partners-heading": "Projektpartner",

    "section-newsletter-heading": "Abonniere unseren Newsletter"

}

}
</i18n>


<template>

    <div>
        <div>

            <template v-if="!complete">

                <div class="section-wrapper">

                    <app-content-section class="question-section">

                        <div class="content-wrapper">
                            <div class="row row-centered row-large-right-aligned">
                                <div class="col col-large-5 scroll-effect">

                                    <h2 class="heading">
                                        {{ $t('challenge-heading') }}
                                    </h2>

                                </div>
                            </div>
                        </div>
                    </app-content-section>

                    <app-content-section class="content-section-flat image-section">

                        <image-viewer v-if="taskMedia[0]" class="image-viewer" :src="'https://storage.citizenscience.ch/'+taskMedia[0].path" disableScrollToZoom></image-viewer>
                        <image-viewer v-else class="image-viewer" src="" disableScrollToZoom></image-viewer>

                        <template v-if="taskMedia[0]">
                            <div class="image-info-wrapper">
                                <div class="image-info" v-if="tasks[0].info.tweet">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
                                    </svg>
                                    <label>Source: </label>
                                    <a :href="tasks[0].info.tweet" target="_blank">Twitter</a>
                                </div>
                                <div class="image-info" v-if="tasks[0].info.state_province || tasks[0].info.country || tasks[0].info.global_region">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M236.3,501.7C91,291,64,269.4,64,192C64,86,150,0,256,0s192,86,192,192c0,77.4-27,99-172.3,309.7C266.2,515.4,245.8,515.4,236.3,501.7L236.3,501.7z M256,272c44.2,0,80-35.8,80-80s-35.8-80-80-80s-80,35.8-80,80S211.8,272,256,272z"/>
                                    </svg>
                                    <b>
                                    <span v-if="tasks[0].info.state_province">{{ tasks[0].info.state_province }}</span>
                                    <span v-if="tasks[0].info.country">{{ tasks[0].info.country }}</span>
                                    <span v-if="tasks[0].info.global_region">{{ tasks[0].info.global_region }}</span>
                                    </b>
                                </div>
                                <div class="image-info image-info-small" v-if="tasks[0].info.photographer || tasks[0].info.image_source">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
                                    </svg>
                                    <span v-if="tasks[0].info.photographer">{{ tasks[0].info.photographer }}</span>
                                    <span v-if="tasks[0].info.image_source">{{ tasks[0].info.image_source }}</span>
                                </div>
                            </div>
                        </template>

                    </app-content-section>

                    <app-content-section class="response-section">
                        <div class="content-wrapper">
                            <div class="row row-centered row-large-right-aligned">
                                <div class="col col-large-5 scroll-effect">

                                    <div class="form-field form-field-block">
                                        <search-select
                                                :disabled="loading || showSubmissionInfo"
                                                :placeholder="$t('challenge-placeholder')"
                                                :optionContainers="optionContainers"
                                                v-model="value">
                                        </search-select>
                                    </div>

                                    <div class="actions margin-bottom">


                                        <div class="button-group right-aligned">
                                            <template v-if="challengeState === 'before'">
                                                <router-link tag="button" to="/login" class="button button-primary">{{ $t('challenge-button-register') }}</router-link>
                                            </template>
                                            <template v-if="challengeState === 'ongoing'">
                                                <button class="button button-secondary" v-if="!hasSubmissionAlready" :disabled="loading || showSubmissionInfo" @click.prevent="next()">{{ $t('challenge-button-skip') }}</button>
                                                <!--<button ref="submit" class="button button-primary" v-if="!hasSubmissionAlready" :disabled="loading || !value || Object.keys(value).length === 0" @click.prevent="submitResponse()">{{ $t('challenge-button-submit') }}</button>-->
                                                <submit-button v-if="!hasSubmissionAlready" ref="submit" :disabled="loading || !value || Object.keys(value).length === 0" @click="submitResponse()" :submissionInfo="showSubmissionInfo" :infoMessage="$t('button-submit-confirmation')">{{ $t('challenge-button-submit') }}</submit-button>
                                            </template>
                                        </div>



                                        <div class="info">
                                            <div v-if="challengeState === 'before'" class="message message-info">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text">{{ $t('challenge-info-before') }}</span>
                                            </div>
                                            <div v-else-if="challengeState === 'after'" class="message message-info">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text">{{ $t('challenge-info-after') }}</span>
                                            </div>
                                            <div v-else-if="hasSubmissionAlready" class="message message-info">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                    </svg>
                                                </div>
                                                <span class="text">{{ $t('challenge-info-done') }}</span>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </app-content-section>

                </div>

                <app-content-section v-if="challengeState !== 'before'" color="light-greyish" class="content-section-condensed stats-section">
                    <div class="content-wrapper">
                        <sub-section-stats
                                       :mySubmissionCount="mySubmissionCount"
                                       :myProgress="Math.round( (mySubmissionCount/totalTaskCount)*10000 )/100"
                                       :myRank="myRank"
                                       :ranking="ranking"
                        ></sub-section-stats>
                    </div>
                </app-content-section>

                <app-content-section v-if="challengeState !== 'before'" color="greyish" class="content-section-condensed stats-section">
                    <div class="content-wrapper">
                        <sub-section-stats
                                :userCount="totalUserCount"
                                :submissionCount="totalSubmissionCount"
                                :taskCount="totalTaskCount" >
                        </sub-section-stats>
                        <div class="content-subsection" v-if="challengeState !== 'after'">
                            <div class="row row-centered">
                                <div class="col col-large-10">

                                    <duration></duration>

                                </div>
                            </div>
                        </div>
                    </div>
                </app-content-section>

                <!--
                <app-content-section v-if="challengeState !== 'after'" class="content-section-condensed" color="light-greyish">
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
                -->

                <!--
                <template v-else>

                    <app-content-section class="content-section-condensed" color="light-greyish">
                        <stats></stats>
                    </app-content-section>
                    <app-content-section class="content-section-condensed" color="greyish">
                        <div class="content-wrapper">
                            <div class="row row-centered">

                                <div class="col col-large-6">
                                    <h2 class="subheading centered">{{ $t('section-next-challenge-heading') }}</h2>
                                    <p class="centered reduced-bottom-margin" v-html="$t('section-next-challenge-text')"></p>
                                    <div v-if="!user.currentUser || user.isAnon" class="button-group centered">
                                        <router-link tag="button" to="/login" class="button button-primary">{{ $t('section-next-challenge-button') }}</router-link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </app-content-section>
                    <app-content-section>
                        <div class="content-wrapper">
                            <div class="row row-centered row-wrapping">

                                <div class="col col-6 col-large-4 col-large-before-1 col-wrapping">
                                    <div>
                                        <div class="extra-padding-h">
                                            <img src="/img/graphic-winner.png" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-large-5 col-large-after-2 col-wrapping">
                                    <h2 class="heading centered left-aligned-large">{{ $t('section-winners-heading') }}</h2>
                                    <p class="reduced-bottom-margin" v-html="$t('section-winners-text')"></p>
                                    <ranking limit="3"></ranking>
                                    <div class="button-group centered left-aligned-large">
                                        <router-link tag="button" to="/ranking" class="button button-primary">{{ $t('section-winners-button') }}</router-link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </app-content-section>

                </template>
                -->


            </template>

            <template v-else-if="complete">

                <app-content-section>
                    <div class="content-wrapper">
                        <div class="row row-centered">
                            <div class="col col-large-6">

                                <h2 class="heading">{{ $t('challenge-complete-heading') }}</h2>
                                <p v-html="$t('challenge-complete-text')"></p>

                            </div>
                        </div>
                    </div>
                </app-content-section>

            </template>




            <app-content-section>
                <div class="content-wrapper">

                    <div class="row row-centered row-middle row-wrapping">

                        <div class="col col-6 col-large-5 col-large-before-1 col-wrapping scroll-effect">
                            <div class="extra-padding-h">
                                <img src="/img/graphic-prize.jpg" style="transform: rotate(-1deg); box-shadow: 0px 0px 48px -16px rgba(0,0,0, 0.8);" />
                            </div>
                        </div>

                        <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
                            <div>
                                <h2 class="heading centered left-aligned-large">{{ $t('section-prize-heading') }}</h2>
                                <p class="reduced-bottom-margin" v-html="$t('section-prize-intro-1')"></p>
                                <ul>
                                    <li v-html="$t('section-prize-list-1-1')"></li>
                                    <li v-html="$t('section-prize-list-1-2')"></li>
                                </ul>
                                <p class="reduced-bottom-margin" v-html="$t('section-prize-intro-2')"></p>
                                <ul class="reduced-bottom-margin">
                                    <li v-html="$t('section-prize-list-2-1')"></li>
                                    <!-- <li v-html="$t('section-prize-list-2-2')"></li> -->
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </app-content-section>

            <section-feedback color="light-greyish" email="help@citizenscience.ch" :subject="$t('site-name')"></section-feedback>

            <app-content-section color="white">
                <div class="content-wrapper">
                    <div class="row row-centered">
                        <div class="col col-large-6">
                            <h2 class="heading centered">{{ $t('section-partners-heading') }}</h2>
                        </div>
                    </div>
                    <div class="row row-centered row-wrapping">

                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/cyberlab.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/udg-fdm.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/herpmapper.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/msf.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/epfl.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/goethe.png" />
                        </div>

                    </div>
                    <div class="row row-centered row-wrapping">

                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/copenhagen.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/gti.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/melbourne.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/indiansnakes.png" />
                        </div>
                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/gsi.png" />
                        </div>

                    </div>
                    <div class="row row-centered row-wrapping">

                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/fp-hug.png" />
                        </div>

                        <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                            <img src="/img/logos/hug.png" />
                        </div>

                    </div>
                </div>
            </app-content-section>

            <section-s-d-g color="greyish" goal="3">
                This project supports Goal 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </section-s-d-g>


            <section-newsletter-signup></section-newsletter-signup>

            <app-footer></app-footer>


        </div>

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
import Loader from "../components/shared/Loader";
import Ranking from "../components/Ranking";
import Stats from "../components/Stats";
import SectionNewsletterSignup from "../components/shared/SectionNewsletterSignup";
import SubSectionStats from "../components/shared/SubSectionStats";
import SubmitButton from "../components/shared/SubmitButton";
import SectionFeedback from "../components/shared/SectionFeedback";
import SectionSDG from "../components/shared/SectionSDG";


export default {
    name: 'Task',
    components: {
        SectionSDG,
        SectionFeedback,
        SubmitButton,
        SubSectionStats,
        SectionNewsletterSignup,
        Stats,
        Ranking,
        Loader,
        Scores,
        Duration,
        'app-content-section': ContentSection,
        'app-footer': Footer,
        'app-newsletter-signup': NewsletterSignup,
        'image-viewer': ImageViewer,
        'search-select': SearchSelect,
        'comments': Comments
    },
    metaInfo: function() {
        return {
            title: this.$t('page-title')
        }
    },
    data() {
        return {
            id: null,
            hasSubmissionAlready: false,
            value: {},
            responseTime: null,
            complete: false,
            loadTime: null,
            loading: true,
            showSubmissionInfo: false
        }
    },
    computed: {
        ...mapState({
            //user: state => state.user.user,
            activityId: state => state.consts.activityId,

            optionContainers: state => state.consts.optionContainers,
            challengeState: state => state.consts.challengeState,

            user: state => state.c3s.user,
            activity: state => state.c3s.activity.activity,
            tasks: state => state.c3s.task.tasks,
            taskMedia: state => state.c3s.task.media,
            currentUser: state => state.c3s.user.currentUser,
            submission: state => state.c3s.submission.submission,

            totalTaskCount: state => state.stats.totalTaskCount,
            totalUserCount: state => state.stats.totalUserCount,
            totalSubmissionCount: state => state.stats.totalSubmissionCount,
            mySubmissionCount: state => state.stats.mySubmissionCount,
            myRank: state => state.stats.myRank,
            ranking: state => state.stats.ranking

            //loading: state => state.c3s.settings.loading
        })
    },
    watch: {
        value: function(to,from) {

            //if( this.value && this.value.hasOwnProperty('info') ) {
            if( this.value && Object.keys(this.value).length > 0 ) {
                // v-bind for disabled is not done, workaround... ¯\_(ツ)_/¯

                if( this.challengeState === 'ongoing' ) {
                    //this.$refs.submit.removeAttribute('disabled');
                    let self = this;
                    setTimeout( function() {
                        self.$refs.submit.focus();
                    }, 10);

                }
            }

        }
    },
    beforeCreate() {
        this.$store.commit('c3s/task/SET_TASKS', [] );
        this.$store.commit('c3s/task/SET_MEDIA', [] );
    },
    mounted() {

        let containerVersion = 0.9;
        if( this.containerVersion !== containerVersion || !this.optionContainers ) {
            this.$store.dispatch('consts/createOptionContainers', containerVersion );
        }

        this.$store.dispatch("c3s/activity/getActivity", [this.activityId, false]).then(activity => {

            //console.log('activity loaded');

            if( this.$route.params.id ) {
                if( this.$route.params.id.length !== 36 ) {
                    console.log('invalid id');
                    delete this.$route.params.id;
                    this.$router.replace('/identification');
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

            this.loading = true;
            this.$store.commit('c3s/task/SET_TASKS', [] );
            this.$store.commit('c3s/task/SET_MEDIA', [] );
            console.log('load task');

            this.$store.dispatch('stats/updateSubmissionStats');

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
                        'orderBy': {
                            'random()': ''
                        }
                    },
                    'where': [
                        {
                            "field": 'tasks.activity_id',
                            'op': 'e',
                            'val': this.activityId
                        },
                        {
                            'field': 'tasks.id',
                            'op': 'ni',
                            'val': "(SELECT task_id FROM submissions WHERE submissions.task_id = tasks.id AND user_id = '" + this.currentUser.id + "')",
                            'join': 'a',
                            'type': 'sql'
                        }
                    ]
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

                /*
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
                                'val': this.currentUser.id,
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
                */

                if ( this.tasks[0] ) {

                    console.log( 'task loaded');
                    //console.log('load media');

                    if( navigator.userAgent !== 'ReactSnap' ) {
                        this.$router.replace('/identification/'+this.tasks[0].id);
                    }


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
                        this.loadTime = new Date();
                        console.log('set loading to false');
                        this.loading = false;

                    });

                }

                else {

                    console.log('no more tasks');

                    this.complete = true;

                }


            });

        },
        submitResponse: function() {

            let timeNow = new Date();
            let timeNeeded = timeNow.getTime() - this.loadTime.getTime();

            let submissionQuery = {
                "info": {},
                "content": {
                    "responses": [{
                        "value": this.value.value,
                        "info": this.value.type,
                        "time": timeNeeded
                    }]
                },
                "task_id": this.tasks[0].id,
                "user_id": this.currentUser.id,
                "draft": true
            };

            this.$store.commit('c3s/submission/SET_SUBMISSION', submissionQuery );

            this.$store.dispatch('c3s/submission/createSubmission').then(submission => {

                this.showSubmissionInfo = true;
                let self = this;
                setTimeout( function() {
                    self.showSubmissionInfo = false;
                    self.value = {};
                    self.loadTask();
                }, 900 );

            });
        },
        next() {
            this.id = null;
            this.loadTask();
        }
    }
}

</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


.section-wrapper {

    position: relative;
    z-index: 1;

    .question-section {
        padding-bottom: 0;
    }

    .image-section {

        .image-viewer {
            height: 240px;
        }
        .image-info-wrapper {
            position: absolute;
            top: $spacing-1;
            left: $spacing-1;

            margin: calc( -#{$spacing-1} /2 );
            font-size: 0;

            .image-info {
                color: white;
                background: rgba( $color-black, 0.4);
                border-radius: 16px;
                font-size: $font-size-small;
                position: relative;
                padding: calc( ( 32px - #{$font-size-small} *1.5 ) / 2 ) 0;
                padding-right: $spacing-2;
                padding-left: 36px;

                &.image-info-small {
                    font-size: $font-size-mini;
                    line-height: calc( #{$font-size-small} *1.5);
                    display: none;
                }

                svg {
                    position: absolute;
                    top: calc( ( 32px - #{$font-size-small} ) /2 );
                    left: calc( ( 32px - #{$font-size-small} ) /2 + 4px );
                    width: $font-size-small;
                    height: $font-size-small;
                    fill: rgba( white, 0.8 );
                }

                display: inline-block;
                margin: calc( #{$spacing-1} /2 );

                span {
                    text-transform: capitalize;
                    white-space: nowrap;
                    &:after {
                        content: ', ';
                    }
                    &:last-child {
                        &:after {
                            display: none;
                        }
                    }
                }

                label {
                    color: white;
                    font-size: $font-size-mini;
                }

                a {
                    color: white;
                    text-decoration: underline;
                    &:hover {
                        color: rgba( white, 0.8 );
                    }
                }
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
                    height: 40px;
                    width: 60%;
                    position: relative;
                    padding-left: 56px;

                    display: flex;
                    align-items: center;

                    .icon {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 40px;
                        width: 40px;
                        border-radius: 50%;

                        svg {
                            fill: white;
                            position: absolute;
                            top: 12px;
                            left: 12px;
                            width: 16px;
                            height: 16px;
                        }
                    }

                    &.message-info {
                        color: $color-info;
                        .icon {
                            background-color: $color-info;
                        }
                        .text {
                            line-height: 20px;
                        }
                    }

                }
            }
        }
    }
}

@media only screen and (min-width: $viewport-mobile-large) {

    .section-wrapper {

        .image-section {

            .image-viewer {
                height: 280px;
            }

        }
    }

}

@media only screen and (min-width: $viewport-tablet-portrait) {

    .section-wrapper {

        .image-section {

            .image-viewer {
                height: 480px;
            }
            .image-info-wrapper {
                top: $spacing-2;
                left: $spacing-2;

                .image-info {
                    &.image-info-small {
                        display: inline-block;
                    }
                }
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
                        height: 48px;
                        padding-left: 64px;

                        .icon {
                            height: 48px;
                            width: 48px;

                            svg {
                                left: 16px;
                                top: 16px;
                            }
                        }

                        &.message-info {
                            .text {
                                line-height: 24px;
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
        min-height: 66.667vh;

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

            .image-info-wrapper {
                z-index: 1;
            }
        }

        .response-section {
            padding-top: 0;

            .actions {
                margin-bottom: $spacing-4;
            }
        }
    }

}


@media only screen and (min-width: $viewport-xlarge) {


}



</style>
