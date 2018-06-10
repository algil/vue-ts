import User from '@/models/user';

export interface UserState {
  user: User | null;
  selectedUser: User | null;
}
