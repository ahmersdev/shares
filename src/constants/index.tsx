import { SALE_SITE } from "./routes";

export const PROPERTIES_STATUSES = {
  AVAILABLE: "available",
  FUNDED: "funded",
  EXITED: "exited",
};

export const DATE_FORMATS = {
  UI: "MMM DD, YYYY",
};

export const CONTRACT_ADDRESS = "0xbe0311e8B5ae8E0370BF03d52C035A4F054a6956";

export const LEGAL_PAGES = [
  { id: 1, label: "Terms Of Use", href: SALE_SITE.TERMS_AND_CONDITIONS },
  { id: 2, label: "Key Risks", href: SALE_SITE.KEY_RISKS },
  { id: 3, label: "Privacy Policy", href: SALE_SITE.PRIVACY_POLICY },
  { id: 4, label: "Cookie Notice", href: SALE_SITE.COOKIE_NOTICE },
];
