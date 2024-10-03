"use client";

import { IChildrenProps } from "@/interfaces";
import { SignUpBackground } from "@/layouts/auth";

const SignUpLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <SignUpBackground>{children}</SignUpBackground>
    </main>
  );
};

export default SignUpLayout;
