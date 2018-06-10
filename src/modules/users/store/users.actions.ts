import { ActionTree } from 'vuex';
import User from '@/models/user';
import { RootState } from '@/store/root.types';
import { UserState } from './users.types';

export const actions: ActionTree<UserState, RootState> = {
  async getUsers(): Promise<User[]> {
    return [
      {
        id: 1,
        name: 'Brooklyn Craig',
      },
      {
        id: 2,
        name: 'Minnie Bell',
      },
      {
        id: 3,
        name: 'Celina Hansen',
      },
      {
        id: 4,
        name: 'Ivan Cook',
      },
      {
        id: 5,
        name: 'Naomi Adams',
      },
      {
        id: 6,
        name: 'Herbert Hill',
      },
      {
        id: 7,
        name: 'Kenzi Vasquez',
      },
    ];
  },
};
