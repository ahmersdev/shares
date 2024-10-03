import {
  usePostEmailOtpVerificationMutation,
  usePostSignUpUserMutation,
} from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AUTH } from "@/constants/routes";
import { IApiErrorResponse } from "@/interfaces";
import { getEmailOtpStyles } from "@/styles/otp.style";

export default function useEmailOtp() {
  const theme = useTheme<Theme>();

  const router = useRouter();
  const searchParams = useSearchParams();

  const encodedParams = searchParams.get("data");

  let email = "No email provided";
  let fullName = "No name provided";

  if (encodedParams) {
    const decodedParams = atob(encodedParams);
    [email, fullName] = decodedParams.split("|");
  }

  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const [postEmailOtpVerificationTrigger, postEmailOtpVerificationStatus] =
    usePostEmailOtpVerificationMutation();

  const onSubmit = async () => {
    if (otp.length < 4) {
      setError(true);
      return;
    }
    setError(false);

    const updatedData = { otp, email };
    try {
      const resOtp = await postEmailOtpVerificationTrigger(
        updatedData
      ).unwrap();
      if (resOtp) {
        successSnackbar(resOtp.msg ?? "Verification Successful!");
        localStorage.removeItem("resendOtpEndTime");
        const url = `${AUTH.CREATE_PASSWORD}?data=${encodedParams}`;
        router.push(url);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse.data.msg);
      setOtp("");
    }
  };

  const [postResendOtpTrigger, postResendOtpStatus] =
    usePostSignUpUserMutation();

  const onSubmitResendOtp = async () => {
    const updatedData = { email, fullName };
    try {
      const res = await postResendOtpTrigger(updatedData).unwrap();
      if (res) {
        successSnackbar("OTP Resend Successfully!");
        const newTimer = 60;
        const endTime = Date.now() + newTimer * 1000;
        localStorage.setItem("resendOtpEndTime", endTime.toString());
        setTimer(newTimer);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse.data.msg);
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
    theme,
    email,
    otp,
    setOtp,
    onSubmit,
    postEmailOtpVerificationStatus,
    onSubmitResendOtp,
    postResendOtpStatus,
    timer,
    otpEmailStyles,
    error,
  };
}
