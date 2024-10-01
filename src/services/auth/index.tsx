import { AUTH } from "@/constants/endpoints";
import { baseAPI } from "../base-api";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postSignUpUser: builder.mutation({
      query: (body: any) => ({
        url: AUTH.SIGN_UP,
        method: "POST",
        body,
      }),
    }),

    postEmailOtpVerification: builder.mutation({
      query: (body: any) => ({
        url: AUTH.EMAIL_OTP_VERIFICATION,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  usePostSignUpUserMutation,
  usePostEmailOtpVerificationMutation,
} = authAPI;
