"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";
import GuestGuard from "@/guards/guest-guard";

const AuthLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Provider store={store}>
        <GuestGuard>{children}</GuestGuard>
      </Provider>
    </main>
  );
};

export default AuthLayout;
