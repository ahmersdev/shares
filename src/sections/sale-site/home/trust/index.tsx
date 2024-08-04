import { Box, Button, Grid, Typography } from "@mui/material";
import { trustDataArray } from "./trust.data";
import { ITrustData } from "./trust.interface";
import { TrustDualIcon } from "@/assets/icons";
import Link from "next/link";
import { BUTTON_STYLES } from "@/styles";

export default function Trust() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      px={2}
      pb={5}
      gap={8}
    >
      <Box maxWidth={"md"} width={"100%"} textAlign={"center"}>
        <Typography
          variant={"heading1"}
          color={"text.heading"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          We value your trust as much as your investments
        </Typography>
      </Box>
      <Box maxWidth={"lg"} width={"100%"}>
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
              <Link href={""}>
                <Button
                  variant={"contained"}
                  sx={{
                    ...BUTTON_STYLES,
                    color: "primary.main",
                    borderColor: "primary.main",
                    background: "transparent",
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
                  borderColor={"text.stroke"}
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
    </Box>
  );
}
