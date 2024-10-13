import { MoneyIcon, PercentageIcon, PersonIcon } from "@/assets/icons";
import { Typography } from "@mui/material";

export const getClientsRewardsData = () => [
  {
    id: 1,
    icon: MoneyIcon,
    title: "Monthly income",
    tooltip: "Monthly income",
    detail: "USD 0",
  },
  {
    id: 2,
    icon: PersonIcon,
    title: "Referrals",
    tooltip: "Referrals",
    detail: "USD 0",
  },
  {
    id: 3,
    icon: PercentageIcon,
    title: "Promotional",
    tooltip: "Promotional",
    detail: "USD 0",
  },
];

export const referAndEarn = [
  {
    text: (
      <>
        Friends Get{" "}
        <Typography variant={"caption"} color={"text.heading"} fontWeight={600}>
          USD 200
        </Typography>{" "}
        Upon Signing Up
      </>
    ),
  },
  {
    text: (
      <>
        You Get{" "}
        <Typography variant={"caption"} color={"text.heading"} fontWeight={600}>
          USD 200
        </Typography>{" "}
        After They Invest{" "}
        <Typography variant={"caption"} color={"text.heading"} fontWeight={600}>
          USD 2,000
        </Typography>{" "}
      </>
    ),
  },
];
