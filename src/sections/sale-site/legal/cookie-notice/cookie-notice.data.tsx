import { Typography } from "@mui/material";

export const HOW_WE_USE_COOKIES = [
  "Recognize you when you return.",
  "Remember preferences (like hiding notifications you’ve already seen).",
  "Help you navigate pages faster.",
  "Analyze how you use our site to make it better.",
];

export const ESSENTIAL_COOKIES = [
  <Typography variant={"body2"} key={"session-cookies"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      Session Cookies:
    </Typography>{" "}
    Tracks your activity during a visit (expires when you close your browser).
  </Typography>,
  <Typography variant={"body2"} key={"consent-cookies"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      Consent Cookies:
    </Typography>{" "}
    Records what policies you&rsquo;ve agreed to (lasts up to 1 year).
  </Typography>,
];

export const THIRD_PARTY = [
  <Typography variant={"body2"} key={"google"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      Google:
    </Typography>{" "}
    For ad customization and tracking searches.
  </Typography>,
  <Typography variant={"body2"} key={"live-chat"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      LiveChat:
    </Typography>{" "}
    To enable live conversations with our team.
  </Typography>,
];

export const FUNCTIONAL_COOKIES = [
  <Typography variant={"body2"} key={"cookie-consent"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      Cookie Consent:
    </Typography>{" "}
    Saves your cookie preference for 30 days to avoid repeated pop-ups.
  </Typography>,
  <Typography variant={"body2"} key={"user-details"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      User Details:
    </Typography>{" "}
    Tracks session info (like User ID or email) while you&rsquo;re logged in.
  </Typography>,
  <Typography variant={"body2"} key={"language-and-currency"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      Language & Currency:
    </Typography>{" "}
    Remembers your last selections.
  </Typography>,
];

export const THIRD_PARTY_COOKIES = [
  <Typography variant={"body2"} key={"google-cookies"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      Google Cookies:
    </Typography>{" "}
    Tracks recent searches and ad interactions to personalize ads (valid for up
    to 2 years).
  </Typography>,
  <Typography variant={"body2"} key={"recaptcha"}>
    <Typography
      variant={"body2"}
      component={"span"}
      fontWeight={600}
      color={"text.heading"}
    >
      ReCAPTCHA:
    </Typography>{" "}
    Ensures site security by verifying you&rsquo;re not a robot.
  </Typography>,
];
