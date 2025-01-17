"use client";

import { FormProvider } from "@/components/react-hook-form";
import { AUTH } from "@/constants/routes";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import { signUpDataArray } from "./sign-up.data";
import useSignUp from "./use-sign-up";

export default function SignUp() {
  const { theme, methods, handleSubmit, onSubmit, postSignUpUserStatus } =
    useSignUp();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      p={2}
      maxWidth={theme.breakpoints.values.sm - 150}
      width={"100%"}
      margin={"auto"}
      gap={3.2}
      maxHeight={"calc(100vh - 140px)"}
      height={"100%"}
    >
      <Typography variant={"h3"} color={"text.heading"}>
        Join Shares
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3.2}>
          {signUpDataArray.map((item) => (
            <Grid item xs={12} key={item.id}>
              <item.component {...item.componentProps} size={"small"} />
            </Grid>
          ))}

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
              loading={postSignUpUserStatus.isLoading}
            >
              Let’s Go
            </LoadingButton>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant={"body2"}
              color={"text.heading"}
              textAlign={"center"}
            >
              Already a member?{" "}
              <Typography variant={"body2"} fontWeight={700} component={"span"}>
                <Link href={AUTH.SIGN_IN}>Sign In</Link>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
}
