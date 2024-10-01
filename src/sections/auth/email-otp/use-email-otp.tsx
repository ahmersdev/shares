import {
  usePostEmailOtpVerificationMutation,
  usePostSignUpUserMutation,
} from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getEmailOtpStyles } from "./email-otp.styles";

export default function useEmailOtp() {
  const theme = useTheme<Theme>();

  const searchParams = useSearchParams();
  const encodedData = searchParams.get("data");

  let email = "No email provided";
  let fullName = "No name provided";

  if (encodedData) {
    const decodedData = atob(encodedData);
    [email, fullName] = decodedData.split("|");
  }

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState<number | null>(null);

  const [postEmailOtpVerificationTrigger, postEmailOtpVerificationStatus] =
    usePostEmailOtpVerificationMutation();

  const onSubmit = async (data: string) => {
    const updatedData = { otp: data, email };
    try {
      const resOtp = await postEmailOtpVerificationTrigger(
        updatedData
      ).unwrap();
      if (resOtp) {
        successSnackbar(resOtp.msg ?? "Verification Successful!");
        localStorage.removeItem("resendOtpEndTime");
      }
    } catch (error: any) {
      errorSnackbar(error?.message);
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
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
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
    onSubmit,
    postEmailOtpVerificationStatus,
    onSubmitResendOtp,
    postResendOtpStatus,
    timer,
    otpEmailStyles,
  };
}
