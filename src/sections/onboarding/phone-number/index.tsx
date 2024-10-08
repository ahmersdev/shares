"use client";

import { BackCircleIcon } from "@/assets/icons";
import { ONBOARDING } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Box, FormLabel, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { MuiTelInput } from "mui-tel-input";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import usePhoneNumber from "./use-phone-number";

export default function PhoneNumber() {
  const { theme, value, handleChange, isValid, submitted, onSubmit } =
    usePhoneNumber();

  return (
    <>
      <Box position={"relative"}>
        <Link
          href={ONBOARDING.QR_CODE}
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
        p={2}
        maxWidth={theme.breakpoints.values.sm - 150}
        width={"100%"}
        margin={"auto"}
        gap={3.2}
        maxHeight={"calc(100vh - 140px)"}
        height={"100%"}
      >
        <Typography
          variant={"body2"}
          fontSize={pxToRem(28)}
          fontWeight={700}
          color={"text.heading"}
        >
          Enter Phone Number
        </Typography>

        <Typography variant={"body2"} color={"text.body"}>
          Please Enter Your Phone Number
        </Typography>

        <Grid container>
          <Grid item xs={12}>
            <FormLabel sx={{ color: "text.heading" }}>Phone Number</FormLabel>
            <MuiTelInput
              value={value}
              onChange={handleChange}
              defaultCountry={"US"}
              placeholder={"+x xxx xxx xxxx"}
              error={!isValid && submitted}
              fullWidth
              sx={{
                mt: 0.5,
                "& .MuiOutlinedInput-root": {
                  color: "text.body",
                  borderRadius: 3,
                  "& fieldset": {
                    borderColor: isValid ? "text.bodyLight" : "error.main",
                  },
                  "&:hover fieldset": {
                    borderColor: "text.bodyLight",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "text.bodyLight",
                  },
                  "& ::placeholder": {
                    color: "text.disabled",
                  },
                },
              }}
            />

            {!isValid && submitted && (
              <Typography variant="body2" color="error">
                Please enter a valid number.
              </Typography>
            )}
          </Grid>
        </Grid>

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
        >
          Send OTP
        </LoadingButton>
      </Box>
    </>
  );
}
