<i18n>
{

  "en": {

  "page-title": "Snake ID Challenge | Citizen Science Center Zurich",

  "cover-heading": "Do you Know These Snakes?",
  "cover-subheading": "The Snake Identification Challenge",
  "cover-button-start": "Start the Challenge",
  "cover-button-preview": "Preview the Challenge",
  "cover-button-review": "See the Challenge",
  "cover-button-about": "Learn more",

  "section-intro-heading": "How Many Species of Snakes can you Identify?",
  "section-intro-text": "Stuck indoors this winter? Dreaming of seeing snakes in the spring? Take advantage of the cold weather to test and refine your identification skills with our SnakeID challenge!",
  "section-intro-text-2": "We’ll show you 1000 photos of snakes from all around the world. Try to identify as many snake photos as possible at the species, genus, or family level.",

  "section-prize-heading": "What Will you get for Your Participation?",
  "section-prize-intro-1": "<b>The top 3 snake identifiers will receive:</b>",
  "section-prize-list-1-1": "A copy of Mark O’Shea’s new book <a href='https://press.uchicago.edu/ucp/books/book/chicago/B/bo33852453.html' target='_blank'>The Book of Snakes</a>",
  "section-prize-list-1-2": "A short profile/bio on this webpage, if wished",
  "section-prize-intro-2": "<b>All participants who tag more than 30 images will receive:</b>",
  "section-prize-list-2-1": "A Limited-edition HerpMapper Snake ID challenge badge (if the same email was used to register as for the <a href='https://herpmapper.org' target='_blank'>HerpMapper.org</a> account)",
  "section-prize-list-2-2": "Certificate of participation from the Citizen Science Center Zurich",

  "section-about-heading": "Why this Challenge?",
  "section-about-text": "The ultimate goal is to create tools that anyone can use to identify snakes, using a combination of humans and artificial intelligence, in order to improve snake conservation through educating people, help scientists discover new species, and help doctors better treat snakebite cases. Your knowledge is uniquely valuable & someday your rapid IDs could help save the life of a person!",
  "section-about-button": "Read more",

  "section-partners-heading": "Project Partners",

  "section-newsletter-heading": "Sign up for our Newsletter"

  },

  "de": {

  "page-title": "Snake ID Challenge | Citizen Science Center Zürich",

  "cover-heading": "Do you Know These Snakes?",
  "cover-subheading": "The Snake Identification Challenge",
  "cover-button-start": "Start the Challenge",
  "cover-button-preview": "Preview the Challenge",
  "cover-button-review": "See the Challenge",
  "cover-button-about": "Learn more",

  "section-intro-heading": "How Many Species of Snakes can you Identify?",
  "section-intro-text": "Stuck indoors this winter? Dreaming of seeing snakes in the spring? Take advantage of the cold weather to test and refine your identification skills with our SnakeID challenge!",
  "section-intro-text-2": "We’ll show you 1000 photos of snakes from all around the world. Try to identify as many snake photos as possible at the species, genus, or family level.",

  "section-prize-heading": "What Will you get for Your Participation?",
  "section-prize-intro-1": "<b>The top 3 snake identifiers will receive:</b>",
  "section-prize-list-1-1": "A copy of Mark O’Shea’s new book <a href='https://press.uchicago.edu/ucp/books/book/chicago/B/bo33852453.html' target='_blank'>The Book of Snakes</a>",
  "section-prize-list-1-2": "A short profile/bio on this webpage, if wished",
  "section-prize-intro-2": "<b>All participants who tag more than 30 images will receive:</b>",
  "section-prize-list-2-1": "A Limited-edition HerpMapper Snake ID challenge badge (if the same email was used to register as for the <a href='https://herpmapper.org' target='_blank'>HerpMapper.org</a> account)",
  "section-prize-list-2-2": "Certificate of participation from the Citizen Science Center Zurich",

  "section-about-heading": "Why this Challenge?",
  "section-about-text": "The ultimate goal is to create tools that anyone can use to identify snakes, using a combination of humans and artificial intelligence, in order to improve snake conservation through educating people, help scientists discover new species, and help doctors better treat snakebite cases. Your knowledge is uniquely valuable & someday your rapid IDs could help save the life of a person!",
  "section-about-button": "Read more",

  "section-partners-heading": "Projektpartner",

  "section-newsletter-heading": "Abonniere unseren Newsletter"

  }

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="img/cover.jpg">
      <div class="row row-centered">
        <div class="col col-large-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-6">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1">{{ $t('cover-subheading') }}</p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <div class="button-group centered scroll-effect scroll-effect-delayed-2">
            <!--
            <button class="button button-primary" v-scroll-to="'#projects'">{{ $t('cover-button-projects') }}</button>
            <button class="button button-primary" v-scroll-to="'#start-project'">{{ $t('cover-button-your-project') }}</button>
            -->
            <router-link v-if="challengeState === 'before'" tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-preview') }}</router-link>
            <router-link v-else-if="challengeState === 'after'" tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-review') }}</router-link>
            <router-link v-else tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-start') }}</router-link>

            <button class="button button-secondary button-secondary-inverted" v-scroll-to="'#about'">{{ $t('cover-button-about') }}</button>
          </div>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-6 scroll-effect scroll-effect-delayed-3">
          <duration></duration>
        </div>
      </div>
    </app-cover>

    <app-content-section>
      <div class="content-wrapper">

        <div class="row row-centered row-middle row-reverse-large">

          <div class="col col-10 col-large-6 col-wrapping col-large-no-bottom-margin">
            <div>
              <div>
                <img src="img/graphic-intro.png" />
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping col-no-bottom-margin">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('section-intro-heading') }}</h2>
              <p class="reduced-bottom-margin" v-html="$t('section-intro-text')"></p>
              <p v-html="$t('section-intro-text-2')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link v-if="challengeState === 'before'" tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-preview') }}</router-link>
                <router-link v-else-if="challengeState === 'after'" tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-review') }}</router-link>
                <router-link v-else tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-start') }}</router-link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </app-content-section>


    <app-content-section v-if="challengeState !== 'before'" class="content-section-condensed" color="light-greyish">
      <scores></scores>
    </app-content-section>


    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large">

          <div class="col col-large-5 col-large-after-1 col-wrapping col-large-no-bottom-margin">
              <h2 class="heading centered left-aligned-large">{{ $t('section-prize-heading') }}</h2>
              <p class="reduced-bottom-margin" v-html="$t('section-prize-intro-1')"></p>
              <ul>
                <li v-html="$t('section-prize-list-1-1')"></li>
                <li v-html="$t('section-prize-list-1-2')"></li>
              </ul>
              <p class="reduced-bottom-margin" v-html="$t('section-prize-intro-2')"></p>
              <ul class="reduced-bottom-margin">
                <li v-html="$t('section-prize-list-2-1')"></li>
                <li v-html="$t('section-prize-list-2-2')"></li>
              </ul>
          </div>

          <div class="col col-10 col-large-6 col-wrapping col-no-bottom-margin">
            <div>
              <div class="extra-padding-h">
                <img src="/img/graphic-prize.jpg" style="transform: rotate(-4deg); box-shadow: 0px 0px 48px -16px rgba(0,0,0, 0.8);" />
              </div>
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
                  <p v-html="$t('section-about-text')"></p>
                  <p class="centered left-aligned-large">
                      <router-link tag="button" to="/about" class="button button-secondary">{{ $t('section-about-button') }}</router-link>
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


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-6">
            <h2 class="heading centered">{{ $t('section-partners-heading') }}</h2>
          </div>
        </div>
        <div class="row row-centered row-wrapping">

          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/cyberlab.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/udg-fdm.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/herpmapper.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/msf.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/epfl.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/goethe.png" />
          </div>

        </div>
        <div class="row row-centered row-wrapping">

          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/copenhagen.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/gti.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/melbourne.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/indiansnakes.png" />
          </div>
          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/gsi.png" />
          </div>

        </div>
        <div class="row row-centered row-wrapping">

          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/fp-hug.png" />
          </div>

          <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
            <img src="img/logos/hug.png" />
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

import Cover from '@/components/shared/Cover.vue';
import ContentSection from '@/components/shared/ContentSection.vue';
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue';
import Footer from '@/components/shared/Footer.vue';
import Scores from '@/components/Scores.vue';
import Duration from "../components/Duration";


export default {
  name: 'Home',
  components: {
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
          challengeState: state => state.consts.challengeState,
      })
  }
}

</script>

<style lang="scss">

</style>
