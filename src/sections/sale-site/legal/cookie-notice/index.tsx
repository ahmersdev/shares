import LegalList from "@/components/legal-list";
import { Box, Typography } from "@mui/material";
import {
  ESSENTIAL_COOKIES,
  FUNCTIONAL_COOKIES,
  HOW_WE_USE_COOKIES,
  THIRD_PARTY,
  THIRD_PARTY_COOKIES,
} from "./cookie-notice.data";
import Link from "next/link";

export default function CookieNotice() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant={"h5"} color={"text.heading"}>
        What Are Cookies?
      </Typography>
      <Typography variant={"body2"}>
        Cookies are small text files saved on your device when you visit a
        website. They help the site remember your actions and preferences to
        improve your experience.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        How We Use Cookies
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        We use cookies to:
        <LegalList LIST_ARRAY={HOW_WE_USE_COOKIES} />
        Most cookies don&rsquo;t identify you personally. However, they may
        collect technical data like your IP address or browser type.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Your Consent
      </Typography>
      <Typography variant={"body2"}>
        When you visit our site, we&rsquo;ll ask for your consent to use
        non-essential cookies. If you continue using the site without disabling
        cookies, we&rsquo;ll assume you agree. You can change your settings
        anytime (details at the end of this notice).
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Essential Cookies
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        These are necessary for the website to work, like keeping you logged in
        or remembering your consent. Examples:
        <LegalList LIST_ARRAY={ESSENTIAL_COOKIES} />
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Third-Party Cookies
      </Typography>
      <Typography variant={"body2"} component={"div"}>
        Some cookies are set by services we use, like:
        <LegalList LIST_ARRAY={THIRD_PARTY} />
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Managing Cookies
      </Typography>
      <Typography variant={"body2"}>
        You can disable cookies through your browser settings. Check your
        browser&rsquo;s help section for guidance.
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Functional Cookies
      </Typography>
      <Typography variant={"body2"}>
        These cookies help the site remember your choices, like language or
        currency preferences. They don&rsquo;t track your activity outside our
        site and may collect anonymized information.
      </Typography>
      <Typography
        variant={"h7"}
        component={"div"}
        fontWeight={700}
        color={"text.heading"}
      >
        Examples:
        <LegalList LIST_ARRAY={FUNCTIONAL_COOKIES} />
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Third-Party Performance Cookies
      </Typography>
      <Typography variant={"body2"}>
        These cookies collect anonymous data to improve how the site works, like
        identifying popular pages or fixing errors.
      </Typography>
      <Typography
        variant={"h7"}
        component={"div"}
        fontWeight={700}
        color={"text.heading"}
      >
        Examples:
        <LegalList LIST_ARRAY={THIRD_PARTY_COOKIES} />
      </Typography>

      <Typography variant={"h5"} color={"text.heading"}>
        Managing Cookies
      </Typography>
      <Typography variant={"body2"}>
        You can turn off cookies in your browser settings, but some site
        features may not work properly. For more details, check our Privacy
        Policy or email us at{" "}
        <Typography variant={"body2"} component={"span"} fontWeight={600}>
          <Link href={"mailto:hello@sharesbycoco.com"} target="_blank">
            hello@sharesbycoco.com
          </Link>
        </Typography>
        .
      </Typography>
    </Box>
  );
}
