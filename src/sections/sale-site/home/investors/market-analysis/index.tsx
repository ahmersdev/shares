import { Box, Grid, Typography } from "@mui/material";
import { marketAnalysisData } from "./market-analysis.data";
import { IMarketAnalysisData } from "./market-analysis.interface";
import Image from "next/image";

export default function MarketAnalysis() {
  return (
    <Grid container spacing={3.2}>
      {marketAnalysisData.map((item: IMarketAnalysisData) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Box
            border={"1px solid"}
            borderColor={"text.stroke"}
            bgcolor={"common.white"}
            p={2.4}
            borderRadius={6}
            height={"100%"}
          >
            <Typography
              variant={"body1"}
              fontWeight={700}
              color={"text.heading"}
            >
              {item.title}
            </Typography>
            <Typography variant={"body2"} my={1.6} color={"text.body"}>
              {item.desc}
            </Typography>
            <Image src={item.image} alt={item.title ?? ""} height={27} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
