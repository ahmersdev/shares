import { BookmarksIcon, LogOutIcon, ProfileIcon } from "@/assets/icons";
import { SALE_SITE, WEB_APP } from "@/constants/routes";
import { AppDispatch } from "@/store";
import { logOut } from "@/store/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const getNavbarMenuData = (
  router: AppRouterInstance,
  handleClose: () => void,
  dispatch: AppDispatch
) => [
  {
    id: 1,
    icon: ProfileIcon,
    title: "My Profile",
    href: WEB_APP.PROFILE,
    onClick: () => {
      handleClose();
      router.push(WEB_APP.PROFILE);
    },
  },
  {
    id: 2,
    icon: BookmarksIcon,
    title: "Bookmarks",
    href: WEB_APP.BOOKMARKS,
    onClick: () => {
      handleClose();
      router.push(WEB_APP.BOOKMARKS);
    },
  },
  {
    id: 3,
    icon: LogOutIcon,
    title: "Logout",
    href: "#",
    onClick: () => {
      dispatch(logOut());
      handleClose();
      router.push(SALE_SITE.HOME);
    },
  },
];
