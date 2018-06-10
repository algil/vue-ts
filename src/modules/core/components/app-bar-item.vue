<template>
  <router-link
    tag="li"
    :to="item.link"
    exact
    class="app-bar-item"
    :title="$t(item.title)"
  >
    <a :href="item.link">{{ $t(item.title) }}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
};
</script>
