import {
  AnalyticsIcon,
  HomeIcon,
  IncomeIcon,
  MoneyIcon,
  PercentageIcon,
} from "@/assets/icons";

export const getKeyFinancialData = () => [
  {
    id: 1,
    icon: MoneyIcon,
    title: "Monthly income",
    tooltip: "Monthly income",
    amount: `USD 0`,
    date: "June 2024",
  },
  {
    id: 2,
    icon: IncomeIcon,
    title: "Total Rental Income",
    tooltip: "Total Rental Income",
    amount: `USD 0`,
    date: "June 2024",
  },
  {
    id: 3,
    icon: AnalyticsIcon,
    title: "Total Appreciation",
    tooltip: "Total Appreciation",
    amount: `USD 0`,
    date: "June 2024",
  },
];

export const getQuickInsightsData = () => [
  {
    id: 1,
    icon: HomeIcon,
    title: "Number of properties",
    tooltip: "Number of properties",
    amount: "0",
  },
  {
    id: 2,
    icon: PercentageIcon,
    title: "Occupancy rate",
    tooltip: "Occupancy rate",
    amount: "0%",
  },
  {
    id: 3,
    icon: AnalyticsIcon,
    title: "Annual rental yield",
    tooltip: "Annual rental yield",
    amount: "0%",
  },
];

export const getAnnualInvestmentLimit = () => [
  {
    id: 1,
    title: "Annual Limit",
    detail: "USD 183,500",
  },
  {
    id: 2,
    title: "Invested In Last 12 Months",
    detail: "USD 0",
  },
  {
    id: 3,
    title: "Available to Invest",
    detail: "USD 183,500",
  },
];

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
