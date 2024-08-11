"use client";

import { Stack, Divider } from "@mui/material";
import HeroBanner from "./hero-banner";
import TabsDetails from "./tabs-details";

export default function Details() {
  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner />

      <Divider />

      <TabsDetails />
    </Stack>
  );
}
