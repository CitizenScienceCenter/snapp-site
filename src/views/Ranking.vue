<i18n>
    {

    "en": {

    "page-title": "Ranking",

    "section-ranking-heading": "The Top 30 Participants",

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

    "page-title": "Rangliste",

    "section-ranking-heading": "Die besten 30 Teilnehmer",

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
                    <div class="col col-large-6">

                        <h2 class="heading">{{ $t('section-ranking-heading')}}</h2>

                        <ranking></ranking>

                    </div>
                </div>

            </div>
        </app-content-section>



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



        <app-content-section class="overflow-hidden">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">

                        <h2 id="about" class="heading centered left-aligned-large">{{ $t('section-about-heading') }}</h2>
                        <p v-html="$t('section-about-text-1')"></p>
                        <p v-html="$t('section-about-text-2')"></p>
                        <p class="centered left-aligned-large">
                            <router-link tag="button" to="/about" class="button button-primary">{{ $t('section-about-button') }}</router-link>
                        </p>
                    </div>

                </div>
            </div>
            <div class="background-wrapper background-wrapper-move-right">
                <div class="content-wrapper">
                    <div class="row row-centered row-in-background">
                        <div class="col col-8 col-tablet-portrait-6 col-large-7">
                            <img src="img/graphic-about.jpg" style="border-radius:50%; width: 100%;"/>
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
    import Footer from '@/components/shared/Footer.vue'
    import Ranking from "../components/Ranking";
    import NewsletterSignup from '@/components/shared/NewsletterSignup.vue';
    import Stats from "../components/Stats";

    export default {
        components: {
            Stats,
            Ranking,
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
                user: state => state.c3s.user
            })
        }
    }
</script>
