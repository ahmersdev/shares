"use client";

import { Grid, Typography } from "@mui/material";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import Link from "next/link";
import { AUTH } from "@/constants/routes";
import useForgotPassword from "./use-forgot-password";

export default function ForgotPassword() {
  const { methods, handleSubmit, onSubmit, postResetPasswordStatus } =
    useForgotPassword();

  return (
    <Grid container spacing={3.2}>
      <Grid item xs={12}>
        <Typography variant={"h4"} color={"text.heading"} textAlign={"center"}>
          Forgot Your Password?
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant={"body3"}
          component={"p"}
          color={"text.body"}
          textAlign={"center"}
        >
          No worries, we’ll send you an OTP to reset your password
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3.2}>
            <Grid item xs={12}>
              <RHFTextField
                name={"email"}
                label={"Email"}
                type={"email"}
                placeholder={"Enter Email Address"}
              />
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
                loading={postResetPasswordStatus.isLoading}
              >
                Send OTP
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant={"body2"}
          color={"primary.main"}
          textAlign={"center"}
          fontWeight={700}
        >
          <Link href={AUTH.SIGN_IN}>Back To Login</Link>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant={"body2"}
          textAlign={"center"}
          color={"text.heading"}
        >
          Create New Account?
          <Link href={AUTH.SIGN_UP}>
            <Typography
              variant={"body2"}
              component={"span"}
              color={"primary.main"}
              fontWeight={700}
            >
              {" "}
              Sign Up
            </Typography>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
