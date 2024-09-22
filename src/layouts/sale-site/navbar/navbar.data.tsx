import { SALE_SITE_LAYOUT } from "@/constants/layout";
import { SALE_SITE } from "@/constants/routes";
import { INavItem } from "@/interfaces";
import { pxToRem } from "@/utils/get-font-value";

export const saleSiteHeaderArray: INavItem[] = [
  { id: 1, label: SALE_SITE_LAYOUT.HOME, href: SALE_SITE.HOME },
  { id: 2, label: SALE_SITE_LAYOUT.ABOUT_US, href: SALE_SITE.ABOUT_US },
  { id: 3, label: SALE_SITE_LAYOUT.PROPERTIES, href: SALE_SITE.PROPERTIES },
  { id: 4, label: SALE_SITE_LAYOUT.FAQS, href: SALE_SITE.FAQS },
];

export const listButtonStyles = (href: string, pathName: string) => {
  const isHomePage = href === SALE_SITE.HOME && pathName === href;
  const isActive =
    isHomePage || (pathName.includes(href) && href !== SALE_SITE.HOME);

  return {
    color: isActive ? "primary.main" : "text.body",
    fontWeight: isActive ? 700 : 400,
    fontSize: pxToRem(16),
    background: "transparent",
    p: 0,
    mx: 1,
    "&:hover": {
      background: "transparent",
    },
  };
};
