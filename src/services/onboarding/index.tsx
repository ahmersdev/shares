import { ONBOARDING } from "@/constants/endpoints";
import { baseAPI } from "../base-api";

const TAG = "USER_DETAILS";

export const onboardingAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postOnboardingAddPhoneNumber: builder.mutation({
      query: (body: any) => ({
        url: ONBOARDING.ADD_CONTACT,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    postOnboardingPhoneNumberOtpVerification: builder.mutation({
      query: (body: any) => ({
        url: ONBOARDING.VERIFY_CONTACT,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    postOnboardingAddKyc: builder.mutation({
      query: (body: any) => ({
        url: ONBOARDING.ADD_KYC,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOnboardingAddKyc: builder.query({
      query: () => ({
        url: ONBOARDING.VERIFY_KYC,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
  }),
});

export const {
  usePostOnboardingAddPhoneNumberMutation,
  usePostOnboardingPhoneNumberOtpVerificationMutation,
  usePostOnboardingAddKycMutation,
  useLazyGetOnboardingAddKycQuery,
} = onboardingAPI;
