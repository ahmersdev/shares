import { PersonOneImg } from "@/assets/images";
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
              src={PersonOneImg}
              alt={"Rami Tabbara"}
              width={275}
              height={329}
              style={{ width: "100%", height: "100%", borderRadius: 40 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              border={1}
              borderColor={"primary.main"}
              bgcolor={"opacity.bg"}
              borderRadius={6}
              p={2.4}
            >
              <Typography variant={"body2"}>
                Rami, throughout his 20+ year real estate career with The First
                Group and Damac in Dubai, met thousands of investors who wanted
                to invest but couldn&rsquo;t. Many lost money buying the wrong
                properties and struggled to secure a second income for their
                families because they couldn&rsquo;t afford it or didn&rsquo;t
                have access to a transparent, regulated platform with handpicked
                properties. His experience leading Sales teams of over 800
                people in the region brought a deep understanding of investor
                needs and the importance of offering vetted, high-quality real
                estate opportunities on Stake.
              </Typography>

              <Typography
                variant={"body1"}
                fontWeight={600}
                color={"text.heading"}
                mt={4}
              >
                Rami Tabbara
              </Typography>

              <Typography variant={"body2"} color={"text.heading"}>
                Co-Founder & Co-CEO
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
