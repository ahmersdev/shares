import { Theme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dayjs from "dayjs";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

export const getChartOptions = (theme: Theme): ApexOptions => {
  return {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      categories: ["2025", "2026", "2027", "2028", "2029"],
      labels: {
        style: {
          colors: theme.palette.text.body,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => val.toLocaleString(),
        style: {
          colors: theme.palette.text.body,
        },
      },
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
      colors: [
        theme.palette.text.heading,
        theme.palette.warning.main,
        theme.palette.primary.main,
      ],
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
  };
};

export const chartSeries = [
  {
    name: "Section 1",
    data: [40000, 50000, 52000, 56000, 60000],
  },
  {
    name: "Section 2",
    data: [8000, 10000, 12000, 13000, 14000],
  },
  {
    name: "Section 3",
    data: [4000, 5000, 6000, 8000, 10000],
  },
];

export const getTimelineData = (dataToDisplay: any) => [
  {
    title: "Latest funding date",
    date: dataToDisplay.fundedDate
      ? dayjs(dataToDisplay.fundedDate).format("MMM DD, YYYY")
      : "-",
    description:
      "This is a conservative estimate for the closing date of the property funding",
    iconColor: "primary.main",
    guaranteeBox: null,
  },
  {
    title: "Ownership documents distributed",
    date: "August 17, 2024",
    description:
      "Your Property Share Certificates will be issued 2 weeks after the property is funded",
    iconColor: "text.disabled",
    guaranteeBox: null,
  },
  {
    title: "Expected first rental payment",
    date: "September 30, 2024",
    description:
      "We project that the first rental payment will be paid by September 30, 2024, with a guaranteed payment date no later than October 31, 2024",
    iconColor: "text.disabled",
    guaranteeBox: {
      text: "Guaranteed by October 31, 2024",
      icon: <VerifiedUserOutlinedIcon color={"primary"} />,
      bgColor: "primary.5",
      textColor: "primary.main",
    },
  },
];
