import { FeatAsanaIcon, FeatTwilioSegmentIcon } from "@/assets/icons";
import { Box, Theme, Typography, useTheme } from "@mui/material";

export default function Featured() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        maxWidth={theme.breakpoints.values.lg - 100}
        width={"100%"}
      >
        <Typography variant={"h7"}>We&rsquo;ve been featured in</Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={4}
        >
          <FeatTwilioSegmentIcon />
          <FeatAsanaIcon />
          <FeatTwilioSegmentIcon />
          <FeatTwilioSegmentIcon />
          <FeatTwilioSegmentIcon />
          <FeatTwilioSegmentIcon />
          <FeatTwilioSegmentIcon />
          <FeatTwilioSegmentIcon />
          <FeatTwilioSegmentIcon />
        </Box>
      </Box>
    </Box>
  );
}
