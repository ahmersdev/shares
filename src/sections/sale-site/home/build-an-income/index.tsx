import { IncomePayIcon, IncomeVisaIcon } from "@/assets/icons";
import { IncomeBrowseImg, IncomeInvestImg } from "@/assets/images";
import { BUTTON_STYLES } from "@/styles";
import { Box, Typography, useTheme, Theme, Grid, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BuildAnIncome() {
  const theme = useTheme<Theme>();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      pb={5}
      px={2}
      gap={5}
    >
      <Box
        maxWidth={"md"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography variant={"h5"} fontWeight={500} color={"primary.main"}>
          How It Works
        </Typography>
        <Typography
          variant={"heading1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          Build an income-generating real estate portfolio from your phone
        </Typography>
      </Box>
      <Box maxWidth={theme.breakpoints.values.lg - 100} width={"100%"}>
        <Grid container spacing={4} py={5}>
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "unset" }}
            position={"relative"}
          >
            <Image
              src={IncomeBrowseImg}
              alt={"Browse"}
              width={480}
              height={570}
              priority
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={3.2}
          >
            <Typography variant={"h7"} fontWeight={500} color={"primary.main"}>
              Browse
            </Typography>
            <Typography variant={"h4"} color={"text.heading"}>
              Get access to high profitable properties in Bali
            </Typography>
            <Typography variant={"body2"} color={"text.body"}>
              The worlds most lucrative market for rental properties
            </Typography>
            <Link href={""}>
              <Button
                variant={"contained"}
                sx={{
                  ...BUTTON_STYLES,
                  color: "grey.50",
                  borderColor: "primary.main",
                  background: "primary.main",
                  boxShadow: `0px 0px 0px 5px ${theme.palette.opacity.shadow}`,
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                }}
                disableElevation
              >
                Get The App Now
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          py={5}
          flexDirection={{ xs: "column-reverse", md: "unset" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={3.2}
          >
            <Typography variant={"h7"} fontWeight={500} color={"primary.main"}>
              Invest
            </Typography>
            <Typography variant={"h4"} color={"text.heading"}>
              Purchase shares of your favourite properties
            </Typography>
            <Typography variant={"body2"} color={"text.body"}>
              Start building a portfolio of property shares from as little as
              1000 USD
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <IncomeVisaIcon />
              <IncomePayIcon />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "unset" }}
            position={"relative"}
          >
            <Image
              src={IncomeInvestImg}
              alt={"Invest"}
              width={480}
              height={570}
              priority
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
