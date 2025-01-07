"use client";

import { BUTTON_STYLES } from "@/styles";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Button, Chip, Typography } from "@mui/material";
import Counts from "./counts";
import Link from "next/link";
import { AUTH, SALE_SITE } from "@/constants/routes";
import { useEffect, useState } from "react";
import { HomeHeroBanner } from "@/assets/images";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function HeroBanner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player("hero-banner-video", {
        videoId: "0PTzzTfYpIs",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "0PTzzTfYpIs",
          controls: 0,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            setLoading(false);
            event.target.setPlaybackQuality("hd720");
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              player.playVideo();
            }
          },
        },
      });
    };

    // Dynamically load the YouTube API script
    if (!window.YT) {
      const scriptTag = document.createElement("script");
      scriptTag.src = "https://www.youtube.com/iframe_api";
      scriptTag.async = true;
      document.body.appendChild(scriptTag);

      // Attach the API ready function
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  return (
    <Box position={"relative"}>
      {loading && (
        <Box
          position={"absolute"}
          top={0}
          left={0}
          zIndex={-1}
          width={{ xs: "100vh", sm: "100%" }}
          height="100%"
          overflow="hidden"
          borderRadius="0px 0px 64px 64px"
          sx={{
            backgroundImage: `url(${HomeHeroBanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      <Box
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
        width={{ xs: "100vh", sm: "100%" }}
        height="100%"
        overflow="hidden"
        borderRadius="0px 0px 64px 64px"
      >
        <Box
          id="hero-banner-video"
          sx={{ width: "300%", height: "100%", marginLeft: "-100%" }}
        />
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
            bgcolor: "primary.100",
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
          color={"primary.10"}
          maxWidth={"60%"}
          textAlign={"center"}
          textTransform={"uppercase"}
          sx={{
            textShadow: "0px 0px 24px 0px #FFFFFF7A",
          }}
        >
          Invest in high profitable real estate in Bali from 1000$
        </Typography>

        <Typography variant={"h6"} color={"primary.10"} textAlign={"center"}>
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
                borderColor: "primary.25",
                backgroundColor: "primary.25",
                ":hover": {
                  backgroundColor: "primary.25",
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

      <Box position={"relative"}>
        <Counts />
      </Box>
    </Box>
  );
}
