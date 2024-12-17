import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = "USER_DETAILS";

export const userSettings = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: WEB_APP.USER_PROFILE,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    getUpdateMfa: builder.query({
      query: () => ({
        url: WEB_APP.UPDATE_MFA,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
  }),
});

export const { useGetUserDetailsQuery, useLazyGetUpdateMfaQuery } =
  userSettings;
