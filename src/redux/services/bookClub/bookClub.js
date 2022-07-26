import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../../../config/default.json';

const { backendDev } = config;

export const bookClubApi = createApi({
  reducerPath: 'bookClubApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${backendDev}api/v1/` }),
  endpoints: (build) => ({
    getBookClubById: build.query({
      query: (id) => `book-club/${id}`,
    }),
    joinBookClubById: build.mutation({
      query: ({ id }) => ({
        url: `book-club/join/${id}`,
        method: 'PATCH',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookClubByIdQuery, useJoinBookClubByIdMutation } =
  bookClubApi;
