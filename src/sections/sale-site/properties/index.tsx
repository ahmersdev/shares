"use client";

import { Stack } from "@mui/material";
import Slider from "./slider";

export default function Properties() {
  return (
    <Stack direction={"column"} spacing={5}>
      <Slider />
    </Stack>
  );
}
