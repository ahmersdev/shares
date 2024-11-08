import {
  Box,
  Button,
  Divider,
  Grid,
  LinearProgress,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import {
  PropertiesAnnualIcon,
  PropertiesBedIcon,
  PropertiesLocationIcon,
  PropertiesMessageIcon,
  PropertiesNumberIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";
import { AskAQuestionImg, PropertiesRegulatedImg } from "@/assets/images";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { pxToRem } from "@/utils/get-font-value";
import {
  getChartOptions,
  chartSeries,
  getTimelineData,
} from "./detail-content.data";
import ReactApexChart from "react-apexcharts";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BUTTON_STYLES } from "@/styles";
import { IDetailContentProps } from "./detail-content.interface";

export default function DetailContent(props: IDetailContentProps) {
  const { dataToDisplay } = props;

  const theme = useTheme<Theme>();
  const chartOptions = getChartOptions(theme);
  const timelineData = getTimelineData(dataToDisplay);

  return (
    <Box
      border={1}
      borderColor={"text.stroke"}
      bgcolor={"grey.50"}
      borderRadius={3}
      p={2.4}
      maxHeight={pxToRem(600)}
      height={"100%"}
      overflow={"auto"}
    >
      <Typography variant={"h5"} color={"text.heading"}>
        {dataToDisplay.title}, {dataToDisplay.location}
      </Typography>

      <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"} mt={1}>
        {[
          {
            icon: <PropertiesBedIcon />,
            label: `${dataToDisplay.numberOfBed ?? 0} Bedrooms`,
          },
          {
            icon: <PropertiesStatusIcon />,
            label: dataToDisplay.type ?? "---",
          },
          {
            icon: <PropertiesNumberIcon />,
            label: `#${dataToDisplay.propertyNumber ?? "---"}`,
          },
          {
            icon: <PropertiesLocationIcon />,
            label: dataToDisplay.location ?? "---",
          },
        ].map(({ icon, label }, index) => (
          <Box
            key={index}
            display={"flex"}
            alignItems={"center"}
            gap={0.5}
            pr={1.2}
            pl={index === 0 ? 0 : 0.6}
            borderRight={index < 3 ? 1 : 0}
            borderColor={"text.stroke"}
          >
            {icon}
            <Typography variant={"caption"} textTransform={"capitalize"}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 1.6, borderColor: "text.stroke" }} />

      <Box display={"flex"} gap={1}>
        <Image
          src={PropertiesRegulatedImg}
          alt={"Regulated"}
          width={24}
          height={24}
        />
        <Box>
          <Typography variant={"body2"} fontWeight={700} color={"text.heading"}>
            Regulated in {dataToDisplay.location} by the DFSA
          </Typography>
          <Typography variant={"caption"}>
            A mature real estate market with a high return on investment
          </Typography>
        </Box>
      </Box>

      <Box display={"flex"} gap={1} mt={1}>
        <PropertiesAnnualIcon />
        <Box>
          <Typography variant={"body2"} fontWeight={700} color={"text.heading"}>
            7.23% annual gross yield
          </Typography>
          <Typography variant={"caption"}>
            With a net yield of 5.65% and a price per square foot of USD 2,189
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 1.6, borderColor: "text.stroke" }} />

      <Typography variant={"body2"} fontWeight={700} color={"text.heading"}>
        Investment calculator
      </Typography>

      <Typography variant={"caption"} component={"p"} textAlign={"center"}>
        Projected investment return of
      </Typography>

      <Typography
        variant={"body2"}
        textAlign={"center"}
        fontWeight={700}
        color={"text.heading"}
        mb={2.4}
      >
        USD 79,125{" "}
        <Typography variant={"body2"} component={"span"}>
          in
        </Typography>{" "}
        5 years
      </Typography>

      <Box
        border={1}
        borderColor={"text.stroke"}
        borderRadius={3}
        px={1.6}
        py={1.2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={6}
      >
        {[
          {
            icon: (
              <FiberManualRecordIcon
                sx={{ fontSize: "12px", mt: 0.2, color: "text.heading" }}
              />
            ),
            title: "Investment",
            amount: 50000,
          },
          {
            icon: (
              <FiberManualRecordIcon
                color={"warning"}
                sx={{ fontSize: "12px", mt: 0.2 }}
              />
            ),
            title: "Total Rental Income",
            amount: 14125,
          },
          {
            icon: (
              <FiberManualRecordIcon
                color={"primary"}
                sx={{ fontSize: "12px", mt: 0.2 }}
              />
            ),
            title: "Value appreciation",
            amount: 15000,
          },
        ].map(({ icon, title, amount }) => (
          <Box display={"flex"} gap={0.5} key={title}>
            {icon}
            <Box>
              <Typography variant={"subtitle1"}>{title}</Typography>
              <Typography
                variant={"subtitle1"}
                fontWeight={600}
                color={"text.heading"}
              >
                USD {new Intl.NumberFormat("en-US").format(amount)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type={"bar"}
        height={350}
      />

      <Box display={"flex"} flexDirection={"column"} gap={2.4}>
        {[
          { title: "Initial Investment", text: "USD 50,000", percent: 50 },
          {
            title: "Property value growth (5 year)",
            text: "30%",
            percent: 30,
          },
          {
            title: "Expected annual rental yield",
            text: "5.56%",
            percent: 5.56,
          },
        ].map(({ title, text, percent }) => (
          <Box key={title}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              gap={1}
              mb={1}
            >
              <Typography variant={"body3"}>{title}</Typography>
              <Typography variant={"body3"} color={"text.heading"}>
                {text}
              </Typography>
            </Box>

            <Box position={"relative"}>
              <LinearProgress
                variant={"determinate"}
                value={percent}
                color={"primary"}
                sx={{
                  borderRadius: 1.5,
                  height: 6,
                  backgroundColor: "primary.5",
                  "& .MuiLinearProgress-bar1Determinate": {
                    borderRadius: "inherit",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: `calc(${percent}% - 8px)`,
                  transform: "translateY(-50%)",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: 5,
                  borderColor: "primary.main",
                  backgroundColor: "grey.50",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Typography
        variant={"subtitle1"}
        textAlign={"center"}
        bgcolor={"text.stroke"}
        borderRadius={2}
        mt={1.5}
        py={0.8}
      >
        Default values are based on property numbers
      </Typography>

      <Typography
        variant={"body2"}
        fontWeight={800}
        color={"text.heading"}
        mt={2.4}
      >
        Property Overview
      </Typography>
      <Typography variant={"caption"}>{dataToDisplay.description}</Typography>

      <Typography
        variant={"body2"}
        fontWeight={800}
        color={"text.heading"}
        mt={2.4}
        mb={1.2}
      >
        Financial
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={"subtitle1"}
            fontWeight={700}
            color={"text.heading"}
          >
            Property Cost
          </Typography>
          {[
            { label: "Property Price", value: dataToDisplay.price },
            {
              label: "Transaction Costs",
              value: dataToDisplay.transactionCost,
            },
          ].map((item, index) => (
            <Box
              key={index}
              my={index !== 0 ? 1.2 : 0}
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              <Typography variant={"subtitle1"}>{item.label}</Typography>
              <Typography
                variant={"subtitle1"}
                fontWeight={700}
                color={"text.heading"}
              >
                USD{" "}
                {item.value
                  ? new Intl.NumberFormat("en-US").format(item.value)
                  : "-"}
              </Typography>
            </Box>
          ))}
          <Typography
            variant={"subtitle1"}
            textAlign={"center"}
            bgcolor={"text.stroke"}
            borderRadius={2}
            mt={1.2}
            py={0.8}
          >
            Includes Stake&lsquo;s 1.5% fee
          </Typography>
          <Divider sx={{ my: 1.2, borderColor: "text.stroke" }} />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Typography variant={"subtitle1"}>Investment Costs</Typography>
            <Typography
              variant={"subtitle1"}
              fontWeight={700}
              color={"text.heading"}
            >
              USD{" "}
              {dataToDisplay.investmentCost
                ? new Intl.NumberFormat("en-US").format(
                    dataToDisplay.investmentCost
                  )
                : "-"}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant={"subtitle1"}
            fontWeight={700}
            color={"text.heading"}
          >
            Rental Income (Year 1)
          </Typography>
          {[
            { label: "Projected gross rent", value: dataToDisplay.grossRent },
            { label: "Service charges", value: dataToDisplay.serviceCharges },
            { label: "Mgmt. and maintenance", value: dataToDisplay.maintaince },
          ].map((item, index) => (
            <Box
              key={index}
              my={index !== 0 ? 1.2 : 0}
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              <Typography variant={"subtitle1"}>{item.label}</Typography>
              <Typography
                variant={"subtitle1"}
                fontWeight={700}
                color={"text.heading"}
              >
                USD{" "}
                {item.value
                  ? new Intl.NumberFormat("en-US").format(item.value)
                  : "-"}
              </Typography>
            </Box>
          ))}
          <Divider sx={{ my: 1.2, borderColor: "text.stroke" }} />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Typography variant={"subtitle1"}>Annual net income</Typography>
            <Typography
              variant={"subtitle1"}
              fontWeight={700}
              color={"text.heading"}
            >
              USD{" "}
              {dataToDisplay.netIncome
                ? new Intl.NumberFormat("en-US").format(dataToDisplay.netIncome)
                : "-"}
            </Typography>
          </Box>
          <Typography
            variant={"subtitle1"}
            textAlign={"center"}
            bgcolor={"text.stroke"}
            borderRadius={2}
            mt={1.2}
            p={0.8}
          >
            This is an estimate for the 1st year of ownership
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant={"body2"}
        fontWeight={800}
        color={"text.heading"}
        mt={2.4}
        mb={1.2}
      >
        Funding Timeline
      </Typography>
      <Typography
        variant={"subtitle1"}
        textAlign={"center"}
        bgcolor={"text.stroke"}
        borderRadius={2}
        mt={1.2}
        p={0.8}
        width={"max-content"}
      >
        The timeline is an estimate. Actual dates may vary
      </Typography>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TripOriginOutlinedIcon
                sx={{ fontSize: pxToRem(18), mt: 1, color: item.iconColor }}
              />
              {index < timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant={"body3"}
                fontWeight={800}
                color={"text.heading"}
              >
                {item.title}
              </Typography>
              <Typography variant={"caption"} component={"p"}>
                {item.date}
              </Typography>
              {item.guaranteeBox && (
                <Box
                  bgcolor={item.guaranteeBox.bgColor}
                  borderRadius={100}
                  py={0.6}
                  px={1.2}
                  width={"max-content"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  my={0.6}
                >
                  {item.guaranteeBox.icon}
                  <Typography
                    variant={"caption"}
                    fontWeight={700}
                    color={item.guaranteeBox.textColor}
                  >
                    {item.guaranteeBox.text}
                  </Typography>
                </Box>
              )}
              <Typography variant={"caption"} component={"p"}>
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Typography
        variant={"body2"}
        fontWeight={800}
        color={"text.heading"}
        mt={2.4}
        mb={1.2}
      >
        Location
      </Typography>

      <Box display={"flex"} alignItems={"center"} gap={1}>
        <LocationOnIcon color={"primary"} />
        <Typography variant={"body3"} fontWeight={700}>
          {dataToDisplay.location}
        </Typography>
      </Box>

      <Typography
        variant={"body2"}
        fontWeight={800}
        color={"text.heading"}
        mt={2.4}
        mb={1.2}
      >
        Amenities
      </Typography>

      <Typography
        variant={"body2"}
        fontWeight={800}
        color={"text.heading"}
        mt={2.4}
        mb={1.2}
      >
        Have More Questions About This Property?
      </Typography>
      <Box display={"flex"} gap={1}>
        <Image
          src={AskAQuestionImg}
          alt={"Shares"}
          width={70}
          height={70}
          style={{ borderRadius: pxToRem(8), objectFit: "cover" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography variant={"body3"} component={"p"}>
            Contact Out Real Estate Experts
          </Typography>
          <Button
            variant={"outlined"}
            size={"small"}
            startIcon={<PropertiesMessageIcon />}
            sx={{
              ...BUTTON_STYLES,
              height: 28,
              width: 150,
              color: "text.heading",
              borderColor: "text.disabled",
              ":hover": {
                borderColor: "text.disabled",
              },
            }}
            disableElevation
          >
            Message Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
