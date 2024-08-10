"use client";

import { Stack } from "@mui/material";
import Slider from "./slider";
import FeaturedProperties from "./featured-properties";

export default function Properties() {
  return (
    <Stack direction={"column"} spacing={5}>
      <Slider />
      <FeaturedProperties />
    </Stack>
  );
}
