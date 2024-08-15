import { AUTH, SALE_SITE } from "@/constants/routes";
import { INavItem } from "@/interfaces";
import { pxToRem } from "@/utils/get-font-value";
import { Theme } from "@mui/material";

export const saleSiteDrawerArray: INavItem[] = [
  { id: 1, label: "Home", href: SALE_SITE.HOME },
  { id: 3, label: "About Us", href: SALE_SITE.ABOUT_US },
  { id: 4, label: "Properties", href: SALE_SITE.PROPERTIES },
  { id: 5, label: "FAQs", href: SALE_SITE.FAQS },
  { id: 6, label: "Sign In", href: AUTH.SIGN_IN },
  { id: 7, label: "Sign Up", href: AUTH.SIGN_UP },
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
