"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";

const AuthLayout = ({ children }: IChildrenProps) => {
  return (
    <main style={{ background: "#F5F0EB", color: "#6B7280" }}>
      <Provider store={store}>{children}</Provider>
    </main>
  );
};

export default AuthLayout;
