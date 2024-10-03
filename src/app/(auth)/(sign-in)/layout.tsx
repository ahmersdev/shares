"use client";

import { IChildrenProps } from "@/interfaces";
import { SignInBackground } from "@/layouts/auth";

const SignInLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <SignInBackground>{children}</SignInBackground>
    </main>
  );
};

export default SignInLayout;
