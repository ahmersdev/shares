import Cookies from "js-cookie";

export const getTokenFromCookies = () => {
  const encryptedToken: any = Cookies.get("authentication_token");
  if (encryptedToken) {
    return encryptedToken;
  }
};
