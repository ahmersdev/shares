"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import SuccessStories from "./success-stories";
import StoriesSingle from "./stories-single";
import Mission from "./mission";
import Investors from "./investors";
import OurTeam from "./our-team";

export default function AboutUs() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />
      <SuccessStories />
      <StoriesSingle />
      <Mission />
      <Investors />
      <OurTeam />
    </Stack>
  );
}
