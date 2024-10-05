import { WEB_APP } from "@/constants/routes";
import { WEB_APP_LAYOUT } from "@/constants/layout";

export const headerTitle = (pathName: string) => {
  let title;

  switch (pathName) {
    case WEB_APP.PROPERTIES:
      title = WEB_APP_LAYOUT.PROPERTIES;
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

    case WEB_APP.HELP_AND_SUPPORT:
      title = WEB_APP_LAYOUT.HELP_AND_SUPPORT;
      break;

    // case COACH_SITE.CLIENTS_OVERVIEW:
    //   title = (
    //     <>
    //       <Typography component={"span"} variant={"h3"} color={"grey.500"}>
    //         Client /
    //       </Typography>{" "}
    //       Overview
    //     </>
    //   );
    //   break;

    default:
      title = "Unknown Page";
      break;
  }
  return title;
};
