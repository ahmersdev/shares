import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Theme, useTheme } from "@mui/material";
import { getSaleSiteDrawerArray } from "./drawer.data";

export default function useDrawer() {
  const theme = useTheme<Theme>();
  const pathName: string = usePathname();

  const [tokenCookies, setTokenCookies] = useState("");

  useEffect(() => {
    const token = Cookies.get("authenticationTokenSharesByCoco");
    if (token !== tokenCookies) {
      setTokenCookies(token || "");
    }
  }, [tokenCookies, pathName]);

  const saleSiteDrawerArray = getSaleSiteDrawerArray(tokenCookies);

  return { theme, pathName, saleSiteDrawerArray };
}
