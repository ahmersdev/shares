import { ONBOARDING } from "@/constants/endpoints";
import { baseAPI } from "../base-api";

export const onboardingAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postOnboardingAddPhoneNumber: builder.mutation({
      query: (body: any) => ({
        url: ONBOARDING.ADD_CONTACT,
        method: "POST",
        body,
      }),
    }),

    postOnboardingPhoneNumberOtpVerification: builder.mutation({
      query: (body: any) => ({
        url: ONBOARDING.VERIFY_CONTACT,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  usePostOnboardingAddPhoneNumberMutation,
  usePostOnboardingPhoneNumberOtpVerificationMutation,
} = onboardingAPI;
