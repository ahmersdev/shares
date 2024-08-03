"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import Featured from "./featured";

export default function Home() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />
      <Featured />
    </Stack>
  );
}
