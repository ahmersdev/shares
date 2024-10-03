"use client";

import { BUTTON_STYLES } from "@/styles";
import { LoadingButton } from "@mui/lab";
import { Grid, Typography } from "@mui/material";
import OTPInput from "react-otp-input";
import useForgotOtp from "./use-forgot-otp";

export default function ForgotOtp() {
  const {
    email,
    otp,
    setOtp,
    otpEmailStyles,
    error,
    onSubmit,
    postResetPasswordOtpVerificationStatus,
  } = useForgotOtp();

  return (
    <Grid container spacing={3.2}>
      <Grid item xs={12}>
        <Typography variant={"h4"} color={"text.heading"} textAlign={"center"}>
          Confirm Your Email
        </Typography>
      </Grid>

      <Grid item xs={12}>
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
      </Grid>

      <Grid item xs={12}>
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
            textAlign={"center"}
            display={"block"}
            color={"error.main"}
            mt={1}
          >
            Please Enter Full OTP
          </Typography>
        )}
      </Grid>

      <Grid item xs={12}>
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
          loading={postResetPasswordOtpVerificationStatus.isLoading}
        >
          Verify OTP
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
