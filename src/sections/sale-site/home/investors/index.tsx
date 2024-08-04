import { Box, Typography } from "@mui/material";

export default function Investors() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      px={2}
      pb={5}
      gap={3.2}
    >
      <Box
        maxWidth={"md"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={3.2}
      >
        <Typography variant={"h5"} fontWeight={500} color={"primary.main"}>
          Golden Sands, Golden Opportunities
        </Typography>
        <Typography
          variant={"heading1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          An investors guide to Bali&rsquo;s real estate market
        </Typography>
      </Box>
      <Box
        maxWidth={"lg"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        Tabs
      </Box>
    </Box>
  );
}
