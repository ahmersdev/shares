import { Box, CircularProgress, Typography } from "@mui/material";
import { BackArrowIcon, NextIcon } from "@/assets/icons";
import { IAccordionsDetailsProps } from "../../faqs.interface";
import CustomAccordion from "@/components/custom-accordion";
import useAccordionsDetails from "./use-accordions-details";

export default function AccordionsDetails({
  setSearchTerm,
  singleFaq,
}: IAccordionsDetailsProps) {
  const { onBackClickHandler, singleFaqDetails, loading, filteredArray } =
    useAccordionsDetails({
      setSearchTerm,
      singleFaq,
    });

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} alignItems={"center"} gap={1.6} flexWrap={"wrap"}>
        <Box
          onClick={onBackClickHandler}
          display={"flex"}
          sx={{ cursor: "pointer" }}
        >
          <BackArrowIcon />
        </Box>
        <Typography
          variant={"h7"}
          component={"p"}
          onClick={onBackClickHandler}
          sx={{ cursor: "pointer" }}
        >
          All Collections
        </Typography>
        <NextIcon />
        <Typography variant={"h7"} component={"p"}>
          {singleFaqDetails.title}
        </Typography>
      </Box>

      <singleFaqDetails.icon />

      <Typography variant={"h5"} fontWeight={800} color={"text.heading"}>
        {singleFaqDetails.title}
      </Typography>

      <Typography variant={"h7"} component={"p"}>
        {singleFaqDetails.desc}
      </Typography>

      {loading ? (
        <Box textAlign={"center"}>
          <CircularProgress />
        </Box>
      ) : filteredArray && filteredArray.length > 0 ? (
        <Box
          sx={{ bgcolor: "opacity.bg" }}
          border={1}
          borderColor={"text.headingLight"}
          borderRadius={3}
          overflow={"hidden"}
        >
          <CustomAccordion accordions={filteredArray} />
        </Box>
      ) : (
        <Typography variant={"h5"} color={"error.main"} textAlign={"center"}>
          No Information Available
        </Typography>
      )}
    </Box>
  );
}
