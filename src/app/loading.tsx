import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Loading() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100vw"}
      bgcolor={"#FFFFFF"}
      flexDirection={"column"}
      gap={2}
    >
      <Box display={"flex"} alignItems={"baseline"}>
        <Typography variant={"logo"}>Shares</Typography>
        <Box
          width={7}
          height={7}
          bgcolor={"primary.main"}
          borderRadius={"50%"}
        />
      </Box>
      <Image
        src={"/loading-gif.gif"}
        alt={"Shares By Coco"}
        width={132}
        height={24}
        unoptimized
        priority
      />
    </Box>
  );
}
