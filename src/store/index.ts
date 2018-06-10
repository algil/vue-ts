import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './root.types';
import { state } from './root.state';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
