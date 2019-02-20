<i18n>
  {
  "en": {
  "site-title": "Snake ID Challenge | Citizen Science Center Zurich",
  "site-description": "The Snake Identification Challenge"
  },
  "de": {
  "site-title": "Snake ID Challenge | Citizen Science Center Zurich",
  "site-description": "The Snake Identification Challenge"
  }
  }
</i18n>

<template>
  <div id="app">
    <app-header project-name="Snake ID<br/>Challenge" :score="score"></app-header>
    <div class="content-area">
      <router-view></router-view>
    </div>
    <g-d-p-r></g-d-p-r>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import Header from './components/shared/Header.vue'
import GDPR from "./components/shared/GDPR";

export default {
  name: 'app',
  components: {
      GDPR,
    'app-header': Header
  },
  metaInfo: function() {
      return {
          // if no subcomponents specify a metaInfo.title, this title will be used
          title: '',
          // all titles will be injected into this template
          titleTemplate: '%s | '+this.$t('site-title'),
          meta: [
              {
                  name: 'description',
                  content: this.$t('site-description')
              },
              {
                  property: 'og:title',
                  content: this.$t('site-title')
              },
              {
                  property: 'og:description',
                  content: this.$t('site-description')
              },
              {
                  property: 'og:type',
                  content: 'website'
              },
              {
                  property: 'og:url',
                  content: 'https://snakes.citizenscience.ch'
              },
              {
                  property: 'og:image',
                  content: 'https://snakes.citizenscience.ch/img/promo.jpg'
              }
          ]
      }
  },
  mounted: function() {

    this.$store.dispatch('consts/setDates', ['2019-02-25T11:00:00Z', '2019-03-03T11:00:00Z'] );

    var app = this.$el;
    window.setTimeout(function() {
      app.classList.add("show");
    }, 1);
  },
  computed: mapState({
      score: state => state.score.score,

      containerVersion: state => state.consts.containerVersion,
      optionContainers: state => state.consts.optionContainers,

      gdpr: state => state.gdpr.accepted
  })
}

</script>

<style lang="scss" src="@/styles/shared/main.scss"></style>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';

#app {
  opacity: 0;
  transition: all $transition-duration-super-long $transition-timing-function;
  &.show {
    opacity: 1;
  }
}
</style>
