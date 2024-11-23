import { PersonOneImg, PersonTwoImg } from "@/assets/images";
import { Box, Grid, Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export default function Dubai() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} justifyContent={"center"} px={2}>
      <Box
        maxWidth={theme.breakpoints.values.lg}
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
          Dubai Real Estate
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
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box bgcolor={"primary.10"} borderRadius={6} p={2.4}>
              <Typography
                variant={"body1"}
                fontWeight={600}
                color={"text.heading"}
              >
                Meet Rasmus Holst
              </Typography>
              <Typography
                variant={"body2"}
                color={"text.heading"}
                fontWeight={600}
                mb={2}
              >
                Founder & CEO of Coco Development Group
              </Typography>
              <Typography variant={"body2"}>
                Danish developer, investor, and serial entrepreneur Rasmus Holst
                established Coco Development Group as the foundation of a
                world-leading lifestyle property chain. His vision goes beyond
                creating properties—he’s building vibrant communities that
                redefine luxury and elevate how people live, invest, and
                connect.
                <br />
                <br />
                Under Rasmus’s leadership, Coco Development Group champions{" "}
                <Typography
                  variant={"body2"}
                  component={"span"}
                  fontWeight={600}
                >
                  conscious living and smart investing.
                </Typography>{" "}
                Every project is designed to integrate wellness, social
                connection, and financial growth, empowering investors and
                residents alike to thrive in spaces that inspire and connect
                them to their surroundings.
                <br />
                <br />
                <Typography
                  variant={"body2"}
                  component={"span"}
                  fontWeight={600}
                >
                  “A place is only as good as the people in it. That&rsquo;s why
                  Coco isn&rsquo;t just about properties—it&rsquo;s about
                  building purposeful communities that leave a lasting legacy.”
                  – Rasmus Holst
                </Typography>
                <br />
                <br />
                Through Coco Development Group, Rasmus aims to create a global
                network of lifestyle entrepreneurs who embrace meaningful living
                and value-driven investments.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
