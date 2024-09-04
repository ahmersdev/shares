import { AUTH } from "@/constants/routes";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function SignIn() {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        maxWidth={"sm"}
        width={"100%"}
        bgcolor={"grey.50"}
        px={2.4}
        py={3.2}
        borderRadius={3}
      >
        <Grid container spacing={3.2}>
          <Grid item xs={12}>
            <Typography variant={"h3"} color={"text.heading"}>
              Login
            </Typography>
          </Grid>

          <Grid item xs={12}>
            Form
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
