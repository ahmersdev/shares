import PropertiesCard from "@/components/properties-card";
import { Box, Typography } from "@mui/material";
import { propertiesData } from "./featured-properties.data";

export default function FeaturedProperties() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2.4}
      px={2}
      pb={5}
    >
      <Typography
        variant={"heading1"}
        component={"h1"}
        color={"common.bgDark"}
        textAlign={"center"}
      >
        Featured Properties
      </Typography>
      <Typography variant={"h7"} textAlign={"center"}>
        We only select properties with the highest income potential
      </Typography>

      <Box maxWidth={"lg"} width={"100%"}>
        <PropertiesCard propertiesDataArray={propertiesData} />
      </Box>
    </Box>
  );
}
