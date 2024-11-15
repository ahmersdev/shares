import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const userSettings = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (params: any) => ({
        url: WEB_APP.USER_PROFILE,
        method: "GET",
        params,
      }),
    }),
    getAccountSettingsDetails: builder.query({
      query: (params: any) => ({
        url: WEB_APP.USER_PROFILE,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery, useGetAccountSettingsDetailsQuery } =
  userSettings;
