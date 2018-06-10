import { MutationTree } from 'vuex';
import { UserState } from './users.types';
import User from '@/models/user';

export const mutations: MutationTree<UserState> = {
  selectUser(state: UserState, user: User) {
    state.selectedUser = user;
  },
};
