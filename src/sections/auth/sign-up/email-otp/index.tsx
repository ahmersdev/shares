"use client";

import { OtpImg } from "@/assets/images";
import { AUTH } from "@/constants/routes";
import { BUTTON_STYLES } from "@/styles";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import OTPInput from "react-otp-input";
import useEmailOtp from "./use-email-otp";
import Link from "next/link";
import { pxToRem } from "@/utils/get-font-value";
import { BackCircleIcon } from "@/assets/icons";

export default function EmailOtp() {
  const {
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
  } = useEmailOtp();

  return (
    <>
      <Box position={"relative"}>
        <Link
          href={AUTH.SIGN_UP}
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
          Confirm Your Email
        </Typography>

        <Image src={OtpImg} alt={"Email"} width={126} height={114} />

        <Typography
          variant={"body2"}
          textAlign={"center"}
          color={"text.heading"}
        >
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
          inputStyle={otpEmailStyles.otpInputStyle}
          containerStyle={otpEmailStyles.otpContainerStyle}
          renderInput={(props) => <input {...props} />}
        />

        {error && (
          <Typography
            variant={"body2"}
            component={"span"}
            sx={{ display: "block", textAlign: "center" }}
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
          onClick={() => onSubmit(otp)}
          loading={postEmailOtpVerificationStatus.isLoading}
        >
          Verify OTP
        </LoadingButton>

        <Typography
          variant={"body2"}
          fontWeight={600}
          color={timer ? "text.disabled" : "primary.main"}
          onClick={
            timer === null && !postResendOtpStatus.isLoading
              ? onSubmitResendOtp
              : undefined
          }
          sx={{ cursor: timer === null ? "pointer" : "not-allowed" }}
        >
          {postResendOtpStatus.isLoading
            ? "Sending OTP..."
            : timer
            ? `Resend OTP in ${timer}s`
            : "Resend OTP"}
        </Typography>
      </Box>
    </>
  );
}
