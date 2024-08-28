import {
  FaqsAboutIcon,
  FaqsDepositIcon,
  FaqsInvestingIcon,
  FaqsReturnsIcon,
  FaqsRewardsIcon,
  FaqsWindowsIcon,
} from "@/assets/icons";
import { IContentData } from "./faqs.interface";

export const contentData: IContentData[] = [
  {
    parentId: 1,
    icon: FaqsAboutIcon,
    title: "About Shares",
    desc: "Learn More About Shares and How To Get Started",
    accordions: [
      {
        accordionId: 1,
        summary: "What Is Shares?",
        details: "What Is Shares?",
      },
      {
        accordionId: 2,
        summary: "Who Can Invest In Shares?",
        details: "",
      },
      {
        accordionId: 3,
        summary: "How Do It Get Started?",
        details: "",
      },
      {
        accordionId: 4,
        summary: "How  Does It Work?",
        details: "",
      },
      {
        accordionId: 5,
        summary: "What are Share’s Services?",
        details: "",
      },
      {
        accordionId: 6,
        summary: "Is Shares a Long- Term  Investment?",
        details: "",
      },
      {
        accordionId: 7,
        summary: "What Are Shares’s Fees?",
        details: "",
      },
    ],
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
];
