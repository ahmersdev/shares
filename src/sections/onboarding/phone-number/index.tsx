"use client";

import { BackCircleIcon } from "@/assets/icons";
import { ONBOARDING } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

export default function PhoneNumber() {
  const theme = useTheme<Theme>();
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

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

        <MuiTelInput value={value} onChange={handleChange} />
      </Box>
    </>
  );
}
