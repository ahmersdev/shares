import { FooterMobilePhoneImg, FooterPhoneImg } from "@/assets/images";
import { Box, Grid, Theme, Typography, useTheme } from "@mui/material";
import FooterNav from "./footer-nav";
import { FooterAppStoreButton, FooterGooglePlayButton } from "@/assets/icons";
import Image from "next/image";

export default function Footer() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} px={2}>
      <Box
        maxWidth={theme.breakpoints.values.lg - 20}
        width={"100%"}
        borderRadius={10}
        bgcolor={"primary.5"}
        my={5}
        height={"100%"}
        overflow={"hidden"}
      >
        <Grid container spacing={{ xs: 0, sm: 4 }}>
          <Grid item xs={12} sm={7}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2.4}
              pt={7.4}
              pb={{ xs: 2, sm: 7.4 }}
              pl={{ xs: 2, sm: 9 }}
              pr={{ xs: 2, sm: 0 }}
            >
              <Typography
                variant={"heading1"}
                component={"h1"}
                fontWeight={700}
                color={"primary.main"}
              >
                The modern way for anyone to invest in real estate
              </Typography>

              <Box display={"flex"} gap={2.4}>
                <FooterAppStoreButton />
                <FooterGooglePlayButton />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Box
              textAlign={"end"}
              position={"relative"}
              width={"100%"}
              height={"100%"}
              overflow={"hidden"}
              display={{ xs: "none", sm: "block" }}
            >
              <Image
                src={FooterPhoneImg}
                alt={"Iphone"}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              textAlign={"end"}
              position={"relative"}
              width={"100%"}
              height={"100%"}
              overflow={"hidden"}
              display={{ xs: "block", sm: "none" }}
            >
              <Image
                src={FooterMobilePhoneImg}
                alt={"Iphone"}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <FooterNav />

      <Box
        maxWidth={"lg"}
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        mb={5}
        flexWrap={"wrap"}
        gap={2}
      >
        <Typography variant={"body2"} textAlign={"center"}>
          Copyrights © 2024 Shares | All Rights Reserved
        </Typography>
        <Typography variant={"body2"} textAlign={"center"}>
          Privacy Policy | Terms & Conditions
        </Typography>
      </Box>
    </Box>
  );
}
