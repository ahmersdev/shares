"use client";

import {
  Box,
  Grid,
  Typography,
  useTheme,
  Theme,
  LinearProgress,
  Button,
} from "@mui/material";
import { CopyIcon, NextIcon, ReferIcon, StarIcon } from "@/assets/icons";
import { CustomTooltip } from "@/components/custom-tooltip";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { getClientsRewardsData, referAndEarn } from "./client-rewards.data";
import { pxToRem } from "@/utils/get-font-value";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { useForm } from "react-hook-form";
import { BUTTON_STYLES } from "@/styles";
import { successSnackbar } from "@/utils/api";

export default function ClientRewards() {
  const theme = useTheme<Theme>();

  const domain = window.location.hostname;

  const clientsRewardsData = getClientsRewardsData();

  const methods = useForm({
    defaultValues: {
      link: `${domain}/sign-up?rewards=1234`,
    },
  });
  const { getValues } = methods;

  const copyUrlHandler = () => {
    navigator.clipboard.writeText(getValues("link"));
    successSnackbar("URL Copied Successfully!");
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid
          container
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
          py={2.4}
          px={1}
        >
          <Grid item xs={12} md={6}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              gap={2}
              px={2}
            >
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography variant={"body1"}>
                  Total Reward Earned
                  <CustomTooltip title={"Total Reward Earned"}>
                    <ErrorOutlineRoundedIcon
                      sx={{
                        fontSize: "15px",
                        cursor: "pointer",
                        mb: -0.1,
                        ml: 0.5,
                      }}
                    />
                  </CustomTooltip>
                </Typography>
                <Typography variant={"h5"} color={"text.heading"}>
                  USD 0
                </Typography>
                <Box display={"flex"} gap={1}>
                  <Typography
                    variant={"body2"}
                    fontWeight={600}
                    color={"text.heading"}
                  >
                    View Current Balance
                  </Typography>
                  <NextIcon fill={theme.palette.text.heading} />
                </Box>
              </Box>

              <StarIcon />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} borderLeft={1} borderColor={"text.stroke"}>
            <Box
              px={2}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              {clientsRewardsData.map((item) => (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                  key={item.id}
                >
                  <Box display={"flex"} alignItems={"center"} gap={0.5}>
                    <item.icon />
                    <Typography variant={"caption"}>{item.title}</Typography>
                    <CustomTooltip title={item.tooltip}>
                      <ErrorOutlineRoundedIcon
                        sx={{
                          fontSize: "13px",
                          cursor: "pointer",
                          mb: -0.1,
                        }}
                      />
                    </CustomTooltip>
                  </Box>
                  <Typography
                    variant={"body2"}
                    fontWeight={700}
                    color={"text.heading"}
                  >
                    {item.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
          py={2.4}
          px={1}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >
          <Typography variant={"h7"} color={"grey.800"} fontWeight={900}>
            Shares
            <Typography
              variant={"h7"}
              component={"span"}
              color={"primary.main"}
              fontWeight={900}
            >
              .
            </Typography>
          </Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            color={"primary.main"}
            gap={1}
          >
            <Typography
              variant={"body2"}
              fontWeight={700}
              color={"text.heading"}
            >
              USD 0
            </Typography>
            <Typography variant={"body2"} fontWeight={500}>
              Invested In Last 12 Months
            </Typography>
          </Box>

          <LinearProgress
            variant={"determinate"}
            value={0}
            sx={{
              borderRadius: 1.5,
              height: 6,
              backgroundColor: "text.disabled",
              "& .MuiLinearProgress-bar1Determinate": {
                borderRadius: "inherit",
              },
            }}
          />

          <Typography variant={"body3"} component={"p"} textAlign={"center"}>
            Invest{" "}
            <Typography
              variant={"body3"}
              component={"span"}
              color={"text.heading"}
              fontWeight={700}
            >
              USD 25,000
            </Typography>{" "}
            To Reach Plus
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          bgcolor={"grey.50"}
          border={1}
          borderColor={"text.stroke"}
          borderRadius={3}
        >
          <Box p={2.4} borderBottom={1} borderColor={"text.stroke"}>
            <Typography
              variant={"body2"}
              fontWeight={700}
              color={"text.heading"}
              display={"flex"}
              alignItems={"center"}
              gap={1}
            >
              <ReferIcon />
              Refer and Earn
            </Typography>

            <Typography variant={"body3"} component={"p"} mt={1}>
              Invite your friends and you’ll both receive a rewards balance to
              invest in our properties!
            </Typography>
          </Box>

          <Box p={2.4}>
            {referAndEarn.map((item) => (
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={1.5}
                key={item.id}
              >
                <Box>
                  <Typography
                    variant={"body2"}
                    fontWeight={700}
                    color={"text.heading"}
                  >
                    Step {item.id}
                  </Typography>
                  <Typography variant="caption">{item.text}</Typography>
                </Box>

                <Box
                  width={34}
                  height={34}
                  bgcolor={"primary.5"}
                  borderRadius={"50%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <item.icon fill={theme.palette.primary.main} />
                </Box>
              </Box>
            ))}

            <Typography variant={"body3"} component={"p"} mb={1.5}>
              Bonus Is Paid Into Your Account After Your Friends Investment are
              Fully Funded And Closed
            </Typography>

            <Box display={"flex"} alignItems={"end"} gap={1} width={"100%"}>
              <FormProvider methods={methods} style={{ width: "100%" }}>
                <Typography variant={"subtitle2"} fontWeight={600}>
                  Share Your Link
                </Typography>
                <RHFTextField name={"link"} disabled size={"small"} />
              </FormProvider>

              <Button
                variant={"contained"}
                startIcon={<CopyIcon />}
                sx={{
                  ...BUTTON_STYLES,
                  color: "grey.50",
                  borderColor: "primary.main",
                  backgroundColor: "primary.main",
                  mb: 0.5,
                  whiteSpace: "nowrap",
                  fontSize: pxToRem(10),
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                }}
                disableElevation
                onClick={copyUrlHandler}
              >
                Copy Link
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
