"use client";

import { FormProvider } from "@/components/react-hook-form";
import { AUTH } from "@/constants/routes";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import {
  signUpDataArray,
  signUpFormDefaultValues,
  signUpFormValidationSchema,
} from "./sign-up.data";
import SignUpLayout from "@/components/sign-up-layout";

export default function SignUp() {
  const methods = useForm({
    resolver: yupResolver(signUpFormValidationSchema),
    defaultValues: signUpFormDefaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async () => {};

  return (
    <SignUpLayout>
      <Typography variant={"h3"} color={"text.heading"}>
        Join Shares
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3.2}>
          {signUpDataArray?.map((item) => (
            <Grid item xs={12} key={item.id}>
              <item.component {...item?.componentProps} size={"small"} />
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
    </SignUpLayout>
  );
}
