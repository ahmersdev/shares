import { Box, Typography } from "@mui/material";

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
        <Typography variant={"heading1"} color={"common.bgDark"}>
          Featured Projects
        </Typography>
        <Typography variant={"h7"} textAlign={"center"}>
          We only select properties with the highest income potential
        </Typography>
      </Box>
    </Box>
  );
}
