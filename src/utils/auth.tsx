import Cookies from "js-cookie";

export const getTokenFromCookies = () => {
  const encryptedToken: any = Cookies.get("authenticationToken");
  if (encryptedToken) {
    return encryptedToken;
  }
};
