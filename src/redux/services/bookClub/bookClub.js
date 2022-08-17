import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../../../config/default.json';

const { backendDev, backendLocal } = config;

export const bookClubApi = createApi({
  reducerPath: 'bookClubApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${backendDev}api/v1/` }),
  endpoints: (build) => ({
    getBookClubById: build.query({
      query: (id) => `book-club/${id}`,
    }),
    findBookClubBySearchTerm: build.query({
      query: (searchTerm) => `book-club/search?q=${searchTerm}`,
    }),
    joinBookClubById: build.mutation({
      query: ({ id }) => ({
        url: `book-club/join/${id}`,
        method: 'PATCH',
      }),
    }),
    addComment: build.mutation({
      query: ({ body }) => ({
        url: `comments`,
        method: 'POST',
        body,
      }),
    }),
    editBookClubById: build.mutation({
      query: ({ id }) => ({
        url: `book-club/${id}`,
        method: 'PUT',
      }),
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBookClubByIdQuery,
  useJoinBookClubByIdMutation,
  useAddCommentMutation,
  useFindBookClubBySearchTermQuery,
  useEditBookClubByIdMutation,
} = bookClubApi;
