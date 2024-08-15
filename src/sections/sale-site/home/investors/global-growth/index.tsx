import { Box, Grid, Typography } from "@mui/material";
import { IGlobalGrowthData } from "./global-growth.interface";
import { globalGrowthData } from "./global-growth.data";
import Image from "next/image";

export default function GlobalGrowth() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3.2} width={"100%"}>
      <Grid container spacing={2.4}>
        <Grid item xs={12}>
          <Typography
            variant={"h4"}
            fontWeight={600}
            color={"text.heading"}
            textAlign={"center"}
          >
            Bali&rsquo;s property sector leads global growth trends
          </Typography>
        </Grid>
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
