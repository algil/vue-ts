<template>
  <div>
    <template v-if="selectedUser">
      <h2>User File</h2>
      <div>
        Name: {{ selectedUser.name }}
      </div>
    </template>
    <p v-else>Please select an user from sidebar</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import User from '@/models/user';

export default Vue.extend({
  computed: {
    selectedUser(): User {
      return this.$store.state.users.selectedUser;
    },
  },
});
</script>
