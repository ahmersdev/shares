"use client";

import { Box, Grid, Typography } from "@mui/material";
import { clientProfileData } from "./client-profile.data";
import Link from "next/link";

export default function ClientProfile() {
  return (
    <Grid container spacing={2}>
      {clientProfileData.map((item) => (
        <Grid item xs={12} md={4} key={item.id}>
          <Link href={item.link}>
            <Box
              bgcolor={"grey.50"}
              border={1}
              borderColor={"text.stroke"}
              borderRadius={3}
              px={3.2}
              py={2.4}
            >
              <item.icon width={item?.iconWidth} height={item?.iconHeight} />
              <Typography
                variant={"body2"}
                color={"text.heading"}
                fontWeight={700}
                mt={1}
              >
                {item.title}
              </Typography>
              <Typography variant={"caption"}>{item.description}</Typography>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
