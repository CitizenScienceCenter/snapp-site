<i18n>
  {
  "de": {
  "heading-1": "Unsere sprachliche Entwicklung verstehen",
  "text-1": "Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.",
  "heading-people": "Projektmitarbeitende",
  "people-1-heading": "Elvira Glaser",
  "people-1-text": "Elvira Glaser ist Professorin für Sprachwissenschaft am Deutschen Seminar der Universität Zürich und leitet das Citizen Science Projekt Schweizerdeutsch 1930 / 2020.",
  "people-2-heading": "Sandro Bachmann",
  "people-2-text": "Sandro ist Assistent am Lehrstuhl für Dialektologie der Universität Zürich und Mitarbeiter des Citizen Science Projekts Schweizerdeutsch 1930 / 2020.",
  "people-3-heading": "Carmen Raggenbass",
  "people-3-text": "Carmen hat an der Universität Zürich Germanistik und Romanistik studiert und ist Mitarbeiterin des Citizen Science Projekts Schweizerdeutsch 1930 / 2020."
  },
  "en": {
  "heading-1": "What is This Challenge About?",
  "text-1": "Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.",
  "heading-people": "Project team",
  "people-1-heading": "Elvira Glaser",
  "people-1-text": "Elvira Glaser is a professor of linguistics at the Department of German at the University of Zurich and leads the Citizen Science project &quot;Schweizerdeutsch 1930 / 2020&quot;.",
  "people-2-heading": "Sandro Bachmann",
  "people-2-text": "Sandro Bachmann is an assistant at the Chair of Dialectology at the University of Zurich and works in the Citizen Science project &quot;Schweizerdeutsch 1930 / 2020&quot;.",
  "people-3-heading": "Carmen Raggenbass",
  "people-3-text": "Carmen Raggenbass studied German and Roman languages at the University of Zurich and works for the Citizen Science project &quot;Schweizerdeutsch 1930 / 2020&quot;."
  }
  }
</i18n>


<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-6">

            <div class="content-subsection">

              <h2 class="heading">{{ $t('heading-1') }}</h2>

              <p>
              <div class='embed-container'>
                <iframe src='https://www.youtube.com/embed/PfkwKEIdhUo' frameborder='0' allowfullscreen></iframe>
              </div>
              </p>

              <p v-html="$t('text-1')"></p>

              <p>
                <figure>
                  <img src="img/graphic-about.jpg" style="min-width: 100%" />
                  <figcaption>A Snake is attacking its prey</figcaption>
                </figure>
              </p>

            </div>

            <div class="content-subsection">

              <h2 class="heading">{{ $t('heading-people') }}</h2>

              <h3 class="subheading">{{ $t('people-1-heading') }}</h3>
              <p v-html="$t('people-1-text')"></p>

              <h3 class="subheading">{{ $t('people-2-heading') }}</h3>
              <p v-html="$t('people-2-text')"></p>

              <h3 class="subheading">{{ $t('people-3-heading') }}</h3>
              <p v-html="$t('people-3-text')"></p>

            </div>

          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-mobile-large-10">
            <h2 class="heading centered">Sign up for our Newsletter</h2>
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

import Cover from '@/components/shared/Cover.vue'
import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'About',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
