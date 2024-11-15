import { PersonIcon, ReferIcon, SecurityAndPrivacyIcon } from "@/assets/icons";
import { WEB_APP } from "@/constants/routes";

export const clientProfileData = [
  {
    id: 1,
    icon: PersonIcon,
    iconWidth: "24",
    iconHeight: "24",
    title: "Account Information",
    description: "View and Manage Your Personal Details",
    link: WEB_APP.ACCOUNT_INFORMATION,
  },
  {
    id: 2,
    icon: SecurityAndPrivacyIcon,
    title: "Security and Privacy",
    description: "Setup Additional Security For Your Account",
    link: WEB_APP.SECURITY_AND_PRIVACY,
  },
];
