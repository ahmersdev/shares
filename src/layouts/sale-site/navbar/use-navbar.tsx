import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTheme, Theme } from "@mui/material";

export default function useNavbar() {
  const theme = useTheme<Theme>();
  const pathName: string = usePathname();

  const [tokenCookies, setTokenCookies] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authenticationTokenSharesByCoco");
    if (token !== tokenCookies) {
      setTokenCookies(token || "");
    }
    setInitialLoad(false);
  }, [tokenCookies, pathName]);

  return { theme, pathName, tokenCookies, initialLoad };
}
