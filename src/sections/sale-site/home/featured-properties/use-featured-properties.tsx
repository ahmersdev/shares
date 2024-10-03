import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getPropertiesData } from "./featured-properties.data";

export default function useFeaturedProperties() {
  const router = useRouter();

  const [openDialog, setOpenDialog] = useState(false);
  const [tokenCookies, setTokenCookies] = useState("");

  useSyncCookiesWithState();

  useEffect(() => {
    const token = Cookies.get("authenticationToken");
    if (token !== tokenCookies) {
      setTokenCookies(token || "");
    }
  }, [tokenCookies]);

  const propertiesData = getPropertiesData(tokenCookies, router, setOpenDialog);

  return { propertiesData, openDialog, setOpenDialog };
}
