import { FooterPhoneImg } from "@/assets/images";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import FooterNav from "./footer-nav";
import { FooterAppStoreButton, FooterGooglePlayButton } from "@/assets/icons";

export default function Footer() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} px={2}>
      <Box
        maxWidth={theme.breakpoints.values.lg - 20}
        width={"100%"}
        borderRadius={10}
        bgcolor={"primary.main"}
        my={5}
        sx={{
          backgroundImage: `url(${FooterPhoneImg.src})`,
          backgroundPosition: { xs: "100% 100%", sm: "right center" },
          backgroundSize: { xs: "cover", sm: "contain" },
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            pl={{ xs: 2, sm: 12 }}
            pr={{ xs: 2, sm: 0 }}
            gap={2.4}
            py={7.4}
          >
            <Typography
              variant={"heading1"}
              fontWeight={700}
              color={"grey.50"}
              maxWidth={"sm"}
              width={"100%"}
            >
              The modern way for anyone to invest in real estate
            </Typography>

            <Box display={"flex"} gap={2.4}>
              <FooterAppStoreButton />
              <FooterGooglePlayButton />
            </Box>
          </Box>
        </Box>
      </Box>

      <FooterNav />
    </Box>
  );
}
