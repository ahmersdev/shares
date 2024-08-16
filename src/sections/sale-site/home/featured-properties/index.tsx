import PropertiesCard from "@/components/properties-card";
import { Box, Typography } from "@mui/material";
import { propertiesData } from "./featured-properties.data";

export default function FeaturedProperties() {
  return (
    <Box display={"flex"} justifyContent={"center"} px={2} pb={5}>
      <Box
        maxWidth={"lg"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"common.bgDark"}
        >
          Featured Properties
        </Typography>
        <Typography variant={"h7"} textAlign={"center"}>
          We only select properties with the highest income potential
        </Typography>

        <PropertiesCard propertiesDataArray={propertiesData} />
      </Box>
    </Box>
  );
}
