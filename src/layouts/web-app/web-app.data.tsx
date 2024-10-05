import {
  BookmarksIcon,
  CartIcon,
  LogOutIcon,
  PortfolioIcon,
  ProfileIcon,
  PropertiesIcon,
  RewardIcon,
  WalletIcon,
} from "@/assets/icons";
import { WEB_APP_LAYOUT } from "@/constants/layout";
import { SALE_SITE, WEB_APP } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { Theme } from "@mui/material";

export const mainRoutesArray = [
  {
    id: 1,
    icon: PropertiesIcon,
    label: WEB_APP_LAYOUT.PROPERTIES,
    href: WEB_APP.PROPERTIES,
  },
  {
    id: 2,
    icon: WalletIcon,
    label: WEB_APP_LAYOUT.WALLET,
    href: WEB_APP.WALLET,
  },
  {
    id: 3,
    icon: PortfolioIcon,
    label: WEB_APP_LAYOUT.PORTFOLIO,
    href: WEB_APP.PORTFOLIO,
  },
  {
    id: 4,
    icon: RewardIcon,
    label: WEB_APP_LAYOUT.REWARDS,
    href: WEB_APP.REWARDS,
  },
  {
    id: 5,
    icon: CartIcon,
    label: WEB_APP_LAYOUT.CART,
    href: WEB_APP.CART,
  },
];

export const lowerRoutesArray = [
  {
    id: 1,
    icon: ProfileIcon,
    label: WEB_APP_LAYOUT.PROFILE,
    href: WEB_APP.PROFILE,
  },
  {
    id: 2,
    icon: BookmarksIcon,
    label: WEB_APP_LAYOUT.BOOKMARKS,
    href: WEB_APP.BOOKMARKS,
  },
  {
    id: 3,
    icon: LogOutIcon,
    label: WEB_APP_LAYOUT.LOG_OUT,
    href: SALE_SITE.HOME,
  },
];

export const mainStyles = (href: string, pathName: string, theme: Theme) => {
  return {
    background: pathName.includes(href)
      ? theme.palette.primary[5]
      : "transparent",
    color: `${
      pathName.includes(href)
        ? theme.palette.text.heading
        : theme.palette.text.body
    }`,
    padding: { xs: "10px 8px", lg: "10px 16px" },
    fontSize: pxToRem(16),
    fontWeight: pathName.includes(href) ? 600 : 400,
    borderRadius: 2,
    "&:hover": {
      background: pathName.includes(href)
        ? theme.palette.primary[5]
        : "transparent",
    },
  };
};
