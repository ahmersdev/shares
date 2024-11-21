"use client";

import CustomHeroBanner from "@/components/custom-hero-banner";
import { Box, Grid, Stack } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Stack direction={"column"} spacing={5}>
      <CustomHeroBanner title={"PrivacyPolicy"} />

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
