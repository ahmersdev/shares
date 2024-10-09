"use client";

import { BackCircleIcon } from "@/assets/icons";
import { ONBOARDING } from "@/constants/routes";
import { BUTTON_STYLES } from "@/styles";
import { pxToRem } from "@/utils/get-font-value";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import OTPInput from "react-otp-input";
import usePhoneNumberOtp from "./use-phone-number-otp";

export default function PhoneNumberOtp() {
  const {
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
  } = usePhoneNumberOtp();

  return (
    <>
      <Box position={"relative"}>
        <Link
          href={ONBOARDING.PHONE_NUMBER}
          style={{
            display: "flex",
            alignItems: "baseline",
            maxHeight: pxToRem(135),
            position: "absolute",
            padding: "40px 60px",
          }}
        >
          <BackCircleIcon />
        </Link>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        maxWidth={theme.breakpoints.values.sm - 150}
        width={"100%"}
        margin={"auto"}
        gap={3.2}
        maxHeight={"calc(100vh - 140px)"}
        height={"100%"}
      >
        <Typography variant={"h3"} color={"text.heading"}>
          Verify Your Phone Number
        </Typography>

        <Typography variant={"body2"} color={"text.heading"}>
          Please enter the one-time-password (OTP) sent to you at{" "}
          <Typography variant={"body2"} component={"span"} fontWeight={700}>
            {number}
          </Typography>
        </Typography>

        <OTPInput
          value={otp}
          onChange={(otp: string) => {
            setOtp(otp);
          }}
          numInputs={4}
          inputStyle={otpNumberStyles.otpInputStyle}
          containerStyle={otpNumberStyles.otpContainerStyle}
          renderInput={(props) => <input {...props} />}
        />

        {error && (
          <Typography
            variant={"body2"}
            component={"span"}
            textAlign={"center"}
            display={"block"}
            color={"error.main"}
          >
            Please Enter Full OTP
          </Typography>
        )}

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
          onClick={onSubmit}
          loading={postNumberOtpVerificationStatus.isLoading}
        >
          Verify OTP
        </LoadingButton>

        <Typography
          variant={"body2"}
          fontWeight={600}
          color={timer ? "text.disabled" : "primary.main"}
          onClick={
            timer === null && !postOnboardingAddPhoneNumberStatus?.isLoading
              ? onSubmitResendOtp
              : undefined
          }
          sx={{ cursor: timer === null ? "pointer" : "not-allowed" }}
        >
          {postOnboardingAddPhoneNumberStatus?.isLoading
            ? "Sending OTP..."
            : timer
            ? `Resend OTP in ${timer}s`
            : "Resend OTP"}
        </Typography>
      </Box>
    </>
  );
}
