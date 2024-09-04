import { Box, Button, Grid, Theme, Typography, useTheme } from "@mui/material";
import { trustDataArray, trustDataImagesArray } from "./trust.data";
import { ITrustData, ITrustDataImagesArray } from "./trust.interface";
import { TrustDualIcon } from "@/assets/icons";
import Link from "next/link";
import { BUTTON_STYLES } from "@/styles";
import Image from "next/image";
import { SALE_SITE } from "@/constants/routes";

export default function Trust() {
  const theme = useTheme<Theme>();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={8}
    >
      <Box maxWidth={"md"} width={"100%"} textAlign={"center"} px={2}>
        <Typography
          variant={"heading1"}
          component={"h1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          We value your trust as much as your investments
        </Typography>
      </Box>

      <Box maxWidth={"lg"} width={"100%"} px={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              bgcolor={"primary.5"}
              border={"1px solid"}
              borderColor={"primary.main"}
              borderRadius={10}
              p={3.2}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={2.4}
              color={"text.heading"}
            >
              <TrustDualIcon />
              <Typography variant={"h5"}>DUAL REGULATED</Typography>
              <Typography variant={"body2"}>
                Invest with the assurance that we are dual regulated by the most
                prestigious regulators in the Middle East
              </Typography>
              <Link href={SALE_SITE.PROPERTIES}>
                <Button
                  variant={"contained"}
                  sx={{
                    ...BUTTON_STYLES,
                    color: "primary.main",
                    borderColor: "primary.main",
                    backgroundColor: "common.white",
                    ":hover": {
                      backgroundColor: "primary.10",
                    },
                  }}
                  disableElevation
                >
                  Buy Properties
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              {trustDataArray.map((item: ITrustData) => (
                <Box
                  key={item.id}
                  border={"1px solid"}
                  borderColor={"primary.main"}
                  borderRadius={8}
                  p={4.5}
                  color={"text.heading"}
                >
                  <item.icon />
                  <Typography variant={"h5"} my={2.4}>
                    {item.title}
                  </Typography>
                  <Typography variant={"body2"}>{item.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box position={"relative"}>
        <Box
          position={"absolute"}
          left={0}
          top={0}
          width={279}
          height={"100%"}
          zIndex={2}
          display={{ xs: "none", sm: "block" }}
          sx={{
            background: theme.palette.gradients.secondary,
          }}
        />
        <Box
          position={"absolute"}
          right={0}
          top={0}
          width={279}
          height={"100%"}
          zIndex={2}
          display={{ xs: "none", sm: "block" }}
          sx={{
            background: theme.palette.gradients.secondary,
            transform: "rotate(-180deg)",
          }}
        />
        <Grid container spacing={3.2} my={5} px={2}>
          {trustDataImagesArray.map((item: ITrustDataImagesArray) => (
            <Grid item xs={12} sm={4} md={2.4} key={item.id}>
              <Box position={"relative"}>
                {item.badge && (
                  <Box
                    position={"absolute"}
                    right={"5%"}
                    sx={{ transform: "translate(5%, -50%)" }}
                  >
                    <Box
                      bgcolor={"primary.5"}
                      borderRadius={"50%"}
                      width={100}
                      height={100}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={1}
                      sx={{ transform: "rotate(-30deg)" }}
                      color={"primary.main"}
                    >
                      <Typography
                        variant={"subtitle2"}
                        fontWeight={800}
                        textAlign={"center"}
                      >
                        {item.badge.amount}
                      </Typography>
                      <Typography
                        variant={"subtitle2"}
                        fontWeight={800}
                        textAlign={"center"}
                      >
                        {item.badge.desc}
                      </Typography>
                    </Box>
                  </Box>
                )}
                <Box>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={252}
                    height={184}
                    style={{ width: "100%", borderRadius: 24 }}
                  />
                  <Typography
                    variant={"h7"}
                    component={"h6"}
                    fontWeight={700}
                    color={"text.heading"}
                    textAlign={"center"}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
