<i18n>
{
  "de": {
    "cover-heading": "Do you Know These Snakes?",
    "cover-subheading": "The Snake Recognition Challenge",
    "cover-button-transcribe": "Start the Challenge",
    "cover-button-translate": "Learn more",

    "section-explanation-heading": "How Good can you Classify Them?",
    "section-explanation-text": "Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.",

    "section-newsletter-heading": "Abonniere unseren Newsletter"
  },
  "en": {
    "cover-heading": "Do you Know These Snakes?",
    "cover-subheading": "The Snake Recognition Challenge",
    "cover-button-transcribe": "Start the Challenge",
    "cover-button-translate": "Learn more",

    "section-explanation-heading": "How Good can you Classify Them?",
    "section-explanation-text": "Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.",


    "section-newsletter-heading": "Sign up for our Newsletter"
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
          <p class="centered scroll-effect scroll-effect-delayed-2">
            <!--
            <button class="button button-primary" v-scroll-to="'#projects'">{{ $t('cover-button-projects') }}</button>
            <button class="button button-primary" v-scroll-to="'#start-project'">{{ $t('cover-button-your-project') }}</button>
            -->
            <router-link tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-transcribe') }}</router-link>
            <router-link tag="button" to="/about" class="button button-secondary button-secondary-inverted">{{ $t('cover-button-translate') }}</router-link>
          </p>
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
              <h2 class="heading centered left-aligned-large">{{ $t('section-explanation-heading') }}</h2>
              <p>{{ $t('section-explanation-text') }}</p>
              <router-link tag="button" to="/challenge" class="button button-primary">{{ $t('cover-button-transcribe') }}</router-link>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section class="content-section-condensed" color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col">

            <duration></duration>

          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section class="content-section-condensed" color="light-greyish">
      <scores></scores>
    </app-content-section>


    <app-content-section>
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
                <img src="/img/graphic-about.jpg" style="border-radius: 50%; min-width: 100%" />
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
  }
}

</script>

<style lang="scss">

</style>
