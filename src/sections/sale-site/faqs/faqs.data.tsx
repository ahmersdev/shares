import {
  FaqsAboutIcon,
  FaqsDepositIcon,
  FaqsInvestingIcon,
  FaqsReturnsIcon,
  FaqsRewardsIcon,
  FaqsWindowsIcon,
} from "@/assets/icons";
import { IContentData, ICustomListProps } from "./faqs.interface";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { pxToRem } from "@/utils/get-font-value";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { FC } from "react";
import Link from "next/link";

export const CustomList: FC<ICustomListProps> = ({ items }) => {
  const renderTextWithLink = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <Link
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "primary.main", textDecoration: "underline" }}
          >
            {part}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem sx={{ py: 0 }} key={index}>
          <ListItemIcon sx={{ minWidth: pxToRem(30) }}>
            <FiberManualRecordIcon
              sx={{ color: "text.heading", fontSize: "15px" }}
            />
          </ListItemIcon>
          <ListItemText
            primary={renderTextWithLink(item)}
            sx={{
              color: "text.heading",
              ".MuiTypography-root": {
                fontSize: pxToRem(19),
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export const contentData: IContentData[] = [
  {
    parentId: 1,
    icon: FaqsAboutIcon,
    title: "About Shares",
    desc: "Learn More About Shares and How To Get Started",
    accordions: [
      {
        accordionId: 1,
        summary: "What services does SharesByCoco offer?",
        details:
          "SharesByCoco handles the entire investment process for you. From developing and managing prime real estate opportunities to overseeing the operational aspects until the end of your Investment Term, we ensure a seamless experience.",
        additionalContent: (
          <Typography
            variant={"h7"}
            component={"p"}
            color={"text.heading"}
            mt={1}
          >
            This includes maintaining compliance with local regulations,
            evaluating assets, and managing investments responsibly. We take
            care of all operational aspects, such as tenant management, leasing,
            maintenance, and technical requirements, so you can focus on
            enjoying your investment returns.
          </Typography>
        ),
      },
      {
        accordionId: 2,
        summary: "How do I get started?",
        details:
          "Ready to begin your investment journey with us? Setting up your account is straightforward and quick. Follow these simple steps:",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Step 1: Create your account
            </Typography>
            <CustomList
              items={[
                "Download our app or visit https://sharesbycoco.com/",
                "Verify your identity with a passport photo and a selfie",
                "Submit a proof of address document",
                "Your application will be processed within a few hours!",
              ]}
            />
          </>
        ),
      },
      {
        accordionId: 3,
        summary: "How does it work?",
        details:
          "Investing with SharesByCoco is simple, but involves a few key steps:",
        additionalContent: <></>,
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
