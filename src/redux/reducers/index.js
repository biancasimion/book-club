import { bookClubApi } from '../services/bookClub/bookClub';

export const rootReducer = {
  [bookClubApi.reducerPath]: bookClubApi.reducer,
};
