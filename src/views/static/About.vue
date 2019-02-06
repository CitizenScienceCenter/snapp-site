<i18n>
  {
  "de": {
  "heading-1": "What is This Challenge About?",
  "text-1": "The number of snake species is growing rapidly, projected to reach 4,000 by 2030! Through a combination of field work in remote areas of the world, better organized data portals for natural history museum collections, and new techniques in molecular systematics, scientists have access to new data about snake biodiversity nearly every day. Most laypeople can only identify a handful of species, and even most experts have expertise in only a certain geographic area or taxonomic group.",
  "text-2": "Our ultimate goal is to create tools that anyone can use to identify snakes, using a combination of humans and artificial intelligence, in order to improve snake conservation through educating people, help scientists discover new species, and help doctors better treat snakebite cases. This is important because <a href='https://www.who.int/snakebites/en/' target='_blank'>venomous snakebite is responsible for over 125,000 deaths</a> and 400,000 victims of disability/disfigurement every year, mostly affecting poor and rural communities <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31224-8/fulltext' target='_blank'>in the parts of the world where snake diversity is the highest</a>. Healthcare providers working in these areas are limited in their herpetological expertise & access to resources, and we especially want to support them build better tools to help them.",
  "text-3": "Your knowledge is uniquely valuable & someday your rapid IDs could help save the life of a person! We know that this already happens organically through email and platforms such as WhatsApp & <a href='https://www.facebook.com/groups/22137638452/' target='_blank'>Facebook snake ID groups</a>, with which we are collaborating to capture data on the speed & accuracy of the process. Eventually we’ll compare these results to an AI, setting the stage for a human vs. machine showdown like those over chess, Go, and Jeopardy! So do your best—if it helps, pretend the snake in the photo has just bitten someone & you’ve been asked to provide an ID!",

  "heading-people": "Project Team",
  "people-text": "This is a highly interdiscplinary project bringing together herpetologists and key players in global health.",

  "people-1-heading": "Andrew Durso",
  "people-1-text": "Andrew is a herpetologist and postdoctoral researcher at the Institute of Global Health. He was born in New York (USA) and grew up catching snakes in North Carolina. He earned a B.S. in Ecology from the University of Georgia in 2009, an M.S. in Biology from Eastern Illinois University in 2011, and a Ph.D. in Ecology from Utah State University in 2016. He writes a blog about snakes called <a href='http://snakesarelong.blogspot.com/' target='_blank'>'Life is Short, but Snakes are Long'</a>. His current project is to gather images of all snake species worldwide in order to create an app capable of identifying them using machine learning, with support from expert and citizen science communities.",

  "people-2-heading": "Rafael Ruiz de Castañeda",
  "people-2-text": "Macaroon sesame snaps apple pie dragée. Soufflé fruitcake bear claw sugar plum. Dragée donut sweet roll powder cupcake sugar plum chocolate cake jelly gummies. Jujubes tiramisu gingerbread cake chocolate cake marzipan jelly beans.",

  "people-3-heading": "Isabelle Bolon",
  "people-3-text": "Macaroon sesame snaps apple pie dragée. Soufflé fruitcake bear claw sugar plum. Dragée donut sweet roll powder cupcake sugar plum chocolate cake jelly gummies. Jujubes tiramisu gingerbread cake chocolate cake marzipan jelly beans."
  },
  "en": {
    "heading-1": "What is This Challenge About?",
    "text-1": "The number of snake species is growing rapidly, projected to reach 4,000 by 2030! Through a combination of field work in remote areas of the world, better organized data portals for natural history museum collections, and new techniques in molecular systematics, scientists have access to new data about snake biodiversity nearly every day. Most laypeople can only identify a handful of species, and even most experts have expertise in only a certain geographic area or taxonomic group.",
    "text-2": "Our ultimate goal is to create tools that anyone can use to identify snakes, using a combination of humans and artificial intelligence, in order to improve snake conservation through educating people, help scientists discover new species, and help doctors better treat snakebite cases. This is important because <a href='https://www.who.int/snakebites/en/' target='_blank'>venomous snakebite is responsible for over 125,000 deaths</a> and 400,000 victims of disability/disfigurement every year, mostly affecting poor and rural communities <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31224-8/fulltext' target='_blank'>in the parts of the world where snake diversity is the highest</a>. Healthcare providers working in these areas are limited in their herpetological expertise & access to resources, and we especially want to support them build better tools to help them.",
    "text-3": "Your knowledge is uniquely valuable & someday your rapid IDs could help save the life of a person! We know that this already happens organically through email and platforms such as WhatsApp & <a href='https://www.facebook.com/groups/22137638452/' target='_blank'>Facebook snake ID groups</a>, with which we are collaborating to capture data on the speed & accuracy of the process. Eventually we’ll compare these results to an AI, setting the stage for a human vs. machine showdown like those over chess, Go, and Jeopardy! So do your best—if it helps, pretend the snake in the photo has just bitten someone & you’ve been asked to provide an ID!",

    "heading-people": "Project Team",
    "people-text": "This is a highly interdiscplinary project bringing together herpetologists and key players in global health.",

    "people-1-heading": "Andrew Durso",
    "people-1-text": "Andrew is a herpetologist and postdoctoral researcher at the Institute of Global Health. He was born in New York (USA) and grew up catching snakes in North Carolina. He earned a B.S. in Ecology from the University of Georgia in 2009, an M.S. in Biology from Eastern Illinois University in 2011, and a Ph.D. in Ecology from Utah State University in 2016. He writes a blog about snakes called <a href='http://snakesarelong.blogspot.com/' target='_blank'>'Life is Short, but Snakes are Long'</a>. His current project is to gather images of all snake species worldwide in order to create an app capable of identifying them using machine learning, with support from expert and citizen science communities.",

    "people-2-heading": "Rafael Ruiz de Castañeda",
    "people-2-text": "Macaroon sesame snaps apple pie dragée. Soufflé fruitcake bear claw sugar plum. Dragée donut sweet roll powder cupcake sugar plum chocolate cake jelly gummies. Jujubes tiramisu gingerbread cake chocolate cake marzipan jelly beans.",

    "people-3-heading": "Isabelle Bolon",
    "people-3-text": "Macaroon sesame snaps apple pie dragée. Soufflé fruitcake bear claw sugar plum. Dragée donut sweet roll powder cupcake sugar plum chocolate cake jelly gummies. Jujubes tiramisu gingerbread cake chocolate cake marzipan jelly beans."
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

              <p v-html="$t('text-1')"></p>
              <p v-html="$t('text-2')"></p>
              <p v-html="$t('text-3')"></p>

              <!--
              <p>
                <figure>
                  <img src="img/graphic-about.jpg" style="min-width: 100%" />
                  <figcaption>A Snake is attacking its prey</figcaption>
                </figure>
              </p>
              -->

            </div>

            <div class="content-subsection">

              <h2 class="heading">{{ $t('heading-people') }}</h2>

              <p v-html="$t('people-text')"></p>

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
