import { Theme, useTheme } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useGetUserDetailsQuery } from "@/services/web-app/settings";
import { MouseEvent, useState } from "react";
import { getNavbarMenuData } from "./navbar.data";
import { useAppDispatch } from "@/store";

export default function useNavbar() {
  const theme = useTheme<Theme>();
  const pathName = usePathname();
  const router = useRouter();

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, isLoading, isFetching, isError } = useGetUserDetailsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

  const navbarMenuData = getNavbarMenuData(router, handleClose, dispatch);

  return {
    pathName,
    theme,
    isLoading,
    isFetching,
    isError,
    data,
    open,
    handleClick,
    anchorEl,
    handleClose,
    navbarMenuData,
  };
}
