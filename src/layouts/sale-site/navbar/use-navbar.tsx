import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useNavbar() {
  const pathName: string = usePathname();

  const [tokenCookies, setTokenCookies] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  useSyncCookiesWithState();

  useEffect(() => {
    const token = Cookies.get("authenticationToken");
    if (token !== tokenCookies) {
      setTokenCookies(token || "");
    }
    setInitialLoad(false);
  }, [tokenCookies]);

  return { pathName, tokenCookies, initialLoad };
}
