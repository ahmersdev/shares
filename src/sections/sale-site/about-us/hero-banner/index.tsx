import { HeroBannerBgImg } from "@/assets/images";
import { Box, Typography } from "@mui/material";

export default function HeroBanner() {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
        borderRadius={"0px 0px 64px 64px"}
        width={"100%"}
        height={"45vh"}
        sx={{
          backgroundImage: `url(${HeroBannerBgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        height={"45vh"}
      >
        <Typography
          variant={"heading1"}
          component={"h1"}
          fontWeight={800}
          color={"grey.900"}
          maxWidth={"55%"}
          textAlign={"center"}
        >
          About Us
        </Typography>
      </Box>
    </Box>
  );
}
