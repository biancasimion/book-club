import { bookClubApi } from '../services/bookClub/bookClub';
import { userApi } from '../services/user/user';

export const rootReducer = {
  [bookClubApi.reducerPath]: bookClubApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
};
