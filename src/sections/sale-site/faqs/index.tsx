"use client";

import { Stack } from "@mui/material";
import HeroBanner from "./hero-banner";
import useFaqs from "./use-faqs";
import Content from "./content";
import { contentData } from "./faqs.data";

export default function FAQs() {
  const { searchTerm, setSearchTerm, handleInputChange } = useFaqs();

  return (
    <Stack direction={"column"} spacing={5}>
      <HeroBanner
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
      />

      <Content contentData={contentData} setSearchTerm={setSearchTerm} />
    </Stack>
  );
}
