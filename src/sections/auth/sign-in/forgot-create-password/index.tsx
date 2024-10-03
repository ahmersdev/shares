"use client";

import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import {
  EyeWithoutSlashIcon,
  EyeWithSlashIcon,
  PasswordLockIcon,
} from "@/assets/icons";
import useForgotCreatePassword from "./use-forgot-create-password";

export default function ForgotCreatePassword() {
  const {
    methods,
    handleSubmit,
    onSubmit,
    passwordVisibility,
    togglePasswordVisibility,
    postResetSetPasswordStatus,
  } = useForgotCreatePassword();

  return (
    <Grid container spacing={3.2}>
      <Grid item xs={12}>
        <Typography variant={"h4"} color={"text.heading"} textAlign={"center"}>
          Create New Password
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3.2}>
            <Grid item xs={12}>
              <RHFTextField
                name={"newPassword"}
                label={"Password"}
                placeholder={"Enter Your Password"}
                type={passwordVisibility.newPassword ? "text" : "password"}
                size={"small"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle newPassword visibility"
                        onClick={() => togglePasswordVisibility("newPassword")}
                      >
                        {passwordVisibility.newPassword ? (
                          <EyeWithSlashIcon />
                        ) : (
                          <EyeWithoutSlashIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordLockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <RHFTextField
                name={"confirmPassword"}
                label={"Confirm Password"}
                placeholder={"Re-Enter Your Password"}
                type={passwordVisibility.confirmPassword ? "text" : "password"}
                size={"small"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirmPassword visibility"
                        onClick={() =>
                          togglePasswordVisibility("confirmPassword")
                        }
                      >
                        {passwordVisibility.confirmPassword ? (
                          <EyeWithSlashIcon />
                        ) : (
                          <EyeWithoutSlashIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordLockIcon />
                    </InputAdornment>
                  ),
                }}
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
                loading={postResetSetPasswordStatus.isLoading}
              >
                Reset Password
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
    </Grid>
  );
}
