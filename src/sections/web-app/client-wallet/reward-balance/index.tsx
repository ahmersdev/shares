import { Box, Typography } from "@mui/material";
import { StarIcon } from "@/assets/icons";

export default function RewardBalance() {
  return (
    <Box
      bgcolor={"grey.50"}
      borderRadius={3}
      border={1}
      borderColor={"text.stroke"}
      px={3}
      mt={1.6}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={2}
      py={{ xs: 1, md: 2 }}
      height={"100%"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography variant={"body1"}>Reward Balance</Typography>
        <Typography variant={"h5"} color={"text.heading"}>
          USD 0
        </Typography>
      </Box>

      <StarIcon />
    </Box>
  );
}
