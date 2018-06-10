import User from '@/models/user';

export interface UserState {
  selectedUser: User | null;
}
