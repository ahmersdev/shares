"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import Featured from "./featured";
import HowItWorks from "./how-it-works";
import FeaturedProperties from "./featured-properties";
import BuildAnIncome from "./build-an-income";
import Investors from "./investors";
import Trust from "./trust";
import RealEstate from "./real-estate";
import Dubai from "./dubai";
import InHouse from "./in-house";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />
      <Featured />
      <HowItWorks />
      <FeaturedProperties />
      <BuildAnIncome />
      <Investors />
      <Trust />
      <RealEstate />
      <Dubai />
      <InHouse />
      <Testimonials />
    </Stack>
  );
}
