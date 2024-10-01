import { usePostEmailOtpVerificationMutation } from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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

  const [postEmailOtpVerificationTrigger, postEmailOtpVerificationStatus] =
    usePostEmailOtpVerificationMutation();

  const onSubmit = async (data: string) => {
    const updatedData = {
      otp: data,
      email,
    };

    try {
      const resOtp = await postEmailOtpVerificationTrigger(
        updatedData
      ).unwrap();
      if (resOtp) {
        successSnackbar(resOtp.msg ?? "Verification Successful!");
      }
    } catch (error: any) {
      errorSnackbar(error?.message);
      setOtp("");
    }
  };

  return {
    theme,
    email,
    otp,
    setOtp,
    onSubmit,
    postEmailOtpVerificationStatus,
  };
}
