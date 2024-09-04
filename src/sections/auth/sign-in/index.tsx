"use client";

import { SignInBgImg } from "@/assets/images";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { AUTH, SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const methods: any = useForm({
    defaultValues: { email: "" },
  });

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      overflow={"auto"}
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
        maxWidth={"sm"}
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
            <FormProvider methods={methods}>
              <RHFTextField
                name={"email"}
                label={"Email"}
                placeholder={"Enter Email Address"}
              />
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