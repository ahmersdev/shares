import { FooterMobilePhoneImg, FooterPhoneImg } from "@/assets/images";
import { Box, Divider, Grid, Theme, Typography, useTheme } from "@mui/material";
import FooterNav from "./footer-nav";
import { FooterAppStoreButton, FooterGooglePlayButton } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { SALE_SITE } from "@/constants/routes";

export default function Footer() {
  const theme = useTheme<Theme>();

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} px={2}>
      <Box
        maxWidth={theme.breakpoints.values.lg - 20}
        width={"100%"}
        borderRadius={10}
        bgcolor={"primary.10"}
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
        py={2}
        my={5}
        flexWrap={"wrap"}
        gap={2}
        borderTop={1}
        borderBottom={1}
        borderColor={"primary.5"}
      >
        <Typography variant={"body2"} textAlign={"center"}>
          Copyrights © 2024 Shares | All Rights Reserved
        </Typography>
        <Typography variant={"body2"} textAlign={"center"}>
          <Link href={SALE_SITE.PRIVACY_POLICY}>Privacy Policy</Link> |{" "}
          <Link href={SALE_SITE.TERMS_OF_USE}>Terms of Use</Link>
        </Typography>
      </Box>

      <Box maxWidth={"lg"} width={"100%"} mb={10}>
        <Typography variant={"caption"} component={"p"}>
          This site is operated by Wyoming DAO LLC, regulated under applicable
          blockchain and real estate investment regulations, ensuring compliance
          with relevant authorities. Wyoming DAO LLC is not a registered
          broker-dealer or investment advisor. We do not provide investment
          advice, endorsements, or recommendations regarding any properties or
          opportunities listed on this site. Nothing on this website constitutes
          an offer to sell or a solicitation to buy any security.
          <br />
          <br />
          It is solely your responsibility to determine whether any investment,
          strategy, or transaction aligns with your personal financial
          objectives, circumstances, and risk tolerance. We strongly encourage
          consulting licensed legal, tax, insurance, or investment professionals
          before making any decisions. Wyoming DAO LLC does not guarantee
          investment performance or the return of capital for any opportunity
          listed on this site.
          <br />
          <br />
          All investments carry risks, including potential partial or total
          loss. By accessing this site, investors acknowledge and understand
          that investing in real estate involves risks, the real estate market
          may fluctuate, and properties may not meet performance expectations.
          Future property values are uncertain, and there may be a risk of loss
          in value. Investors should carefully review all available information
          and consult their tax and legal advisors before investing.
          <br />
          <br />
          Transactions on the Wyoming DAO Marketplace are executed using USD
          Coin (USDC), a cryptocurrency pegged to the US dollar, via smart
          contracts on the blockchain. If a non-USDC payment method is used, it
          will be converted to USDC at the prevailing rate. In the event of
          order cancellations or expirations, any unspent USDC will be returned
          to your Wyoming DAO Wallet. If you submit a sell order and it is
          fulfilled, you will be paid in USDC, which can be converted to USD
          through third-party cryptocurrency exchanges.
          <br />
          <br />
          All investment-related information is sourced from reliable entities;
          however, Wyoming DAO LLC makes no representation as to its accuracy or
          completeness. Hyperlinks to third-party content do not imply
          endorsement by Wyoming DAO LLC.
        </Typography>
      </Box>
    </Box>
  );
}
