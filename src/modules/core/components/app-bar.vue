<template>
  <div class="app-bar">
    <ul class="app-bar-menu" ref="menu">
      <app-bar-item
          v-for="(item, index) in items"
          :item="item"
          :key="index"      
      ></app-bar-item>
    </ul>
  </div>
</template>

<script lang="ts">
///////////////////////
// NOT WORK
//////////////////////

import { Component, Prop, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import User from '@/models/user';
import AppBarItem from './app-bar-item.vue';

const namespace: string = 'users';

@Component({
  components: {
    AppBarItem,
  },
})
export default class AppBar extends Vue {
  @State('user', { namespace }) private user!: User;

  private items = [
    { link: '/', title: 'menu.users' },
    { link: 'about', title: 'menu.about' },
  ];
}

///////////////////////
// WORK
//////////////////////

// import Vue from 'vue';
// import AppBarItem from './app-bar-item.vue';

// export default Vue.extend({
//   name: 'app-bar',

//   components: {
//     AppBarItem,
//   },

//   data() {
//     return {
//       items: [
//         { link: '/', title: 'menu.users' },
//         { link: 'about', title: 'menu.about' },
//       ],
//     };
//   },

//   computed: {
//     user() {
//       return this.$store.state.users.user;
//     },
//   },
// });
</script>
