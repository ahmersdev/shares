"use client";

import { OtpImg } from "@/assets/images";
import SignUpLayout from "@/components/sign-up-layout";
import { AUTH } from "@/constants/routes";
import { usePostEmailOtpVerificationMutation } from "@/services/auth";
import { BUTTON_STYLES } from "@/styles";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { pxToRem } from "@/utils/get-font-value";
import { LoadingButton } from "@mui/lab";
import { Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import OTPInput from "react-otp-input";

export default function EmailOtp() {
  const theme = useTheme<Theme>();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

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
        successSnackbar("Verification Successful! Please Buy Plan");
      }
    } catch (error) {
      errorSnackbar(error?.data?.message);
      setOtp("");
    }
  };

  return (
    <SignUpLayout hrefBackRoute={AUTH.SIGN_UP}>
      <Typography variant={"h3"} color={"text.heading"}>
        Confirm Your Email
      </Typography>

      <Image src={OtpImg} alt={"Email"} width={126} height={114} />

      <Typography variant={"body2"} textAlign={"center"} color={"text.heading"}>
        Verification Code Has Been Sent To Your Email Address{" "}
        <Typography variant={"body2"} component={"span"} fontWeight={700}>
          {email}
        </Typography>
      </Typography>

      <OTPInput
        value={otp}
        onChange={(otp: string) => {
          setOtp(otp);
        }}
        numInputs={4}
        inputStyle={{
          width: 85,
          height: 70,
          fontSize: pxToRem(20),
          border: `1.5px solid ${theme.palette.text.bodyLight}`,
          background: "transparent",
          borderRadius: "8px",
          outline: "none",
          color: theme.palette.text.body,
        }}
        containerStyle={{ justifyContent: "center", gap: pxToRem(20) }}
        renderInput={(props) => <input {...props} />}
      />

      <LoadingButton
        variant={"contained"}
        fullWidth
        sx={{
          ...BUTTON_STYLES,
          color: "grey.50",
          borderColor: "primary.main",
          backgroundColor: "primary.main",
          ":hover": {
            backgroundColor: "primary.main",
          },
        }}
        disableElevation
        type={"submit"}
        onClick={() => onSubmit(otp)}
        loading={postEmailOtpVerificationStatus.isLoading}
      >
        Verify OTP
      </LoadingButton>
    </SignUpLayout>
  );
}
