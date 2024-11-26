import { SignUp } from "@/sections/auth/sign-up";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
}
