"use client";

import { SignInBgImg } from "@/assets/images";
import { SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import SignInForm from "@/components/sign-in-form";

export default function SignIn() {
  const theme = useTheme<Theme>();

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
        top={{ xs: "2%", md: "5%" }}
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
        <SignInForm />
      </Box>
    </Box>
  );
}
