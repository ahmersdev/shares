import { useGetUserDetailsQuery } from "@/services/web-app/settings";
import { useAppDispatch } from "@/store";
import { Theme, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function useDrawerNavbar() {
  const theme = useTheme<Theme>();
  const pathName = usePathname();

  const dispatch = useAppDispatch();

  const [openCollapseMenu, setOpenCollapseMenu] = useState(false);

  const handleCollapseMenuClick = () => {
    setOpenCollapseMenu((prevState) => !prevState);
  };

  const { data, isLoading, isFetching, isError } = useGetUserDetailsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

  return {
    theme,
    pathName,
    data,
    isLoading,
    isFetching,
    isError,
    handleCollapseMenuClick,
    openCollapseMenu,
    dispatch,
  };
}
