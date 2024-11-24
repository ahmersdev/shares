"use client";

import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import {
  ArrowRightIcon,
  CopyIcon,
  MoneyIcon,
  NextIcon,
  OnBoardingHeaderIcon,
  PersonIcon,
  ReferIcon,
  StarIcon,
} from "@/assets/icons";
import { CustomTooltip } from "@/components/custom-tooltip";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { referAndEarn } from "./client-rewards.data";
import { pxToRem } from "@/utils/get-font-value";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { BUTTON_STYLES } from "@/styles";
import { ONBOARDING, WEB_APP } from "@/constants/routes";
import Link from "next/link";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonDetails } from "@/components/skeletons";
import useClientRewards from "./use-client-rewards";

export default function ClientRewards() {
  const {
    theme,
    methods,
    data,
    isLoading,
    isFetching,
    isError,
    copyUrlHandler,
    dataUser,
    isLoadingUser,
    isFetchingUser,
    isErrorUser,
  } = useClientRewards();

  if (isLoading || isFetching || isLoadingUser || isFetchingUser)
    return <SkeletonDetails />;

  if (isError || isErrorUser) return <ApiErrorState />;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              bgcolor={"grey.50"}
              border={1}
              borderColor={"text.stroke"}
              borderRadius={3}
              py={2.4}
              px={3.2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              gap={2}
              width={"100%"}
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
                  USD {data?.totalEarning?.totalEarning ?? "0"}
                </Typography>
                <Link href={WEB_APP.WALLET}>
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
                </Link>
              </Box>

              <StarIcon />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              bgcolor={"grey.50"}
              border={1}
              borderColor={"text.stroke"}
              borderRadius={3}
              py={2.4}
              px={3.2}
            >
              <Box display={"flex"} gap={1.2} mb={1.2}>
                <PersonIcon width={"24"} height={"24"} />
                <Typography
                  variant={"body2"}
                  fontWeight={700}
                  color={"text.heading"}
                >
                  {data?.totalEarning?.referrals ?? "0"}
                </Typography>
              </Box>
              <Typography variant={"body2"} color={"text.body"}>
                Registered
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              bgcolor={"grey.50"}
              border={1}
              borderColor={"text.stroke"}
              borderRadius={3}
              py={2.4}
              px={3.2}
            >
              <Box display={"flex"} gap={1.2} mb={1.2}>
                <MoneyIcon width={"24"} height={"24"} />
                <Typography
                  variant={"body2"}
                  fontWeight={700}
                  color={"text.heading"}
                >
                  {data?.totalEarning?.totalInvested ?? "0"}
                </Typography>
              </Box>
              <Typography variant={"body2"} color={"text.body"}>
                Invested
              </Typography>
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

            {!dataUser?.data?.isContactAdded &&
            !dataUser?.data?.isKYCVerified ? (
              <Box
                border={1}
                borderColor={"common.bgOnBoardingBorder"}
                bgcolor={"common.bgOnBoarding"}
                p={2}
                borderRadius={2}
              >
                <Box display={"flex"} gap={1}>
                  <OnBoardingHeaderIcon width={"31"} height={"31"} />
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      variant={"caption"}
                      fontWeight={600}
                      color={"text.heading"}
                    >
                      Complete Onboarding
                    </Typography>
                    <Typography variant={"subtitle1"}>
                      Local Regulations Require All Investors To Complete
                      Onboarding Before They Can Invest.
                    </Typography>
                  </Box>
                </Box>

                <Divider
                  sx={{ borderColor: "common.bgOnBoardingBorder", my: 1 }}
                />

                <Link
                  href={
                    !data?.data?.isContactAdded
                      ? ONBOARDING.QR_CODE
                      : !data?.data?.isKYCVerified
                      ? ONBOARDING.KYC_VERIFICATION
                      : ""
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant={"caption"}
                    fontWeight={600}
                    color={"common.bgOnBoardingBorder"}
                  >
                    Complete Onboarding
                  </Typography>

                  <ArrowRightIcon
                    fill={theme.palette.common.bgOnBoardingBorder}
                  />
                </Link>
              </Box>
            ) : (
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
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
