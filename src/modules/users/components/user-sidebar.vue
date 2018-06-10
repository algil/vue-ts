<template>
  <div class="user-sidebar">
    <ul>
      <li 
        v-for="user in users"
        :key="user.id"
        @click="selectUser(user)">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      users: [],
    };
  },

  async created() {
    this.users = await this.getUsers();
  },

  methods: {
    ...mapMutations('users', ['selectUser']),
    ...mapActions('users', ['getUsers']),
  },
};
</script>
