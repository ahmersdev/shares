import { Box, CircularProgress, Typography } from "@mui/material";
import { BackArrowIcon } from "@/assets/icons";
import CustomAccordion from "@/components/custom-accordion";
import useMainSearch from "./use-main-search";

export default function MainSearch({ search, setSearchTerm }: any) {
  const { onBackClickHandler, loading, filteredArray } = useMainSearch({
    search,
    setSearchTerm,
  });

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} alignItems={"center"} gap={1.6}>
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
