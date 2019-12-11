<i18n>
    {

    "en": {

    "page-title": "Autumn Challenge 2019",

    "section-ranking-heading": "Winners Autumn 2019",

    "label-username": "Username",
    "label-score": "Submissions",

    "heading-bios": "Winner Bios"

    },

    "de": {

    "page-title": "Herbst-Challenge 2019",

    "section-ranking-heading": "Gewinner Herbst 2019",

    "label-username": "Benutzername",
    "label-score": "Antworten",


    "heading-bios": "Gewinner-Portraits"


    }

    }
</i18n>

<template>
    <div>
        <app-content-section>
            <div class="content-wrapper">

                <div class="content-subsection">
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
                                    <td><b>PMoof1</b></td>
                                    <td>7855</td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td><b>Gary Lee</b></td>
                                    <td>7224</td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td><b>yatinkalki</b></td>
                                    <td>6996</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>

                <div class="content-subsection">
                    <div class="row row-centered">
                        <div class="col">

                            <h2 class="heading centered scroll-effect">{{ $t('heading-bios') }}</h2>

                            <div class="row row-centered row-wrapping">

                                <div class="col col-wrapping col-large-4 scroll-effect scroll-effect-delayed-1">

                                    <div class="margin-bottom extra-padding-h-big">
                                        <img src="/img/bios/maryann_barbon.jpg" style="border-radius: 50%;" />
                                    </div>
                                    <h3 class="subheading centered">Maryann Barbon</h3>
                                    <p>
                                        Maryann Barbon worked in the reptile industry raising and breeding different species from all over the world. The majority of her work focused on snakes, especially pythons, colubrids, and boas, as well as amphibians, turtles, geckos, chameleons, monitors, and other lizards. She is now the mother of a two-year old girl (who also loves snakes) and makes jewelry featuring venomous and non-venomous snake sheds, which are sold in her Etsy shop BossHunts. Maryann also participated in our first Snake ID challenge, which encouraged her to submit records to <a href="http://herpmapper.org/" target="_blank">HerpMapper</a>. She was born and raised in Florida, USA, and now lives in Tennessee, USA.
                                    </p>

                                </div>

                                <div class="col col-wrapping col-large-4 scroll-effect scroll-effect-delayed-2">

                                    <div class="margin-bottom extra-padding-h-big">
                                        <img src="/img/bios/gary_johnson.jpg" style="border-radius: 50%;" />
                                    </div>
                                    <h3 class="subheading centered">Gary Johnson</h3>
                                    <p>
                                        Gary Johnson is a native of southern Illinois, where he grew up field herping with his father in surrounding Missouri and Kentucky. He frequents the famous <a href="https://www.fs.usda.gov/recarea/shawnee/recarea/?recid=35185" target="_blank">LaRue-Pine Hills-Otter Pond Research Natural Area</a> (aka "Snake Road") in southern Illinois, as well as the nearby <a href="https://www.fs.usda.gov/recarea/shawnee/recarea/?recid=81897" target="_blank">Sand Cave Ecological Area</a> and other sites in the Shawnee National Forest. He found out about the Snake ID challenge through Facebook and learned a great deal from participating.
                                    </p>

                                </div>

                                <div class="col col-wrapping col-large-4 scroll-effect scroll-effect-delayed-3">

                                    <div class="margin-bottom extra-padding-h-big">
                                        <img src="/img/bios/yatin_kalki.jpg" style="border-radius: 50%;" />
                                    </div>
                                    <h3 class="subheading centered">Yatin Kalki</h3>
                                    <p>
                                        Yatin Kalki is a <a href="https://www.researchgate.net/profile/Yatin_Kalki" target="_blank">biologist</a> with an interest in the ecology and natural history of snakes and other herps. He grew up in Bangalore, India where he began capturing and relocating snakes from residential areas. He obtained his B.S. in Wildlife Conservation from the University of Illinois in 2018. Over the years, he has been involved with herpetological research in various parts of India and the United States, the Amazon rainforest, and the Galapagos Islands. He currently works as a research associate at the <a href="http://agumberainforest.org/" target="_blank">Agumbe Rainforest Research Station</a>, where he uses radio telemetry to study the behavior and spatial ecology of king cobras in the Western Ghats of India.
                                    </p>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>

        <!--
        <app-content-section class="content-section-condensed stats-section">
            <div class="content-wrapper">
                <sub-section-stats
                        :userCount="1027"
                        :submissionCount="117897" >
                </sub-section-stats>
            </div>
        </app-content-section>
        -->

        <!--
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

                challengeState: state => state.timer.challengeState
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
