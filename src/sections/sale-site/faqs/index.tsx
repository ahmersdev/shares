"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import useFaqs from "./use-faqs";

export default function FAQs() {
  const { searchTerm, handleInputChange } = useFaqs();

  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
      />
    </Stack>
  );
}
