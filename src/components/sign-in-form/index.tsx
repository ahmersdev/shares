import { FormProvider } from "@/components/react-hook-form";
import { AUTH } from "@/constants/routes";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import { ISignInFormProps } from "./sign-in-form.interface";
import useSignInForm from "./use-sign-in-form";
import { IFormArrayItem } from "@/interfaces";

export default function SignInForm(props: ISignInFormProps) {
  const { mt = 0, textAlign = "start" } = props;

  const { methods, handleSubmit, onSubmit, signInDataArray, postSignInStatus } =
    useSignInForm();

  return (
    <Grid container spacing={3.2}>
      <Grid item xs={12}>
        <Typography
          variant={"h3"}
          color={"text.heading"}
          mt={mt}
          textAlign={textAlign}
        >
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
                loading={postSignInStatus.isLoading}
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
          <Typography variant={"body3"} color={"primary.main"} fontWeight={700}>
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
  );
}
