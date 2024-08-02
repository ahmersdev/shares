"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";

export default function Home() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />
    </Stack>
  );
}
