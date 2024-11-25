"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { AUTH } from "@/constants/routes";
import { errorSnackbar } from "@/utils/api";
import { IChildrenProps } from "@/interfaces";
import Cookies from "js-cookie";
import Loading from "@/app/loading";
import { useGetUserDetailsQuery } from "@/services/web-app/settings";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function AuthGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const { isError, error } = useGetUserDetailsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const checkAuth = useCallback(() => {
    const tokenCookies = Cookies.get("authenticationTokenSharesByCoco");
    if (!tokenCookies) {
      errorSnackbar("Session Expired! Login to Continue");
      Cookies.remove("authenticationTokenSharesByCoco");
      router.push(AUTH.SIGN_IN);
      return false;
    }

    if (isError && error && "status" in error) {
      const fetchError = error as FetchBaseQueryError;

      if (
        fetchError.status === 401 &&
        "data" in fetchError &&
        (fetchError.data as any).msg === "Token expired"
      ) {
        errorSnackbar("Session Expired! Login to Continue");
        Cookies.remove("authenticationTokenSharesByCoco");
        router.push(AUTH.SIGN_IN);
        return false;
      }
    }
    return true;
  }, [router, isError, error]);

  useEffect(() => {
    setIsLoading(true);
    const isAuthValid = checkAuth();
    setIsLoading(!isAuthValid);
  }, [checkAuth, pathname]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
