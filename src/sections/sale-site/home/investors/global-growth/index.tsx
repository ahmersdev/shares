import { InvestorsGlobeIcon } from "@/assets/icons";
import { Box, Grid, Typography, useTheme, Theme } from "@mui/material";
import {
  IGlobalGrowthData,
  IGlobalGrowthSmallCards,
} from "./global-growth.interface";
import { globalGrowthData, globalGrowthSmallCards } from "./global-growth.data";
import Image from "next/image";

export default function GlobalGrowth() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3.2} width={"100%"}>
      <Grid container spacing={2.4}>
        <Grid item xs={12} md={6}>
          <Typography variant={"h4"} fontWeight={600} color={"text.heading"}>
            Bali&rsquo;s property sector leads global growth trends
          </Typography>
        </Grid>
        {globalGrowthSmallCards.map((item: IGlobalGrowthSmallCards) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Box
              border={"1px solid"}
              borderColor={"text.headingLight"}
              bgcolor={"grey.50"}
              p={1}
              pr={3.5}
              borderRadius={3}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  variant={"h5"}
                  color={"primary.main"}
                  fontWeight={600}
                >
                  {item.amount}
                </Typography>
                {item.icon && <item.icon fill={theme.palette.primary.main} />}
              </Box>
              <Typography
                variant={"body1"}
                fontWeight={"bold"}
                color={"text.heading"}
                mt={1}
              >
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
        {globalGrowthData.map((item: IGlobalGrowthData) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box bgcolor={"grey.50"} p={3} borderRadius={3} height={"100%"}>
              <Image src={item.image} alt={item.alt ?? ""} height={55} />

              <Typography
                variant={"body1"}
                fontWeight={500}
                color={"text.heading"}
                mt={1.7}
              >
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
