import {
  CopyIcon,
  HomeIcon,
  MoneyIcon,
  PercentageIcon,
  PersonIcon,
} from "@/assets/icons";
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
    id: 1,
    icon: CopyIcon,
    text: "Copy Or Share Your Referral Link",
  },
  {
    id: 2,
    icon: PersonIcon,
    text: (
      <>
        Your Friend Get{" "}
        <Typography variant={"caption"} color={"text.heading"} fontWeight={600}>
          USD 200
        </Typography>{" "}
        When They Joined And Complete Onboarding
      </>
    ),
  },
  {
    id: 3,
    icon: HomeIcon,
    text: (
      <>
        You Get{" "}
        <Typography variant={"caption"} color={"text.heading"} fontWeight={600}>
          USD 200
        </Typography>{" "}
        When They Invest USD 2,000 or More
      </>
    ),
  },
];
