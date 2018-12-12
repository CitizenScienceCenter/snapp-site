<template>
  <div id="app">
    <app-header project-name="Snake<br/>Challenge" :score="score"></app-header>
    <div class="content-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

    import {mapState} from 'vuex'
    import Header from './components/shared/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  mounted: function() {
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
