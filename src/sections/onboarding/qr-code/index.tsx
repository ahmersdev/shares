"use client";

import { BackCircleIcon, ForwardArrowIcon } from "@/assets/icons";
import { QRCodeImg } from "@/assets/images";
import { ONBOARDING, WEB_APP } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import {
  Avatar,
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

export default function QrCode() {
  const theme = useTheme<Theme>();

  return (
    <>
      <Box position={"relative"}>
        <Link
          href={WEB_APP.PROPERTIES}
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
          Complete Your Account Setup On The Shares App
        </Typography>

        <Typography variant={"body2"} color={"text.body"}>
          Finalize Your Shares Account On Your App
        </Typography>

        <Box
          display={"flex"}
          alignItems={"center"}
          bgcolor={"common.white"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={4}
          p={2}
          pr={4}
          gap={2}
        >
          <Box bgcolor={"opacity.qrCode"} p={1} borderRadius={2}>
            <Avatar
              src={QRCodeImg.src}
              variant={"square"}
              alt={"QR Code"}
              sx={{ width: 78, height: 78 }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Typography variant={"body2"} color={"grey.800"} fontWeight={900}>
              Shares
              <Typography
                variant={"body2"}
                component={"span"}
                color={"primary.main"}
                fontWeight={900}
              >
                .
              </Typography>
            </Typography>
            <Typography
              variant={"body2"}
              color={"text.heading"}
              fontWeight={600}
            >
              Scan the QR Code
            </Typography>
            <Typography variant={"subtitle2"}>
              Download Directly On Your Phone
            </Typography>
          </Box>
        </Box>

        <Link href={ONBOARDING.PHONE_NUMBER} style={{ textAlign: "center" }}>
          <Button
            variant={"text"}
            size={"small"}
            color={"primary"}
            startIcon={<ForwardArrowIcon />}
            disableElevation
          >
            Continue Using Web
          </Button>
        </Link>
      </Box>
    </>
  );
}
