import { IncomeEarnIcon, IncomePayIcon, IncomeVisaIcon } from "@/assets/icons";
import { IncomeBrowseImg, IncomeInvestImg } from "@/assets/images";
import { Box, Button, Theme, Typography } from "@mui/material";
import { IBuildAnIncomeData } from "./build-an-income.interface";
import Link from "next/link";
import { BUTTON_STYLES } from "@/styles";

export const getBuildAnIncomeDataArray = (
  theme: Theme
): IBuildAnIncomeData[] => {
  return [
    {
      id: 1,
      title: "Browse",
      subtitle: "Get access to high profitable properties in Bali",
      description: "The worlds most lucrative market for rental properties",
      image: IncomeBrowseImg,
      additionalContent: (
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
      ),
    },
    {
      id: 2,
      title: "Invest",
      subtitle: "Purchase shares of your favourite properties",
      description:
        "Start building a portfolio of property shares from as little as 1000 USD",
      image: IncomeInvestImg,
      additionalContent: (
        <Box display={"flex"} alignItems={"center"}>
          <IncomeVisaIcon />
          <IncomePayIcon />
        </Box>
      ),
    },
    {
      id: 3,
      title: "Earn",
      subtitle: "Receive passive income from monthly rental payments",
      description:
        "We manage the properties and pay you the rental income every month",
      image: IncomeBrowseImg,
      additionalContent: (
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Box width={24} height={24}>
            <IncomeEarnIcon />
          </Box>
          <Typography variant={"body2"} fontWeight={600} color={"text.heading"}>
            8% cash back from day 1 l Paid directly to your Shares wallet
          </Typography>
        </Box>
      ),
    },
    {
      id: 4,
      title: "Exit",
      subtitle: "Sell your shares flexibly",
      description:
        "Earn from capital appreciation when you sell your shares or when the property gets sold.",
      image: IncomeInvestImg,
      additionalContent: (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          gap={3.2}
          color={"primary.main"}
        >
          <Typography
            variant={"body2"}
            fontWeight={600}
            borderRadius={25}
            bgcolor={"primary.5"}
            px={2}
            py={1}
            textAlign={"center"}
          >
            Sell During Our Exit Windows (Every 12 Months)
          </Typography>
          <Typography
            variant={"body2"}
            fontWeight={600}
            borderRadius={25}
            bgcolor={"primary.5"}
            px={2}
            py={1}
            textAlign={"center"}
          >
            Full sale of property | 3-5 year holding term
          </Typography>
        </Box>
      ),
    },
  ];
};
