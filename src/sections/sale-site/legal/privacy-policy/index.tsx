"use client";

import LegalList from "@/components/legal-list";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import {
  HOW_LONG_DO_WE_KEEP,
  HOW_WE_COLLECT,
  HOW_WE_USE,
  WHAT_ARE_YOUR_RIGHTS,
  WHO_DO_WE_SHARE,
  WHY_WE_COLLECT,
} from "./privacy-policy.data";
import { SALE_SITE } from "@/constants/routes";

export default function PrivacyPolicy() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant={"h5"} color={"text.heading"}>
        Who We Are
      </Typography>
      <Typography variant={"body2"}>
        Shares By Coco is committed to protecting your personal information.
        This policy explains how we collect, use, and protect the data you share
        with us.
      </Typography>
      <Typography variant={"body2"}>
        If you have questions, email us at{" "}
        <Typography variant={"body2"} component={"span"} fontWeight={600}>
          <Link href={"mailto:contact@sharesbycoco.com"} target="_blank">
            contact@sharesbycoco.com
          </Link>
        </Typography>
        .
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Why We Collect Your Data
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        We gather and use your personal information to:
        <LegalList LIST_ARRAY={WHY_WE_COLLECT} />
        We only ask for information we truly need, like your name, address,
        contact details, and legal verification data.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        How We Collect Your Data
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        We may collect your information when you:
        <LegalList LIST_ARRAY={HOW_WE_COLLECT} />
        Our systems also automatically log data like your IP address, browser
        type, and how you use our site. For details, see our{" "}
        <Typography variant={"body2"} component={"span"} fontWeight={600}>
          <Link href={SALE_SITE.COOKIE_NOTICE}>Cookie Policy</Link>
        </Typography>
        .
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        How We Use Your Data
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        We gather and use your personal information to:
        <LegalList LIST_ARRAY={HOW_WE_USE} />
        We never share your data with others unless required by law or as part
        of providing our services.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Keeping Your Data Safe
      </Typography>
      <Typography variant={"body2"}>
        We take steps to ensure your data is secure, and we only keep it for as
        long as necessary. You can contact us anytime to learn more or request
        updates about your data.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        How Long Do We Keep Your Data?
      </Typography>
      <Typography variant={"body2"} component={"div"} my={-1}>
        <LegalList LIST_ARRAY={HOW_LONG_DO_WE_KEEP} />
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Who Do We Share Your Data With?
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        We may share your data with:
        <LegalList LIST_ARRAY={WHO_DO_WE_SHARE} />
        Some of your data might be processed in countries with different privacy
        laws. We ensure it&rsquo;s always handled securely.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        How to Opt Out or Withdraw Consent
      </Typography>
      <Typography variant={"body2"}>
        You can stop receiving marketing emails by clicking “unsubscribe” at the
        bottom of the email. To fully withdraw consent, email us at{" "}
        <Typography variant={"body2"} component={"span"} fontWeight={600}>
          <Link href={"mailto:contact@sharesbycoco.com"} target="_blank">
            contact@sharesbycoco.com
          </Link>
        </Typography>
        .
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Do We Use Automated Decision-Making?
      </Typography>
      <Typography variant={"body2"}>
        We use Google Analytics to understand website use. No other automated
        decisions or profiling are made. See our{" "}
        <Typography variant={"body2"} component={"span"} fontWeight={600}>
          <Link href={SALE_SITE.COOKIE_NOTICE}>Cookie Policy</Link>
        </Typography>{" "}
        for details.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        What Are Your Rights?
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        You have the right to:
        <LegalList LIST_ARRAY={WHAT_ARE_YOUR_RIGHTS} />
        To use these rights, email us at{" "}
        <Typography variant={"body2"} component={"span"} fontWeight={600}>
          <Link href={"mailto:hello@sharesbycoco.com"} target="_blank">
            hello@sharesbycoco.com
          </Link>
        </Typography>
        .
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        International Data Transfers
      </Typography>
      <Typography variant={"body2"}>
        Your data may be stored or processed in other countries. We ensure
        compliance with privacy laws wherever your information is handled.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Social Media and Changes
      </Typography>
      <Typography variant={"body2"}>
        We manage our social media accounts but aren&rsquo;t responsible for
        third-party posts. This Privacy Policy may be updated, so check back
        regularly.
      </Typography>
    </Box>
  );
}
