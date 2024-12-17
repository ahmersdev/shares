import { Theme, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import { useGetUserDetailsQuery } from "@/services/web-app/settings";
import { MouseEvent, useState } from "react";
import { useAppDispatch } from "@/store";

export default function useNavbar() {
  const theme = useTheme<Theme>();
  const pathName = usePathname();

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, isLoading, isFetching, isError } = useGetUserDetailsQuery(null);

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
    dispatch,
  };
}
