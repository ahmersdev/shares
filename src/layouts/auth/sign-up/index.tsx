import { SignUpBgImg } from "@/assets/images";
import { SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Box, Divider, Grid, Theme, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { propertiesData } from "./sign-up.data";
import { IProperty } from "@/interfaces/properties";
import PropertiesCard from "@/components/properties-card";
import { IChildrenProps } from "@/interfaces";

export default function SignUpBackground({ children }: IChildrenProps) {
  const theme = useTheme<Theme>();

  return (
    <Grid container height={"100vh"} overflow={"hidden"} bgcolor={"grey.50"}>
      <Grid item xs={12} md={6}>
        <Box height={"100%"}>
          <Link
            href={SALE_SITE.HOME}
            style={{
              display: "flex",
              alignItems: "baseline",
              padding: "40px 60px",
              maxHeight: pxToRem(135),
            }}
          >
            <Typography
              variant={"logo"}
              fontSize={pxToRem(36)}
              component={"h1"}
              color={"text.heading"}
            >
              Shares
            </Typography>
            <Box
              width={7}
              height={7}
              bgcolor={"primary.main"}
              borderRadius={"50%"}
            />
          </Link>

          <Divider sx={{ borderColor: "text.stroke" }} />

          {children}
        </Box>
      </Grid>

      <Grid item xs={0} md={6} display={{ xs: "none", md: "block" }}>
        <Box
          bgcolor={"primary.5"}
          height={"100%"}
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          p={7}
        >
          <Box
            component={"span"}
            position={"absolute"}
            top={0}
            left={0}
            zIndex={0}
            width={"50%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${SignUpBgImg.src})`,
              backgroundSize: "100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          />

          <Grid
            container
            maxWidth={theme.breakpoints.values.sm - 150}
            width={"100%"}
          >
            {propertiesData.map((property: IProperty) => (
              <Grid item xs={12} key={property.id}>
                <PropertiesCard property={property} bgcolor={"grey.50"} />
              </Grid>
            ))}
          </Grid>

          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Box display={"flex"} alignItems={"baseline"}>
              <Typography
                variant={"body3"}
                component={"p"}
                fontWeight={700}
                color={"text.heading"}
              >
                Powered By{" "}
              </Typography>
              <Typography
                variant={"body2"}
                fontWeight={900}
                color={"text.heading"}
              >
                Shares
              </Typography>
              <Box
                width={4}
                height={4}
                bgcolor={"primary.main"}
                borderRadius={"50%"}
              />
            </Box>

            <Typography variant={"body3"} component={"p"} color={"text.body"}>
              You Agree To{" "}
              <Typography
                variant={"body3"}
                component={"span"}
                color={"primary.main"}
                fontWeight={700}
              >
                Share’s Terms of Use and Policy.
              </Typography>{" "}
              You Don’t Need To Consent As A Condition Of Renting Any Property,
              Buying Any Other Goods Or Services. Message/Data May Apply
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
