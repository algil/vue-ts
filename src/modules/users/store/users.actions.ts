import { ActionTree } from 'vuex';
import User from '@/models/user';
import { RootState } from '@/store/root.types';
import { UserState } from './users.types';

export const actions: ActionTree<UserState, RootState> = {
  async getUsers(): Promise<User[]> {
    return [
      {
        id: 2,
        name: 'Nikito Nipongo',
      },
      {
        id: 3,
        name: 'Pamela Chu',
      },
      {
        id: 4,
        name: 'Juan Antonio Ortega Rejon De Todos Los Santos',
      },
      {
        id: 5,
        name: 'Antonio Benítez Fernández',
      },
      {
        id: 6,
        name: 'Antonio Benítez Fernández',
      },
      {
        id: 7,
        name: 'Antonio Benítez Fernández',
      },
    ];
  },
};
