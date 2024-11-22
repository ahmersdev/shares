import { LEGAL_LAYOUT } from "@/constants/layout";
import { SALE_SITE } from "@/constants/routes";

export const LEGAL_PAGES = [
  { id: 1, label: LEGAL_LAYOUT.TERMS_OF_USE, href: SALE_SITE.TERMS_OF_USE },
  { id: 2, label: LEGAL_LAYOUT.KEY_RISKS, href: SALE_SITE.KEY_RISKS },
  { id: 3, label: LEGAL_LAYOUT.PRIVACY_POLICY, href: SALE_SITE.PRIVACY_POLICY },
  { id: 4, label: LEGAL_LAYOUT.COOKIE_NOTICE, href: SALE_SITE.COOKIE_NOTICE },
];

export const legalHeaderTitle = (pathName: string) => {
  let title = "";

  switch (pathName) {
    case SALE_SITE.TERMS_OF_USE:
      title = LEGAL_LAYOUT.TERMS_OF_USE;
      break;

    case SALE_SITE.KEY_RISKS:
      title = LEGAL_LAYOUT.KEY_RISKS;
      break;

    case SALE_SITE.PRIVACY_POLICY:
      title = LEGAL_LAYOUT.PRIVACY_POLICY;
      break;

    case SALE_SITE.COOKIE_NOTICE:
      title = LEGAL_LAYOUT.COOKIE_NOTICE;
      break;

    default:
      title = "Unknown Page";
      break;
  }

  return title;
};
