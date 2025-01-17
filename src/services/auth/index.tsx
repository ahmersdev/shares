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

    postCreatePassword: builder.mutation({
      query: (body: any) => ({
        url: AUTH.CREATE_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    postSignIn: builder.mutation({
      query: (body: any) => ({
        url: AUTH.SIGN_IN,
        method: "POST",
        body,
      }),
    }),

    postResetPasswordEmail: builder.mutation({
      query: (body: any) => ({
        url: AUTH.RESET_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    postResetPasswordOtpVerification: builder.mutation({
      query: (body: any) => ({
        url: AUTH.RESET_PASSWORD_OTP,
        method: "POST",
        body,
      }),
    }),

    postResetSetPassword: builder.mutation({
      query: (body: any) => ({
        url: AUTH.RESET_SET_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    deleteUser: builder.mutation({
      query: () => ({
        url: AUTH.DELETE_USER,
        method: "DELETE",
      }),
    }),

    resendMfaOtp: builder.mutation({
      query: (body: any) => ({
        url: AUTH.RESEND_OTP,
        method: "POST",
        body,
      }),
    }),

    verifyMfaOtp: builder.mutation({
      query: (body: any) => ({
        url: AUTH.VERIFY_MFA_OTP,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  usePostSignUpUserMutation,
  usePostEmailOtpVerificationMutation,
  usePostCreatePasswordMutation,
  usePostSignInMutation,
  usePostResetPasswordEmailMutation,
  usePostResetPasswordOtpVerificationMutation,
  usePostResetSetPasswordMutation,
  useDeleteUserMutation,
  useResendMfaOtpMutation,
  useVerifyMfaOtpMutation,
} = authAPI;
