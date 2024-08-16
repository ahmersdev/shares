"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import SuccessStories from "./success-stories";
import StoriesSingle from "./stories-single";

export default function AboutUs() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />
      <SuccessStories />
      <StoriesSingle />
    </Stack>
  );
}
