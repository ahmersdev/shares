import {
  AnalyticsIcon,
  HomeIcon,
  IncomeIcon,
  MoneyIcon,
  PercentageIcon,
} from "@/assets/icons";
import { PORTFOLIO_PAGE_ANNUAL_LIMIT } from "@/constants";

export const getKeyFinancialData = (data: any) => [
  {
    id: 1,
    icon: MoneyIcon,
    title: "Monthly income",
    tooltip: "Monthly income",
    amount: `USD ${data?.totalMonthlyIncome ?? "0"}`,
    date: "June 2024",
  },
  {
    id: 2,
    icon: IncomeIcon,
    title: "Total Rental Income",
    tooltip: "Total Rental Income",
    amount: `USD ${data?.totalMonthlyRentalIncome ?? "0"}`,
    date: "June 2024",
  },
  {
    id: 3,
    icon: AnalyticsIcon,
    title: "Total Appreciation",
    tooltip: "Total Appreciation",
    amount: `USD ${data?.totalMonthlyAppreciation ?? "0"}`,
    date: "June 2024",
  },
];

export const getQuickInsightsData = (data: any) => [
  {
    id: 1,
    icon: HomeIcon,
    title: "Number of properties",
    tooltip: "Number of properties",
    amount: `${data?.noOfProperties ?? "0"}`,
  },
  {
    id: 2,
    icon: PercentageIcon,
    title: "Occupancy rate",
    tooltip: "Occupancy rate",
    amount: `${data?.occupancyRate ?? "0"}%`,
  },
  {
    id: 3,
    icon: AnalyticsIcon,
    title: "Annual rental yield",
    tooltip: "Annual rental yield",
    amount: `${data?.annualRentalYield ?? "0"}%`,
  },
];

export const getAnnualInvestmentLimit = (totalInvestment: number) => {
  const formatter = new Intl.NumberFormat("en-US");

  return [
    {
      id: 1,
      title: "Annual Limit",
      detail: `USD ${formatter.format(PORTFOLIO_PAGE_ANNUAL_LIMIT)}`,
    },
    {
      id: 2,
      title: "Invested In Last 12 Months",
      detail: `USD ${formatter.format(totalInvestment)}`,
    },
    {
      id: 3,
      title: "Available to Invest",
      detail: `USD ${formatter.format(
        PORTFOLIO_PAGE_ANNUAL_LIMIT - totalInvestment
      )}`,
    },
  ];
};

export const myStakesColumns = [
  {
    accessorFn: (row: any) => row?.property,
    id: "property",
    header: "Property",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.location,
    id: "location",
    header: "Location",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.investmentValue,
    id: "investmentValue",
    header: "Investment Value",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.totalRentalIncome,
    id: "totalRentalIncome",
    header: "Total Rental Income",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row?.status,
    id: "status",
    header: "Status",
    cell: (info: any) => info.getValue(),
  },
];
