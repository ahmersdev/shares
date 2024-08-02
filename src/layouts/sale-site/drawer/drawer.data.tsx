import { SALE_SITE } from "@/constants/routes";
import { NavItem } from "@/interfaces";
import { pxToRem } from "@/utils/get-font-value";
import { Theme } from "@mui/material";

export const saleSiteDrawerArray: NavItem[] = [
  { id: 1, label: "Home", href: SALE_SITE.HOME },
  { id: 3, label: "About Us", href: SALE_SITE.ABOUT_US },
  { id: 4, label: "Properties", href: SALE_SITE.PROPERTIES },
  { id: 5, label: "FAQs", href: SALE_SITE.FAQS },
  { id: 6, label: "Sign In", href: "" },
  { id: 7, label: "Sign Up", href: "" },
];

export const mainStyles = (href: string, pathName: string, theme: Theme) => {
  return {
    background: `${pathName === href ? theme.palette.gradients.primary : null}`,
    color: `${pathName === href ? "grey.50" : "text.body"}`,
    fontWeight: pathName === href ? 700 : 400,
    padding: "10px 16px",
    fontSize: pxToRem(16),
    borderRadius: "6px 200px 200px 6px",
    "&:hover": {
      background: theme.palette.gradients.primary,
      color: "grey.50",
    },
  };
};
