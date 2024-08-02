import { HomeHeroBanner } from "@/assets/images";
import { BUTTON_STYLES } from "@/styles";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Button, Chip, Typography } from "@mui/material";
import Counts from "./counts";

export default function HeroBanner() {
  return (
    <Box>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
        borderRadius={"0px 0px 64px 64px"}
        width={"100%"}
        height={"100vh"}
        sx={{
          backgroundImage: `url(${HomeHeroBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"Center"}
        gap={3}
        position={"relative"}
        height={"100vh"}
        px={2}
      >
        <Chip
          label={"8% Cash Back From Day 1"}
          sx={{
            bgcolor: "opacity.success",
            color: "primary.main",
            px: 1,
            py: 2,
            borderRadius: 25,
            fontWeight: 700,
            fontSize: pxToRem(14),
          }}
        />
        <Typography
          variant={"h1"}
          fontWeight={800}
          color={"grey.50"}
          maxWidth={"50%"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          Invest in high profitable real estate in Bali from 1000$
        </Typography>

        <Typography variant={"h6"} color={"grey.50"} textAlign={"center"}>
          10.3% investors average return
        </Typography>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"Center"}
          flexWrap={"wrap"}
          gap={1}
        >
          <Button
            variant={"contained"}
            sx={{
              ...BUTTON_STYLES,
              color: "primary.main",
              borderColor: "grey.50",
              backgroundColor: "grey.50",
              ":hover": {
                backgroundColor: "grey.50",
              },
            }}
            disableElevation
          >
            What Is Shares
          </Button>
          <Button
            variant={"contained"}
            sx={{
              ...BUTTON_STYLES,
              color: "grey.50",
              borderColor: "primary.main",
              backgroundColor: "primary.main",
              ":hover": {
                backgroundColor: "primary.main",
              },
            }}
            disableElevation
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <Counts />
    </Box>
  );
}
