"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import Featured from "./featured";
import HowItWorks from "./how-it-works";
import FeaturedProperties from "./featured-properties";
import BuildAnIncome from "./build-an-income";

export default function Home() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />
      <Featured />
      <HowItWorks />
      <FeaturedProperties />
      <BuildAnIncome />
    </Stack>
  );
}
