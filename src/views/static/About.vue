<i18n>
  {

  "en": {

  "page-title": "About",

  "heading-1": "What is This Challenge About?",
  "text-1": "<a href='https://www.who.int/snakebites/en/' target='_blank'>Venomous snakebite is responsible for over 125,000 deaths</a> and around three times as many permanent disabilities every year, mostly affecting poor and rural communities <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31224-8/fulltext' target='_blank'>in the parts of the world where snake diversity is the highest</a>. One of the reasons of this crisis is that healthcare providers working in these areas are limited in their herpetological expertise & access to resources. Same can be said for local people and communities.",
  "text-2": "Our ultimate goal is to support them with better tools to face this challenge. We are working on creating tools that anyone can use to identify snakes, using a combination of humans and artificial intelligence, in order to help clinicians better treat snakebite cases, educate people, and at the same time improve snake conservation and help scientists discover new species.",
  "text-3": "The number of known snake species is growing rapidly, projected to reach 4,000 by 2030. Through a combination of field work in remote areas of the world, better organized data portals for natural history museum collections, and new techniques in molecular systematics, scientists have access to new data about snake biodiversity nearly every day. However, most laypeople can only identify a handful of species, and even professional herpetologists may have expertise in only a certain geographic area or taxonomic group.",
  "text-4": "But our citizen scientists are passionate experts!",
  "text-5": "For our applications, their knowledge is uniquely valuable, as someday their rapid IDs could help save the life of a person. This is already happening organically through email and platforms such as WhatsApp & <a href='https://www.facebook.com/groups/22137638452/' target='_blank'>Facebook snake ID groups</a>, and we are collaborating with them to capture data on the speed & accuracy of the process. Eventually we’ll compare the results obtained with the crowd to the ones obtained with Artificial Intelligence, setting the stage for a human vs. machine showdown like those over chess, Go, and Jeopardy.",
  
  "heading-people": "Project Team",

  "people-text": "This is a highly interdisciplinary project bringing together herpetologists and key players in global health.",

  "heading-sources": "Image Sources",
  "text-sources": "All images in the second challenge were collected from Twitter, in accordance with their terms of service. The photographers retain the copyright to their images.",

  "section-partners-heading": "Project Partners",

  "section-newsletter-heading": "Sign up for our Newsletter"

  },

  "de": {

  "page-title": "Über das Projekt",

  "heading-1": "Worum geht es in der Challenge?",
  "text-1": "<a href='https://www.who.int/snakebites/en/' target='_blank'>Schlangenbisse kosten weltweit jedes Jahr über 100’000 Menschenleben</a> und verursachen ungefähr drei Mal so viele Fälle von permanenter Behinderung; oft trifft es gerade Menschen <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31224-8/fulltext' target='_blank'>in den armen, ländlichen Gegenden der Welt mit einer grossen Artenvielfalt an Schlangen</a>. Einer der Gründe für die Krise ist, dass Gesundheitsversorger in diesen Gegenden oft wenig herpetologisches Artenwissen und einen begrenzten Zugang zu Ressourcen haben. Dasselbe gilt für die lokale Bevölkerung und Gemeinden.",
  "text-2": "Unser Ziel ist es, die betroffenen Menschen dabei zu unterstützen, diese Herausforderung zu meistern. Wir arbeiten an der Entwicklung eines Tools, mit dem man Schlangen durch eine Kombination aus menschlicher und künstlicher Intelligenz einfach identifizieren kann. Dies hilft klinischem Personal, Fälle von Schlangenbissen besser zu behandeln. Es kann auch in der Bildung zur Aufklärung und zum Schutz von Schlangen genutzt werden und hilft Forschenden, neue Arten zu entdecken.",
  "text-3": "Die Zahl der bekannten Schlangenarten wächst rapide und wird bis 2030 voraussichtlich um die 4000 betragen. Durch vermehrte Feldforschung in abgelegenen Gebieten der Welt, besser organisierte Datenportale für die Sammlungen naturkundlicher Museen und neue Techniken in der molekularen Systematik haben WissenschaftlerInnen fast täglich Zugang zu neuen Daten über die Artenvielfalt von Schlangen. Die meisten Laien können jedoch nur eine Handvoll von Arten identifizieren und selbst professionelle Herpetologen und Herpetologinnen verfügen meist nur über Kenntnisse auf einem bestimmten geografischen Gebiet oder über eine taxonomische Gruppe.",
  "text-4": "Aber unsere Citizen Scientists sind Expert*innen aus Leidenschaft!",
  "text-5": "Für unser geplantes Tool ist deren Wissen unersetzbar, denn ihre schnelle Bestimmung einer Schlange auf einem Foto könnte eines Tages dazu beitragen, das Leben einer Person zu retten. Dies geschieht derzeit schon über E-Mails und Plattformen wie WhatsApp und <a href='https://www.facebook.com/groups/22137638452/' target='_blank'>Facebook-Gruppen</a>, mit denen wir zusammenarbeiten, um deren Geschwindigkeit und Genauigkeit zu messen. Am Ende werden wir die Ergebnisse der Crowd mit denen von Künstlicher Intelligenz vergleichen und schauen, wer die Kraftprobe „Mensch-gegen-Maschine“ gewinnt, ähnlich wie bereits im Schach, Go und Jeopardy geschehen.",
  
  "heading-people": "Projektteam",

  "people-text": "Dies ist ein höchst interdisziplinäres Projekt, das Herpetolog*innen und wichtige Akteurinnen und Akteure der globalen Gesundheit zusammenbringt.",

  "heading-sources": "Bildquellen",
  "text-sources": "Alle Bilder der zweiten Challenge wurden gemäss den Nutzungsbedingungen von Twitter gesammelt. Die Fotograf*innen behalten sich das Urheberrecht an ihren Bildern vor.",

  "section-partners-heading": "Projektpartner",

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

            <div class="content-subsection">

              <h2 class="heading centered">{{ $t('heading-1') }}</h2>

              <p class="centered">
                <img src="/img/graphic-about.jpg" style="width: 50%;border-radius: 50%" />
              </p>

              <p v-html="$t('text-1')"></p>
              <p v-html="$t('text-2')"></p>
              <p v-html="$t('text-3')"></p>
              <p v-html="$t('text-4')"></p>
              <p v-html="$t('text-5')"></p>
              <!-- <p v-html="$t('text-6')"></p>

              <ul>
                <li v-html="$t('list-1')"></li>
                <li v-html="$t('list-2')"></li>
                <li v-html="$t('list-3')"></li>
                <li v-html="$t('list-4')"></li>
                <li v-html="$t('list-5')"></li>
                <li v-html="$t('list-6')"></li>
                <li v-html="$t('list-7')"></li>
                <li v-html="$t('list-8')"></li>
                <li v-html="$t('list-9')"></li>
              </ul> -->

            </div>

            <div class="content-subsection">

              <h2 class="heading centered">{{ $t('heading-people') }}</h2>

              <p v-html="$t('people-text')"></p>

              <ul>
                <li>Dr. Rafael Ruiz de Castañeda, Institute of Global Health, UNIGE</li>
                <li>Dr. Isabelle Bolon, Institute of Global Health, UNIGE</li>
                <li>Dr. Andrew Durso, Institute of Global Health, UNIGE</li>
                <li>Prof. François Chappuis, Division of humanitarian and tropical medicine, HUG/UNIGE</li>
                <li>Dr. Gabriel Alcoba, MSF and Division of humanitarian and tropical medicine, HUG/UNIGE</li>
                <li>Dr. Nicolas Ray, Institute of environmental sciences & Institute of Global Health, UNIGE</li>
                <li>Prof. Marcel Salathe, Digital Epidemiology Lab, EPFL</li>
                <li>Sharada Prasanna Mohanty, Digital Epidemiology Lab, EPFL</li>
                <li>Prof. François Grey, Citizen Cyberlab, UNIGE</li>
                <li>Dr. Jose Luis Fernandez, Citizen Cyberlab, UNIGE</li>
                <li>Rosy Mondardini, Citizen Science Center Zurich, ETHZ / UZH</li>
                <li>Prof. David Williams, Global Snakebite Initiative, University of Melbourne</li>
                <li>Dr. Abiy Tamrat, Médecins Sans Frontières, Geneva</li>
                <li>Hanne Epstein, Médecins Sans Frontières, Copenhagen</li>
                <li>Donald Becker, Christopher Smith, Michael Pingleton, HerpMapper</li>
                <li>M. Jose Louies, IUCN Viper Specialist Group, <a href="http://indiansnakes.org" target="_blank">indiansnakes.org</a> & <a href="http://snakebiteinitiative.in" target="_blank">snakebiteinitiative.in</a></li>
                <li>Dr. Brian Lohse, AntiVenom Venture & University of Copenhagen</li>
                <li>Dr. Ulrich Kuch, University of Frankfurt, Germany</li>
              </ul>

            </div>

          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-6 scroll-effect">

            <h2 class="heading centered" v-html="$t('heading-sources')"></h2>
            <p v-html="$t('text-sources')"></p>

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
      This project supports Goal 3 of the UN SDGs: Ensure healthy lives and promote well-being for all at all ages, and in particular Target 3.3 on ending neglected tropical disease.
    </section-s-d-g>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>

  </div>
</template>

<script>

import Cover from '@/components/shared/Cover.vue'
import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'
import SectionNewsletterSignup from "../../components/shared/SectionNewsletterSignup";
import SectionSDG from "../../components/shared/SectionSDG";
import SectionFeedback from "../../components/shared/SectionFeedback";

export default {
  name: 'About',
  components: {
    SectionFeedback,
    SectionSDG,
    SectionNewsletterSignup,
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('page-title')
      }
  },
}

</script>

<style lang="scss">

</style>
