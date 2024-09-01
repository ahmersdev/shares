import { Box, Grid, Typography } from "@mui/material";
import { realEstateDataArray } from "./real-estate.data";
import { IRealEstateData } from "./real-estate.interface";
import Link from "next/link";
import { ArrowRightIcon } from "@/assets/icons";

export default function RealEstate() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      px={2}
      py={5}
      gap={8}
      bgcolor={"grey.50"}
    >
      <Box
        maxWidth={"md"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          Real estate combines the best of all asset classes
        </Typography>
        <Typography variant={"h7"} textAlign={"center"}>
          It is one of the most important asset classes for building long-term
          wealth
        </Typography>
      </Box>

      <Box maxWidth={"lg"} width={"100%"}>
        <Grid container spacing={4}>
          {realEstateDataArray.map((item: IRealEstateData) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <Box
                border={1}
                borderColor={"primary.main"}
                borderRadius={6}
                p={{ xs: 2, md: 6 }}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={3.2}
                bgcolor={"opacity.bg"}
                color={"text.heading"}
              >
                <item.icon />
                <Typography variant={"h4"} fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography variant={"h7"}>{item.desc}</Typography>

                {item.href && (
                  <Link href={item.href}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography variant={"h7"}>Read More</Typography>
                      <ArrowRightIcon />
                    </Box>
                  </Link>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
