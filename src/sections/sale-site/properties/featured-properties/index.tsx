import {
  PropertiesBedIcon,
  PropertiesNumberIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";
import { PropertiesVillaOneImg } from "@/assets/images";
import { BUTTON_STYLES } from "@/styles";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";

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
        color={"common.bgDark"}
        textAlign={"center"}
      >
        Featured Properties
      </Typography>
      <Typography variant={"h7"} textAlign={"center"}>
        We only select properties with the highest income potential
      </Typography>

      <Box maxWidth={"lg"} width={"100%"}>
        <Grid container spacing={2.4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              borderRadius={6}
              bgcolor={"common.bgLight"}
              overflow={"hidden"}
            >
              <Image
                src={PropertiesVillaOneImg}
                alt={"Villa 1"}
                width={391}
                height={312}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <Box p={1.6} display={"flex"} flexDirection={"column"} gap={1}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={2.4}
                  flexWrap={"wrap"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <PropertiesBedIcon />
                    <Typography variant={"body3"} fontWeight={500}>
                      1 Bed
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <PropertiesStatusIcon />
                    <Typography variant={"body3"} fontWeight={500}>
                      Rented
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <PropertiesNumberIcon />
                    <Typography variant={"body3"} fontWeight={500}>
                      #B206
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant={"h7"}
                  fontWeight={700}
                  color={"common.bgDark"}
                >
                  Amazon Jungle Resort , Bali
                </Typography>
                <Typography variant={"body3"} fontWeight={500}>
                  Cash-back through development period 8%
                </Typography>

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1.2}
                >
                  <Typography
                    variant={"body2"}
                    fontWeight={600}
                    color={"primary.main"}
                  >
                    $ 145,000 USD
                  </Typography>
                  <Typography variant={"body2"} fontWeight={600}>
                    482 Investors
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  bgcolor={"text.headingLight"}
                  borderRadius={2}
                  p={1.2}
                  gap={1.2}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                  >
                    <Typography variant={"body2"} fontWeight={600}>
                      Annual ROI Estimate
                    </Typography>
                    <Typography variant={"body2"} fontWeight={700}>
                      10-14%
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                  >
                    <Typography variant={"body2"} fontWeight={600}>
                      Completion Date
                    </Typography>
                    <Typography variant={"body2"} fontWeight={700}>
                      Feb 28, 2026
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                  >
                    <Typography variant={"body2"} fontWeight={600}>
                      Investment From
                    </Typography>
                    <Typography variant={"body2"} fontWeight={700}>
                      $1000 USD
                    </Typography>
                  </Box>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={97}
                  color={"primary"}
                  sx={{
                    borderRadius: 1.5,
                    height: 6,
                    backgroundColor: "primary.5",
                  }}
                />

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  color={"primary.main"}
                >
                  <Typography variant={"body2"} fontWeight={500}>
                    98%
                  </Typography>
                  <Typography variant={"body2"} fontWeight={500}>
                    6663 Shares Left
                  </Typography>
                </Box>

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
                  Get More Details
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
