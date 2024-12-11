import { IApiErrorResponse } from "@/interfaces";
import { getOtpStyles } from "@/styles/otp.style";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@/store";
import { logIn } from "@/store/auth";
import { WEB_APP } from "@/constants/routes";
import {
  useResendMfaOtpMutation,
  useVerifyMfaOtpMutation,
} from "@/services/auth";
import Cookies from "js-cookie";

export default function useMfaOtp() {
  const theme = useTheme<Theme>();

  const dispatch = useAppDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const [postVerifyMfaOtpTrigger, postVerifyMfaOtpStatus] =
    useVerifyMfaOtpMutation();

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
      const resOtp = await postVerifyMfaOtpTrigger(updatedData).unwrap();
      if (resOtp) {
        const encryptedToken = resOtp?.token;
        Cookies.set("authenticationTokenSharesByCoco", encryptedToken);
        dispatch(logIn(encryptedToken));
        successSnackbar(resOtp?.msg ?? "Login Successfully!");
        router.push(WEB_APP.PROPERTIES);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
      setOtp("");
    }
  };

  const [postResendOtpTrigger, postResendOtpStatus] = useResendMfaOtpMutation();

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

  const otpEmailStyles = getOtpStyles(theme);

  return {
    email,
    otp,
    setOtp,
    otpEmailStyles,
    error,
    onSubmit,
    postVerifyMfaOtpStatus,
    timer,
    postResendOtpStatus,
    onSubmitResendOtp,
  };
}
