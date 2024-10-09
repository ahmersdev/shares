import { ONBOARDING } from "@/constants/routes";
import { IApiErrorResponse } from "@/interfaces";
import {
  usePostOnboardingAddPhoneNumberMutation,
  usePostOnboardingPhoneNumberOtpVerificationMutation,
} from "@/services/onboarding";
import { getOtpStyles } from "@/styles/otp.style";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function usePhoneNumberOtp() {
  const theme = useTheme<Theme>();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const encodedParams = searchParams.get("data");

  let number = "No Number provided";
  if (encodedParams) {
    const decodedParams = atob(encodedParams);
    number = decodedParams;
  }

  const [postNumberOtpVerificationTrigger, postNumberOtpVerificationStatus] =
    usePostOnboardingPhoneNumberOtpVerificationMutation();
  const onSubmit = async () => {
    if (otp.length < 4) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const resOtp = await postNumberOtpVerificationTrigger({ otp }).unwrap();
      if (resOtp) {
        successSnackbar(resOtp?.msg ?? "Verification Successful!");
        localStorage.removeItem("resendOtpEndTime");
        const url = `${ONBOARDING.KYC_VERIFICATION}?data=${encodedParams}`;
        router.push(url);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
      setOtp("");
    }
  };

  const [
    postOnboardingAddPhoneNumberTrigger,
    postOnboardingAddPhoneNumberStatus,
  ] = usePostOnboardingAddPhoneNumberMutation();

  const onSubmitResendOtp = async () => {
    try {
      const res = await postOnboardingAddPhoneNumberTrigger({
        phoneNumber: number.replace(/\s/g, ""),
      }).unwrap();
      if (res) {
        successSnackbar("OTP Resent Successfully!");
        const newTimer = 60;
        const endTime = Date.now() + newTimer * 1000;
        localStorage.setItem("resendOtpEndTime", endTime.toString());
        setTimer(newTimer);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse.data.errors);
    }
  };

  const setUpTimer = useCallback(() => {
    const interval = setInterval(() => {
      const endTime = localStorage.getItem("resendOtpEndTime");
      if (endTime) {
        const remainingTime = Math.round(
          (parseInt(endTime) - Date.now()) / 1000
        );
        if (remainingTime > 0) {
          setTimer(remainingTime);
        } else {
          setTimer(null);
          localStorage.removeItem("resendOtpEndTime");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanUp = setUpTimer();
    return cleanUp;
  }, [setUpTimer]);

  const otpNumberStyles = getOtpStyles(theme);

  return {
    theme,
    number,
    otp,
    setOtp,
    otpNumberStyles,
    error,
    onSubmit,
    postNumberOtpVerificationStatus,
    timer,
    postOnboardingAddPhoneNumberStatus,
    onSubmitResendOtp,
  };
}
