import { SALE_SITE, WEB_APP } from "@/constants/routes";
import { WEB_APP_LAYOUT } from "@/constants/layout";
import { Button, Theme, Typography } from "@mui/material";
import { NextIcon } from "@/assets/icons";
import Link from "next/link";
import { BUTTON_STYLES } from "@/styles";

export const headerTitle = (pathName: string, theme: Theme) => {
  let title;

  switch (pathName) {
    case WEB_APP.PROPERTIES:
      title = WEB_APP_LAYOUT.PROPERTIES;
      break;

    case WEB_APP.PROPERTIES_DETAILS:
      title = null;
      break;

    case WEB_APP.WALLET:
      title = WEB_APP_LAYOUT.WALLET;
      break;

    case WEB_APP.WALLET:
      title = WEB_APP_LAYOUT.WALLET;
      break;

    case WEB_APP.PORTFOLIO:
      title = WEB_APP_LAYOUT.PORTFOLIO;
      break;

    case WEB_APP.REWARDS:
      title = WEB_APP_LAYOUT.REWARDS;
      break;

    case WEB_APP.CART:
      title = WEB_APP_LAYOUT.CART;
      break;

    case WEB_APP.PROFILE:
      title = WEB_APP_LAYOUT.PROFILE;
      break;

    case WEB_APP.BOOKMARKS:
      title = WEB_APP_LAYOUT.BOOKMARKS;
      break;

    case WEB_APP.ACCOUNT_INFORMATION:
      title = (
        <>
          <Typography
            component={"p"}
            variant={"body1"}
            color={"text.bodyLight"}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            gap={1}
          >
            <Link href={WEB_APP.PROFILE}>
              <Typography
                component={"span"}
                variant={"body1"}
                color={"text.body"}
                fontWeight={600}
              >
                Profile & Settings
              </Typography>
            </Link>
            <NextIcon fill={theme.palette.common.bgDark} /> Account Settings
          </Typography>
          <br />
          Account Settings
        </>
      );
      break;

    case WEB_APP.SECURITY_AND_PRIVACY:
      title = (
        <>
          <Typography
            component={"p"}
            variant={"body1"}
            color={"text.bodyLight"}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            gap={1}
          >
            <Link href={WEB_APP.PROFILE}>
              <Typography
                component={"span"}
                variant={"body1"}
                color={"text.body"}
                fontWeight={600}
              >
                Profile & Settings
              </Typography>
            </Link>
            <NextIcon fill={theme.palette.common.bgDark} /> Security & Privacy
          </Typography>
          <Typography
            component={"p"}
            variant={"body1"}
            color={"text.heading"}
            fontWeight={600}
            my={1.6}
          >
            Privacy
          </Typography>
          <Link href={SALE_SITE.PRIVACY_POLICY}>
            <Button
              variant={"outlined"}
              size={"small"}
              sx={{
                ...BUTTON_STYLES,
                color: "text.heading",
                borderColor: "text.stroke",
                ":hover": {
                  borderColor: "text.stroke",
                },
              }}
              disableElevation
              endIcon={<NextIcon fill={theme.palette.text.heading} />}
            >
              View Privacy Policy
            </Button>
          </Link>
          <br />
          <br />
          Security & Privacy
        </>
      );
      break;

    default:
      title = "Unknown Page";
      break;
  }
  return title;
};
