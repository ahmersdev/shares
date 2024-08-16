import { Box, Typography, useTheme, Theme, Grid, Button } from "@mui/material";
import Image from "next/image";
import { getBuildAnIncomeDataArray } from "./build-an-income.data";
import { IBuildAnIncomeData } from "./build-an-income.interface";

export default function BuildAnIncome() {
  const theme = useTheme<Theme>();
  const buildAnIncomeData = getBuildAnIncomeDataArray(theme);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      px={2}
      gap={5}
    >
      <Box
        maxWidth={"md"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2.4}
      >
        <Typography variant={"h5"} fontWeight={500} color={"primary.main"}>
          How It Works
        </Typography>
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          Build an income-generating real estate portfolio from your phone
        </Typography>
      </Box>
      <Box maxWidth={theme.breakpoints.values.lg - 100} width={"100%"}>
        {buildAnIncomeData.map((item: IBuildAnIncomeData) => (
          <Grid
            container
            spacing={4}
            py={5}
            key={item.id}
            flexDirection={{
              xs: "unset",
              md: item.id % 2 !== 0 ? "row" : "row-reverse",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              textAlign={{
                xs: "center",
                md: item.id % 2 === 0 ? "unset" : "right",
              }}
              position={"relative"}
            >
              <Image
                src={item.image}
                alt={item.title}
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
              <Typography
                variant={"h7"}
                fontWeight={500}
                color={"primary.main"}
              >
                {item.title}
              </Typography>
              <Typography variant={"h4"} color={"text.heading"}>
                {item.subtitle}
              </Typography>
              <Typography variant={"body2"}>{item.description}</Typography>
              {item.additionalContent}
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
