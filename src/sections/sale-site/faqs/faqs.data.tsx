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
        <ListItem sx={{ py: 0, alignItems: "flex-start" }} key={index}>
          <ListItemIcon sx={{ minWidth: pxToRem(25), mt: 1.2 }}>
            <FiberManualRecordIcon
              sx={{ color: "text.heading", fontSize: "12px" }}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                {item.boldText && (
                  <Typography
                    component="span"
                    fontWeight={700}
                    sx={{ mr: 0.5 }}
                  >
                    {item.boldText}
                  </Typography>
                )}
                {renderTextWithLink(item.text)}
              </>
            }
            sx={{
              color: "text.heading",
              ".MuiTypography-root": {
                fontSize: pxToRem(18),
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
        summary: "What services does Shares By Coco offer?",
        details:
          "Shares By Coco handles the entire investment process for you. From developing and managing prime real estate opportunities to overseeing the operational aspects until the end of your Investment Term, we ensure a seamless experience.",
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
                { text: "Download our app or visit https://sharesbycoco.com/" },
                {
                  text: "Verify your identity with a passport photo and a selfie",
                },
                { text: "Submit a proof of address document" },
                {
                  text: "Your application will be processed within a few hours!",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Step 2: Invest in a property
            </Typography>
            <CustomList
              items={[
                {
                  text: "Browse our available properties to find your investment choice",
                },
                {
                  text: "Select the amount you wish to invest and add the property to your cart",
                },
                {
                  text: "Checkout and confirm your purchase via debit card or bank transfer",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Step 3: Receive your documents
            </Typography>
            <CustomList
              items={[
                { text: "Once fully funded, ownership transfer will occur" },
                {
                  text: "Your title deeds and share certificates will be provided",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Step 4: Receive rental payments
            </Typography>
            <CustomList
              items={[
                {
                  text: "Rental income will be paid out to your shares wallet once per month",
                },
                {
                  text: "Choose to reinvest, let the funds accumulate, or withdraw to your bank account",
                },
              ]}
            />
          </>
        ),
      },
      {
        accordionId: 3,
        summary: "How does it work?",
        details:
          "Investing with Shares By Coco is simple, but involves a few key steps:",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Property Listing
            </Typography>
            <CustomList
              items={[
                {
                  text: "Properties are listed on our platform to raise funds for their purchase. Listings are typically available for 30 - 60 days, before they are fully funded.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Fundraising
            </Typography>
            <CustomList
              items={[
                {
                  text: "Once all shares are funded, the fundraising closes and the deal progresses.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              SPV Creation
            </Typography>
            <CustomList
              items={[
                {
                  text: "A Special Purpose Vehicle (SPV) is created to ensure all investors are legally registered owners of the property through their shares in the SPV. The SPV will be listed as the owner on the title deed.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Document Distribution
            </Typography>
            <CustomList
              items={[
                {
                  text: "After the funding is completed, investors receive title deeds and share certificates as proof of ownership. We're also working on new document processes to simplify share distribution. For properties under development, investors will receive 8% annual cashback, distributed monthly.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Rental Payments
            </Typography>
            <CustomList
              items={[
                {
                  text: "Investors receive from day 1 through the development period 8% cashback, yearly calculation, paid out monthly.",
                },
                {
                  text: "Upon completion, investors can choose to sell their shares flexibly through our exit window with an increased value of 2% per quarter, equal to a 12% increase in value, if invested on day 1 of the launch (1.5 year development period).",
                },
                {
                  text: "Start receiving rental payments by completion and earn from capital appreciation when the property gets sold. Full sale of property, 3-5 year holding term.",
                },
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    parentId: 2,
    icon: FaqsInvestingIcon,
    title: "Investing",
    desc: "All Your Questions About How to Invest Using Shares, Answered!",
    accordions: [
      {
        accordionId: 1,
        summary: "How much can I invest?",
        details:
          "Shares by Coco is committed to making real estate investment accessible to everyone. There are no limits to how much you can invest, allowing you to tailor your investment according to your financial goals. For those looking to invest over $25,000, we offer a premium solution package, including a dedicated Asset Manager. This service provides you with personalized guidance and support to maximize your investment potential.",
        additionalContent: (
          <Typography
            variant={"h7"}
            component={"p"}
            color={"text.heading"}
            mt={1}
            sx={{ fontStyle: "italic" }}
          >
            Ready to take the next step? Get in touch with a personal investment
            associate today and explore how our premium solutions can work for
            you.
          </Typography>
        ),
      },
      {
        accordionId: 2,
        summary: "Why invest in Real Estate?",
        details:
          "Real estate is a tangible and stable asset class that has consistently delivered strong returns over time. It is a favoured investment for both large institutions and high-net-worth individuals for several reasons:",
        additionalContent: (
          <CustomList
            items={[
              {
                boldText: "Value Appreciation:",
                text: "Real estate tends to increase in value over long periods, providing growth with less volatility compared to public financial markets.",
              },
              {
                boldText: "Inflation Hedge:",
                text: "Real estate serves as a hedge against inflation and currency depreciation, making it a reliable long-term store of value.",
              },
              {
                boldText: "Income Generation:",
                text: "Properties generate predictable income through rent, making them a productive asset.",
              },
              {
                boldText: "Portfolio Diversification:",
                text: "Including real estate in a diversified portfolio enhances the overall risk-return profile.",
              },
            ]}
          />
        ),
      },
      {
        accordionId: 3,
        summary: "Why Invest in Bali?",
        details:
          "Bali stands out as one of the most attractive real estate markets in the world. Tourism in Bali has seen a significant surge, with visitor numbers increasing steadily year after year. The island enjoys an average occupancy rate of over 70%, and its unique appeal as a year-round destination ensures a consistent flow of tourists. With 365 days of sunshine and a thriving cultural scene, Bali offers an unmatched lifestyle that continues to draw visitors from all over the globe.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              This constant influx of tourists, combined with Bali&apos;s
              reputation as a premier destination, makes it an ideal market for
              real estate investment. Properties in Bali not only benefit from
              high rental yields but also from substantial appreciation in
              value. Whether you&apos;re looking to invest in luxury villas,
              resorts, or commercial properties, Bali&apos;s dynamic market
              provides lucrative opportunities for both short-term and long-term
              gains.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              With a stable political environment, growing infrastructure, and
              strong demand for high-quality accommodations, Bali truly is one
              of the best real estate markets in the world. Now is the perfect
              time to invest and capitalize on the island’s flourishing tourism
              industry.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 4,
        summary: "What happens if not enough funds are raised?",
        details:
          "At Shares by Coco, we ensure a seamless investment process by focusing on our own developments, which are pre-funded by our own capital. This means there are no time limits on the funding period, and you don't have to worry about the project stalling or being canceled due to insufficient funds. The only limit is the opportunity being sold out or 'fully funded', which ensures that your investment is secure from the start.",
        additionalContent: (
          <Typography
            variant={"h7"}
            component={"p"}
            color={"text.heading"}
            mt={1}
          >
            Because of our pre-funding model, you can be confident that your
            investment is always moving forward, and there&apos;s no risk of
            delays or cancellations due to lack of funding. This approach allows
            us to deliver exceptional real estate opportunities with the peace
            of mind that your investment is already backed by our resources.
          </Typography>
        ),
      },
      {
        accordionId: 5,
        summary: "What am I investing in?",
        details:
          "When you invest in a property through Shares by Coco, you're purchasing shares in a Special Purpose Vehicle (SPV) that holds the title deed to that specific property. The SPV is a legal entity created solely for owning and managing the property, ensuring that your investment is securely tied to the actual real estate.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Each investor receives shares in the SPV proportional to their
              investment, providing a clear and direct ownership stake in the
              property. This structure is common in the US real estate market,
              allowing multiple investors to collectively own a property through
              the SPV without having to manage the complexities of property
              ownership individually.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Shares by Coco administers all SPVs throughout the investment
              period, ensuring that legal and operational aspects are
              professionally managed. This setup allows you to benefit from
              rental income and capital appreciation while the SPV handles the
              property ownership details. For more information, please refer to
              our Terms & Conditions.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 6,
        summary: "How many shares will I own?",
        details:
          "All properties offered by Shares by Coco are divided into shares, valued at 1000 USD (United states dollar) per share. For instance, if you invest 1000 USD , you will receive shares equivalent to your investment. If a property’s total acquisition cost is 100,000 USD and your investment amount is 5000 USD, you will own 5% of the property equal to 5 shares.",
      },
      {
        accordionId: 7,
        summary: "What if I need to sell my shares before the investment term?",
        details:
          "Investing in real estate is often a long-term commitment, and we encourage investors to hold their shares for the full recommended term, typically 3-5 years, to maximize potential returns. However, we understand that circumstances can change, so we've introduced an annual Exit Window after the property's completion. This Exit Window allows you the opportunity to sell your shares once per year if needed, offering flexibility while still focusing on the long-term growth of your investment.",
        additionalContent: (
          <Typography
            variant={"h7"}
            component={"p"}
            color={"text.heading"}
            mt={1}
          >
            By holding your shares until the property is sold or for the full
            investment term, you&apos;ll likely see the most significant
            returns, but the Exit Window ensures that you have a viable option
            to access your investment sooner if necessary.
          </Typography>
        ),
      },
      {
        accordionId: 8,
        summary: "What happens at the end of the Investment Term?",
        details:
          "Our investment strategy is designed to deliver strong returns by holding the property until it reaches its full potential. Typically, this occurs after 3-5 years when the property has appreciated in value, generated consistent rental income, and demonstrated stability. At the end of this period, we offer two exit options:",
        additionalContent: (
          <>
            <CustomList
              items={[
                {
                  boldText: "Exit Window:",
                  text: "Once the property is in operation and has proven a stable track record of ROI over approximately 2 years, an Exit Window is available once per year. During this time, investors have the opportunity to sell their shares at the current market value.",
                },
                {
                  text: "If the property’s market value increases significantly reaching a predetermined Threshold ROI, this may automatically trigger a sell. Typically, we aim to exit when the property has been in operation and has demonstrated a stable track record of ROI over a period of 2 years. This approach ensures that you benefit from the property's peak value while maintaining flexibility in the investment strategy.",
                },
              ]}
            />
          </>
        ),
      },
      {
        accordionId: 9,
        summary: "Who manages the property? Can I visit?",
        details:
          "All properties owned by Shares by Coco investors are managed by our in-house management team under PT. COCO PROPERTIES BALI, a local entity that handles both the development and management of our properties. With over 200 properties in Bali managed today, we ensure top-tier oversight and service quality.",
        additionalContent: (
          <Typography
            variant={"h7"}
            component={"p"}
            color={"text.heading"}
            mt={1}
          >
            For transparency, we provide investors with access to comprehensive
            3D videos, high-resolution photos, and detailed reports for each
            property. Should you wish to visit, we can facilitate arrangements
            to give you a firsthand look at your investment.
          </Typography>
        ),
      },
      {
        accordionId: 10,
        summary: "When will I receive my documents?",
        details:
          "Once a property is fully funded, title deeds and share certificates confirming your ownership will be made available within a few weeks...",
      },
      {
        accordionId: 11,
        summary: "How can I verify my ownership documents?",
        details:
          "After receiving your Title Deed and Share Certificate, you can verify them through...",
      },
      {
        accordionId: 12,
        summary: "Rental Guarantee - Terms & Conditions",
        details: "",
        additionalContent: (
          <>
            <Typography variant={"h7"} component={"p"} color={"text.heading"}>
              <Typography variant={"h7"} fontWeight={700}>
                Guarantee Initiation:
              </Typography>
              Investors in Shares by Coco benefit from a guaranteed cashback of
              8% per year as part of our commitment to providing consistent
              returns. The first cashback will be issued 30 days after your
              investment. For example, if you invest on April 1st, the first
              guaranteed cashback will be paid out no later than May 1st. This
              cashback is designed to be reinvested before the property&apos;s
              completion and cannot be withdrawn.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              <Typography variant={"h7"} fontWeight={700}>
                Post-Completion ROI:
              </Typography>
              After the property is completed, investors enjoy a guaranteed
              annual ROI of 8%, with expected returns ranging between 10-14%.
              Unlike the pre-completion cashback, this ROI can be withdrawn at
              any time.
            </Typography>
            <CustomList
              items={[
                {
                  boldText: "Coverage of Rent:",
                  text: "The rental guarantee ensures that if a property does not generate rental income, investors will still receive financial support. This guarantee only applies to newly funded properties and does not cover properties acquired through Shares by Coco's Exit Window.",
                },
                {
                  boldText: "Duration of Guarantee:",
                  text: "The cashback and ROI guarantees are valid for as long as you hold your shares, with no time limits on the guarantee.",
                },
                {
                  boldText: "Claim Process:",
                  text: "Shareholders will automatically receive the guaranteed rent at the end of each applicable month.",
                },
                {
                  boldText: "Campaign Discontinuation:",
                  text: "Shares by Coco reserves the right to discontinue this rental guarantee campaign at any time.",
                },
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    parentId: 3,
    icon: FaqsReturnsIcon,
    title: "Returns",
    desc: "How Do I Make Money",
    accordions: [
      {
        accordionId: 1,
        summary: "How do returns work?",
        details: "",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
            >
              At Shares by Coco, you can benefit from three types of returns:
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              <Typography variant={"h7"} fontWeight={700}>
                Cashback During Development:
              </Typography>{" "}
              While your investment property is under development, you will
              receive a guaranteed cashback of 8% annually. This cashback is
              calculated on a yearly basis and credited to your Shares by Coco
              wallet. Although this cashback is intended for reinvestment before
              the property is completed, it provides steady returns during the
              development period.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              <Typography variant={"h7"} fontWeight={700}>
                Rental Income:
              </Typography>{" "}
              Once the property is operational, your share of the rental income
              generated will be credited to your Shares by Coco wallet. We aim
              to distribute these dividends monthly, though the frequency may
              vary depending on the property. You can choose to withdraw the
              rental income to your bank account or reinvest it into other
              properties on our platform.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              <Typography variant={"h7"} fontWeight={700}>
                Capital Appreciation:
              </Typography>{" "}
              Capital appreciation refers to the increase in the value of your
              investment over time. This gain is realised when you decide to
              exit your investment. For example, if you initially invest $1,000
              USD, your investment could be worth $1,300 USD when you sell your
              share. Please note that investments must be held for at least one
              year before they are eligible for sale.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              This structure ensures that you can benefit from both immediate
              income and long-term growth, making your investment with Shares by
              Coco a valuable addition to your portfolio.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 2,
        summary: "How will I earn my return on Shares By Coco?",
        details:
          "Your share of the rental income will be distributed to your Shares by Coco wallet. While we aim to distribute dividends monthly, dividends are declared and paid out at least quarterly. The net distributions are calculated after deducting operation and management at a fixed fee of 30% of the properties net income, covering all expenses, such as service charges, running costs, maintenance, annual administrative fees, insurances etc.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Once dividends are credited to your wallet, they will be available
              as a balance that you can either withdraw to your registered bank
              account or reinvest in another property through the platform.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              At the end of the Investment Term, the property will be sold, and
              your share of the sale proceeds—after deducting all relevant
              transaction costs—will be distributed to you according to your
              shares. At this point, your investment will be considered redeemed
              (with either a gain or loss).
            </Typography>
          </>
        ),
      },
      {
        accordionId: 3,
        summary: "What returns can I expect?",
        details:
          "At Shares by Coco, we focus on identifying and securing attractive investment opportunities. We consider total returns, which include both yield from recurring rental income and potential capital appreciation. We strive to balance high returns with value preservation and risk management.",
        additionalContent: (
          <Typography
            variant={"h7"}
            component={"p"}
            color={"text.heading"}
            mt={1}
          >
            We aim for an annualized Return on Investment (ROI) of 10-12% over
            the property’s holding period. The actual return you earn will
            depend on the net yield of the property and the amount you invested.
          </Typography>
        ),
      },
      {
        accordionId: 4,
        summary: "How will I know what my investment is worth?",
        details:
          "At Shares by Coco, transparency is at the heart of what we do. You can easily view the estimated market value of your shares on your dashboard at any time. Our platform also allows you to track the performance, giving you a clear and transparent view of your investment's worth. This approach ensures you always have up-to-date information, empowering you to make informed decisions about your investment portfolio.",
      },
      {
        accordionId: 5,
        summary:
          "Do I earn any interest on the available balance in my wallet?",
        details:
          "No, you will not earn any interest on funds that remain in your Shares by Coco wallet without being invested.",
      },
    ],
  },
  {
    parentId: 4,
    icon: FaqsDepositIcon,
    title: "Deposit And Withdrawals",
    desc: "Everything You Need To Know About Transferring Funds",
    accordions: [
      {
        accordionId: 1,
        summary: "How can I deposit to my wallet?",
        details: "",
        additionalContent: (
          <>
            <Typography variant={"h7"} component={"p"} color={"text.heading"}>
              <Typography variant={"h7"} fontWeight={700}>
                Funding your wallet is easy
              </Typography>{" "}
              and can be done through bank transfer, debit card, credit card, or
              even cryptocurrency. Here’s how:
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Bank Transfer:
            </Typography>
            <CustomList
              items={[
                {
                  text: 'Go to your wallet and select "Deposit" -> "Add Payment Method."',
                },
                {
                  text: "Enter your bank account details to help us identify your deposit.",
                },
                {
                  text: "Input the amount you wish to transfer and confirm (our bank details will be shown afterward).",
                },
                {
                  text: "Complete the transfer via your bank’s app.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              <Typography variant={"h7"} fontWeight={700}>
                Timing:
              </Typography>{" "}
              Local transfers take 1-2 business days; international transfers
              may take a few extra days.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Debit/Credit Card:
            </Typography>
            <CustomList
              items={[
                {
                  text: 'Go to your wallet and select "Deposit" -> "Add Payment Method."',
                },
                {
                  text: "Enter your card details.",
                },
                {
                  text: "Once your wallet is funded, you’re ready to invest!",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              <Typography variant={"h7"} fontWeight={700}>
                Timing:
              </Typography>{" "}
              Deposits by debit card are instant.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Cryptocurrency (USDT or ETH):
            </Typography>
            <CustomList
              items={[
                {
                  text: "If you have USDT, you can purchase it on any P2P platform.",
                },
                {
                  text: "If you have ETH, you can easily swap it on your MetaMask dashboard to add funds to your Shares by Coco wallet.",
                },
              ]}
            />
          </>
        ),
      },
      {
        accordionId: 2,
        summary: "Can I use Wise to deposit funds?",
        details: "Yes, Wise is supported! To deposit funds using Wise:",
        additionalContent: (
          <>
            <CustomList
              items={[
                {
                  text: "Follow the bank transfer instructions provided on our platform.",
                },
                {
                  text: "Enter your Wise account details to view the Shares by Coco bank information.",
                },
                {
                  text: "Send the funds through Wise.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              <Typography variant={"h7"} fontWeight={700}>
                Timing:
              </Typography>{" "}
              Transfers through Wise usually take 1-3 business days. You’ll
              receive a confirmation email once the funds are credited to your
              wallet.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 3,
        summary: "How can I withdraw?",
        details:
          "Withdrawals from your Shares by Coco wallet can be made via bank transfer. You can withdraw to any bank account as long as it’s in your name.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              To withdraw funds:
            </Typography>
            <CustomList
              items={[
                {
                  text: "Navigate to your wallet.",
                },
                {
                  text: 'Select "Withdraw."',
                },
                {
                  text: "Input your bank details and initiate the withdrawal.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Timelines:
            </Typography>
            <CustomList
              items={[
                {
                  text: "Local withdrawals: 1-2 business days",
                },
                {
                  text: "International withdrawals: 5-7 business days",
                },
              ]}
            />
          </>
        ),
      },
      {
        accordionId: 4,
        summary: "Are there any fees for transferring money?",
        details:
          "Shares by Coco doesn’t charge any fees for deposits or for withdrawing rental income or invested funds. However, a 2.5% fee applies to withdrawals of funds that were deposited via debit card and not invested. This fee covers the processing costs associated with debit card transactions. If you invest these funds, the fee is waived.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              We aim for transparency in our fee structure to ensure you’re
              fully informed. By investing your funds, you can avoid this fee,
              as Shares by Coco absorbs the card processing fee when funds are
              used for investment purposes.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Please note: Foreign exchange charges may apply for international
              card payments, which are beyond our control. All transactions are
              conducted in AED.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 5,
        summary: "Can I Withdraw My Funds at Any Time?",
        details:
          "Yes, as long as your funds are held as cash in your wallet and haven’t been invested, you can withdraw them at any time. However, any Rewards balance from Cashback, Referrals, or Promotions must first be invested before it can be withdrawn.",
      },
      {
        accordionId: 6,
        summary: "Where is my wallet balance stored?",
        details:
          "You can view your balance on your MetaMask dashboard for added security.",
      },
    ],
  },
  {
    parentId: 5,
    icon: FaqsWindowsIcon,
    title: "Exit Windows",
    desc: "FAQs and Informational Articles About Our Properties Exit Windows",
    accordions: [
      {
        accordionId: 1,
        summary: "What is an Exit Window?",
        details:
          "Exit windows provide an opportunity for sellers to exit their investments and for buyers to acquire shares in already funded properties. This exit facility allows investors to list their shares for sale, while giving buyers access to prime real estate.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              For buyers, exit windows present a chance to diversify their
              portfolios with properties that have already been funded and are
              in operation. For sellers, these windows offer flexibility,
              enabling them to sell their shares before the end of the
              recommended 5-year holding period, giving them more control over
              their investment strategy.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Exit windows opens by completion of the development and once per
              year from there. During these exit windows, you have the
              opportunity to list your shares for sale. Shares bought during an
              exit window, can be listed for sale in the next available window.
              This annual structure provides a flexible exit strategy while
              allowing your investment time to mature.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 2,
        summary: "What is a share price?",
        details:
          "A share price is the value assigned to each property share and is influenced by factors such as the property’s current status, profit generated through a current period and the availability of shares. During an exit window, the seller can mark there shares for sale and buyers can see shares available at the current price.",
      },
      {
        accordionId: 3,
        summary: "How is the price of shares determined?",
        details:
          "The price of a share is calculated based on a range of factors, including the property’s current market status, general return on investment and the supply of shares.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
              fontWeight={700}
            >
              Past Performance
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              As of today, Shares by Coco has achieved significant milestones,
              including:
            </Typography>
            <CustomList
              items={[
                {
                  boldText: "$14.5M USD Total Investment Volume:",
                  text: "Our platform has successfully facilitated over $14.5 million in investments.",
                },
                {
                  boldText: "5 Developments in Bali:",
                  text: "We currently have five developments with + 125 properties under construction / fully built, with a rapidly growing portfolio.",
                },
                {
                  boldText: "200+ Properties:",
                  text: "We are today managing +200 properties in Bali",
                },
                {
                  boldText: "Portfolio Diversification:",
                  text: "Including real estate in a diversified portfolio enhances the overall risk-return profile.",
                },
                {
                  boldText: "1,000+ Active investors:",
                  text: "Our community has grown to over 1,000 active investors, reflecting the strong interest and trust in Shares by Coco.",
                },
                {
                  boldText: "Rapid Development Sell-Out:",
                  text: "On average, our developments have sold out within four months, demonstrating the high demand for our projects.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              These achievements showcase the strength and potential of
              investing with Shares by Coco.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 4,
        summary: "Can I buy shares in a property that I already own?",
        details:
          "Yes, you can purchase additional shares in a property you already own. In fact, buying shares in a property where you already have shares can be highly advantageous, as it can enhance your returns and average out your investment cost.",
      },
      {
        accordionId: 5,
        summary: "Who is eligible to purchase the shares?",
        details:
          "During an Exit Window, everyone is eligible to purchase shares. There are no specific requirements or prior investments needed, making it accessible for all interested buyers to participate and invest in properties listed on Shares by Coco.",
      },
      {
        accordionId: 6,
        summary: "How do I list my shares for sale during the exit window?",
        details:
          'To list your shares for sale, navigate to your portfolio and scroll to “Sell your shares.” Eligible properties that you’ve owned for more than one year will appear under the "Available" tab. Simply go to the listing page, click "Create sell listing," and follow the on-screen prompts to create your listing.',
      },
      {
        accordionId: 7,
        summary: "What price can I set?",
        details:
          "You can list your shares for sale at the current valuation or up to 20% below the current share price of the property. The share price is influenced by various factors, including the property’s current valuation, available discounts, and the supply of shares. These details will be shown when you create your sell listing.",
        additionalContent: (
          <Typography
            variant={"h7"}
            component={"p"}
            color={"text.heading"}
            mt={1}
          >
            If you’re looking to sell quickly, it’s advisable to list with the
            maximum discount allowed to make your listing more attractive to
            buyers, increasing your chances of finding a buyer promptly. This
            approach helps prevent price manipulation while still providing an
            effective exit strategy.
          </Typography>
        ),
      },
      {
        accordionId: 8,
        summary:
          "What are the costs associated with selling my shares during the exit window?",
        details:
          "While there are no additional fees specifically for using the Exit Window feature, the standard 2.5% exit fee and a potential 7% performance fee on any profits earned will still apply, just as they would if you waited for a full property exit.",
      },
      {
        accordionId: 9,
        summary: "What happens if some or none of my shares are sold?",
        details:
          "If your shares aren't sold, your investment continues to generate rental income until they are sold.- If you'd like to sell, you can indicate 'yes' to place your shares in the exit window.",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Once listed, your shares become available for potential buyers.
              However, if no one buys your shares, they remain in your
              portfolio, and you&apos;ll continue to earn the associated returns
              from the investment. If only some of your shares sell (partial
              fill), the unsold shares will stay in your portfolio, and you can
              relist them in the next exit window.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
              fontWeight={700}
            >
              Example:
            </Typography>
            <CustomList
              items={[
                {
                  boldText: "Seller A",
                  text: "lists 200 shares of Le Mansion.",
                },
                {
                  boldText: "Seller B",
                  text: "lists 100 shares of Le Mansion 5 minutes later.",
                },
                {
                  boldText: "Buyer C",
                  text: "comes in and wants to purchase 250 shares of Le Mansion.",
                },
              ]}
            />
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
              fontWeight={700}
            >
              Result:
            </Typography>
            <CustomList
              items={[
                {
                  boldText: "Seller A",
                  text: "sells all 200 shares.",
                },
                {
                  boldText: "Seller B",
                  text: "sells 50 shares and keeps the remaining 50 shares in their portfolio, continuing to earn rental income on those unsold shares.",
                },
              ]}
            />
          </>
        ),
      },
      {
        accordionId: 10,
        summary: "How do I track my listings?",
        details:
          "To monitor the status of your sell order, go to the Exit Windows feature in your portfolio and select your sell listing. You will receive an email notification when some or all of your shares have been sold. Sold shares will remain in your portfolio until the transfer is completed, which occurs one month after the exit window closes.",
      },
    ],
  },
  {
    parentId: 6,
    icon: FaqsRewardsIcon,
    title: "Rewards",
    desc: "Earn More Through Our Loyalty and Referral Programs",
    accordions: [
      {
        accordionId: 1,
        summary: "What is Shares by Coco referral program?",
        details:
          "Invite a friend to Shares by Coco, and earn a bonus of 200 USD!",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Steps to participate:
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              As an existing client, share your referral link through the
              Rewards tab. <br />
              Your friend must use this link to create their account and will
              receive their bonus upon signing up to assist with their first
              investment.
              <br />
              Once your friend invests the minimum amount of (2,000 USD) and
              their investment is confirmed, you will receive your bonus.
            </Typography>
          </>
        ),
      },
      {
        accordionId: 2,
        summary: "What is Shares by Coco loyalty program?",
        details:
          "Invite a friend to Shares by Coco, and earn a bonus of 200 USD!",
        additionalContent: (
          <>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Shares by Coco’s loyalty program rewards clients for their
              continued support and investment activity. Your tier level is
              determined based on your total investment over the past 12 months,
              providing a real-time evaluation of your activity. The tier is
              automatically calculated, allowing you to enjoy benefits
              effortlessly.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Each tier offers a range of benefits:
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Shares by Coco Intro
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Required Investment: (1000 - 24,999 USD)
              <br />
              Benefits: (100 USD) reward for each qualified referral.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Shares by Coco Plus
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Required Investment: (25,000 - 99,999 USD)
              <br />
              Benefits:
              <br />
              (150 USD) reward for each qualified referral.
              <br />
              1% extra cash back on all investments.
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              fontWeight={700}
              mt={1}
            >
              Shares by Coco Elite
            </Typography>
            <Typography
              variant={"h7"}
              component={"p"}
              color={"text.heading"}
              mt={1}
            >
              Required Investment: (100,000 USD) +
              <br />
              Benefits:
              <br />
              (300 USD) for each qualified referral.
              <br />
              2% extra cash back on every investment.
              <br />
              Exclusive welcome gift pack.
            </Typography>
            <Typography variant={"h7"} component={"p"} color={"text.heading"}>
              You can track your current tier status and progress in the Rewards
              section of our app. Please note that cancelling a pending
              investment may affect your tier level and any associated cash back
              rewards. Stay invested to enjoy the full benefits of our loyalty
              program.
            </Typography>
            <Typography variant={"h7"} component={"p"} color={"text.heading"}>
              We greatly value your loyalty and commitment to Shares by Coco,
              and we’re excited to offer these rewards as a token of our
              appreciation.
            </Typography>
          </>
        ),
      },
    ],
  },
];
