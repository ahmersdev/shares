import { Box, Typography } from "@mui/material";
import { BackArrowIcon, NextIcon } from "@/assets/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { IAccordionsDetailsProps } from "../../faqs.interface";

export default function AccordionsDetails({
  setSearchTerm,
}: IAccordionsDetailsProps) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const title = searchParams.get("title");

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
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
