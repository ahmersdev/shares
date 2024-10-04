import { BookmarksIcon, ProfileIcon } from "@/assets/icons";
import { SALE_SITE, WEB_APP } from "@/constants/routes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const getNavbarMenuData = (
  router: AppRouterInstance,
  handleClose: () => void
) => [
  {
    id: 1,
    icon: ProfileIcon,
    title: "My Profile",
    onClick: () => {
      handleClose();
      router.push(WEB_APP.PROFILE);
    },
  },
  {
    id: 2,
    icon: BookmarksIcon,
    title: "Bookmarks",
    onClick: () => {
      handleClose();
      router.push(WEB_APP.BOOKMARKS);
    },
  },
  {
    id: 3,
    icon: BookmarksIcon,
    title: "Logout",
    onClick: () => {
      handleClose();
      router.push(SALE_SITE.HOME);
    },
  },
];
