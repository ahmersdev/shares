import {
  FeatZeneFitsIcon,
  FeatAsanaIcon,
  FeatInterComIcon,
  FeatTwilioSegmentIcon,
  FeatGreenHouseIcon,
  FeatChargeBeeIcon,
  FeatLatticeIcon,
  FeatFrameIoIcon,
  FeatMulinyIcon,
} from "@/assets/icons";
import { Box, Theme, Typography, useTheme } from "@mui/material";

export default function Featured() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} justifyContent={"center"} px={2}>
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
          <FeatInterComIcon />
          <FeatZeneFitsIcon />
          <FeatGreenHouseIcon />
          <FeatChargeBeeIcon />
          <FeatLatticeIcon />
          <FeatFrameIoIcon />
          <FeatMulinyIcon />
        </Box>
      </Box>
    </Box>
  );
}
