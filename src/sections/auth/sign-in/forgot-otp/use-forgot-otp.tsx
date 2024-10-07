import { AUTH } from "@/constants/routes";
import { IApiErrorResponse } from "@/interfaces";
import {
  usePostResetPasswordEmailMutation,
  usePostResetPasswordOtpVerificationMutation,
} from "@/services/auth";
import { getEmailOtpStyles } from "@/styles/otp.style";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useForgotOtp() {
  const theme = useTheme<Theme>();

  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const [
    postResetPasswordOtpVerificationTrigger,
    postResetPasswordOtpVerificationStatus,
  ] = usePostResetPasswordOtpVerificationMutation();

  const onSubmit = async () => {
    if (otp.length < 4) {
      setError(true);
      return;
    }
    setError(false);

    if (!email) {
      errorSnackbar("Email is missing. Please try again.");
      return;
    }

    const updatedData = { otp, email };
    try {
      const resOtp = await postResetPasswordOtpVerificationTrigger(
        updatedData
      ).unwrap();
      if (resOtp) {
        successSnackbar(resOtp?.msg ?? "Verification Successful!");
        const params = new URLSearchParams({ email });
        const url = `${AUTH.FORGOT_CREATE_PASSWORD}?${params.toString()}`;
        router.push(url);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
      setOtp("");
    }
  };

  const [postResendOtpTrigger, postResendOtpStatus] =
    usePostResetPasswordEmailMutation();

  const onSubmitResendOtp = async () => {
    try {
      const res = await postResendOtpTrigger({ email }).unwrap();
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

  const otpEmailStyles = getEmailOtpStyles(theme);

  return {
    email,
    otp,
    setOtp,
    otpEmailStyles,
    error,
    onSubmit,
    postResetPasswordOtpVerificationStatus,
    timer,
    postResendOtpStatus,
    onSubmitResendOtp,
  };
}
