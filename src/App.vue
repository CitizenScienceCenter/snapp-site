<template>
  <div id="app">
    <app-header project-name="Snake ID<br/>Challenge" :languages="languages"></app-header>
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


const url = 'https://snakes.citizenscience.ch';

export default {
  name: 'app',
  components: {
      GDPR,
    'app-header': Header
  },
  metaInfo: function() {
      return {
          // if no subcomponents specify a metaInfo.title, this title will be used
          title: this.$t('site-title'),
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
                content: url+this.$route.path
              },
              {
                property: 'og:image',
                content: url+'/img/promo.jpg'
              }
          ],
          link: [
              {rel: 'canonical', href: url+this.$route.path}
          ],
          htmlAttrs: {
              lang: this.language
          }
      }
  },
  computed: {
    ...mapState({
      languages: state => state.consts.languages,
      language: state => state.settings.language
    })
  },
  mounted: function() {
    this.$store.dispatch('timer/setDates', ['2019-11-11T11:00:00Z', '2019-11-18T11:00:00Z'] );

    this.$store.dispatch('consts/setProjectId', 'b04bc186-1e0e-4fd3-87b8-a25262c1c79f');
    this.$store.dispatch('consts/setActivityId', '75ebb66d-b93c-49cc-b5b1-89c0931ebe62');

    // body fade
    var app = this.$el;
    var cover = new Image();
    cover.src = '/img/cover.jpg';
    cover.onload = function() {
      if( navigator.userAgent !== 'ReactSnap' ) {
        app.classList.add("show");
      }
    };

  }
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
