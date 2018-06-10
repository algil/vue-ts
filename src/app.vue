<template>
  <div class="app">
    <app-bar></app-bar>
    <router-view name="leftSidebar"></router-view>
    <router-view class="main-content"></router-view>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';
// import AppBar from './modules/core/components/app-bar.vue';

// @Component({
//   components: {
//     AppBar,
//   }
// })
// export default class App extends Vue {
// }





import Vue from 'vue';
import AppBar from './modules/core/components/app-bar.vue';

export default Vue.extend({
  name: 'app',

  components: {
    AppBar,
  },
});
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
