import { HomeHeroBanner } from "@/assets/images";
import { BUTTON_STYLES } from "@/styles";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Button, Chip, Typography } from "@mui/material";
import Counts from "./counts";
import Link from "next/link";
import { AUTH, SALE_SITE } from "@/constants/routes";

export default function HeroBanner() {
  return (
    <Box position={"relative"}>
      <Box
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
        width="100%"
        height="100vh"
        overflow="hidden"
        borderRadius="0px 0px 64px 64px"
      >
        <iframe
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title="Shares By Coco"
          src="https://drive.google.com/file/d/1EyQfFUwpSf2WtjUv20yVWLoNdRViQjMO/preview?autoplay=1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            border: "none",
          }}
        />

        {/* {isVideoLoaded ? (
          <iframe
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="Shares By Coco"
            src="https://drive.google.com/file/d/1EyQfFUwpSf2WtjUv20yVWLoNdRViQjMO/preview?autoplay=1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              border: "none",
            }}
            onLoad={handleVideoLoad}
          />
        ) : (
          <Image
            src={HomeHeroBanner}
            alt="Hero Banner"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0px 0px 64px 64px",
            }}
          />
        )} */}
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        position={"relative"}
        height={"100vh"}
        px={2}
      >
        <Chip
          label={"8% Cash Back From Day 1"}
          sx={{
            bgcolor: "primary.5",
            color: "primary.main",
            px: 1,
            py: 2,
            borderRadius: 25,
            fontWeight: 700,
            fontSize: pxToRem(14),
          }}
        />
        <Typography
          variant={"h1"}
          fontWeight={800}
          color={"grey.50"}
          maxWidth={"60%"}
          textAlign={"center"}
          textTransform={"uppercase"}
          sx={{
            textShadow: "0px 0px 24px #FFFFFF7A, 2px 2px 8px #FFFFFF3D",
          }}
        >
          Invest in high profitable real estate in Bali from 1000$
        </Typography>

        <Typography variant={"h6"} color={"grey.50"} textAlign={"center"}>
          10.3% investors average return
        </Typography>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"Center"}
          flexWrap={"wrap"}
          gap={1}
        >
          <Link href={SALE_SITE.ABOUT_US}>
            <Button
              variant={"contained"}
              sx={{
                ...BUTTON_STYLES,
                color: "primary.main",
                borderColor: "primary.5",
                backgroundColor: "primary.5",
                ":hover": {
                  backgroundColor: "primary.5",
                },
              }}
              disableElevation
            >
              What Is Shares
            </Button>
          </Link>

          <Link href={AUTH.SIGN_UP}>
            <Button
              variant={"contained"}
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
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>

      <Counts />
    </Box>
  );
}
