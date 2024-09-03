import { Box, Grid, Typography } from "@mui/material";
import { howItWorksDataArray } from "./how-it-works.data";
import { IHowItWorksData } from "./how-it-works.interface";

export default function HowItWorks() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      bgcolor={"opacity.bg"}
      py={5}
      px={2}
    >
      <Box
        maxWidth={"lg"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant={"h4"} color={"grey.700"}>
          How It Works
        </Typography>
        <Typography variant={"body2"} color={"grey.600"} textAlign={"center"}>
          Property investing has never been easier
        </Typography>
        <Grid container spacing={2}>
          {howItWorksDataArray.map((item: IHowItWorksData) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Box
                bgcolor={"primary.5"}
                p={2.4}
                borderRadius={6}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={2.4}
                height={"100%"}
              >
                <item.icon />
                <Typography variant={"h5"} color={"primary.main"}>
                  {item.title}
                </Typography>
                <Typography
                  variant={"body1"}
                  color={"grey.500"}
                  textAlign={"center"}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
