"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import Featured from "./featured";
import HowItWorks from "./how-it-works";

export default function Home() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />
      <Featured />
      <HowItWorks />
    </Stack>
  );
}
