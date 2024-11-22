"use client";

import LegalList from "@/components/legal-list";
import { Box, Typography } from "@mui/material";
import { REAL_ESTATE_RISKS } from "./key-risks.data";

export default function KeyRisks() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant={"h5"} color={"text.heading"}>
        No Guaranteed Returns
      </Typography>
      <Typography variant={"body2"}>
        Past results don&rsquo;t guarantee future success. Your investment could
        lose value, and any returns are not guaranteed. You might even sell a
        property at a loss.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Holding Period and Selling Early
      </Typography>
      <Typography variant={"body2"}>
        Investments are planned to last 5 years. If you want to sell early,
        SharesByCoco offers a chance to sell during a limited “Exit Window,”
        open twice a year for 2 weeks. However, there&rsquo;s no promise your
        investment will sell quickly, or at all, before the 5-year period ends.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Real Estate Risks
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        Investing in real estate carries risks:
        <LegalList LIST_ARRAY={REAL_ESTATE_RISKS} />
        Unlike owning property outright, your investment is in a shared
        ownership structure. If SharesByCoco stops operating, your investment
        could be delayed or lost. Using loans to invest increases risks since
        repayments are still required even if your investment loses value.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        No Financial Advice Provided
      </Typography>
      <Typography variant={"body2"}>
        Investing in real estate carries risks: SharesByCoco is not a financial
        advisor. You&rsquo;re responsible for making your own investment
        decisions. For guidance, consider talking to a licensed financial
        advisor.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Potential for Higher Returns
      </Typography>
      <Typography variant={"body2"}>
        “Fix n&rsquo; Flip” projects aim for higher profits but come with higher
        risks. Renovations can face unexpected delays or added costs, impacting
        returns.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Stakeholder Communication
      </Typography>
      <Typography variant={"body2"}>
        Shares By Coco will keep you informed of significant changes and involve
        you when needed.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Insurance Coverage
      </Typography>
      <Typography variant={"body2"}>
        Contractors are insured for accidents, and additional coverage protects
        against events like fires or natural disasters to safeguard your
        investment.
      </Typography>
    </Box>
  );
}
