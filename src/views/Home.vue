<i18n>
{

  "en": {

  "page-title": "Snake ID Challenge | Citizen Science Center Zurich",

  "cover-heading": "Do you Know These Snakes?",
  "cover-subheading": "The Snake ID Challenge <span style='white-space: nowrap;'>(Phase 2)</span>",
  "cover-button-start": "Take part",
  "cover-button-preview": "Take a look",
  "cover-button-review": "Take part",
  "cover-button-about": "Learn more",

  "section-winners-heading": "Winners of our First Challenge Announced!",
  "section-winners-text": "Thank you for participating and congratulations! Here are the winners of the spring 2019 challenge:",
  "section-winners-button": "See the Top 30",

  "section-next-challenge-heading": "Stay tuned for our next Challenge",
  "section-next-challenge-text": "A big thank you to everyone who took part in this challenge! Every single contribution brings us closer to our overall goal: to protect snakes and humans and to support the treatment of snake bite. But this was only the beginning, we are already thinking of the next challenge. Stay tuned and become part of the next step.",
  "section-next-challenge-button": "Register",

  "section-intro-heading": "Help us Identifying Species of Snakes.",
  "section-intro-text": "Fall is here! You can take advantage of the cooler weather to test and refine your identification skills with the second phase of the SnakeID challenge.  We’ll show you more than 2000 photos of snakes collected from Twitter, and originally posted from everywhere in the world! Help us identify as many snakes as possible at the species, genus, or family level.",

  "section-about-heading": "Now With Unclassified Images",
  "section-about-text-1": "In Phase 1 of the Snake Id Challenge (March 2019) we showed you images of snakes already classified by experts, and studied the competence (and speed) of the crowd in matching the expert identification. This time, we are showing you unclassified images, and we need your help to discover which species are in the images in order to create a new dataset.",
  "section-about-text-2": "<b>Last time we knew the answers, this time we don’t so you are the expert!</b>",
  "section-about-button": "About the Project",

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

  "page-title": "Snake ID Challenge | Citizen Science Center Zürich",

  "cover-heading": "Wie gut kennst Du Schlangen?",
  "cover-subheading": "Die Schlangen-Identifikations-Challenge <span style='white-space: nowrap;'>(Phase 2)</span>",
  "cover-button-start": "Jetzt Mitmachen",
  "cover-button-preview": "Jetzt Ansehen",
  "cover-button-review": "Jetzt Mitmachen",
  "cover-button-about": "Mehr erfahren",

  "section-winners-heading": "Gewinner der ersten Challenge bekannt",
  "section-winners-text": "Vielen Dank für die Teilnahme und herzlichen Glückwunsch! Hier sind die Gewinner der ersten Challenge:",
  "section-winners-button": "Zu den Top 30",

  "section-next-challenge-heading": "Mach mit bei der nächsten Challenge",
  "section-next-challenge-text": "Ein großes Dankeschön an alle, die bei dieser Challenge mitgemacht haben! Jeder einzelne Beitrag bringt uns dem Ziel, Schlangen und Menschen zu schützen und die Behandlung von Schlangenbissen zu unterstützen, ein Stück näher. Dies war jedoch erst der Anfang, wir denken bereits an die nächste Challenge. Bleib auf dem Laufenden.",
  "section-next-challenge-button": "Registrieren",

  "section-intro-heading": "Hilf mit Schlangenarten korrekt zu bestimmen?",
  "section-intro-text": "Fall is here! You can take advantage of the cooler weather to test and refine your identification skills with the second phase of the SnakeID challenge.  We’ll show you more than 2000 photos of snakes collected from Twitter, and originally posted from everywhere in the world! Help us identify as many snakes as possible at the species, genus, or family level.",

  "section-about-heading": "Now With Unclassified Images",
  "section-about-text-1": "In Phase 1 of the Snake Id Challenge (March 2019) we showed you images of snakes already classified by experts, and studied the competence (and speed) of the crowd in matching the expert identification. This time, we are showing you unclassified images, and we need your help to discover which species are in the images in order to create a new dataset.",
  "section-about-text-2": "<b>Last time we knew the answers, this time we don’t so you are the expert!</b>",
  "section-about-button": "Mehr zum Projekt",

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

    <app-cover imageUrl="/img/cover.jpg" logoUrl="/img/unige-logo.svg" logo2Url="/img/cyberlab-logo.png" goal="3">
      <div class="row row-centered">
        <div class="col col-large-10 col-xlarge-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-10 col-xlarge-8">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1" v-html="$t('cover-subheading')"></p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <div class="button-group centered scroll-effect scroll-effect-delayed-2">
            <!--
            <button class="button button-primary" v-scroll-to="'#projects'">{{ $t('cover-button-projects') }}</button>
            <button class="button button-primary" v-scroll-to="'#start-project'">{{ $t('cover-button-your-project') }}</button>
            -->
            <router-link v-if="challengeState === 'before'" tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-preview') }}</router-link>
            <router-link v-else-if="challengeState === 'after'" tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-review') }}</router-link>
            <router-link v-else tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-start') }}</router-link>

            <!--<button class="button button-secondary button-secondary-inverted" v-scroll-to="'#about'">{{ $t('cover-button-about') }}</button>-->
            <router-link tag="button" to="/about" class="button button-secondary button-secondary-inverted">{{ $t('cover-button-about') }}</router-link>
          </div>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8 col-xlarge-8 scroll-effect scroll-effect-delayed-3">
          <duration></duration>
        </div>
      </div>
    </app-cover>



    <app-content-section v-if="challengeState !== 'before'" color="greyish" class="content-section-condensed stats-section">
      <div class="content-wrapper">
        <sub-section-stats
                           :userCount="totalUserCount"
                           :submissionCount="totalSubmissionCount"
                           :taskCount="totalTaskCount" >
        </sub-section-stats>
      </div>
    </app-content-section>

    <!--
    <template v-if="challengeState === 'after'">

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

    </template>
    -->


    <app-content-section>
      <div class="content-wrapper">

        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('section-intro-heading') }}</h2>
              <p class="reduced-bottom-margin" v-html="$t('section-intro-text')"></p>
              <!--
              <p>
                <span v-html="$t('section-intro-text-2-prefix')"></span> {{ totalTaskCount }} <span v-html="$t('section-intro-text-2-suffix')"></span>
              </p>
              -->
              <div class="button-group centered left-aligned-large">
                <router-link v-if="challengeState === 'before'" tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-preview') }}</router-link>
                <router-link v-else-if="challengeState === 'after'" tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-review') }}</router-link>
                <router-link v-else tag="button" to="/identification" class="button button-primary">{{ $t('cover-button-start') }}</router-link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </app-content-section>

    <!--
    <app-content-section v-if="challengeState === 'ongoing'" class="content-section-condensed" color="light-greyish">
      <scores></scores>
    </app-content-section>
    -->


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div>
              <div class="extra-padding-large-h">
                <img src="/img/graphic-about.jpg" style="border-radius:50%"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 id="about" class="heading centered left-aligned-large">{{ $t('section-about-heading') }}</h2>
              <p v-html="$t('section-about-text-1')"></p>
              <p v-html="$t('section-about-text-2')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/about" class="button button-secondary">{{ $t('section-about-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section v-if="challengeState !== 'after'">
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

    <section-feedback :color="(challengeState !== 'after') ? 'light-greyish' : ''" email="help@citizenscience.ch" :subject="$t('site-name')"></section-feedback>

    <app-content-section :color="(challengeState === 'after') ? 'light-greyish' : ''">
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
</template>

<script>

import {mapState} from 'vuex'

import Cover from '@/components/shared/Cover.vue';
import ContentSection from '@/components/shared/ContentSection.vue';
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue';
import Footer from '@/components/shared/Footer.vue';
import Scores from '@/components/Scores.vue';
import Duration from "../components/Duration";
import Ranking from "../components/Ranking";
import Stats from "../components/Stats";
import SectionStats from "../components/shared/SectionStats";
import SectionNewsletterSignup from "../components/shared/SectionNewsletterSignup";
import SubSectionStats from "../components/shared/SubSectionStats";
import SectionSDG from "../components/shared/SectionSDG";
import SectionFeedback from "../components/shared/SectionFeedback";


export default {
  name: 'Home',
  components: {
    SectionFeedback,
    SectionSDG,
    SubSectionStats,
    SectionNewsletterSignup,
    SectionStats,
      Stats,
      Ranking,
      Duration,
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer,
    Scores
  },
  metaInfo: function() {
      return {
          title: this.$t('page-title'),
          titleTemplate: null
      }
  },
  computed: {
      ...mapState({
          user: state => state.c3s.user,

          challengeState: state => state.timer.challengeState,

          totalTaskCount: state => state.stats.totalTaskCount,
          totalUserCount: state => state.stats.totalUserCount,
          totalSubmissionCount: state => state.stats.totalSubmissionCount
      })
  },
  mounted() {
      this.$store.dispatch('stats/updateSubmissionStats');
  }
}

</script>

<style lang="scss">

</style>
