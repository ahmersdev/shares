import { SALE_SITE_LAYOUT } from "@/constants/layout";
import { AUTH, SALE_SITE, WEB_APP } from "@/constants/routes";
import { INavItem } from "@/interfaces";
import { pxToRem } from "@/utils/get-font-value";
import { Theme } from "@mui/material";

export const getSaleSiteDrawerArray = (tokenCookies: string): INavItem[] => [
  { id: 1, label: SALE_SITE_LAYOUT.HOME, href: SALE_SITE.HOME },
  { id: 3, label: SALE_SITE_LAYOUT.ABOUT_US, href: SALE_SITE.ABOUT_US },
  { id: 4, label: SALE_SITE_LAYOUT.PROPERTIES, href: SALE_SITE.PROPERTIES },
  { id: 5, label: SALE_SITE_LAYOUT.FAQS, href: SALE_SITE.FAQS },
  ...(tokenCookies
    ? [
        {
          id: 8,
          label: SALE_SITE_LAYOUT.DASHBOARD,
          href: WEB_APP.PROPERTIES,
        },
      ]
    : [
        { id: 6, label: SALE_SITE_LAYOUT.SIGN_IN, href: AUTH.SIGN_IN },
        { id: 7, label: SALE_SITE_LAYOUT.SIGN_UP, href: AUTH.SIGN_UP },
      ]),
];

export const mainStyles = (href: string, pathName: string, theme: Theme) => {
  const isHomePage = href === SALE_SITE.HOME && pathName === href;
  const isActive =
    isHomePage || (pathName.includes(href) && href !== SALE_SITE.HOME);

  return {
    background: isActive ? theme.palette.primary.main : null,
    color: isActive ? "grey.50" : "text.body",
    fontWeight: isActive ? 700 : 400,
    padding: "10px 16px 10px 30px",
    fontSize: pxToRem(16),
    borderRadius: "200px 200px 200px 200px",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "grey.50",
    },
  };
};
