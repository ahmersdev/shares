"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";
import { SignUpBackground } from "@/layouts/auth";
import AuthGuard from "@/guards/auth-guard";

const OnboardingLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Provider store={store}>
        {/* <AuthGuard> */}
          <SignUpBackground>{children}</SignUpBackground>
        {/* </AuthGuard> */}
      </Provider>
    </main>
  );
};

export default OnboardingLayout;
