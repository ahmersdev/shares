import Cookies from "js-cookie";

export const getTokenFromCookies = () => {
  const encryptedToken: any = Cookies.get("authenticationTokenSharesByCoco");
  if (encryptedToken) {
    return encryptedToken;
  }
};
