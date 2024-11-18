import { PersonOneImg, PersonTwoImg } from "@/assets/images";
import { Box, Grid, Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export default function Dubai() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} justifyContent={"center"} px={2}>
      <Box
        maxWidth={theme.breakpoints.values.lg - 100}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant={"h6"} fontWeight={"normal"} color={"primary.main"}>
          Dubai Real Estate
        </Typography>
        <Typography
          variant={"heading1"}
          component={"h1"}
          textAlign={"center"}
          color={"text.heading"}
        >
          20+ Years Of Local Experience
        </Typography>

        <Grid container spacing={2.4}>
          <Grid item xs={12} md={3}>
            <Image
              src={PersonTwoImg}
              alt={"Rasmus Holst"}
              width={275}
              height={329}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 40,
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              bgcolor={"primary.10"}
              borderRadius={6}
              p={2.4}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Typography variant={"body2"}>
                COCO is for lifestyle entrepreneurs, we are for people who make
                conscious decisions about their lives, their investments and
                their future.
                <br />
                <br />
                Our community is experience driven. We believe in that a place
                is only as good as the people in it and creating good
                investments, comes through creating more than just properties.
                It comes through the experience, the people you meet and the
                memories you take with you.
              </Typography>

              <Box>
                <Typography
                  variant={"body1"}
                  fontWeight={600}
                  color={"text.heading"}
                >
                  Rasmus Holst
                </Typography>

                <Typography variant={"body2"} color={"text.heading"}>
                  Founder & CEO
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
