export const AUTH = {
  SIGN_UP: `/users/create-account`,
  EMAIL_OTP_VERIFICATION: `/users/verify-email`,
  CREATE_PASSWORD: `/users/create-password`,
  SIGN_IN: `/users/login`,
  RESET_PASSWORD: `/users/reset-password/email`,
  RESET_PASSWORD_OTP: `/users/reset-password/otp`,
  RESET_SET_PASSWORD: `/users/reset-password`,
  DELETE_USER: `/users/delete-user`,
  RESEND_OTP: `/users/resend-otp`,
  VERIFY_MFA_OTP: `/users/verify-otp`,
};

export const ONBOARDING = {
  ADD_CONTACT: `/users/add-contact`,
  VERIFY_CONTACT: `/users/verify-contact`,
  ADD_KYC: `/users/add-kyc`,
  VERIFY_KYC: `/users/verify-kyc`,
};

export const WEB_APP = {
  USER_PROFILE: `/users/me`,
  GET_ALL_PROPERTIES: `/properties/all`,
  GET_SINGLE_PROPERTY: `/properties`,
  ADD_REMOVE_BOOKMARK: `/properties/add-to-bookmark`,
  ADD_TO_CART: `/properties/add-to-cart`,
  ADD_CARD: `/user/card/add`,
  GET_CARD: `/user/card/all`,
  DELETE_CARD: `/user/card/delete`,
  GET_ALL_cART: `/users/get-all-carts`,
  PUT_CART_ITEM: `/users/update-cart-item`,
  REMOVE_CART_ITEM: `/users/delete-cart-item`,
  GET_TOTAL_CASH: `/users/wallet-info`,
  DEPOSIT_VIA_CARD: `/user/card/deposite-amount`,
  WITHDRAW_VIA_CARD: `/user/card/withdraw-amount`,
  GET_ALL_TRANSACTIONS: `/user/transaction/all`,
  GET_REWARDS: `/users/referral-earnings`,
  GET_PORTFOLIO: `/users/portfolio-info`,
  CHECKOUT: `/checkout`,
  UPDATE_MFA: `/users/update-mfa`,
  GET_CHAT: `/chat/user-chat`,
  POST_CHAT: `/chat/send-message`,
};
