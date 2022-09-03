import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../../../config/default.json';

const { backendDev, backendLocal } = config;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${backendDev}/api/v1` }),
  endpoints: (build) => ({
    generateUsername: build.query({
      query: () => `/user`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGenerateUsernameQuery } = userApi;
