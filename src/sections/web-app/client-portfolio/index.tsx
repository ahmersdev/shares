"use client";

import { CustomTooltip } from "@/components/custom-tooltip";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import {
  getKeyFinancialData,
  getQuickInsightsData,
  getAnnualInvestmentLimit,
  myStakesColumns,
} from "./client-portfolio.data";
import TanstackTable from "@/components/table";
import { PortfolioFooterIcon } from "@/assets/icons";
import { BUTTON_STYLES } from "@/styles";

export default function ClientPortfolio() {
  const keyFinancial = getKeyFinancialData();
  const quickInsight = getQuickInsightsData();
  const annualInvestmentLimit = getAnnualInvestmentLimit();

  return (
    <Stack spacing={4}>
      <Box
        bgcolor={"grey.50"}
        border={1}
        borderColor={"text.stroke"}
        borderRadius={3}
        px={3.2}
        py={2.4}
      >
        <Typography variant={"body1"}>Portfolio Value</Typography>
        <Typography variant={"h5"} color={"text.heading"} mt={1}>
          USD 0
        </Typography>
      </Box>

      <Box>
        <Typography
          variant={"body1"}
          fontWeight={600}
          color={"text.heading"}
          mb={1.8}
        >
          Key Financial
        </Typography>
        <Grid container spacing={1}>
          {keyFinancial.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={1}
                flexWrap={"wrap"}
                height={"100%"}
                bgcolor={"grey.50"}
                border={1}
                borderColor={"text.stroke"}
                borderRadius={3}
                p={2}
              >
                <Box display={"flex"} flexDirection={"column"} gap={0.6}>
                  <item.icon />
                  <Typography variant={"caption"}>
                    {item.title}
                    <CustomTooltip title={item.tooltip}>
                      <ErrorOutlineRoundedIcon
                        sx={{
                          fontSize: "13px",
                          cursor: "pointer",
                          mb: -0.1,
                          ml: 0.5,
                        }}
                      />
                    </CustomTooltip>
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant={"body2"}
                    color={"text.heading"}
                    fontWeight={700}
                    textAlign={"end"}
                  >
                    {item.amount}
                  </Typography>
                  <Typography variant={"caption"}>{item.date}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={7}>
            <Typography
              variant={"body1"}
              fontWeight={600}
              color={"text.heading"}
              mb={1.8}
            >
              Quick Insights
            </Typography>
            <Grid container spacing={1}>
              {quickInsight.map((item) => (
                <Grid item xs={12} md={6} lg={4} key={item.id}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={1}
                    flexWrap={"wrap"}
                    height={"100%"}
                    bgcolor={"grey.50"}
                    border={1}
                    borderColor={"text.stroke"}
                    borderRadius={3}
                    p={2}
                  >
                    <item.icon />
                    <Typography variant={"caption"}>
                      {item.title}
                      <CustomTooltip title={item.tooltip}>
                        <ErrorOutlineRoundedIcon
                          sx={{
                            fontSize: "13px",
                            cursor: "pointer",
                            mb: -0.1,
                            ml: 0.5,
                          }}
                        />
                      </CustomTooltip>
                    </Typography>

                    <Typography
                      variant={"body2"}
                      color={"text.heading"}
                      fontWeight={700}
                    >
                      {item.amount}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Typography
              variant={"body1"}
              fontWeight={600}
              color={"text.heading"}
              mb={1.8}
            >
              Annual investment limit
            </Typography>

            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              flexWrap={"wrap"}
              bgcolor={"grey.50"}
              border={1}
              borderColor={"text.stroke"}
              borderRadius={3}
              p={1}
            >
              <Typography
                variant={"caption"}
                textAlign={"center"}
                fontWeight={600}
                color={"text.heading"}
              >
                0%{" "}
                <Typography variant={"caption"} color={"text.body"}>
                  Of limit Used
                </Typography>
              </Typography>

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

              {annualInvestmentLimit.map((item) => (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  gap={1}
                  key={item.id}
                >
                  <Typography variant={"caption"}>{item.title}</Typography>
                  <Typography
                    variant={"caption"}
                    fontWeight={600}
                    color={"text.heading"}
                  >
                    {item.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography
          variant={"body1"}
          fontWeight={600}
          color={"text.heading"}
          mb={1.8}
        >
          My Stakes
        </Typography>

        <TanstackTable
          columns={myStakesColumns}
          data={[]}
          noDataProps={{ height: "20vh", message: "No Investment Found!" }}
        />
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={1}
        border={1}
        borderColor={"text.stroke"}
        borderRadius={3}
        px={2}
        py={1.4}
        sx={{ background: "linear-gradient(90deg, #A8FDD4 0%, #F8DCB1 100%)" }}
      >
        <PortfolioFooterIcon />

        <Box>
          <Typography variant={"body1"} fontWeight={700} color={"text.heading"}>
            Exit window is closed!
          </Typography>
          <Typography variant={"caption"}>
            Make the most of our secondary listings and buy shares at a great
            discount.
            <br /> Available on the mobile app only. Don’t miss out on this
            opportunity.
          </Typography>
        </Box>

        <Box>
          <Typography variant={"caption"}>Next Window</Typography>
          <Typography variant={"body1"} fontWeight={700} color={"text.heading"}>
            November 5, 2024, 1:00 AM
          </Typography>
        </Box>

        <Button
          variant={"outlined"}
          size={"small"}
          sx={{
            ...BUTTON_STYLES,
            p: 1,
            color: "text.heading",
            borderColor: "text.disabled",
            ":hover": {
              borderColor: "text.disabled",
            },
          }}
          disableElevation
        >
          Learn More
        </Button>
      </Box>
    </Stack>
  );
}
