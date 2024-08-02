import { SALE_SITE } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";

export const saleSiteDrawerArray = [
  { id: 1, label: "Home", href: SALE_SITE.HOME },
  { id: 3, label: "About Us", href: SALE_SITE.ABOUT_US },
  { id: 4, label: "Properties", href: SALE_SITE.PROPERTIES },
  { id: 5, label: "FAQs", href: SALE_SITE.FAQS },
  { id: 6, label: "Sign In", href: "" },
  { id: 7, label: "Sign Up", href: "" },
];

export const mainStyles = (href: any, pathName: any, theme: any) => {
  return {
    background: `${
      pathName === href ? theme?.palette?.gradients?.primary : null
    }`,
    color: `${pathName === href ? "grey.light" : "text.body"}`,
    fontWeight: pathName === href ? 700 : 400,
    padding: "10px 16px",
    fontSize: pxToRem(16),
    borderRadius: "6px 200px 200px 6px",
    "&:hover": {
      background: `${
        pathName === href
          ? theme?.palette?.gradients?.primary
          : theme?.palette?.gradients?.secondary
      }`,
    },
  };
};
