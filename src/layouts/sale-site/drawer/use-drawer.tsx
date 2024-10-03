import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Theme, useTheme } from "@mui/material";
import { getSaleSiteDrawerArray } from "./drawer.data";

export default function useDrawer() {
  const theme = useTheme<Theme>();
  const pathName: string = usePathname();

  const [tokenCookies, setTokenCookies] = useState("");

  useSyncCookiesWithState();

  useEffect(() => {
    const token = Cookies.get("authenticationToken");
    if (token !== tokenCookies) {
      setTokenCookies(token || "");
    }
  }, [tokenCookies]);

  const saleSiteDrawerArray = getSaleSiteDrawerArray(tokenCookies);

  return { theme, pathName, saleSiteDrawerArray };
}
