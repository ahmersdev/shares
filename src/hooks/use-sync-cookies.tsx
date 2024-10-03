import { useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logOut, logIn } from "@/store/auth";

const useSyncCookiesWithState = () => {
  const dispatch = useDispatch();

  const syncCookiesWithState = useCallback(() => {
    const token = Cookies.get("token");

    if (!token) {
      dispatch(logOut());
    } else {
      dispatch(logIn(token));
    }
  }, [dispatch]);

  useEffect(() => {
    syncCookiesWithState();

    const intervalId = setInterval(syncCookiesWithState, 5000);

    return () => clearInterval(intervalId);
  }, [syncCookiesWithState]);
};

export default useSyncCookiesWithState;
