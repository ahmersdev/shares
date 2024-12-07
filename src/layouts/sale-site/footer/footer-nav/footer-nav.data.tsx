import { SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { IFooterNavDataArray } from "./footer-nav.interface";
import { SALE_SITE_LAYOUT } from "@/constants/layout";

export const footerNavDataArray: IFooterNavDataArray[] = [
  {
    id: 1,
    title: "Company",
    navItems: [
      {
        id: 11,
        label: SALE_SITE_LAYOUT.PROPERTIES,
        href: SALE_SITE.PROPERTIES,
      },
      { id: 12, label: SALE_SITE_LAYOUT.ABOUT_US, href: SALE_SITE.ABOUT_US },
    ],
  },
];

export const listButtonStyles = (href: string, pathName: string) => {
  const isHomePage = href === SALE_SITE.HOME && pathName === href;
  const isActive =
    isHomePage || (pathName.includes(href) && href !== SALE_SITE.HOME);

  return {
    color: isActive ? "primary.main" : "text.body",
    fontWeight: isActive ? 700 : 400,
    fontSize: pxToRem(14),
    background: "transparent",
    p: 0,
    "&:hover": {
      background: "transparent",
    },
  };
};
