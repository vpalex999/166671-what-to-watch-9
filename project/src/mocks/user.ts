import { UserData } from '../types/user-data';

export const getMockUser = (): UserData => ({
  id: 8888,
  token: 'token',
  name: 'vpalex',
  email: 'my@my.com',
  avatarUrl: 'avatarUrl',
});
