import { MfaOtp } from "@/sections/auth/sign-in";
import { Suspense } from "react";

export default function MfaOtpPage() {
  return (
    <Suspense>
      <MfaOtp />
    </Suspense>
  );
}
