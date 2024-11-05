"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { SALE_SITE } from "@/constants/routes";
import { errorSnackbar } from "@/utils/api";
import { IChildrenProps } from "@/interfaces";
import Cookies from "js-cookie";
import Loading from "@/app/loading";

export default function GuestGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(() => {
    const tokenCookies = Cookies.get("authenticationTokenSharesByCoco");
    if (tokenCookies) {
      errorSnackbar("Already Logged In!");
      router.push(SALE_SITE.HOME);
      return false;
    }
    return true;
  }, [router]);

  useEffect(() => {
    setIsLoading(true);
    const isAuthValid = checkAuth();
    setIsLoading(!isAuthValid);
  }, [checkAuth, pathname]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
