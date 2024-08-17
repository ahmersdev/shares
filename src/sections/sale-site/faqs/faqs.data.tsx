import {
  FaqsAboutIcon,
  FaqsDepositIcon,
  FaqsInvestingIcon,
  FaqsRegulationsIcon,
  FaqsReturnsIcon,
  FaqsRewardsIcon,
  FaqsStakeIcon,
  FaqsVisaIcon,
  FaqsWindowsIcon,
} from "@/assets/icons";
import { IContentData } from "./faqs.interface";

export const contentData: IContentData[] = [
  {
    parentId: 1,
    icon: FaqsAboutIcon,
    title: "About Stack",
    desc: "Learn More About Shares and How To Get Started",
  },
  {
    parentId: 2,
    icon: FaqsInvestingIcon,
    title: "Investing",
    desc: "All Your Questions About How to Invest Using Shares, Answered!",
  },
  {
    parentId: 3,
    icon: FaqsReturnsIcon,
    title: "Returns",
    desc: "How Do I Make Money",
  },
  {
    parentId: 4,
    icon: FaqsDepositIcon,
    title: "Deposit And Withdrawals",
    desc: "Everything You Need To Know About Transferring Funds",
  },
  {
    parentId: 5,
    icon: FaqsWindowsIcon,
    title: "Exit Windows",
    desc: "FAQs and Informational Articles About Our Properties Exit Windows",
  },
  {
    parentId: 6,
    icon: FaqsRewardsIcon,
    title: "Rewards",
    desc: "Earn More Through Our Loyalty and Referral Programs",
  },
  {
    parentId: 7,
    icon: FaqsVisaIcon,
    title: "Golden Visa",
    desc: "Applying For Residency",
  },
  {
    parentId: 8,
    icon: FaqsRegulationsIcon,
    title: "Regulations",
    desc: "Learn More About the Regulatory Environment We Operate In",
  },
  {
    parentId: 9,
    icon: FaqsStakeIcon,
    title: "Stake KSA",
    desc: "Coming Soon!",
  },
];
