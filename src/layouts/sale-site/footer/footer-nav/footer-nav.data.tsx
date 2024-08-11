import { SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { IFooterNavDataArray } from "./footer-nav.interface";

export const footerNavDataArray: IFooterNavDataArray[] = [
  {
    id: 1,
    title: "Company",
    navItems: [
      { id: 11, label: "Properties", href: SALE_SITE.PROPERTIES },
      { id: 12, label: "About Us", href: SALE_SITE.ABOUT_US },
      { id: 13, label: "How it works", href: "#" },
      { id: 14, label: "Newsletter", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Services",
    navItems: [
      { id: 21, label: "Learn", href: "#" },
      { id: 22, label: "Sell", href: "#" },
      { id: 23, label: "Buy", href: "#" },
    ],
  },
  {
    id: 3,
    title: "Help",
    navItems: [
      { id: 31, label: "Help Center", href: "#" },
      { id: 32, label: "Contact Us", href: "#" },
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
