import { SALE_SITE } from "@/constants/routes";
import { INavItem } from "@/interfaces";
import { pxToRem } from "@/utils/get-font-value";

export const saleSiteHeaderArray: INavItem[] = [
  { id: 1, label: "Home", href: SALE_SITE.HOME },
  { id: 3, label: "About Us", href: SALE_SITE.ABOUT_US },
  { id: 4, label: "Properties", href: SALE_SITE.PROPERTIES },
  { id: 5, label: "FAQs", href: SALE_SITE.FAQS },
];

export const listButtonStyles = (href: string, pathName: string) => {
  return {
    color: pathName === href ? "primary.main" : "text.body",
    fontWeight: pathName === href ? 700 : 400,
    fontSize: pxToRem(16),
    background: "transparent",
    p: 0,
    mx: 1,
    "&:hover": {
      background: "transparent",
    },
  };
};
