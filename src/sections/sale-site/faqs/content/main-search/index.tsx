import { Box, CircularProgress, Typography } from "@mui/material";
import { BackArrowIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomAccordion from "@/components/custom-accordion";
import { contentData } from "../../faqs.data";
import { IAccordionData, IContentData } from "../../faqs.interface";

export default function MainSearch({ search, setSearchTerm }: any) {
  const router = useRouter();

  const [filteredArray, setFilteredArray] = useState<IAccordionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    if (contentData) {
      const filtered: IAccordionData[] = contentData
        .flatMap((content: IContentData) => content.accordions || [])
        .filter((accordion: IAccordionData) => {
          return (
            accordion.summary.toLowerCase().includes(search.toLowerCase()) ||
            accordion.details.toLowerCase().includes(search.toLowerCase())
          );
        });

      setFilteredArray(filtered);
    }

    setLoading(false);
  }, [search]);

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
      </Box>

      {loading ? (
        <Box textAlign={"center"}>
          <CircularProgress />
        </Box>
      ) : filteredArray && filteredArray.length > 0 ? (
        <Box
          sx={{ bgcolor: "common.bgLight" }}
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
