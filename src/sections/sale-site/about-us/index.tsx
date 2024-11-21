"use client";

import { Stack } from "@mui/material";
import SuccessStories from "./success-stories";
import StoriesSingle from "./stories-single";
import Mission from "./mission";
import Investors from "./investors";
import OurTeam from "./our-team";
import CustomHeroBanner from "@/components/custom-hero-banner";

export default function AboutUs() {
  return (
    <Stack direction={"column"} spacing={5}>
      <CustomHeroBanner title={"About Us"} />
      <SuccessStories />
      <StoriesSingle />
      <Mission />
      <Investors />
      <OurTeam />
    </Stack>
  );
}
