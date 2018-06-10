import { Module } from 'vuex';
import store from '@/store';
import { state } from './users.state';
import { mutations } from './users.mutations';
import { actions } from './users.actions';
import { UserState } from './users.types';

const users: Module<UserState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

store.registerModule('users', users);
