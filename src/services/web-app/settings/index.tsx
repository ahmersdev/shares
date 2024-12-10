import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const userSettings = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: WEB_APP.USER_PROFILE,
        method: "GET",
      }),
    }),
    getAccountSettingsDetails: builder.query({
      query: () => ({
        url: WEB_APP.USER_PROFILE,
        method: "GET",
      }),
    }),
    getUpdateMfa: builder.query({
      query: () => ({
        url: WEB_APP.UPDATE_MFA,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useGetAccountSettingsDetailsQuery,
  useLazyGetUpdateMfaQuery,
} = userSettings;
