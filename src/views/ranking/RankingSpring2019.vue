<i18n>
    {

    "en": {

    "page-title": "Spring Challenge 2019",

    "section-ranking-heading": "Winners Spring 2019",

    "section-statistics-title": "Statistics",
    "section-statistics-text": "See a complete overview of the classification statistics here:",
    "section-statistics-button":"Statistics by Species",

    "label-username": "Username",
    "label-score": "Score"

    },

    "de": {

    "page-title": "Frühlings-Challenge 2019",

    "section-ranking-heading": "Gewinner*innen Frühling 2019",

    "section-statistics-title": "Statistik",
    "section-statistics-text": "Eine kompakte Übersicht der Klassifizierungen findet ihr hier:",
    "section-statistics-button":"Statistik nach Arten",

    "label-username": "Benutzername",
    "label-score": "Punktezahl"


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

        <app-content-section class="content-section-condensed stats-section">
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

                        <h2 class="heading centered">{{$t('section-statistics-title')}}</h2>

                        <p class="centered">{{$t('section-statistics-text')}}</p>

                        <div class="button-group centered">
                            <button class="button button-secondary button-icon" @click="openInNewTab('https://docs.google.com/spreadsheets/d/1yKAtT2pMimsiT8qaPp44QvR0tGVuyRpSrddJlBbeWgk/edit?usp=sharing')">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                                 {{$t('section-statistics-button')}}
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </app-content-section>

        <section-newsletter-signup></section-newsletter-signup>

        <app-footer></app-footer>

    </div>
</template>

<script>
import { mapState } from "vuex";

import ContentSection from "@/components/shared/ContentSection.vue";
import Footer from "@/components/shared/Footer.vue";
import NewsletterSignup from "@/components/shared/NewsletterSignup.vue";
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
    "app-content-section": ContentSection,
    "app-newsletter-signup": NewsletterSignup,
    "app-footer": Footer,
  },
  metaInfo: function() {
    return {
      title: this.$t("page-title"),
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.c3s.user,

      challengeState: (state) => state.timer.challengeState,
    }),
  },
  methods: {
    openInNewTab: function(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
  },
};
</script>
