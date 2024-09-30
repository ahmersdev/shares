"use client";

import { SignInBgImg } from "@/assets/images";
import { FormProvider } from "@/components/react-hook-form";
import { AUTH, SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Grid, Theme, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getSignInDataArray,
  signInFormDefaultValues,
  signInFormValidationSchema,
} from "./sign-in.data";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import {
  IFormArrayItem,
  IPasswordVisibility,
  ITogglePasswordVisibility,
} from "./sign-in.interface";

export default function SignIn() {
  const theme = useTheme<Theme>();

  const [passwordVisibility, setPasswordVisibility] =
    useState<IPasswordVisibility>({
      password: false,
    });

  const togglePasswordVisibility: ITogglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const signInDataArray = getSignInDataArray(
    togglePasswordVisibility,
    passwordVisibility
  );

  const methods = useForm({
    resolver: yupResolver(signInFormValidationSchema),
    defaultValues: signInFormDefaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async () => {};

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      overflow={"auto"}
      bgcolor={"primary.5"}
    >
      <Box
        position={"absolute"}
        top={"5%"}
        display={"flex"}
        justifyContent={"center"}
        zIndex={1}
      >
        <Link
          href={SALE_SITE.HOME}
          style={{ display: "flex", alignItems: "baseline" }}
        >
          <Typography
            variant={"logo"}
            fontSize={pxToRem(36)}
            component={"h1"}
            color={"text.heading"}
          >
            Shares
          </Typography>
          <Box
            width={7}
            height={7}
            bgcolor={"primary.main"}
            borderRadius={"50%"}
          />
        </Link>
      </Box>
      <Box
        component={"span"}
        bgcolor={"common.bgLight"}
        position={"absolute"}
        top={0}
        left={0}
        zIndex={0}
        width={"100%"}
        height={"50vh"}
        sx={{
          backgroundImage: `url(${SignInBgImg.src})`,
          backgroundSize: "auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        maxWidth={theme.breakpoints.values.sm - 150}
        width={"100%"}
        bgcolor={"grey.50"}
        px={2.4}
        py={3.2}
        borderRadius={3}
        zIndex={1}
        mx={2}
      >
        <Grid container spacing={3.2}>
          <Grid item xs={12}>
            <Typography variant={"h3"} color={"text.heading"}>
              Login
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3.2}>
                {signInDataArray.map((item: IFormArrayItem) => (
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
                  >
                    Login
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
              <Link href={AUTH.FORGOT_PASSWORD}>Forgot Password</Link>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant={"body3"} component={"p"} textAlign={"center"}>
              By Click Log In To Shares
              <Typography
                variant={"body3"}
                color={"primary.main"}
                fontWeight={700}
              >
                {" "}
                Terms & Conditions
              </Typography>
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
      </Box>
    </Box>
  );
}
