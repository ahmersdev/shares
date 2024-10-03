"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { AUTH } from "@/constants/routes";
import { errorSnackbar } from "@/utils/api";
import { IChildrenProps } from "@/interfaces";
import Cookies from "js-cookie";
import Loading from "@/app/loading";

export default function AuthGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(() => {
    const tokenCookies = Cookies.get("authenticationToken");
    if (!tokenCookies) {
      errorSnackbar("Session Expired! Login to Continue");
      router.push(AUTH.SIGN_IN);
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
