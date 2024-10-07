import { AUTH } from "@/constants/routes";
import { IApiErrorResponse } from "@/interfaces";
import { usePostResetPasswordOtpVerificationMutation } from "@/services/auth";
import { getEmailOtpStyles } from "@/styles/otp.style";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function useForgotOtp() {
  const theme = useTheme<Theme>();

  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

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
      errorSnackbar(errorResponse?.data?.msg);
      setOtp("");
    }
  };

  const otpEmailStyles = getEmailOtpStyles(theme);

  return {
    email,
    otp,
    setOtp,
    otpEmailStyles,
    error,
    onSubmit,
    postResetPasswordOtpVerificationStatus,
  };
}
