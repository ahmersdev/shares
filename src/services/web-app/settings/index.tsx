import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = ["SETTINGS"];

export const userSettings = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (params: any) => ({
        url: WEB_APP.USER_PROFILE,
        method: "GET",
        params,
      }),
      providesTags: TAG,
    }),
  }),
});

export const { useGetUserDetailsQuery } = userSettings;
