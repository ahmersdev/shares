import {
  Box,
  Button,
  Chip,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import {
  PropertiesDetailsHeroOneImg,
  PropertiesDetailsHeroTwoImg,
} from "@/assets/images";
import { BUTTON_STYLES } from "@/styles";
import { pxToRem } from "@/utils/get-font-value";
import {
  PropertiesDetailsAreaIcon,
  PropertiesDetailsBathroomIcon,
  PropertiesDetailsBedIcon,
  PropertiesDetailsTypeIcon,
} from "@/assets/icons";

export default function HeroBanner() {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
        borderRadius={{ xs: "0px 0px 24px 24px", md: "0px 0px 64px 64px" }}
        width={"60%"}
        height={"50vh"}
        sx={{
          backgroundImage: `url(${PropertiesDetailsHeroOneImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        position={"absolute"}
        top={0}
        right={0}
        zIndex={-1}
        borderRadius={{ xs: "0px 0px 24px 24px", md: "0px 0px 64px 64px" }}
        width={"40%"}
        height={"50vh"}
        sx={{
          backgroundImage: `url(${PropertiesDetailsHeroTwoImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Box display={"flex"} justifyContent={"center"} mt={"54vh"} px={2}>
        <Box maxWidth={"lg"} width={"100%"}>
          <Grid container spacing={2.4}>
            <Grid item xs={12} md={6}>
              <Box display={"flex"} flexDirection={"column"} gap={1.6}>
                <Chip
                  label={"Available"}
                  sx={{
                    bgcolor: "primary.5",
                    color: "primary.main",
                    p: 2,
                    width: "fit-content",
                    borderRadius: 25,
                    fontSize: pxToRem(20),
                  }}
                />

                <Typography
                  variant={"h4"}
                  fontWeight={800}
                  color={"text.heading"}
                >
                  Villa Lembah Giri
                </Typography>

                <Typography variant={"h7"}>Ubud, Bali</Typography>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={1.6}
                  flexWrap={"wrap"}
                >
                  <Box
                    bgcolor={"common.bgLight"}
                    py={2}
                    borderRadius={3}
                    textAlign={"center"}
                    width={130}
                  >
                    <PropertiesDetailsBedIcon />
                    <Typography variant={"body2"} fontWeight={500}>
                      3 Bedrooms
                    </Typography>
                  </Box>

                  <Box
                    bgcolor={"common.bgLight"}
                    py={2}
                    borderRadius={3}
                    textAlign={"center"}
                    width={130}
                  >
                    <PropertiesDetailsBathroomIcon />
                    <Typography variant={"body2"} fontWeight={500}>
                      3 Bathrooms
                    </Typography>
                  </Box>

                  <Box
                    bgcolor={"common.bgLight"}
                    py={2}
                    borderRadius={3}
                    textAlign={"center"}
                    width={130}
                  >
                    <PropertiesDetailsAreaIcon />
                    <Typography variant={"body2"} fontWeight={500}>
                      450 Sqm
                    </Typography>
                  </Box>

                  <Box
                    bgcolor={"common.bgLight"}
                    py={2}
                    borderRadius={3}
                    textAlign={"center"}
                    width={130}
                  >
                    <PropertiesDetailsTypeIcon />
                    <Typography variant={"body2"} fontWeight={500}>
                      Villa
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                bgcolor={"primary.5"}
                p={2}
                display={"flex"}
                flexDirection={"column"}
                gap={3}
                borderRadius={6}
              >
                <LinearProgress
                  variant={"determinate"}
                  value={98}
                  color={"primary"}
                  sx={{
                    borderRadius: 1.5,
                    height: 6,
                    backgroundColor: "primary.5",
                    "& .MuiLinearProgress-bar1Determinate": {
                      borderRadius: "inherit",
                    },
                  }}
                />

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  color={"primary.main"}
                  gap={1}
                >
                  <Typography variant={"h7"} fontWeight={500}>
                    98%
                  </Typography>
                  <Typography variant={"h7"} fontWeight={500}>
                    6663 Tokens Left
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                >
                  <Typography variant={"h5"} fontWeight={600}>
                    ERY (Annual)
                  </Typography>
                  <Typography variant={"h5"} fontWeight={700}>
                    11%
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                >
                  <Typography variant={"h5"} fontWeight={600}>
                    ECY (Annual)
                  </Typography>
                  <Typography variant={"h5"} fontWeight={700}>
                    2%
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                >
                  <Typography variant={"h5"} fontWeight={600}>
                    IRR (Annual)
                  </Typography>
                  <Typography variant={"h5"} fontWeight={700}>
                    14%
                  </Typography>
                </Box>

                <Button
                  variant={"contained"}
                  sx={{
                    ...BUTTON_STYLES,
                    color: "grey.50",
                    borderColor: "primary.main",
                    backgroundColor: "primary.main",
                    width: "100%",
                    ":hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  disableElevation
                >
                  Buy Property
                </Button>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant={"contained"}
                      sx={{
                        ...BUTTON_STYLES,
                        color: "grey.50",
                        borderColor: "text.body",
                        backgroundColor: "text.body",
                        width: "100%",
                        ":hover": {
                          backgroundColor: "text.body",
                        },
                      }}
                      disableElevation
                    >
                      Sell Property
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant={"contained"}
                      sx={{
                        ...BUTTON_STYLES,
                        color: "grey.50",
                        borderColor: "text.body",
                        backgroundColor: "text.body",
                        width: "100%",
                        ":hover": {
                          backgroundColor: "text.body",
                        },
                      }}
                      disableElevation
                    >
                      Swap Property
                    </Button>
                  </Grid>
                </Grid>

                <Typography
                  variant={"h5"}
                  fontWeight={"normal"}
                  textAlign={"center"}
                >
                  USD 0.61 Minimus
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
