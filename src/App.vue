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
  mounted: function() {

    this.$store.dispatch('consts/setDates', ['2019-02-10T11:40:00Z', '2019-02-12T18:00:00Z'] );

    var app = this.$el;
    window.setTimeout(function() {
      app.classList.add("show");
    }, 1);
  },
  computed: mapState({
      score: state => state.score.score
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
