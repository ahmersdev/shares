import { Box, Typography } from "@mui/material";
import { BackArrowIcon, NextIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { IAccordionsDetailsProps } from "../../faqs.interface";
import CustomAccordion from "@/components/custom-accordion";

export default function AccordionsDetails({
  setSearchTerm,
  singleFaq,
}: IAccordionsDetailsProps) {
  const router = useRouter();

  const singleFaqDetails = singleFaq[0];

  const onBackClickHandler = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("title");
    params.delete("search");
    setSearchTerm("");
    router.push(`?${params.toString()}`);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} alignItems={"center"} gap={1.6}>
        <Box onClick={onBackClickHandler} sx={{ cursor: "pointer" }}>
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

      {singleFaqDetails.accordions ? (
        <Box
          sx={{ bgcolor: "common.bgLight" }}
          border={1}
          borderColor={"text.headingLight"}
          borderRadius={3}
          overflow={"hidden"}
        >
          <CustomAccordion accordions={singleFaqDetails.accordions} />
        </Box>
      ) : (
        <Typography variant={"h5"} color={"error.main"} textAlign={"center"}>
          No Faqs Available for this category
        </Typography>
      )}
    </Box>
  );
}
