<i18n>
    {

    "en": {

    "page-title": "Past Challenge",

    "section-ranking-heading": "Winners Spring 2019",

    "label-username": "Username",
    "label-score": "Score",

    "section-next-challenge-heading": "Stay tuned for our next Challenge",
    "section-next-challenge-text": "A big thank you to everyone who took part in this challenge! Every single contribution brings us closer to our overall goal: to protect snakes and humans and to support the treatment of snake bite. But this was only the beginning, we are already thinking of the next challenge. Stay tuned and become part of the next step.",
    "section-next-challenge-button": "Register",

    "section-about-heading": "Why this Challenge?",
    "section-about-text-1": "Venomous snakebite is responsible for over 100,000 deaths and around three times as many permanent disabilities every year, mostly affecting poor and rural communities in the parts of the world where snake diversity is the highest. Communities and healthcare providers working in these areas are often limited in their herpetological expertise.",
    "section-about-text-2": "Our goal is to create digital tools that anyone can use to identify snakes in order to help clinicians better treat snakebite cases, and improve snake conservation through educating people and communities.",
    "section-about-button": "Read more",

    "section-newsletter-heading": "Sign up for our Newsletter"

    },

    "de": {

    "page-title": "Vergangene Challenge",

    "section-ranking-heading": "Gewinner Frühling 2019",

    "label-username": "Benutzername",
    "label-score": "Punktezahl",

    "section-next-challenge-heading": "Mach mit bei der nächsten Challenge",
    "section-next-challenge-text": "Ein großes Dankeschön an alle, die bei dieser Challenge mitgemacht haben! Jeder einzelne Beitrag bringt uns dem Ziel, Schlangen und Menschen zu schützen und die Behandlung von Schlangenbissen zu unterstützen, ein Stück näher. Dies war jedoch erst der Anfang, wir denken bereits an die nächste Challenge. Bleib auf dem Laufenden.",
    "section-next-challenge-button": "Registrieren",

    "section-about-heading": "Warum diese Challenge?",
    "section-about-text-1": "Schlangenbisse kosten weltweit jedes Jahr über 100’000 Menschenleben und verursachen ungefähr drei mal so viele Fälle von permanenter Behinderung; oft trifft es gerade Menschen in den armen, ländlichen Gegenden der Welt mit einer grossen Artenvielfalt an Schlangen. Die Gemeinden und Gesundheitsversorger in diesen Gegenden haben oft nicht die nötigen Schlangenkenntnisse.",
    "section-about-text-2": "Unser Ziel ist es, ein digitales Tool zu entwickeln das dabei unterstützt, Schlangen richtig zu bestimmen. Es soll klinischem Personal helfen, Schlangenbisse richtig zu behandeln aber auch ein Bildungsangebot für Menschen und Gemeinden sein um Schlangen besser zu schützen und zu erhalten.",
    "section-about-button": "Mehr erfahren",

    "section-newsletter-heading": "Abonniere unseren Newsletter"


    }

    }
</i18n>

<template>
    <div>
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6 scroll-effect">

                        <h2 class="heading centered">{{ $t('section-ranking-heading')}}</h2>

                        <table class="ranking">
                            <tr>
                                <th></th>
                                <th>{{ $t('label-username') }}</th>
                                <th>{{ $t('label-score') }}</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td><b>jc4</b></td>
                                <td>13674</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td><b>w.wuster</b></td>
                                <td>13666</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td><b>lucareptile</b></td>
                                <td>13552</td>
                            </tr>
                        </table>

                    </div>
                </div>

            </div>
        </app-content-section>

        <app-content-section v-if="challengeState !== 'before'" class="content-section-condensed stats-section">
            <div class="content-wrapper">
                <sub-section-stats
                        :userCount="1027"
                        :submissionCount="117897" >
                </sub-section-stats>
            </div>
        </app-content-section>

        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6 scroll-effect">

                        <h2 class="heading centered">Statistics</h2>

                        <p class="centered">See a complete overview of the classification statistics here:</p>

                        <div class="button-group centered">
                            <button class="button button-secondary button-icon" @click="openInNewTab('https://docs.google.com/spreadsheets/d/1yKAtT2pMimsiT8qaPp44QvR0tGVuyRpSrddJlBbeWgk/edit?usp=sharing')">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                                Statistics by Species
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </app-content-section>

        <!--
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
        -->

        <section-newsletter-signup></section-newsletter-signup>

        <app-footer></app-footer>

    </div>
</template>

<script>

    import {mapState} from 'vuex'


    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import NewsletterSignup from '@/components/shared/NewsletterSignup.vue';
    import Stats from "../../components/Stats";
    import SectionNewsletterSignup from "../../components/shared/SectionNewsletterSignup";
    import SectionStats from "../../components/shared/SectionStats";
    import SubSectionStats from "../../components/shared/SubSectionStats";

    export default {
        components: {
            SubSectionStats,
            SectionStats,
            SectionNewsletterSignup,
            Stats,
            'app-content-section': ContentSection,
            'app-newsletter-signup': NewsletterSignup,
            'app-footer': Footer
        },
        metaInfo: function() {
            return {
                title: this.$t('page-title')
            }
        },
        computed: {
        ...mapState({
                user: state => state.c3s.user,

                challengeState: state => state.consts.challengeState
            })
        },
        methods: {
            openInNewTab: function(url) {
                var win = window.open(url, '_blank');
                win.focus();
            }
        }
    }
</script>
