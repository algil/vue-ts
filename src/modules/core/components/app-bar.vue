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

<script>
import AppBarItem from './app-bar-item.vue';

export default {
  name: 'app-bar',

  components: {
    AppBarItem,
  },

  data() {
    return {
      items: [
        { link: '/', title: 'menu.users' },
        { link: 'about', title: 'menu.about' },
      ],
    };
  },

  computed: {
    user() {
      return this.$store.state.users.user;
    },
  },
};
</script>
